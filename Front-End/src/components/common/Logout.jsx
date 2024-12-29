import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Make the logout request
        const response = await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
        navigate('/login'); // Redirect to login page after logout
      } catch (error) {
        console.error('Error during logout:', error);
        alert('Failed to log out. Please try again.');
      }
    };

    handleLogout(); // Trigger the logout function on component mount
  }, [navigate]);

  return (
    <div>
      <h1>Logging you out...</h1>
    </div>
  );
};

export default Logout;
