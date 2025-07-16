import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange } = useContext(CurrentTempUnitContext);

  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch__circle"></span>
      <span className="toggle-switch__text toggle-switch__text_f ">F</span>
      <span className="toggle-switch__text toggle-switch__text_c">C</span>
    </label>
  );
}
