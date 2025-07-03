export const Card = ({ image, courseName, instructor, click }) => {
    return (
      <div
        onClick={click}
        className="relative w-full max-w-[420px] h-[300px] rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.15)] group cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
      >
        {/* Background Image */}
        <img
          src={`/assets/${image}`}
          alt={courseName}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-[0.55]"
        />
  
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
  
        {/* Content */}
        <div className="absolute bottom-0 z-20 w-full p-6 text-white flex flex-col gap-2">
          <span className="uppercase text-[11px] text-indigo-400 tracking-widest font-medium">
            Featured Course
          </span>
  
          <h3 className="text-[20px] font-bold leading-snug">
            {courseName}
          </h3>
  
          <p className="text-[13px] text-gray-300 italic">{instructor}</p>
  
          <div className="mt-3">
            <button className="text-[12px] px-4 py-1 rounded-full bg-indigo-600 hover:bg-indigo-500 font-semibold tracking-wide transition">
              Start Learning →
            </button>
          </div>
        </div>
      </div>
    );
  };
  