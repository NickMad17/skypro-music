import React from "react";
import * as S from "../../auxiliaryStyles/auxiliaryStyles";
import { Link } from "react-router-dom";


const Registration = ({ setUser }) => {
  return (
    <S.Center>
      <S.Text style={{
        textAlign: "center"
      }}>
        Registration
      </S.Text>
      <Link to="/login">
        <p style={{
          fontSize: "23px"
        }}>Go to login</p>
      </Link>
    </S.Center>
  );
};

export default Registration;