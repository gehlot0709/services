// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
};

export default App;
