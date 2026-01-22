function Button({ setColor }) {
  const colors = [
    "red",
    "olive",
    "green",
    "yellow",
    "brown",
    "blue",
    "white",
    "pink",
  ];

  //   const [color, setColor] = useState("olive");
  return (
    <>
      {colors.map((col, index) => {
        return (
          <button
            key={col}
            className="border-0 rounded-2xl p-2 m-1"
            style={{ backgroundColor: col }}
            onClick={() => setColor(col)}
          >
            {col.toUpperCase()}
          </button>
        );
      })}
    </>
  );
}

export default Button;
