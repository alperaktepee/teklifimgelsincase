"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState("");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      setData("");
      if (typeof window !== "undefined") {
        window?.localStorage?.removeItem("session_id");
      }
      toast.success("Log out successfully");
      if (typeof window !== "undefined") {
        window?.location.reload();
      }
    } catch (error) {}
  };

  return (
    <AuthContext.Provider value={{ data, logout, setData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
