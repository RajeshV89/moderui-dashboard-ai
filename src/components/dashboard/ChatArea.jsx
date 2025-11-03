import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SendIcon from "@mui/icons-material/Send";

function ChatArea({ isOpen, setIsOpen }) {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hello! How can I assist you today?",
            time: "Just now"
        }
    ]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const closeChat = () => {
        setIsOpen(false);
    };

    const handleSend = () => {
        if (message.trim()) {
            setMessages([...messages, { role: "user", content: message, time: "Just now" }]);
            setMessage("");
            
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    role: "assistant",
                    content: "I can help you analyze your data and provide insights.",
                    time: "Just now"
                }]);
            }, 1000);
        }
    };

    return (
        <>
           <button
    onClick={toggleChat}
    className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
        isOpen ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 pointer-events-auto scale-100'
    }`}
    aria-label="Toggle chat"
>
    <span className="font-medium text-sm">AI Chat</span>
    
</button>
            <aside
                className={`backdrop-blur-lg bg-smoke/20 p-4 rounded-2xl shadow-2xl border border-border-color w-100 fixed right-5 top-32 bottom-5 z-40 transition-all duration-300 ease-in-out flex flex-col overflow-hidden ${
                    isOpen
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-[280px] opacity-0'
                }`}
            >
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-text-main/90 font-light text-sm">Chat</h3>
                    <button
                        onClick={closeChat}
                        className="p-2 rounded-lg hover:bg-smoke/10 transition-colors text-smoke/90"
                        aria-label="Close chat"
                    >
                        <ArrowForwardIcon fontSize="small" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[90%] rounded-lg p-2 ${
                                    msg.role === 'user'
                                        ? 'bg-linear-to-br from-indigo-500 to-purple-600 text-white'
                                        : 'bg-smoke/30 text-text-main'
                                }`}
                            >
                                <p className="text-xs leading-relaxed">{msg.content}</p>
                                <span className="text-[10px] opacity-70 mt-1 block">{msg.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border-t border-border-color pt-3">
                    <div className="flex items-center gap-2 bg-smoke/20 rounded-lg p-2">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => {setMessage(e.target.value)
                                
                            }}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type..."
                            className="flex-1 bg-transparent border-none outline-none text-xs text-text-main placeholder-text-main/40"
                        />
                        <button
                            onClick={handleSend}
                            className="p-1.5 bg-linear-to-br from-indigo-500 to-purple-600 hover:opacity-90 rounded-lg transition-opacity"
                        >
                            <SendIcon style={{ fontSize: '14px' }} className="text-white" />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default ChatArea;
