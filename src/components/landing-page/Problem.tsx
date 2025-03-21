"use client";

import { useEffect } from 'react';

export default function Problem() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('problem');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" className="py-12 md:py-20 bg-gradient-to-tr from-white to-[#FFB6C9]/10 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#FFB6C9]/20 to-transparent rounded-full -translate-x-1/2 -translate-y-1/3 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-[#FFB6C9]/20 to-transparent rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="bg-gradient-to-r from-[#FF6B94] to-[#FFB347] bg-clip-text text-transparent text-sm sm:text-base font-semibold uppercase tracking-wider mb-2 sm:mb-3 inline-block">Você se identifica?</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 sm:mb-4">Relacionamentos podem enfrentar desafios</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Muitos casais passam por momentos difíceis que podem ser superados com as ferramentas certas.
          </p>
        </div>
        
        {/* Grid de problemas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-10 sm:mb-16">
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFB6C9]/20 rounded-lg flex items-center justify-center text-[#FF6B94] mb-3 sm:mb-4">
              <i className="fa-solid fa-calendar-check text-lg sm:text-xl"></i>
            </div>
            <h3 className="font-bold text-[#343A40] mb-2 sm:mb-3 text-lg sm:text-xl">Rotina Desgastante</h3>
            <p className="text-gray-600 text-sm sm:text-base flex-grow">
              O trabalho, filhos e outras responsabilidades consomem o tempo, deixando pouco espaço para momentos a dois.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFB6C9]/20 rounded-lg flex items-center justify-center text-[#FF6B94] mb-3 sm:mb-4">
              <i className="fa-solid fa-heart-crack text-lg sm:text-xl"></i>
            </div>
            <h3 className="font-bold text-[#343A40] mb-2 sm:mb-3 text-lg sm:text-xl">Falta de Conexão</h3>
            <p className="text-gray-600 text-sm sm:text-base flex-grow">
              A sensação de distanciamento emocional, mesmo estando juntos fisicamente, é cada vez mais comum.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFB6C9]/20 rounded-lg flex items-center justify-center text-[#FF6B94] mb-3 sm:mb-4">
              <i className="fa-solid fa-comments text-lg sm:text-xl"></i>
            </div>
            <h3 className="font-bold text-[#343A40] mb-2 sm:mb-3 text-lg sm:text-xl">Comunicação Falha</h3>
            <p className="text-gray-600 text-sm sm:text-base flex-grow">
              Conversas superficiais, discussões frequentes ou longos períodos de silêncio prejudicam a relação.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFB6C9]/20 rounded-lg flex items-center justify-center text-[#FF6B94] mb-3 sm:mb-4">
              <i className="fa-solid fa-fire text-lg sm:text-xl"></i>
            </div>
            <h3 className="font-bold text-[#343A40] mb-2 sm:mb-3 text-lg sm:text-xl">Paixão Diminuída</h3>
            <p className="text-gray-600 text-sm sm:text-base flex-grow">
              O romance e a intimidade diminuem com o tempo quando não são ativamente cultivados pelo casal.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFB6C9]/20 rounded-lg flex items-center justify-center text-[#FF6B94] mb-3 sm:mb-4">
              <i className="fa-solid fa-hand-holding-heart text-lg sm:text-xl"></i>
            </div>
            <h3 className="font-bold text-[#343A40] mb-2 sm:mb-3 text-lg sm:text-xl">Carinho em Falta</h3>
            <p className="text-gray-600 text-sm sm:text-base flex-grow">
              Pequenos gestos de afeto que antes eram comuns se tornam raros, criando um vazio emocional.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFB6C9]/20 rounded-lg flex items-center justify-center text-[#FF6B94] mb-3 sm:mb-4">
              <i className="fa-solid fa-battery-quarter text-lg sm:text-xl"></i>
            </div>
            <h3 className="font-bold text-[#343A40] mb-2 sm:mb-3 text-lg sm:text-xl">Energia Esgotada</h3>
            <p className="text-gray-600 text-sm sm:text-base flex-grow">
              Ao final do dia, o cansaço predomina, dificultando momentos de qualidade e interações significativas.
            </p>
          </div>
        </div>
        
        {/* Mensagem de conclusão */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#343A40] mb-3 sm:mb-4">
            A boa notícia é que tudo isso pode mudar
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
            Nosso desafio de 30 dias foi criado especificamente para ajudar casais a reconstruírem sua conexão, mesmo com pouco tempo disponível. Com atividades simples e práticas, você poderá transformar seu relacionamento a partir de hoje.
          </p>
          <a 
            href="#offer" 
            className="inline-block bg-gradient-to-r from-[#FF6B94] to-[#FFB347] text-white text-sm sm:text-base font-bold py-3 sm:py-4 px-5 sm:px-8 rounded-lg shadow-sm hover:shadow-md transform hover:translate-y-[-2px] transition-all duration-300"
          >
            Quero começar a transformação
          </a>
        </div>
      </div>
    </section>
  );
} 