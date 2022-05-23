export default function User(props) {
  const user = props.user;
  return (
    <div className="exercise-8-div" key={user.id}>
      <p>id: {user.id}</p>
      <p style={{ color: user.favoriteColor }}>name: {user.name}</p>
      <p>favoriteColor: {user.favoriteColor}</p>
    </div>
  );
}
