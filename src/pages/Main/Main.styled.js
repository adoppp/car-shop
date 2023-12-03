import styled from "@emotion/styled";

import ROUTER from "utils/router";
import * as mainBackground from "utils/mainBackground.js";

export const ContainerDiv = styled.div`
  width: 100%;
  padding: 0 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: ${({ theme }) => theme.breakpoint.mobile};
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: ${({ theme }) => theme.breakpoint.tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: ${({ theme }) => theme.breakpoint.desktop};
  }
`;

export const BackgroundDiv = styled.div(
  ({ pathname, theme }) =>
    pathname === ROUTER.MAIN && {
      width: "100vw",
      height: "calc(100vh - 63px)",

      backgroundColor: `#21376b`,
      background: `linear-gradient(0deg, rgb(0 17 245 / 20%) 0%, #21376b 100%),
                  url('${mainBackground.mainBg}')
                  center center no-repeat`,
      backgroundSize: "contain",
    }
);

export const UpButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 2;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.color.blue};
  border-radius: 50%;

  background-color: ${({ theme }) => theme.color.greyBackgroundSelect};

  & > svg {
    fill: ${({ theme }) => theme.color.blue};
  }

  @media screen and (min-width: 434px) {
    right: calc(50vw - 197px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    bottom: 100px;
    right: calc(50vw - 362px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    right: calc(50vw - 674px);

    width: 52px;
    height: 52px;
  }

  &.upButton-enter {
    opacity: 0;
    transform: scale(0);
  }

  &.upButton-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: transform ${({ theme }) => theme.transition.main};
  }

  /* For unmounting */
  &.upButton-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.upButton-exit-active {
    opacity: 1;
    transform: scale(0);
    transition: transform ${({ theme }) => theme.transition.main};
  }
`;
