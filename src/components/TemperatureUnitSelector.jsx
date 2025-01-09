function TemperatureUnitSelector({ onChangeUnit }) {
    return (
      <div>
        <label style={{ display: "flex", alignItems: "center"}}>
          <input 
            type="radio"
            name="unit"
            value="metric"
            onChange={() => onChangeUnit("metric")}
            defaultChecked
          />
          <p style={{marginLeft:"-14vw"}}>Celsius (°C)</p>
        </label>
        <label style={{ display: "flex", alignItems: "center",marginTop: "-5vh"}}>
          <input
            type="radio"
            name="unit"
            value="imperial"
            onChange={() => onChangeUnit("imperial")}
          />
          <p style={{marginLeft:"-14vw"}}>Fahrenheit (°F)</p>
        </label>
      </div>
    );
  }
  
  export default TemperatureUnitSelector;
  