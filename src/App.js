import React, { useState } from 'react';
import UserForm from './components/Users/UserForm';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const handleAddUser = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, {...user, id: !prevUsers.length ? 1 : (prevUsers[prevUsers.length - 1].id + 1)}]
    })
  }
  return (
    <div>
      <UserForm onAddUser={handleAddUser}/>
      <UsersList users={users} />
    </div>
  );
}

export default App;
