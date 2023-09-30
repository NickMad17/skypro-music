import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 65px;
  color: ${({color}) => color || "#fff"};
`