"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Offer() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('offer');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="offer" className="bg-[#fef0f4] section-padding relative overflow-hidden">
      {/* Elementos decorativos com degradê suave */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-[#FFB347]/5 to-[#FF6B94]/15 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#FF6B94]/15 to-[#FFB347]/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <motion.div 
          className="mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Título e Subtítulo */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 sm:mb-4">
              Desafio de 30 Dias para Reacender o Amor
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Transforme seu relacionamento com pequenas ações diárias que irão renovar o carinho, 
              a paixão e a intimidade entre vocês
            </p>
          </div>
          
          {/* Lista de Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#E9ECEF] shadow-sm flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFB6C9]/20 text-[#FF6B94] flex items-center justify-center mr-4">
                <i className="fa-solid fa-clock text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#343A40] mb-1 sm:mb-2 text-lg sm:text-xl">Apenas 15 Minutos Por Dia</h3>
                <p className="text-gray-600 text-sm sm:text-base">Atividades rápidas e práticas que se encaixam na rotina mais agitada.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#E9ECEF] shadow-sm flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFB6C9]/20 text-[#FF6B94] flex items-center justify-center mr-4">
                <i className="fa-solid fa-heart text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#343A40] mb-1 sm:mb-2 text-lg sm:text-xl">Resultados Imediatos</h3>
                <p className="text-gray-600 text-sm sm:text-base">Sinta as mudanças positivas no relacionamento logo nos primeiros dias.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#E9ECEF] shadow-sm flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFB6C9]/20 text-[#FF6B94] flex items-center justify-center mr-4">
                <i className="fa-solid fa-bolt text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#343A40] mb-1 sm:mb-2 text-lg sm:text-xl">Reacende a Paixão</h3>
                <p className="text-gray-600 text-sm sm:text-base">Atividades específicas para resgatar a intimidade e o desejo entre o casal.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#E9ECEF] shadow-sm flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFB6C9]/20 text-[#FF6B94] flex items-center justify-center mr-4">
                <i className="fa-solid fa-shield-check text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#343A40] mb-1 sm:mb-2 text-lg sm:text-xl">Fortalece a Conexão</h3>
                <p className="text-gray-600 text-sm sm:text-base">Crie laços emocionais mais profundos e uma comunicação mais honesta.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#E9ECEF] shadow-sm flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFB6C9]/20 text-[#FF6B94] flex items-center justify-center mr-4">
                <i className="fa-solid fa-gift text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#343A40] mb-1 sm:mb-2 text-lg sm:text-xl">Bônus Exclusivos</h3>
                <p className="text-gray-600 text-sm sm:text-base">Materiais complementares para potencializar os resultados do desafio.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#E9ECEF] shadow-sm flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFB6C9]/20 text-[#FF6B94] flex items-center justify-center mr-4">
                <i className="fa-solid fa-lock text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#343A40] mb-1 sm:mb-2 text-lg sm:text-xl">Garantia de 7 Dias</h3>
                <p className="text-gray-600 text-sm sm:text-base">Se não estiver satisfeito nos primeiros 7 dias, devolvemos seu investimento.</p>
              </div>
            </div>
          </div>
          
          {/* Chamada para ação */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#FF6B94] font-semibold text-lg sm:text-xl mb-2 sm:mb-3">
              Oferta por tempo limitado!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="text-gray-400 line-through mr-2 sm:mr-3 text-lg sm:text-2xl">R$197</span>
                <span className="text-[#343A40]">R$19,90</span>
              </p>
              <div className="bg-[#FF6B94]/10 text-[#FF6B94] py-1 sm:py-2 px-3 sm:px-4 rounded-full text-sm sm:text-base font-semibold">
                90% de desconto
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Pagamento único, sem mensalidades
            </p>
            
            <a 
              href="https://pay.hotmart.com/K98802787P" 
              className="block w-full sm:w-auto sm:inline-block mx-auto bg-gradient-to-r from-[#FF6B94] to-[#FFB347] text-white text-base sm:text-lg font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300 mb-3 sm:mb-4"
            >
              Quero Transformar Meu Relacionamento Agora
            </a>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-600 text-xs sm:text-sm">
              <div className="flex items-center">
                <i className="fa-solid fa-lock mr-2 text-[#FF6B94]"></i>
                <span>Pagamento Seguro</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center">
                <i className="fa-solid fa-credit-card mr-2 text-[#FF6B94]"></i>
                <span>Cartão, Pix ou Boleto</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center">
                <i className="fa-solid fa-shield-check mr-2 text-[#FF6B94]"></i>
                <span>Garantia de 7 Dias</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 