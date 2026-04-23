/**
 * SVG wave section divider.
 * Usage: <WaveDivider from="dark" to="light" /> or <WaveDivider from="light" to="dark" />
 */
interface WaveDividerProps {
  from: 'dark' | 'dark2' | 'light';
  to: 'dark' | 'dark2' | 'light';
  flip?: boolean;
}

const colorMap = {
  dark: '#101213',
  dark2: '#18242F',
  light: '#E4F4FF',
};

export default function WaveDivider({ from, to, flip = false }: WaveDividerProps) {
  return (
    <div
      className="relative w-full overflow-hidden leading-[0] -mt-px -mb-px"
      style={{
        backgroundColor: colorMap[from],
        transform: flip ? 'scaleY(-1)' : 'none',
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-[40px] sm:h-[60px] lg:h-[80px] block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={colorMap[to]}
        />
      </svg>
    </div>
  );
}
