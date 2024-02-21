import { useState } from "react";
import { useEffect } from "react";

function SelectedContact({ SelectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState();

  useEffect(() => {
    async function fetchContact() {
      try {
        console.log(SelectedContactId);
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${SelectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  });

  if (!contact) {
    return <div>Loading</div>;
  }
  // console.log(contact);
  return (
    <>
      <div>{contact.name + ' "' + contact.username + '"'}</div>
      <div>{contact.email}</div>
      <div>{`${contact.address.street}, ${contact.address.suite}`}</div>
      <div>{`${contact.address.city}, ${contact.address.zipcode}`}</div>
      <div>{`${contact.address.geo.lat}, ${contact.address.geo.lng}`}</div>
      <div>{contact.phone}</div>
      <div>{contact.website}</div>
      <div>{contact.company.name}</div>
      <div>{contact.company.catchPhrase}</div>
      <div>{contact.company.bs}</div>
      <button onClick={() => setSelectedContactId(null)}>Back</button>
    </>
  );
}

export default SelectedContact;
