import { AppRoutes } from "./routes";
import * as S from "./App.styles";
import React, { useState } from "react";
import { getUserName } from "./localStorage/localStorage";



function App() {

  const userToken = getUserName();
  console.log(userToken);
  const [user] = useState(() => {
    return userToken === "maady" ? true : false;
  });

  return (
    <S.Wrapper>
      <S.Container>
        <AppRoutes user={user}/>
      </S.Container>
    </S.Wrapper>
  );
}

export default App;
