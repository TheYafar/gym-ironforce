const Logo = ({ size = "md", iconOnly = false }) => {
  const isLarge = size === "lg";
  
  return (
    <div className="flex items-center gap-3 group">
      {/* Esfera Logo IF */}
      <div 
        className={`relative flex items-center justify-center rounded-full border-2 border-brand-yellow bg-black shrink-0 transition-transform duration-300 group-hover:scale-105
        ${isLarge ? 'w-20 h-20 md:w-24 md:h-24 border-4' : 'w-12 h-12'}`}
      >
        {/* Letras IF - Inclinadas e interconectadas estilo gym */}
        <div className={`font-black uppercase text-brand-yellow italic leading-none tracking-tighter ${isLarge ? 'text-4xl md:text-5xl' : 'text-2xl'}`}>
          <span className="text-white">I</span>F
        </div>
      </div>
      
      {/* Texto GYM IRONFORCE */}
      {!iconOnly && (
        <div className="flex flex-col items-start">
          <div 
            className={`bg-brand-yellow text-black font-black uppercase tracking-[0.2em] px-1.5 leading-none
            ${isLarge ? 'text-xs md:text-sm py-1 mb-1' : 'text-[8px] py-0.5 mb-0.5'}`}
          >
            GYM
          </div>
          <div 
            className={`font-black uppercase text-white leading-none tracking-tight
            ${isLarge ? 'text-2xl md:text-4xl' : 'text-lg'}`}
          >
            IRON FORCE
          </div>
        </div>
      )}
    </div>
  )
}

export default Logo
