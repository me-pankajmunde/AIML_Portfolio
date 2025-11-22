import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, User, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import { streamChatResponse } from '../services/geminiService';

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Namaste! I'm Pankaj's AI Assistant. Ask me about my projects, vision for AI in India, or technical expertise.", timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    // Add user message
    const newMessages: ChatMessage[] = [
        ...messages, 
        { role: 'user', text: userText, timestamp: new Date() }
    ];
    setMessages(newMessages);
    setIsTyping(true);

    // Prepare history for API
    // Gemini needs 'user' or 'model'.
    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    let botMessageContent = "";
    
    // Create a placeholder message for the bot that we will update
    setMessages(prev => [...prev, { role: 'model', text: "", timestamp: new Date() }]);

    await streamChatResponse(history, userText, (chunk) => {
        botMessageContent += chunk;
        setMessages(prev => {
            const updated = [...prev];
            const lastMsg = updated[updated.length - 1];
            if (lastMsg.role === 'model') {
                lastMsg.text = botMessageContent;
            }
            return updated;
        });
    });

    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full bg-primary text-white shadow-2xl shadow-primary/40 hover:scale-110 transition-transform duration-300 group ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare size={24} />
        <span className="absolute -top-2 -right-2 h-4 w-4 bg-red-500 rounded-full animate-pulse border-2 border-dark"></span>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-2">
           Chat with Pankaj's AI
        </span>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[400px] max-h-[600px] h-[70vh] flex flex-col bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 rounded-t-2xl">
            <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    <Sparkles size={18} />
                </div>
                <div>
                    <h3 className="font-bold text-white text-sm">Pankaj's AI Agent</h3>
                    <p className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        Online • Powered by Gemini
                    </p>
                </div>
            </div>
            <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors"
            >
                <X size={20} />
            </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-slate-700' : 'bg-primary'}`}>
                        {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user' 
                            ? 'bg-slate-800 text-slate-200 rounded-tr-none' 
                            : 'bg-primary/10 text-slate-200 border border-primary/20 rounded-tl-none'
                    }`}>
                        {msg.text || (isTyping && idx === messages.length - 1 ? <span className="animate-pulse">Thinking...</span> : '')}
                    </div>
                </div>
            ))}
            {/* Dummy element for auto scroll */}
            <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 border-t border-slate-800 bg-slate-900/50 rounded-b-2xl">
            <div className="relative flex items-center">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about digital initiatives..."
                    disabled={isTyping}
                    className="w-full bg-slate-950 border border-slate-800 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 placeholder:text-slate-600 disabled:opacity-50 transition-all"
                />
                <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="absolute right-2 p-2 bg-primary text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                >
                    {isTyping ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
            </div>
            <p className="text-center text-[10px] text-slate-600 mt-2">
                AI can make mistakes. Please verify important information.
            </p>
        </form>
      </div>
    </>
  );
};