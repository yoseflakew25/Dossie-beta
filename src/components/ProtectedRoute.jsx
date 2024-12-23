import { Navigate } from 'react-router-dom'; // {{ edit_1 }}

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // {{ edit_2 }}

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" />; // {{ edit_3 }}
  }

  return children; // {{ edit_4 }}
};

export default ProtectedRoute;