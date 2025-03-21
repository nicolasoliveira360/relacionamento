import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative brand-gradient-primary section-padding pt-20 pb-16 overflow-hidden">
      {/* Elementos decorativos de fundo - mais sutis e elegantes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-white/20 blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-1/4 w-20 h-20 rounded-full bg-white/5 animate-float"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            {/* Tag inicial mais sofisticada */}
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-medium shadow-sm mb-2 animate-slide-up">
              <div className="flex items-center gap-2">
                <span className="text-white/80">✦</span>
                <span>Desafio de 30 dias para casais</span>
              </div>
            </div>
            
            {/* Título mais elegante */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold drop-shadow-md animate-slide-up">
              <div className="mb-2">Renove Seu Amor</div>
              <div className="relative">
                <span className="relative z-10 text-white">Em 30 Dias</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-white/20 -z-10"></span>
              </div>
            </h1>
            
            {/* Descrição do produto mais madura */}
            <p className="text-xl text-white/90 font-medium animate-slide-up animate-delay-200">
              Um desafio diário para reconectar e fortalecer relacionamentos de longa duração.
            </p>
            
            {/* Conjunto de elementos do produto em layout mais sofisticado */}
            <div className="grid grid-cols-2 gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 animate-slide-up animate-delay-200">
              <div className="flex flex-col items-center text-white">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                  <span className="text-xl">📆</span>
                </div>
                <span className="text-xs font-medium">Desafio de 30 dias</span>
              </div>
              <div className="flex flex-col items-center text-white">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                  <span className="text-xl">📋</span>
                </div>
                <span className="text-xs font-medium">Planner de Acompanhamento</span>
              </div>
            </div>
            
            {/* Botão com design mais elegante */}
            <button className="group relative w-full lg:w-auto bg-white text-[#FF6B94] font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Transformar Meu Relacionamento
              <div className="absolute -right-3 -top-3 bg-[#FFB347] text-white text-sm px-3 py-1 rounded-md font-medium">
                R$19,90
              </div>
            </button>
            
            {/* Garantias com design mais contido */}
            <div className="flex justify-around bg-white/10 backdrop-blur-sm p-4 rounded-lg animate-fade-in animate-delay-400 text-white">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-1">
                  <span className="text-sm">🔒</span>
                </div>
                <p className="text-xs">100% seguro</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-1">
                  <span className="text-sm">⚡</span>
                </div>
                <p className="text-xs">Acesso imediato</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-1">
                  <span className="text-sm">🛡️</span>
                </div>
                <p className="text-xs">7 dias garantia</p>
              </div>
            </div>
          </div>
          
          {/* Lado direito: Visual mais refinado do produto */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="w-full h-[500px] bg-white/10 backdrop-blur-md rounded-lg flex flex-col items-center text-white shadow-lg border border-white/20 relative p-6 overflow-hidden">
              {/* Imagem de fundo mais sofisticada */}
              <div className="absolute inset-0 opacity-15">
                <Image 
                  src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Casal"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              
              
              {/* Conteúdo com design mais refinado */}
              <div className="flex flex-col h-full w-full">
                {/* Produtos incluídos */}
                <div className="flex-1 py-2 px-4">
                  <div className="flex flex-col space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white">
                        <span className="text-2xl">📅</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white text-lg">Desafio de 30 Dias</h3>
                        <p className="text-xs text-white/80">Atividades diárias para renovar seu amor</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white">
                        <span className="text-2xl">📋</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white text-lg">Planner de Acompanhamento</h3>
                        <p className="text-xs text-white/80">Registre seu progresso durante o desafio</p>
                      </div>
                    </div>
                    
                    <div className="text-center pt-4 mt-2 border-t border-white/30">
                      <h3 className="font-medium text-white text-lg mb-4">Bônus Exclusivos</h3>
                      
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#FFB347]/30 rounded-lg flex items-center justify-center text-white">
                            <span className="text-2xl">💌</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-white text-lg">20 Mensagens Românticas</h3>
                            <p className="text-xs text-white/80">Prontas para enviar no WhatsApp</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#FFB347]/30 rounded-lg flex items-center justify-center text-white">
                            <span className="text-2xl">🎁</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-white text-lg">10 Ideias de Surpresas</h3>
                            <p className="text-xs text-white/80">Opções acessíveis para surpreender</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 