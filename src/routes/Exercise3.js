function Exercise3() {
  function handleAlert1() {
    alert("Button 1");
  }
  function handleAlert2() {
    alert("Button 2");
  }
  function handleAlert3() {
    alert("Button 3");
  }
  function handleAlert4() {
    alert("Button 4");
  }
  return (
    <div>
      <div>
        <p>
          Create a custom Button component and render it four times. On click,
          it should alert which button was clicked, by displaying the name of
          the button.
        </p>
      </div>
      <div className="solution-container">
        <button className="exercise-3-button" onClick={handleAlert1}>
          Button 1
        </button>
        <button className="exercise-3-button" onClick={handleAlert2}>
          Button 2
        </button>
        <button className="exercise-3-button" onClick={handleAlert3}>
          Button 3
        </button>
        <button className="exercise-3-button" onClick={handleAlert4}>
          Button 4
        </button>
      </div>
    </div>
  );
}

export default Exercise3;
