"use client";

import React, { useState, useEffect } from 'react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  // Funções para controlar o carousel
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : 1);
  };
  
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : 0);
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-gradient-to-br from-white to-[#FFB6C9]/10 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#FFB6C9]/20 to-transparent rounded-full translate-x-1/3 -translate-y-1/3 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#FFB6C9]/15 to-transparent rounded-full -translate-x-1/3 translate-y-1/3 blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Título da seção */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 sm:mb-4">
            Histórias de Transformação
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Veja o que outros casais estão dizendo sobre o desafio de 30 dias e como ele transformou seus relacionamentos.
          </p>
        </div>
        
        {/* Estatísticas em cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFB6C9]/20 rounded-full mx-auto flex items-center justify-center text-[#FF6B94] mb-3 sm:mb-4">
              <i className="fa-solid fa-users text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-[#343A40] font-bold text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">500+</h3>
            <p className="text-gray-600 text-sm sm:text-base">Casais transformados</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFB6C9]/20 rounded-full mx-auto flex items-center justify-center text-[#FF6B94] mb-3 sm:mb-4">
              <i className="fa-solid fa-star text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-[#343A40] font-bold text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">4.8</h3>
            <p className="text-gray-600 text-sm sm:text-base">Avaliação média</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFB6C9]/20 rounded-full mx-auto flex items-center justify-center text-[#FF6B94] mb-3 sm:mb-4">
              <i className="fa-solid fa-heart text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-[#343A40] font-bold text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">98%</h3>
            <p className="text-gray-600 text-sm sm:text-base">Taxa de satisfação</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFB6C9]/20 rounded-full mx-auto flex items-center justify-center text-[#FF6B94] mb-3 sm:mb-4">
              <i className="fa-solid fa-calendar-check text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-[#343A40] font-bold text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">15</h3>
            <p className="text-gray-600 text-sm sm:text-base">Minutos por dia</p>
          </div>
        </div>
        
        {/* Depoimentos em carousel */}
        <div className="max-w-5xl mx-auto">
          {/* Controles do carousel */}
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#343A40]">Depoimentos</h3>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm border border-[#E9ECEF] flex items-center justify-center text-[#343A40] hover:bg-[#F8F9FA] transition-colors"
                onClick={prevSlide}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              
              <button 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm border border-[#E9ECEF] flex items-center justify-center text-[#343A40] hover:bg-[#F8F9FA] transition-colors"
                onClick={nextSlide}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          {/* Carousel */}
          <div className="relative overflow-hidden pb-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Slide 1 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 flex-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="flex text-[#FFB347]">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="ml-2 text-sm sm:text-base font-semibold text-[#343A40]">5.0</span>
                  </div>
                  
                  <p className="text-gray-600 italic mb-4 sm:mb-6 text-sm sm:text-base">
                    &ldquo;Nosso relacionamento estava em piloto automático, mal conversávamos sobre algo além da rotina. O desafio trouxe de volta o brilho nos olhos e a vontade de estarmos juntos. Em apenas 30 dias, parece que estamos namorando novamente!&rdquo;
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E9ECEF] flex items-center justify-center text-[#343A40] font-semibold mr-3 sm:mr-4">
                      JC
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#343A40] text-sm sm:text-base">João e Carla</h4>
                      <p className="text-gray-500 text-xs sm:text-sm">Juntos há 7 anos</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 flex-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="flex text-[#FFB347]">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="ml-2 text-sm sm:text-base font-semibold text-[#343A40]">5.0</span>
                  </div>
                  
                  <p className="text-gray-600 italic mb-4 sm:mb-6 text-sm sm:text-base">
                    &ldquo;Confesso que fui cética no início, mas os pequenos desafios diários mudaram completamente a dinâmica do nosso casamento. A comunicação melhorou, estamos mais próximos e voltamos a nos admirar. Vale cada minuto investido.&rdquo;
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E9ECEF] flex items-center justify-center text-[#343A40] font-semibold mr-3 sm:mr-4">
                      MP
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#343A40] text-sm sm:text-base">Marina e Pedro</h4>
                      <p className="text-gray-500 text-xs sm:text-sm">Juntos há 12 anos</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slide 2 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 flex-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="flex text-[#FFB347]">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-alt"></i>
                    </div>
                    <span className="ml-2 text-sm sm:text-base font-semibold text-[#343A40]">4.5</span>
                  </div>
                  
                  <p className="text-gray-600 italic mb-4 sm:mb-6 text-sm sm:text-base">
                    &ldquo;Começamos o desafio em um momento difícil do casamento. Estava quase desistindo. As atividades nos ajudaram a redescobrir o que nos uniu no início. Nossa relação está mais forte do que nunca.&rdquo;
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E9ECEF] flex items-center justify-center text-[#343A40] font-semibold mr-3 sm:mr-4">
                      RL
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#343A40] text-sm sm:text-base">Roberto e Luísa</h4>
                      <p className="text-gray-500 text-xs sm:text-sm">Juntos há 5 anos</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-[#E9ECEF] p-4 sm:p-6 flex-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="flex text-[#FFB347]">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="ml-2 text-sm sm:text-base font-semibold text-[#343A40]">5.0</span>
                  </div>
                  
                  <p className="text-gray-600 italic mb-4 sm:mb-6 text-sm sm:text-base">
                    &ldquo;Os desafios são simples mas profundos. Aprendemos a valorizar os pequenos momentos e a nos comunicar melhor. Foi surpreendente como pequenas atitudes consistentes podem transformar um relacionamento.&rdquo;
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E9ECEF] flex items-center justify-center text-[#343A40] font-semibold mr-3 sm:mr-4">
                      AF
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#343A40] text-sm sm:text-base">Amanda e Felipe</h4>
                      <p className="text-gray-500 text-xs sm:text-sm">Juntos há 3 anos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Indicadores do carousel */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-4">
              <button 
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentSlide === 0 ? 'bg-[#FF6B94]' : 'bg-gray-300'}`}
                onClick={() => setCurrentSlide(0)}
              ></button>
              <button 
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentSlide === 1 ? 'bg-[#FF6B94]' : 'bg-gray-300'}`}
                onClick={() => setCurrentSlide(1)}
              ></button>
            </div>
          </div>
        </div>
        
        {/* Chamada para ação */}
        <div className="text-center mt-10 sm:mt-16">
          <a 
            href="#offer" 
            className="inline-block bg-gradient-to-r from-[#FF6B94] to-[#FFB347] text-white text-base sm:text-lg font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-sm hover:shadow-md transform hover:translate-y-[-2px] transition-all duration-300"
          >
            Quero Resultados Como Estes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 