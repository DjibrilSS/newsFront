import React from "react";
import { useState } from "react";
import { fetchLogin } from "../feauters/applicationSlice";
import { fetchLogup } from "../feauters/applicationSlice";
import { useDispatch } from "react-redux";

const Authorization = () => {
  const [loginIn, setLoginIN] = useState("");
  const [passwordIn, setPasswordIN] = useState("");
  const [loginUp, setLoginUp] = useState("");
  const [passwordUp, setPasswordUP] = useState("");
  const [login, setLogin] = useState(false);
  const [logup, setLogup] = useState(false);
  const dispatch = useDispatch();
  const handleLogIn = (e) => {
    setLoginIN(e.target.value);
  };
  const handlePasIn = (e) => {
    setPasswordIN(e.target.value);
  };
  const handleLogUp = (e) => {
    setLoginUp(e.target.value);
  };
  const handlePasUp = (e) => {
    setPasswordUP(e.target.value);
  };
  const handleClick = () => {
    setLogin(!login);
  };
  const handleClickC = () => {
    dispatch(fetchLogup({ loginIn, passwordIn }));
    setLogin(!login);
  };
  const handleClickup = () => {
    dispatch(fetchLogin({ loginUp, passwordUp }));
    setLogup(!logup);
  };
  const handleClickupC = () => {
    setLogup(!logup);
  };

  return (
    <>
      {login ? (
        <div>
          <input
            type="text"
            value={loginIn}
            onChange={(e) => handleLogIn(e)}
            placeholder="login"
          />
          <input
            type="text"
            value={passwordIn}
            onChange={(e) => handlePasIn(e)}
            placeholder="password"
          />
          <button onClick={handleClickC} type="submit">
            singInI
          </button>
        </div>
      ) : (
        <button className="button" onClick={handleClick}>
          singIn
        </button>
      )}
      {logup ? (
        <div>
          <input
            type="text"
            value={loginUp}
            onChange={(e) => handleLogUp(e)}
            placeholder="login"
          />
          <input
            type="text"
            value={passwordUp}
            onChange={(e) => handlePasUp(e)}
            placeholder="password"
          />
          <button onClick={handleClickup} type="submit">
            singUpu
          </button>
        </div>
      ) : (
        <button className="button" onClick={() => handleClickupC()}>
          singUp
        </button>
      )}
    </>
  );
};

export default Authorization;
