import React from "react";
import ContactItem from "./ContactItem";
import styles from "./ContactLists.module.css";
const ContactLists = ({ contacts, deleteHandler }) => {
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contacts Yet</p>
      )}
    </div>
  );
};

export default ContactLists;
