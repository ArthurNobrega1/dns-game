import React, { useState } from 'react';
import ErroMensage from './ErroMensage'; // Importe o componente de mensagem de erro

const TipSocialMedia = () => {
    const [showHint, setShowHint] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado para controle de loading

    // Função para verificar o input do jogador
    const handleInputSubmit = (e: React.FormEvent) => {
        e.preventDefault();  // Previne o comportamento padrão de recarregar a página
        setIsLoading(true);  // Ativa o loading

        // Simula uma verificação assíncrona
        setTimeout(() => {
            setAttempts(attempts + 1);

            if (inputValue === '/socialProfile') {
                alert('Você acertou! Continue!');
                setErrorMessage('');  // Limpa qualquer mensagem de erro anterior
                setShowHint(false);   // Limpa a dica
            } else {
                setErrorMessage('Caminho incorreto. Tente novamente!');
                setShowHint(true);  // Mostra a dica após uma tentativa errada
            }
            setInputValue('');  // Limpa o campo de input
            setIsLoading(false); // Desativa o loading
        }, 1000); // Simula 1 segundo de verificação
    };

    // Função para exibir a dica
    const handleShowHint = () => {
        setShowHint(true);
    };

    return (
        <div className="p-8 bg-gray-100 h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">DNS Path Puzzle</h1>
            <p className="text-lg text-center mb-4">Tente resolver o quebra-cabeça digitando o caminho correto.</p>

            <form onSubmit={handleInputSubmit} className="flex justify-center mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Digite o caminho..."
                    className="border px-4 py-2 rounded-md mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Submeter
                </button>
            </form>

            {/* Exibe o GIF de loading enquanto verifica */}
            {isLoading && (
                <div className="text-center">
                    <img src="URL_DO_SEU_GIF_DE_LOADING" alt="Loading..." className="mx-auto" />
                </div>
            )}

            {/* Mensagem de erro se o jogador escolher o caminho errado */}
            {errorMessage && <ErroMensage  />}

            {/* Botão para mostrar a dica */}
            <div className="text-center mt-6">
                <button onClick={handleShowHint} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-700">
                    Pedir Dica
                </button>
            </div>

            {/* Dica oculta, exibida quando o jogador pedir ou após várias tentativas */}
            {showHint && (
                <div className="bg-gray-200 border border-gray-400 text-gray-800 px-4 py-3 rounded mt-4">
                    <strong>Hint:</strong>
                    <p className="mt-2">
                        When you type a website like <em>www.example.com</em> into your browser, something happens behind the scenes. 
                        It's like asking for directions to a place — but instead of getting street names, you're given a series of numbers, almost like a secret code. 
                        These numbers help your browser find the exact location on the internet where that website lives. 
                        What is this system that translates names into numbers? Maybe this is the key to solving our DNS path puzzle...
                    </p>
                </div>
            )}
        </div>
    );
};

export default TipSocialMedia;
