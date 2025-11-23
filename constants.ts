import { Project, RadarDataPoint, SectionId, Skill, Demo } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: `/#${SectionId.HERO}` },
  { name: 'About', href: `/#${SectionId.ABOUT}` },
  { name: 'Skills', href: `/#${SectionId.SKILLS}` },
  { name: 'Projects', href: `/#${SectionId.PROJECTS}` },
  { name: 'Demos', href: `/demos` },
  { name: 'Contact', href: `/#${SectionId.CONTACT}` },
];

export const RESUME_CONTEXT = `
You are an AI representation of Pankaj Munde, an AI/ML Associate with over 6 years of experience specializing in Computer Vision, Deep Learning, and NLP.
Your goal is to professionally represent Pankaj to potential recruiters, collaborators, or tech partners.

Background:
- **Current Role:** Associate - Technology AI/ML at Shivrai Technologies Pvt. Ltd. (Pune) (Jun 2020 - Present).
- **Experience:** 
  - **Shivrai Technologies:** Led AI model development (30% efficiency boost), built Deep Learning Pest ID models (35% reduction in manual monitoring), and optimized large datasets from drone/satellite imagery (40% quality improvement).
  - **Allure Software Inc. (Sep 2019 - Apr 2020):** Developed Virtual TryOn Studio algorithms increasing engagement by 45%.
  - **Dzine Arena Pvt. Ltd. (Jun 2018 - Sep 2019):** Designed image processing systems enhancing analysis efficiency by 35%.
- **Education:** B.E. in Electronics and Telecommunication Engineering from Sinhagad Institute of Technology (2017).
- **Key Skills:** Python, TensorFlow, PyTorch, CNNs, RNNs, GANs, LLM Finetuning, RAG (GraphRAG, Multimodal), OpenCV, HuggingFace, Langchain, VectorDB.
- **Key Projects:** 
  - AgExpert (GenAI/RAG based agricultural advisor).
  - Pest & Disease Identification (Reduced crop damage by 40%).
  - Crop Count & Weed Infestation (Drone imagery analytics).

Personality:
- Technical, innovative, and result-oriented.
- Passionate about leveraging AI to drive innovation and transform industries.
- Professional and concise.

Instructions:
- Emphasize expertise in Computer Vision, LLMs, and Real-world AI deployment.
- When asked about projects, mention specific metrics like "30% efficiency improvement" or "40% reduction in crop damage".
- Keep responses helpful for technical recruiters.
`;

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AgExpert (GenAI)',
    description: 'A digital agricultural expert utilizing RAG (Retrieval Augmented Generation) and GenAI. It provides problem-specific advice by drawing from a vast knowledge base to provide targeted recommendations.',
    tags: ['GenAI', 'RAG', 'LLM', 'VectorDB', 'Langchain'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  },
  {
    id: '2',
    title: 'Pest & Disease Detection',
    description: 'Deep Learning model for crop protection. Reduced crop damage by 40% through accurate detection and provided optimized management recommendations via APIs and mobile apps.',
    tags: ['Deep Learning', 'CNN', 'Computer Vision', 'TensorFlow'],
    imageUrl: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com'
  },
  {
    id: '3',
    title: 'Drone Crop Analytics',
    description: 'Aerial imagery analysis system for plant counting and weed infestation mapping. Improved plant count accuracy by 35% and presented results as map tiles for better crop management.',
    tags: ['Drone Imagery', 'Computer Vision', 'GIS', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com'
  }
];

export const SKILL_CATEGORIES: Skill[] = [
  {
    category: "AI/ML Frameworks",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "HuggingFace Transformers"]
  },
  {
    category: "Advanced Techniques",
    items: ["LLM Finetuning", "RAG / GraphRAG", "Computer Vision (CNN, GANs)", "NLP (RNN, BERT)", "VLLM"]
  },
  {
    category: "Development & Tools",
    items: ["Python", "FastAPI / Flask", "Langchain", "VectorDB", "OpenCV", "Git/GitHub", "Docker"]
  }
];

export const RADAR_DATA: RadarDataPoint[] = [
  { subject: 'Computer Vision', A: 95, fullMark: 100 },
  { subject: 'NLP / LLMs', A: 90, fullMark: 100 },
  { subject: 'Deep Learning', A: 92, fullMark: 100 },
  { subject: 'System Design', A: 85, fullMark: 100 },
  { subject: 'Data Eng', A: 80, fullMark: 100 },
  { subject: 'Deployment', A: 88, fullMark: 100 },
];

export const DEMOS: Demo[] = [
  {
    id: '1',
    title: 'Image Classification',
    description: 'Real-time image classification using ResNet50. Upload an image to see the model predict the class probabilities.',
    category: 'Computer Vision',
    embedUrl: 'https://gradio.app/', // Placeholder, user should replace with actual HF Space URL
    thumbnailUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Sentiment Analysis',
    description: 'Analyze the sentiment of your text using a fine-tuned BERT model. Supports positive, negative, and neutral classification.',
    category: 'NLP',
    embedUrl: 'https://gradio.app/', // Placeholder
    thumbnailUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Object Detection',
    description: 'YOLOv8 based object detection in images and videos. Identifies multiple objects with bounding boxes.',
    category: 'Computer Vision',
    embedUrl: 'https://gradio.app/', // Placeholder
    thumbnailUrl: 'https://images.unsplash.com/photo-1535378437268-13d673d2345c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Chat with LLM',
    description: 'Interactive chat interface powered by Llama-2. Ask questions and get responses in real-time.',
    category: 'GenAI',
    embedUrl: 'https://gradio.app/', // Placeholder
    thumbnailUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  }
];