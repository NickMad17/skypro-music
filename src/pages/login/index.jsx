import React, { useState } from "react";
import * as S from "../../auxiliaryStyles/auxiliaryStyles";
import { Link } from "react-router-dom";


const Login = ({setUser}) => {
  return (
    <S.Center>
      <S.Text style={{
        textAlign: "center"
      }}>
        login
      </S.Text>

      <Link to="/" onClick={() => {
        const newUser = "maady"
        setUser(newUser)
        localStorage.setItem("user", newUser);
      }}>
        <button style={{
          width: "100%",
          padding: "15px 60px",
          textAlign: "center",
          border: "none",
          borderRadius: "10px",
          fontSize: "20px"
        }}>Войти
        </button>
      </Link>
      <Link to="/registration">
        <span style={{
          cursor: "pointer",
          fontSize: "30px"
        }}>Если еще не зарегестрирован</span>
      </Link>
    </S.Center>
  );
};

export default Login;