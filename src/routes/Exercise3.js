import Button from "../components/CustomButton";

function Exercise3() {
  const buttonNameArray = ["Button 1", "Button 2", "Button 3", "Button 4"];
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
        {buttonNameArray.map(function (elem, index) {
          return <Button buttonName={elem} key={index}></Button>;
        })}
      </div>
    </div>
  );
}

export default Exercise3;
