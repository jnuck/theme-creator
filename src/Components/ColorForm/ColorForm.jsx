import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";
import { v4 as uuidv4 } from "uuid";

export default function ColorForm({ onAddColor }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const newColor = {
      id: uuidv4(data.id),
      role: data.role,
      hex: data.hex,
      contrastText: data.contrastText,
    };

    onAddColor(newColor);

    event.target.reset();
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input type="text" id="role" name="role" />
      <label htmlFor="hex">Hex</label>
      <ColorInput id="hex" name="hex" defaultValue="#ffffff" />
      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput
        id="contrastText"
        name="contrastText"
        defaultValue="#000000"
      />
      <button>ADD COLOR</button>
    </form>
  );
}
