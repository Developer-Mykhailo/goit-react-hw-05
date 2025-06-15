import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  //jsx
  return (
    <div>
      <h2>Page is not found</h2>
    </div>
  );
};

export default NotFoundPage;
