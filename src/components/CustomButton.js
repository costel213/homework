export default function Button(props) {
  const buttonName = props.buttonName;
  function handleAlert() {
    alert(`${buttonName}`);
  }
  return (
    <button className="exercise-3-button" onClick={handleAlert}>
      {buttonName}
    </button>
  );
}
