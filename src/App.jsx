import { AppRoutes } from "./routes";
import * as S from "./App.styles";
import React, { useState } from "react";
import { UserContext } from "./context/user_context";

function App() {

  const userData = localStorage.getItem("user");
  const [user, setUser] = useState(JSON.parse(userData));

  return (
      <S.Wrapper>
        <S.Container>
          <UserContext.Provider value={{
            user,
            setUser
          }}>
            <AppRoutes />
          </UserContext.Provider>
        </S.Container>
      </S.Wrapper>
  );
}

export default App;
