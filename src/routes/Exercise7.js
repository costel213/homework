import { useState } from "react";

function Exercise7() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  function handleGreetingClick() {
    alert(`Hello, ${firstName} ${lastName}!`);
  }
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  return (
    <div>
      <div>
        <p>
          Build a form that accepts a first name and a last name. Add a button
          called "Greet Me" that when clicked, will alert "Hello, [first name]
          [last name]!". First name and last name should have the values from
          the corresponding inputs.
        </p>
        <div className="solution-container">
          <div className="exercise-7-container">
            <h2>Greeting</h2>
            <div className="first-name-container">
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="First Name"
              />
            </div>
            <div className="last-name-container">
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Last Name"
              />
            </div>
            <button onClick={handleGreetingClick}>Greet Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise7;
