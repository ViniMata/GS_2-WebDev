import { useEffect, useState } from "react"

export default function Contato(){
    const[nome, setNome] = useState(() => localStorage.getItem('nome') || "");
    const[email, setEmail] = useState(() => localStorage.getItem('email') || "");
    const[mensagem, setMensagem] = useState(() => localStorage.getItem('mensagem') || "");
    const[erro, setErro] = useState("");
    const[sucesso, setSucesso] = useState("");

    useEffect(() => {
        localStorage.setItem('nome', nome);
    }, [nome]);

    useEffect(() => {
        localStorage.setItem('email', email);
    }, [email]);

    useEffect(() => {
        localStorage.setItem('msg', mensagem);
    }, [mensagem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nome || !email || !mensagem) {
            setErro('Por favor, preencha todos os campos.');
            setSucesso('');
            return;
        }

        setErro('');
        setSucesso('Mensagem enviada com sucesso!');
        setNome('');
        setEmail('');
        setMensagem('');
    };

    const handleNomeChange = (e) =>{
        setNome(e.target.value);
    };  
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    };  
    const handleMensagemChange = (e) =>{
        setMensagem(e.target.value);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-100 p-8 rounded shadow-md w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Entre em contato</h1>

                {erro && <p className="text-red-500 mb-4">{erro}</p>}
                {sucesso && <p className="text-green-500 mb-4">{sucesso}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nome" className="block text-lg font-medium">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
                            value={nome}
                            onChange={handleNomeChange}
                            placeholder="Digite seu nome"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 p-2 border border-gray-300 rounded w-full text-black" 
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Digite seu email"
                        />
                    </div>

                    <div>
                        <label htmlFor="mensagem" className="block text-lg font-medium">Mensagem</label>
                        <textarea
                            id="mensagem"
                            className="mt-1 p-2 border border-gray-300 rounded w-full h-32 text-black" 
                            value={mensagem}
                            onChange={handleMensagemChange}
                            placeholder="Escreva sua mensagem"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}
