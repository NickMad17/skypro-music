import { AppRoutes } from "./routes";
import * as S from "./App.styles";
import React, { useState } from "react";
import { Context } from "./context/context";
import { UserContext } from "./context/user_context";

function App() {
  const [trackId, setTrackId] = useState(null);

  const userToken = localStorage.getItem("user");
  const [user, setUser] = useState(JSON.parse(userToken));

  return (
    <Context.Provider value={{
        trackId,
        setTrackId
    }}>
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
    </Context.Provider>
  );
}

export default App;
