import React, { Fragment, useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./UserForm.module.css";

const UserForm = ({onAddUser}) => {
  const [error, setError] = useState(null);
  const nameRef = useRef();
  const ageRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
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
    nameRef.current.value = "";
    ageRef.current.value = "";
  }
  const handleResetError = e => {
    e.preventDefault();
    setError(null);
  }
  return (
    <Fragment>
      { error && <ErrorModal onConfirm={handleResetError} {...error} />}
      <Card cName={styles.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">UserName</label>
          <input 
            id="username"
            type="text"
            ref={nameRef}
          />
          <label htmlFor="age">Age (Year)</label>
          <input 
            id="age"
            type="number"
            step="0.1"
            ref={ageRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  )
}

export default UserForm;