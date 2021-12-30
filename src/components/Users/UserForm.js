import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./UserForm.module.css";

const UserForm = ({onAddUser}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleNameChange = event => {
    setName(event.target.value);
  }
  const handleAgeChange = event => {
    setAge(event.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim(" ").length === 0 || age.trim(" ").length === 0){
      return;
    }
    if(+age < 1 ){
      return;
    }
    console.log(name, age);
    onAddUser({name, age});
    setName("");
    setAge("");
  }
  return (
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
  )
}

export default UserForm;