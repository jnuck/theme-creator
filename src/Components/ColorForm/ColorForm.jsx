import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";
import { v4 as uuidv4 } from "uuid";

export default function ColorForm({ onAddColor }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newColor = {
      id: uuidv4(data.id),
      role: data.role,
      hex: data.hex,
      "contrast-text": data["contrast-text"],
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
      <label htmlFor="contrast-text">Contrast Text</label>
      <ColorInput
        id="contrast-text"
        name="contrast-text"
        defaultValue="#000000"
      />
      <button>ADD COLOR</button>
    </form>
  );
}
