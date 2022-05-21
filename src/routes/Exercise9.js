import { useEffect, useState } from "react";

function Exercise9() {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => response.json())
      .then((data) => setUsers(Object.assign(data)));
  }, []);
  return (
    <div>
      <div>
        <p>
          Fetch the data from this URL:
          <a href="https://random-data-api.com/api/users/random_user?size=10">
            https://random-data-api.com/api/users/random_user?size=10
          </a>
          . This will return a list of 10 random users.
          <br />
          Store it in React state and render a list with the information
          retrieved.
        </p>
        <div className="solution-container">
          <ul className="exercise-9-list">
            {users.map(function (elem, index) {
              return (
                <li key={index}>
                  <p>id: {elem.id}</p>
                  <p>uid: {elem.uid}</p>
                  <p>password: {elem.password}</p>
                  <p>{elem.first_name}</p>
                  <p>first name: {elem.last_name}</p>
                  <p>last name: {elem.username}</p>
                  <p>email: {elem.email}</p>
                  <p>avatar: {elem.avatar}</p>
                  <p>gender: {elem.gender}</p>
                  <p>phone number: {elem.phone_number}</p>
                  <p>social insurance number: {elem.social_insurance_number}</p>
                  <p>date of birth: {elem.date_of_birth}</p>
                  <p>employment title: {elem.employment.title}</p>
                  <p>employment key skill: {elem.employment.key_skills}</p>
                  <p>city: {elem.address.city}</p>
                  <p>street name: {elem.address.street_name}</p>
                  <p>street address: {elem.address.street_address}</p>
                  <p>zip code: {elem.address.zip_code}</p>
                  <p>state: {elem.address.state}</p>
                  <p>country: {elem.address.country}</p>
                  <p>coordinates lat: {elem.address.coordinates.lat}</p>
                  <p>coordinates lng: {elem.address.coordinates.lng}</p>
                  <p> credit card number: {elem.credit_card.cc_number}</p>
                  <p>subscription plan: {elem.subscription.plan}</p>
                  <p>subscription status: {elem.subscription.status}</p>
                  <p>payment method: {elem.subscription.payment_method}</p>
                  <p>subscription term: {elem.subscription.term}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Exercise9;
