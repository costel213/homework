function Exercise2() {
  function handlePrint() {
    console.log("You cliked me. Thanks!");
  }
  return (
    <div>
      <div>
        <p>
          Add a native HTML button called "Click me". Capture the click event
          and alert the message, "You cliked me. Thanks!".
        </p>
      </div>
      <div className="solution-container">
        <button className="exercise2-button" onClick={handlePrint}>
          Click me
        </button>
      </div>
    </div>
  );
}

export default Exercise2;
