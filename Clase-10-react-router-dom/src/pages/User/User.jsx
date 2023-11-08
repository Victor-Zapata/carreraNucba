import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { Button } from '../Login/Login';

const User = () => {
  const { username } = useParams();
  const { handleLogout } = useContext(AuthContext);

  return (
    <div>
      <h1>Bienvenido {username}</h1>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </div>
  );
};

export default User;
