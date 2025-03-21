"use client";

import { useEffect } from 'react';

export default function Products() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('products');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-12 md:py-20 bg-[#fef0f4] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#FFB6C9]/20 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-[#FFB6C9]/15 to-transparent rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título da seção */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 sm:mb-4">
            O Que Você Vai Receber
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Materiais exclusivos para transformar seu relacionamento em apenas 30 dias
          </p>
        </div>
        
        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {/* Produto 1 */}
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow">
            <div className="p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFB6C9]/20 rounded-lg flex items-center justify-center text-[#FF6B94] mb-4 sm:mb-5">
                <i className="fa-solid fa-calendar-check text-xl sm:text-2xl"></i>
              </div>
              
              <h3 className="font-bold text-[#343A40] mb-2 sm:mb-3 text-lg sm:text-xl">O Desafio de 30 Dias</h3>
              
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5">
                Um guia completo com 30 atividades simples e práticas para reconectar o casal, reacender a paixão e fortalecer o relacionamento.
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center text-gray-500 mb-1">
                  <i className="fa-solid fa-file-pdf mr-2 text-[#FF6B94]"></i>
                  <span className="text-sm">Formato PDF</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Produto 2 */}
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow">
            <div className="p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFB6C9]/20 rounded-lg flex items-center justify-center text-[#FF6B94] mb-4 sm:mb-5">
                <i className="fa-solid fa-clipboard-check text-xl sm:text-2xl"></i>
              </div>
              
              <h3 className="font-bold text-[#343A40] mb-2 sm:mb-3 text-lg sm:text-xl">O Planner de Acompanhamento</h3>
              
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5">
                Um planner para acompanhar o progresso do desafio, registrar os resultados e garantir a consistência das atividades.
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center text-gray-500 mb-1">
                  <i className="fa-solid fa-file-pdf mr-2 text-[#FF6B94]"></i>
                  <span className="text-sm">Formato PDF</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Produto 3 */}
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow relative">
            <div className="absolute top-3 right-3 bg-[#FF6B94] text-white text-xs font-bold py-1 px-2 rounded-md">
              BÔNUS
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFB6C9]/20 rounded-lg flex items-center justify-center text-[#FF6B94] mb-4 sm:mb-5">
                <i className="fa-solid fa-comment-dots text-xl sm:text-2xl"></i>
              </div>
              
              <h3 className="font-bold text-[#343A40] mb-2 sm:mb-3 text-lg sm:text-xl">20 Mensagens Românticas para WhatsApp</h3>
              
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5">
                Uma coleção de mensagens prontas para surpreender e encantar seu parceiro(a) no dia a dia.
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center text-gray-500 mb-1">
                  <i className="fa-solid fa-file-pdf mr-2 text-[#FF6B94]"></i>
                  <span className="text-sm">Formato PDF</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Produto 4 */}
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow relative">
            <div className="absolute top-3 right-3 bg-[#FF6B94] text-white text-xs font-bold py-1 px-2 rounded-md">
              BÔNUS
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFB6C9]/20 rounded-lg flex items-center justify-center text-[#FF6B94] mb-4 sm:mb-5">
                <i className="fa-solid fa-gift text-xl sm:text-2xl"></i>
              </div>
              
              <h3 className="font-bold text-[#343A40] mb-2 sm:mb-3 text-lg sm:text-xl">10 Ideias de Surpresas Baratas</h3>
              
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5">
                Um guia de ideias criativas e econômicas para surpreender seu parceiro(a) sem gastar muito.
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center text-gray-500 mb-1">
                  <i className="fa-solid fa-file-pdf mr-2 text-[#FF6B94]"></i>
                  <span className="text-sm">Formato PDF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mensagem de valor total */}
        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-[#343A40] font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
            Valor total: <span className="text-gray-400 line-through">R$197</span> <span className="text-[#FF6B94]">R$19,90</span>
          </p>
          
          <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-8">
            Pagamento único, sem mensalidades. 
            <span className="font-semibold">Apenas R$19,90</span> - um investimento único para transformar seu relacionamento.
          </p>
          
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