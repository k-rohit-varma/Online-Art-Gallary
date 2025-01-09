import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(null); // Track auth status
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Check authentication by calling the backend
    const checkAuth = async () => {
        try {
          const response = await axios.get("http://localhost:3000/checkAuth", {
            withCredentials: true, // Ensure cookies are sent with the request
          });
         const user =  response.data.user
          console.log( ` the received user data : `,user)
          if (response.status === 200) {
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.error("Error checking authentication:", error);
          setIsAuthenticated(false);
        } finally {
          setLoading(false);
        }
      };
      
    checkAuth();
  }, []);

  // Wait for the auth check to complete
  if (loading) return <div>Loading...</div>;

  // Redirect unauthenticated users to the login page
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
