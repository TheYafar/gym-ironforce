import { FaDumbbell } from 'react-icons/fa'

const words = [
  'HIERRO', 'DISCIPLINA', 'FUERZA', 'DEDICACIÓN', 'SUDOR',
  'POTENCIA', 'RESISTENCIA', 'IRON FORCE', 'GUACARA', 'FORJA',
  'HIERRO', 'DISCIPLINA', 'FUERZA', 'DEDICACIÓN', 'SUDOR',
  'POTENCIA', 'RESISTENCIA', 'IRON FORCE', 'GUACARA', 'FORJA',
]

const Ticker = ({ bg = 'bg-brand-yellow', textColor = 'text-black' }) => {
  return (
    <div className={`${bg} py-3 overflow-hidden relative select-none`}>
      <div className="ticker-track">
        {words.map((word, i) => (
          <span key={i} className={`${textColor} font-black uppercase text-sm tracking-[0.25em] mx-8 flex items-center gap-4`}>
            <FaDumbbell className="text-current opacity-60" size={14} />
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Ticker
