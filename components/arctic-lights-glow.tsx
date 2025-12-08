export default function ArcticLightsTopGlow() {
  return (
    <>
      <div
      className="absolute inset-0 -z-20 hidden md:block"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 0% 0%, rgba(34, 197, 94, 0.10), transparent 70%), transparent',
      }}
    />
      <div
      className="absolute inset-0 -z-20 md:hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 0% 0%, rgba(34, 197, 94, 0.30), transparent 70%), transparent',
      }}
    />
    
    </>
  );
}
