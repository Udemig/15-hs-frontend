const Hero = () => {
  return (
    <section className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-headline font-bold text-xs uppercase tracking-widest mb-6">
            %100 Doğal &amp; Zanaatkar
          </span>
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-tertiary leading-[1.1] mb-8">
            Doğadan Sofranıza,{" "}
            <span className="text-primary italic">Gerçek</span> Dondurma Keyfi
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Geleneksel yöntemlerle, taze meyveler ve en kaliteli sütlerle
            hazırlanan zanaatkar dondurmalarımızla tanışın.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold hover:opacity-90 transition-all shadow-[0_10px_30px_rgba(157,72,103,0.2)] active:scale-95">
              Hemen Sipariş Ver
            </button>
            <button className="bg-surface-container-highest text-on-secondary-container px-8 py-4 rounded-xl font-headline font-bold hover:bg-opacity-80 transition-all active:scale-95">
              Lezzetleri Keşfet
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary-container/20 blur-3xl rounded-full scale-110 -z-10"></div>
          <img
            alt="Artisanal ice cream"
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(56,58,21,0.15)] transform rotate-3 hover:rotate-0 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWUznYJlmM_NZC2Lhfdu9_fw4kmKWcU11SxE7QTY6XxNaBRTLOCOomv8F-k2sYQNYZSGTiGduqdnTjRUq8-hbzL-yVAumAnAYPMcmNYrP6_op6BuV6EsWTg1M1IBns5kSx0iK6BiV3VfooNnvA_8y34oF3gIGBy_NGkdaBCvCLrSk2nayEpzQ2g-AQO5Ff2NE9rFL1RtdtOQU0TZG482WPbbuALoZgJt18WkjymsDrx7r3fzCjR_76haXb7dW4Mb54MoHGE6u2jfnS"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
