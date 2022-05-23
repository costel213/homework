export default function UsersList(props) {
  const usersList = props.usersList;
  return (
    <ul>
      {usersList.map(function (elem, index) {
        return (
          <li className="exercise-6-li" key={index}>
            {elem}
          </li>
        );
      })}
    </ul>
  );
}
