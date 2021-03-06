import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [dataUser, setDataUser] = useState({
    username: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider
      value={[dataUser, setDataUser, isLoggedIn, setIsLoggedIn]}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
