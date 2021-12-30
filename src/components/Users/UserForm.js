import React from "react";

const UserForm = props => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">UserName</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Year)</label>
      <input id="age" type="number" />
    </form>
  )
}

export default UserForm;