import { usePresetsStore } from "../../stores/presetsStore";
import { useTogglePresetStore } from "../../stores/togglePresetStore";
import Icon from "../Icon/Icon";
import "./PresetsContainer.css";

/*Modal that shows the presets*/
const PresetsContainer = () => {
  const { getAllModels, getModel, getTemperature, getTopP } = usePresetsStore();
  const setIsPresetOpen = useTogglePresetStore((state) => state.setIsOpen);

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const model = event.target.value;
    usePresetsStore.setState({ model });
  };

  const handleTemperatureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const temperature = event.target.valueAsNumber;
    usePresetsStore.setState({ temperature });
  };

  const handleTopPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const top_p = event.target.valueAsNumber;
    usePresetsStore.setState({ top_p });
  };

  const handleClose = () => {
    setIsPresetOpen(false);
  };

  return (
    <div className="presets-container">
      <div className="presets-field-item">
        <p className="presets-field-title">Model</p>
        <select
          className="presets-field-select"
          value={getModel()}
          onChange={handleModelChange}
          title={getModel()}
        >
          {getAllModels().map((model) => (
            <option
              className="presets-field-select-options"
              key={model.id}
              value={model.id}
            >
              {model.id}
            </option>
          ))}
        </select>
      </div>
      <div className="presets-field-item">
        <p className="presets-field-title">Temperature</p>
        <div className="presets-field-slide-container">
          <label className="presets-field-label">{getTemperature()}</label>
          <input
            className="presets-field-slide"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={getTemperature()}
            onChange={handleTemperatureChange}
          />
        </div>
      </div>
      <div className="presets-field-item">
        <p className="presets-field-title">Top P</p>
        <div className="presets-field-slide-container">
          <label className="presets-field-label">{getTopP()}</label>
          <input
            className="presets-field-slide"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={getTopP()}
            onChange={handleTopPChange}
          />
        </div>
      </div>

      <p className="presets-field-info">
        <div className="presets-field-close__icon" onClick={handleClose}>
          <Icon name="X" color="var(--active-pink)" size="20px" />
        </div>
        All changes are auto-saved
      </p>
    </div>
  );
};

export default PresetsContainer;
