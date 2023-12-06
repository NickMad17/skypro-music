import { Link, useNavigate } from "react-router-dom";
import * as S from "./Login.styles";
import { useContext, useEffect, useState } from "react";
import { getLogin, getRegister } from "../../API/api";
import { UserContext } from "../../context/user_context";

export default function Login({ isRegMode = false }) {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [isLoad, setLoad] = useState(null);
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleLogin = async () => {
    if (email.length === 0 && password.length === 0) {
      setError("Заполните поля");
    } else if (email.length === 0) {
      setError("Не заполнен email");
      return;
    } else if (password.length === 0) {
      setError("Не заполнен пароль");
      return;
    } else {
      try {
        setLoad(true);
        const userData = await getLogin({ email, password });
        await localStorage.setItem("user", JSON.stringify({
          ...JSON.parse(localStorage.getItem("user")),
          userData
        }));
        const data = await JSON.parse(localStorage.getItem("user"))
        setUser(data);
        setLoad(false);
        navigate("/");
      } catch (error) {
        setError(error.message);
        setLoad(false);
      }
    }
    ;
  };

  const handleRegister = async () => {
    if (email.length === 0 && password.length === 0) {
      setError("Заполните поля");
    } else if (email.length === 0) {
      setError("Не заполнен email");
      return;
    } else if (password.length === 0) {
      setError("Не заполнен пароль");
      return;
    } else if(password !== repeatPassword){
      setError("Пароли не совпадают");
    } else {
      try {
        setLoad(true);
        const userData = await getRegister({ email, password });
        await localStorage.setItem("user", JSON.stringify({
          ...JSON.parse(localStorage.getItem("user")),
          userData
        }));
        const data = await JSON.parse(localStorage.getItem("user"))
        console.log(localStorage);
        setUser(data);
        setLoad(false);
        navigate("/");
      } catch (error) {
        setError(error.message);
        setLoad(false);
      }
    }
    ;
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isRegMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isRegMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="email"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister} disabled={isLoad}>
                {isLoad ? "Загрузка..." : "Зарегестрироваться"}
              </S.PrimaryButton>
              <Link to="/login">
                <S.SecondaryButton>Есть аккаунт ?</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error === "Failed to fetch" ? "Нет интернета": error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleLogin} disabled={isLoad}>
                {isLoad ? "Загрузка..." : "Войти"}
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегестрироватся</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}