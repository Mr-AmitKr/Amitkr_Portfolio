import React from 'react'

const Button = ({ children, icon, down ,onClick, className = "" }) => {
  return (
         <button
      onClick={onClick}
      className={`
        group
        flex items-center gap-2
        px-6 py-3
        rounded-full
        bg-white/10
        border-t-3 border-white/15
        text-white
        backdrop-blur-md
        transition-all duration-300
        hover:bg-white/20
        hover:border-white/40
        hover:scale-105
        active:scale-95
        ${className}
      `}
    >
      <span>{children}</span>

      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
       {down && (
        <span className="transition-transform duration-300 group-hover:translate-y-1 text-2xl">
          {down}
        </span>
      )}
    </button>
  );
};

export default Button
