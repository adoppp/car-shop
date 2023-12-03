import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import ROUTER from "utils/router";
import * as listBackground from "utils/listBackground.js";

export const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;

  margin-bottom: 60px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    justify-content: flex-start;

    width: 580px;

    margin: 0 auto 80px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    column-gap: 28px;
    row-gap: 48px;

    width: 1180px;

    margin-bottom: 100px;
  }
`;

export const DefaultTextWrapperDiv = styled.div`
  height: ${({ pathname }) => {
    switch (pathname) {
      case `/${ROUTER.CATALOG}`:
        return "calc(100vh - 347px)";

      case `/${ROUTER.FAVORITE}`:
        return "calc(100vh - 243px)";

      default:
        break;
    }
  }};

  font-size: 20px;
  line-height: ${24 / 20};

  background-image: url(${listBackground.mobPng});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 584px;

    margin-left: auto;
    margin-right: auto;

    background-image: url(${listBackground.mobPng});
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 1180px;
    height: ${({ pathname }) => {
      switch (pathname) {
        case `/${ROUTER.CATALOG}`:
          return "calc(100vh - 347px)";

        case `/${ROUTER.FAVORITE}`:
          return "calc(100vh - 243px)";

        default:
          break;
      }
    }};

    background-image: url(${listBackground.mobPng});
    background-position: right top;
  }
`;

export const DefaultMainTextP = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.color.blue};
  margin-bottom: 16px;
`;

export const CatalogLink = styled(Link)`
  color: ${({ theme }) => theme.color.blue};

  text-decoration: underline;
  text-underline-offset: 4px;
`;
