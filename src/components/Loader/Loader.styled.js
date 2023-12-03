import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  height: 100vh;
  width: 100vw;

  background-color: rgb(0 0 0 / 50%);
  transform: translate(-50%, -50%);
  
  display: flex;
  justify-content: center
  align-items: center;
`;

export const Container = styled.div`
  margin: auto;
`;
