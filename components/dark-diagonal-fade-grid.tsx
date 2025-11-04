export default function DarkDiagonalFadeGrid() {
  return (
    <div
      className="fixed inset-0 -z-20"
      style={{
        backgroundImage: `
          linear-gradient(45deg, transparent 49%, hsl(119, 13%, 5%) 49%, hsl(119, 13%, 5%) 51%, transparent 51%),
          linear-gradient(-45deg, transparent 49%, hsl(119, 13%, 5%) 49%, hsl(119, 13%, 5%) 51%, transparent 51%)
        `,
        backgroundSize: '40px 40px',
        WebkitMaskImage:
          'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)',
        maskImage:
          'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)',
      }}
    />
  );
}
