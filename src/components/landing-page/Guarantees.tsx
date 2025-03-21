"use client";

import { useEffect } from 'react';

export default function Guarantees() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('guarantees');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="guarantees" className="py-12 md:py-20 bg-[#fef0f4] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FFB6C9]/20 to-transparent rounded-full translate-x-1/3 -translate-y-1/3 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#FFB6C9]/20 to-transparent rounded-full -translate-x-1/3 translate-y-1/3 blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título da seção */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 sm:mb-4">
            Garantia Total de Satisfação
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos tão confiantes nos resultados que oferecemos garantia incondicional. 
            Se não ficar satisfeito, devolvemos seu dinheiro.
          </p>
        </div>
        
        {/* Card de garantia */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-[#E9ECEF] overflow-hidden mb-10 sm:mb-16">
          <div className="p-5 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-[#FFB6C9]/20 rounded-full flex items-center justify-center text-[#FF6B94]">
                <i className="fa-solid fa-shield-check text-3xl sm:text-4xl"></i>
              </div>
              
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-[#343A40] mb-2 sm:mb-3 text-xl sm:text-2xl">
                  7 Dias de Garantia Incondicional
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                  Se por qualquer motivo você não ficar satisfeito com o Desafio de 30 Dias nos primeiros 7 dias, basta nos enviar um e-mail solicitando o reembolso. Devolveremos 100% do seu investimento, sem perguntas.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-green-500"></i>
                    <span className="text-gray-700">Sem burocracia</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-green-500"></i>
                    <span className="text-gray-700">Sem perguntas</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-green-500"></i>
                    <span className="text-gray-700">Reembolso em até 7 dias</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-green-500"></i>
                    <span className="text-gray-700">Suporte via e-mail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chamada para ação */}
        <div className="text-center">
          <a 
            href="https://pay.hotmart.com/K98802787P" 
            className="inline-block bg-gradient-to-r from-[#FF6B94] to-[#FFB347] text-white text-base sm:text-lg font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-sm hover:shadow-md transform hover:translate-y-[-2px] transition-all duration-300"
          >
            Quero Transformar Meu Relacionamento
          </a>
        </div>
      </div>
    </section>
  );
} 