import React from "react";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://AmooQ.com">AmooQ</a> | ReactJs Full Course
      </p>
    </div>
  );
};

export default Header;
