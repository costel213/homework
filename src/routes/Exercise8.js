import { CodeBlock, dracula } from "react-code-blocks";
import User from "../components/User";

function Exercise8() {
  //If you want to use me, be aware I am a string not an Array.
  //So please just copy me in other variable
  const users = `[
    {
      id: 1,
      name: "Christopher Washington",
      favoriteColor: "red",
    },
    {
      id: 2,
      name: "Ben Hayes",
      favoriteColor: "blue",
    },
    {
      id: 3,
      name: "Skye Roberts",
      favoriteColor: "yellow",
    },
    {
      id: 4,
      name: "Hugo Gray",
      favoriteColor: "violet",
    },
    {
      id: 5,
      name: "Eddie Lee",
      favoriteColor: "pink",
    },
    {
      id: 6,
      name: "Hannah Reid",
      favoriteColor: "green",
    },
  ]`;

  const usersArray = [
    {
      id: 1,
      name: "Christopher Washington",
      favoriteColor: "red",
    },
    {
      id: 2,
      name: "Ben Hayes",
      favoriteColor: "blue",
    },
    {
      id: 3,
      name: "Skye Roberts",
      favoriteColor: "yellow",
    },
    {
      id: 4,
      name: "Hugo Gray",
      favoriteColor: "violet",
    },
    {
      id: 5,
      name: "Eddie Lee",
      favoriteColor: "pink",
    },
    {
      id: 6,
      name: "Hannah Reid",
      favoriteColor: "green",
    },
  ];

  return (
    <div>
      <div>
        <p>
          Using the array of objects below, render a list of users using React.
          You should display for each user the name colored in the their
          favorite color.
        </p>
        <CodeBlock
          customStyle={{ width: "20rem" }}
          text={users}
          language="js"
          showLineNumbers={false}
          theme={dracula}
        />

        <div className="solution-container">
          <ul className="exercise-8-list">
            {usersArray.map(function (elem) {
              return <User user={elem} key={elem.id}></User>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Exercise8;
