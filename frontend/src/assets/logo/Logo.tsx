const ShahMovieLogo = () => (
  <button>
    <svg width="100" height="50" className="cursor-pointer">
      <svg width="100" height="32" viewBox="0 0 32 32">
        <path
          d="M3 10 L9 16 L16 11 L23 16 L29 10 Q29 15 29 20 H3 Q3 15 3 10 Z"
          fill="#FFC43A"
        />
        <circle cx="3" cy="10" r="2" fill="#FFC43A" />
        <circle cx="16" cy="11" r="2" fill="#FFC43A" />
        <circle cx="29" cy="10" r="2" fill="#FFC43A" />
      </svg>
      <text
        x="50"
        y="45"
        textAnchor="middle"
        fill="#ffd700"
        fontFamily="Georgia"
        fontSize="26"
        fontWeight="bold"
      >
        MOVIE
      </text>
    </svg>
  </button>
);
export default ShahMovieLogo;
