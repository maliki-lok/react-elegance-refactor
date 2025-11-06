const FloatingElements = () => {
  const flowers = [0, 1, 2, 3];
  const icons = ['💻', '📚', '✨', '🌸'];

  return (
    <>
      {/* Floating Flowers */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {flowers.map((i) => (
          <div
            key={i}
            className="absolute w-10 h-10 opacity-60"
            style={{
              top: `${(100 * i) / 4}%`,
              left: `${25 * i}%`,
              animationDelay: `${i * 3}s`,
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
              alt=""
              className="w-full h-full animate-float-flower"
            />
          </div>
        ))}
      </div>

      {/* Floating Icons */}
      <div className="fixed bottom-4 right-4 flex gap-2 pointer-events-none z-10">
        {icons.map((icon, i) => (
          <span
            key={i}
            className="text-2xl animate-float-icon"
            style={{ animationDelay: `${i}s` }}
          >
            {icon}
          </span>
        ))}
      </div>
    </>
  );
};

export default FloatingElements;
