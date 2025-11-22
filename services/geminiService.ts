import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

const apiKey = process.env.API_KEY || '';

// We create the client only when needed to ensure we capture the latest env var if it changes (though usually static)
// For this app, a singleton-like pattern or instantiating inside the hook is fine.
const getAIClient = () => {
  if (!apiKey) {
    console.error("API_KEY is missing");
  }
  return new GoogleGenAI({ apiKey });
};

export const streamChatResponse = async (
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string,
  onChunk: (text: string) => void
) => {
  try {
    const ai = getAIClient();
    
    // Map the internal history format to what Gemini expects if needed, 
    // but here we use the chat session feature which manages history mostly,
    // or we can use generateContentStream with a manual history build.
    // Let's use the chat session for easier context management.
    
    // Note: The @google/genai SDK handles history in chats.create().
    // We need to convert our simple history to the SDK's Content format.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: RESUME_CONTEXT,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const resultStream = await chat.sendMessageStream({ message: newMessage });

    for await (const chunk of resultStream) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error("Error streaming chat response:", error);
    onChunk("\n\n[System Error: Unable to reach the AI service at this moment. Please try again later.]");
  }
};