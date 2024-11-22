import { useState } from "react";

export default function EnergIA() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
      setLoading(true);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "EnergIA",
            text: `EnergIA: Você disse "${input}". Aqui está uma resposta simulada!`,
          },
        ]);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50 flex-col p-4 sm:p-6">
      <h1 className="text-center text-4xl font-bold text-green-600 mb-4">
        Converse com a EnergIA
      </h1>
      <div className="chat-box max-w-3xl w-full bg-white rounded-lg p-6 shadow-xl">
        <div className="messages overflow-y-auto h-80 mb-4 border border-gray-300 rounded-lg p-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 mb-3 rounded-lg max-w-xs ${
                message.sender === "user"
                  ? "bg-green-400 text-white text-right ml-auto"
                  : "bg-gray-200 text-left mr-auto"
              }`}
            >
              {message.text}
            </div>
          ))}
          {loading && (
            <div className="p-2 mb-2 text-center rounded bg-gray-100 text-gray-600">
              Carregando...
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 mr-2 focus:ring-2 focus:ring-green-300 mb-3 sm:mb-0 focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
