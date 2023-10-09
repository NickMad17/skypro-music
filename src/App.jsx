import { AppRoutes } from "./routes";
import * as S from "./App.styles";
import React, { useState } from "react";
import { Context } from "./context/context";
import { load } from "./components/Sceleton/loadStart";
function App() {

  const [loading, isLoad] = useState(load);
  // const [selectedTrack, setselectedTrack ]


  const userToken = localStorage.getItem("user");
  const [user, setUser ] = useState(userToken)

  return (
    <Context.Provider value={{
      loadState: {
        loading,
        isLoad
      }
    }}>
      <S.Wrapper>
        <S.Container>
          <AppRoutes user={user} setUser={setUser}/>
        </S.Container>
      </S.Wrapper>
    </Context.Provider>
  );
}

export default App;
