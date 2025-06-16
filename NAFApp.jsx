// Web App da NAF - Interface moderna com imagem visível e limpa
import React from "react";
import "./App.css";

export default function NAFApp() {
  const comandos = [
    "📩 Analisar E-mails",
    "🗓️ Lembrete de Agenda",
    "👥 Analisar CEO",
    "🌍 Analisar OMS",
    "🇺🇸 Praticar Inglês",
    "⚙️ Automatizar Tarefas",
    "🧠 Aprender Nova Tarefa"
  ];

  const handleClick = (comando) => {
    const frase = `Oi Natália! Vou começar agora ${comando.toLowerCase().replace(/^[^a-zA-Z]+/, '')}...`;
    alert(frase);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex flex-col items-center justify-center p-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/naf-acenando.png"
          alt="NAF personagem"
          className="w-64 h-auto shadow-xl rounded-3xl border-4 border-white animate-fade-in"
        />
        <div className="text-center md:text-left">
          <h1 className="text-white text-4xl font-bold mb-2 animate-pulse">
            Sou a <span className="text-yellow-300">NAF</span>, sua assistente virtual
          </h1>
          <p className="text-white text-xl mb-6">Selecione uma ação e deixe comigo 💜</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {comandos.map((cmd, i) => (
              <button
                key={i}
                onClick={() => handleClick(cmd)}
                className="bg-white text-purple-700 font-semibold py-3 px-5 rounded-xl shadow-md hover:scale-105 hover:bg-purple-100 transition-all flex items-center gap-2"
              >
                {cmd.includes("Inglês") ? (
                  <>
                    <span role="img" aria-label="USA">🇺🇸</span>
                    {cmd.replace("🇺🇸", "")}
                  </>
                ) : (
                  cmd
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
