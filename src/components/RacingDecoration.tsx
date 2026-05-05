export default function RacingDecoration() {
  return (
    <>
      {/* Checkered flag pattern - top right */}
      <div className="fixed top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
        <div className="grid grid-cols-8 gap-0.5 w-full h-full">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className={`${
                (Math.floor(i / 8) + Math.floor(i / 8)) % 2 === 0
                  ? 'bg-white'
                  : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Racing stripe - left side */}
      <div className="fixed left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-red-600 via-yellow-500 to-red-600 opacity-20 pointer-events-none" />

      {/* Racing stripe - right side */}
      <div className="fixed right-0 top-1/3 bottom-1/3 w-0.5 bg-gradient-to-b from-yellow-500 via-red-600 to-yellow-500 opacity-20 pointer-events-none" />

      {/* Bottom corner decoration */}
      <div className="fixed bottom-0 left-0 w-48 h-1 bg-gradient-to-r from-red-600 to-transparent opacity-30 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-48 h-1 bg-gradient-to-l from-yellow-500 to-transparent opacity-30 pointer-events-none" />
    </>
  );
}