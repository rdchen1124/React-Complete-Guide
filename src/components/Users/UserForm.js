import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./UserForm.module.css";

const UserForm = ({onAddUser}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);
  const handleNameChange = event => {
    setName(event.target.value);
  }
  const handleAgeChange = event => {
    setAge(event.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim(" ").length === 0 || age.trim(" ").length === 0){
      setError({
        title: "Invalid Information",
        message: "Please typing valid value of username or age.(not empty!)"
      });
      return;
    }
    if(+age <= 0 ){
      setError({
        title: "Invalid Age",
        message: "Please typing valid value of age.(must > 0)"
      });
      return;
    }
    onAddUser({name, age});
    setName("");
    setAge("");
  }
  const handleResetError = e => {
    e.preventDefault();
    setError(null);
  }
  return (
    <div>
      { error && <ErrorModal onConfirm={handleResetError} {...error} />}
      <Card cName={styles.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">UserName</label>
          <input 
            id="username"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="age">Age (Year)</label>
          <input 
            id="age"
            type="number"
            step="0.1"
            value={age}
            onChange={handleAgeChange}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default UserForm;