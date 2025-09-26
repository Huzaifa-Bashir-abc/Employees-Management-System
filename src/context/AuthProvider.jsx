import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedData = getLocalStorage();
    if (!storedData.employees) {
      setLocalStorage();
    }
    setUserData(storedData.employees || []);
  }, []);

  const updateUserData = (newData) => {
    localStorage.setItem("employees", JSON.stringify(newData));
    setUserData(newData);
  };

  return (
    <AuthContext.Provider value={[userData, updateUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;