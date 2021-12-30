import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./UserForm.module.css";

const UserForm = props => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!!");
  }
  return (
    <Card cName={styles.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Year)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default UserForm;