// import React from 'react'

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });
  return (
    <div>
      <h2>Page is not found</h2>
    </div>
  );
};

export default NotFoundPage;
