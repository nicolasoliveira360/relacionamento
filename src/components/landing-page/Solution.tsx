"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Solution() {
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
    
    const section = document.getElementById('solution');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="solution" className="bg-[#fef0f4] section-padding relative overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF6B94]/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#FFB6C9]/5 blur-3xl"></div>
      
      {/* Imagem decorativa 1 */}
      <div className="absolute top-1/4 right-0 w-48 h-48 opacity-10 -rotate-6 hidden lg:block">
        <Image 
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop"
          alt="Decoração romântica"
          width={200}
          height={200}
          className="rounded-lg object-cover"
        />
      </div>
      
      {/* Imagem decorativa 2 */}
      <div className="absolute bottom-1/4 left-0 w-48 h-48 opacity-10 rotate-6 hidden lg:block">
        <Image 
          src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=2070&auto=format&fit=crop"
          alt="Casal feliz"
          width={200}
          height={200}
          className="rounded-lg object-cover"
        />
      </div>
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Tag superior elegante */}
            <div className="inline-block bg-[#FF6B94]/10 text-[#FF6B94] px-4 py-2 rounded-md text-sm font-medium mb-4">
              Um método simples e eficaz
            </div>
            
            {/* Título refinado */}
            <h2 className="text-3xl md:text-5xl font-bold text-[#343A40] mb-4">
              Como o 
              <span className="relative ml-2">
                <span className="relative z-10 text-[#FF6B94]">Desafio de 30 Dias</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#FFB6C9]/30 -z-10 skew-x-3"></span>
              </span>
              funciona
            </h2>
            
            {/* Descrição mais sofisticada */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Um programa diário que guia vocês através de pequenas ações que, quando praticadas consistentemente, criam mudanças significativas em seu relacionamento.
            </p>
            
            {/* Entregáveis em formato elegante */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Desafio de 30 dias */}
              <motion.div
                className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-lg bg-[#FFB6C9]/20 flex items-center justify-center text-[#FF6B94] text-2xl">
                      📆
                    </div>
                    <h3 className="text-2xl font-bold text-[#343A40]">Desafio de 30 Dias</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Receba 30 atividades cuidadosamente elaboradas para reacender a conexão entre você e seu parceiro(a).
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FFB6C9]/20 flex-shrink-0 flex items-center justify-center text-[#FF6B94] mt-0.5">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <p className="text-sm text-gray-600">Atividades simples que podem ser feitas em menos de 15 minutos</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FFB6C9]/20 flex-shrink-0 flex items-center justify-center text-[#FF6B94] mt-0.5">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <p className="text-sm text-gray-600">Pensadas para casais que possuem rotinas ocupadas</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FFB6C9]/20 flex-shrink-0 flex items-center justify-center text-[#FF6B94] mt-0.5">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <p className="text-sm text-gray-600">Abordam aspectos de comunicação, intimidade e conexão emocional</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Planner de Acompanhamento */}
              <motion.div
                className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-lg bg-[#FFB6C9]/20 flex items-center justify-center text-[#FF6B94] text-2xl">
                      📋
                    </div>
                    <h3 className="text-2xl font-bold text-[#343A40]">Planner de Acompanhamento</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Acompanhe seu progresso e construa consistência com um planner prático que mantém vocês no caminho certo.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FFB6C9]/20 flex-shrink-0 flex items-center justify-center text-[#FF6B94] mt-0.5">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <p className="text-sm text-gray-600">Registre suas observações e sentimentos durante o desafio</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FFB6C9]/20 flex-shrink-0 flex items-center justify-center text-[#FF6B94] mt-0.5">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <p className="text-sm text-gray-600">Marque os desafios concluídos e visualize seu progresso</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FFB6C9]/20 flex-shrink-0 flex items-center justify-center text-[#FF6B94] mt-0.5">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <p className="text-sm text-gray-600">Design elegante em formato PDF pronto para imprimir ou usar digitalmente</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Bônus */}
            <motion.div
              className="max-w-5xl mx-auto bg-white/80 p-6 rounded-lg shadow-sm border border-[#E9ECEF]"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-[#343A40] mb-6 flex items-center justify-center gap-3">
                <span className="text-[#FFB347] text-3xl">✨</span>
                Bônus Exclusivos
                <span className="text-[#FFB347] text-3xl">✨</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Bônus 1 */}
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-lg bg-[#FFB347]/20 flex-shrink-0 flex items-center justify-center text-[#FFB347] text-2xl">
                    💌
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#343A40] mb-2">20 Mensagens Românticas</h4>
                    <p className="text-gray-600 text-sm">
                      Mensagens prontas e sinceras para enviar no WhatsApp a qualquer momento, fortalecendo sua conexão mesmo à distância.
                    </p>
                  </div>
                </div>
                
                {/* Bônus 2 */}
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-lg bg-[#FFB347]/20 flex-shrink-0 flex items-center justify-center text-[#FFB347] text-2xl">
                    🎁
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#343A40] mb-2">10 Ideias de Surpresas Baratas</h4>
                    <p className="text-gray-600 text-sm">
                      Ideias criativas e acessíveis para surpreender seu parceiro(a) sem comprometer seu orçamento.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Selo de garantia mais elegante */}
          <motion.div
            className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-sm border border-[#E9ECEF] flex items-center gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div className="w-16 h-16 flex-shrink-0 bg-[#FFB347]/20 rounded-lg flex items-center justify-center text-[#FFB347]">
              <i className="fa-solid fa-shield-check text-2xl"></i>
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <h4 className="font-bold text-[#343A40] text-lg mr-2">Garantia de 7 Dias</h4>
                <div className="text-[#FFB347] flex items-center">
                  <i className="fa-solid fa-star text-xs"></i>
                  <i className="fa-solid fa-star text-xs"></i>
                  <i className="fa-solid fa-star text-xs"></i>
                  <i className="fa-solid fa-star text-xs"></i>
                  <i className="fa-solid fa-star text-xs"></i>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Experimente sem riscos. Se não notar melhoras em seu relacionamento dentro de 7 dias, devolvemos 100% do seu investimento.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 