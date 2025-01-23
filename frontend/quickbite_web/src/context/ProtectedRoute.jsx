

import PropTypes from "prop-types"; // Import PropTypes
import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext"; // Import the useAuth hook

// ProtectedRoute component to protect certain routes
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return children; // Render the protected component if authenticated
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoute;

