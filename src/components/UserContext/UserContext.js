import React, { createContext, useState } from "react";

// Create Context
export const UserContext = createContext();

// Create Provider Component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "John Doe", age: 25 });
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };