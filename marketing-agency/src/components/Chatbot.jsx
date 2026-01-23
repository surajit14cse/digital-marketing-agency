import React, { useState, useRef, useEffect } from 'react';
import { Button, Form, InputGroup, Card } from 'react-bootstrap';
import { faqData } from '../data/faq';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 I'm your TrustMart AI assistant. How can I help you grow your business today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, selectedFile]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim() && !selectedFile) return;

    // Add user message
    const userMsg = { 
        id: Date.now(), 
        text: inputValue, 
        sender: 'user',
        attachment: selectedFile ? { name: selectedFile.name, type: selectedFile.type } : null
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setSelectedFile(null);
    setIsTyping(true);
    
    // Reset file input
    if (fileInputRef.current) fileInputRef.current.value = "";

    // Simulate AI delay and processing
    setTimeout(() => {
      let botResponse = "";
      
      // Special response for files
      if (userMsg.attachment) {
          botResponse = `Thanks for sending "${userMsg.attachment.name}". I've forwarded this document to our team for review. Is there anything else you'd like to add?`;
      } else {
          botResponse = generateResponse(userMsg.text);
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1500);
  };

  // Enhanced "AI" Keyword Matcher
  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();

    // 1. Process / Methodology Queries
    if (lowerInput.includes('process') || lowerInput.includes('work') || lowerInput.includes('method') || lowerInput.includes('steps')) {
        return "Our proven process has 4 steps: 1. Discovery (Analyzing your goals), 2. Strategy (Building a custom roadmap), 3. Execution (Implementing with top tools), and 4. Optimization (Continuous refinement for max ROI).";
    }

    // 2. Specific Service Queries (Detailed)
    if (lowerInput.includes('seo')) {
        return "Our SEO service includes technical auditing, keyword research, on-page optimization, and high-quality backlink building to drive sustainable organic traffic.";
    }
    if (lowerInput.includes('ppc') || lowerInput.includes('ads')) {
        return "We manage PPC campaigns on Google & Social Media. We focus on lowering your CPA (Cost Per Acquisition) while scaling up high-converting traffic.";
    }
    if (lowerInput.includes('content')) {
        return "Content is king! We produce blog posts, whitepapers, and video scripts that establish your authority and engage your audience.";
    }
    if (lowerInput.includes('web') || lowerInput.includes('site') || lowerInput.includes('develop')) {
        return "We build fast, secure, and mobile-responsive websites using the latest technologies (like React!) designed specifically to convert visitors into customers.";
    }

    // 3. Check FAQ matches
    for (const faq of faqData) {
        // Simple heuristic matching
        if (lowerInput.includes('social') && faq.question.toLowerCase().includes('social')) return faq.answer;
        if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('budget')) {
             if (faq.question.toLowerCase().includes('custom')) return faq.answer;
        }
        if (lowerInput.includes('long') || lowerInput.includes('time')) {
             if (faq.question.toLowerCase().includes('long')) return faq.answer;
        }
    }

    // 4. General Routes
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
        return "You can reach us at hello@trustmart.com, call +1 (555) 123-4567, or visit our Contact page.";
    }
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
        return "Hello there! I can tell you about our Services, our Process, or answer questions about pricing. What would you like to know?";
    }

    // 5. Fallback
    return "That's a great question. While I'm still learning, our human experts definitely know the answer! Please contact us directly or ask about our 'Process' or 'Services'.";
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="position-fixed bottom-0 end-0 m-4 z-3">
        <Button 
            variant="primary" 
            className="rounded-circle shadow-lg d-flex align-items-center justify-content-center p-0"
            style={{ width: '60px', height: '60px' }}
            onClick={toggleChat}
        >
            <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-chat-dots-fill'} fs-3`}></i>
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card 
            className="position-fixed bottom-0 end-0 m-4 mb-5 shadow-lg border-0 z-2 overflow-hidden animate-fade-up" 
            style={{ width: '350px', maxHeight: '500px', height: '80vh', bottom: '70px' }}
        >
            {/* Header */}
            <Card.Header className="bg-primary text-white p-3 d-flex align-items-center gap-2">
                <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                    <i className="bi bi-robot"></i>
                </div>
                <div>
                    <h6 className="mb-0 fw-bold">TrustBot</h6>
                    <small className="opacity-75"><span className="d-inline-block bg-success rounded-circle me-1" style={{width: '8px', height: '8px'}}></span>Online</small>
                </div>
            </Card.Header>

            {/* Messages Area */}
            <Card.Body className="overflow-auto bg-light p-3 d-flex flex-column gap-3">
                {messages.map((msg) => (
                    <div key={msg.id} className={`d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                        <div 
                            className={`p-3 rounded-4 shadow-sm ${msg.sender === 'user' ? 'bg-primary text-white rounded-bottom-end-0' : 'bg-white text-dark rounded-bottom-start-0'}`}
                            style={{ maxWidth: '85%' }}
                        >
                            {/* Render File Attachment if present */}
                            {msg.attachment && (
                                <div className={`d-flex align-items-center gap-2 mb-2 p-2 rounded bg-opacity-25 ${msg.sender === 'user' ? 'bg-black text-white' : 'bg-secondary'}`}>
                                    <i className="bi bi-file-earmark-text-fill fs-4"></i>
                                    <div className="text-truncate" style={{maxWidth: '150px'}}>
                                        <small className="fw-bold d-block text-truncate">{msg.attachment.name}</small>
                                        <small style={{fontSize: '0.65rem'}}>Attached File</small>
                                    </div>
                                </div>
                            )}
                            
                            {/* Render Text */}
                            {msg.text && <p className="mb-0 small">{msg.text}</p>}
                        </div>
                    </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                    <div className="d-flex justify-content-start">
                        <div className="bg-white p-3 rounded-4 rounded-bottom-start-0 shadow-sm">
                             <div className="d-flex gap-1">
                                <span className="spinner-grow spinner-grow-sm text-primary" style={{width: '6px', height: '6px', animationDuration: '1s'}}></span>
                                <span className="spinner-grow spinner-grow-sm text-primary" style={{width: '6px', height: '6px', animationDelay: '0.2s', animationDuration: '1s'}}></span>
                                <span className="spinner-grow spinner-grow-sm text-primary" style={{width: '6px', height: '6px', animationDelay: '0.4s', animationDuration: '1s'}}></span>
                             </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </Card.Body>

            {/* Input Area */}
            <Card.Footer className="bg-white p-2">
                {/* File Preview Chip */}
                {selectedFile && (
                    <div className="mb-2 ms-2 d-inline-flex align-items-center bg-light border rounded-pill pe-2 ps-3 py-1">
                        <small className="text-muted text-truncate me-2" style={{maxWidth: '200px'}}>{selectedFile.name}</small>
                        <i className="bi bi-x-circle-fill text-secondary cursor-pointer" onClick={() => setSelectedFile(null)}></i>
                    </div>
                )}

                <Form onSubmit={handleSend}>
                    <InputGroup>
                        {/* Hidden File Input */}
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            style={{ display: 'none' }} 
                            onChange={handleFileSelect}
                        />
                        
                        {/* Paperclip Button */}
                        <Button 
                            variant="light" 
                            className="text-secondary border-0" 
                            onClick={() => fileInputRef.current?.click()}
                            title="Attach file"
                        >
                            <i className="bi bi-paperclip fs-5"></i>
                        </Button>

                        <Form.Control
                            placeholder="Type a message..."
                            className="border-0 bg-light rounded-pill px-3 focus-none"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <Button variant="link" type="submit" className="text-primary text-decoration-none" disabled={!inputValue.trim() && !selectedFile}>
                            <i className="bi bi-send-fill fs-5"></i>
                        </Button>
                    </InputGroup>
                </Form>
            </Card.Footer>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
