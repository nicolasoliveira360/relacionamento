"use client";

import React, { useState, useEffect } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('faq');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-24 relative overflow-hidden bg-[#fef0f4]">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#FFB6C9]/20 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-[#FFB6C9]/15 to-transparent rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 sm:mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Ainda com dúvidas? Encontre respostas para as perguntas mais comuns sobre o desafio de 30 dias.
          </p>
        </div>
        
        {/* Grade de perguntas */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-16">
            {/* Pergunta 1 */}
            <div className="bg-white rounded-lg border border-[#E9ECEF] shadow-sm overflow-hidden">
              <button 
                className="w-full p-4 sm:p-5 flex justify-between items-center bg-[#F8F9FA]"
                onClick={() => toggleAccordion(0)}
              >
                <span className="font-bold text-[#343A40] text-left text-sm sm:text-base">Como funciona o desafio de 30 dias?</span>
                <i className={`fa-solid ${openIndex === 0 ? 'fa-minus' : 'fa-plus'} text-[#FF6B94]`}></i>
              </button>
              
              {openIndex === 0 && (
                <div className="p-4 sm:p-5 bg-white">
                  <p className="text-gray-600 text-sm sm:text-base">
                    O desafio consiste em atividades diárias que levam apenas 15 minutos e foram elaboradas para reconectar o casal. Você receberá um guia completo com os 30 desafios e instruções detalhadas para realizá-los.
                  </p>
                </div>
              )}
            </div>
            
            {/* Pergunta 2 */}
            <div className="bg-white rounded-lg border border-[#E9ECEF] shadow-sm overflow-hidden">
              <button 
                className="w-full p-4 sm:p-5 flex justify-between items-center bg-[#F8F9FA]"
                onClick={() => toggleAccordion(1)}
              >
                <span className="font-bold text-[#343A40] text-left text-sm sm:text-base">Quanto tempo leva cada atividade?</span>
                <i className={`fa-solid ${openIndex === 1 ? 'fa-minus' : 'fa-plus'} text-[#FF6B94]`}></i>
              </button>
              
              {openIndex === 1 && (
                <div className="p-4 sm:p-5 bg-white">
                  <p className="text-gray-600 text-sm sm:text-base">
                    As atividades foram planejadas para serem realizadas em cerca de 15 minutos por dia. Sabemos que a rotina é corrida, por isso criamos desafios práticos e rápidos, mas com grande impacto no relacionamento.
                  </p>
                </div>
              )}
            </div>
            
            {/* Pergunta 3 */}
            <div className="bg-white rounded-lg border border-[#E9ECEF] shadow-sm overflow-hidden">
              <button 
                className="w-full p-4 sm:p-5 flex justify-between items-center bg-[#F8F9FA]"
                onClick={() => toggleAccordion(2)}
              >
                <span className="font-bold text-[#343A40] text-left text-sm sm:text-base">Preciso fazer o desafio com meu parceiro?</span>
                <i className={`fa-solid ${openIndex === 2 ? 'fa-minus' : 'fa-plus'} text-[#FF6B94]`}></i>
              </button>
              
              {openIndex === 2 && (
                <div className="p-4 sm:p-5 bg-white">
                  <p className="text-gray-600 text-sm sm:text-base">
                    O ideal é que ambos participem, mas muitos casais têm resultados significativos quando apenas um começa. Quando o parceiro percebe as mudanças positivas, naturalmente se torna mais receptivo a participar.
                  </p>
                </div>
              )}
            </div>
            
            {/* Pergunta 4 */}
            <div className="bg-white rounded-lg border border-[#E9ECEF] shadow-sm overflow-hidden">
              <button 
                className="w-full p-4 sm:p-5 flex justify-between items-center bg-[#F8F9FA]"
                onClick={() => toggleAccordion(3)}
              >
                <span className="font-bold text-[#343A40] text-left text-sm sm:text-base">E se eu não conseguir fazer algum desafio?</span>
                <i className={`fa-solid ${openIndex === 3 ? 'fa-minus' : 'fa-plus'} text-[#FF6B94]`}></i>
              </button>
              
              {openIndex === 3 && (
                <div className="p-4 sm:p-5 bg-white">
                  <p className="text-gray-600 text-sm sm:text-base">
                    Não tem problema pular ou adiar algum desafio. O importante é manter a consistência ao longo do tempo. O material é seu para sempre, então você pode adaptar o ritmo às suas necessidades.
                  </p>
                </div>
              )}
            </div>
            
            {/* Pergunta 5 */}
            <div className="bg-white rounded-lg border border-[#E9ECEF] shadow-sm overflow-hidden">
              <button 
                className="w-full p-4 sm:p-5 flex justify-between items-center bg-[#F8F9FA]"
                onClick={() => toggleAccordion(4)}
              >
                <span className="font-bold text-[#343A40] text-left text-sm sm:text-base">Como recebo o material após a compra?</span>
                <i className={`fa-solid ${openIndex === 4 ? 'fa-minus' : 'fa-plus'} text-[#FF6B94]`}></i>
              </button>
              
              {openIndex === 4 && (
                <div className="p-4 sm:p-5 bg-white">
                  <p className="text-gray-600 text-sm sm:text-base">
                    Imediatamente após a confirmação do pagamento, você receberá um e-mail com os links para baixar todos os materiais do desafio em formato PDF, incluindo os bônus exclusivos.
                  </p>
                </div>
              )}
            </div>
            
            {/* Pergunta 6 */}
            <div className="bg-white rounded-lg border border-[#E9ECEF] shadow-sm overflow-hidden">
              <button 
                className="w-full p-4 sm:p-5 flex justify-between items-center bg-[#F8F9FA]"
                onClick={() => toggleAccordion(5)}
              >
                <span className="font-bold text-[#343A40] text-left text-sm sm:text-base">Como funciona a garantia de 7 dias?</span>
                <i className={`fa-solid ${openIndex === 5 ? 'fa-minus' : 'fa-plus'} text-[#FF6B94]`}></i>
              </button>
              
              {openIndex === 5 && (
                <div className="p-4 sm:p-5 bg-white">
                  <p className="text-gray-600 text-sm sm:text-base">
                    Se nos primeiros 7 dias você não estiver satisfeito com o material, basta enviar um e-mail para suporte@desafio30dias.com solicitando o reembolso. Devolveremos 100% do valor pago, sem fazer perguntas.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Chamada para ação */}
        <div className="text-center mb-10 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#343A40] mb-3 sm:mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
            Entre em contato com nossa equipe de suporte:
          </p>
          <a 
            href="mailto:suporte@desafio30dias.com" 
            className="inline-flex items-center text-[#FF6B94] text-sm sm:text-base font-semibold hover:underline"
          >
            <i className="fa-solid fa-envelope mr-2"></i>
            suporte@desafio30dias.com
          </a>
        </div>
        
        {/* Card de garantia */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-[#E9ECEF] overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FFB6C9]/20 rounded-full flex items-center justify-center text-[#FF6B94]">
                <i className="fa-solid fa-heart text-3xl"></i>
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-[#343A40] mb-2 sm:mb-3 text-lg sm:text-xl">
                  Transforme seu relacionamento em 30 dias ou receba seu dinheiro de volta
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5">
                  São apenas 15 minutos por dia durante 30 dias para renovar a conexão, a intimidade e o carinho entre vocês. Milhares de casais já transformaram seus relacionamentos com este método.
                </p>
                
                <a 
                  href="https://pay.hotmart.com/K98802787P" 
                  className="inline-block bg-gradient-to-r from-[#FF6B94] to-[#FFB347] text-white text-sm sm:text-base font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-sm hover:shadow-md transform hover:translate-y-[-2px] transition-all duration-300"
                >
                  Começar o Desafio Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 