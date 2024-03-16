import React from "react";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://botostart.ir">Botostart</a> | ReactJs Full Course
      </p>
    </div>
  );
};

export default Header;
