import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  const deleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={addColor} />

      {colors.length === 0 ? (
        <p>Add some colors!</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            handleDelete={() => deleteColor(color.id)}
          />
        ))
      )}
    </>
  );
}

export default App;
