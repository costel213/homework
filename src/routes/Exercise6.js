import { CodeBlock, dracula } from "react-code-blocks";
import User from "../components/User";

function Exercise6() {
  //If you want to use me, be aware I am a string not an Array.
  //So please just copy me in other variable
  const users = `[
    "Christopher Washington",
    "Ben Hayes",
    "Skye Roberts",
    "Hugo Gray",
    "Eddie Lee",
    "Hannah Reid",
  ];`;

  const usersArray = [
    "Christopher Washington",
    "Ben Hayes",
    "Skye Roberts",
    "Hugo Gray",
    "Eddie Lee",
    "Hannah Reid",
  ];

  return (
    <div>
      <div>
        <p>
          Using the same array from exercise 5 create a custom component that
          displays each item.
          <br />
          <CodeBlock
            customStyle={{ width: "20rem" }}
            text={users}
            language="js"
            showLineNumbers={false}
            theme={dracula}
          />
          Instead of using the <i> ul </i> and <i> li</i> HTML tags, create a
          custom component that accepts a list as its prop, and renders it
          accordingly.
        </p>
        <div className="solution-container">
          {usersArray.map(function (elem, index) {
            return <User key={index} user={elem}></User>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Exercise6;
