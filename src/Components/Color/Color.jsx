import "./Color.css";
import { useState } from "react";

export default function Color({ color, handleDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const toggleConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {!showConfirm ? (
        <button onClick={toggleConfirm}>Delete</button>
      ) : (
        <>
          <p className="color-card-headline">Really delete?</p>
          <button onClick={toggleConfirm}>Cancel</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}
