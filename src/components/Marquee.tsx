import './Marquee.css';

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="marquee-star">
    <path d="M12 0L14.5 9.5H24L16.5 14.5L19 24L12 18.5L5 24L7.5 14.5L0 9.5H9.5L12 0Z" />
  </svg>
);

// Custom 4-pointed star as per the user's image - sharper version
const FourPointStar = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="marquee-star">
    <path d="M12 0L12.8 11.2L24 12L12.8 12.8L12 24L11.2 12.8L0 12L11.2 11.2L12 0Z" />
  </svg>
);


export default function Marquee() {
  const items = Array(8).fill(null);

  return (
    <div className="marquee-container-v2">
      <div className="marquee-glow" />
      <div className="marquee-content-v2">
        {items.map((_, i) => (
          <div key={i} className="marquee-item">
            <span>Diego Abrantes</span>
            <FourPointStar />
            <span>Web Designer</span>
            <FourPointStar />
          </div>
        ))}
        {/* Clone for infinite loop */}
        {items.map((_, i) => (
          <div key={`clone-${i}`} className="marquee-item">
            <span>Diego Abrantes</span>
            <FourPointStar />
            <span>Web Designer</span>
            <FourPointStar />
          </div>
        ))}

      </div>
    </div>
  );
}

