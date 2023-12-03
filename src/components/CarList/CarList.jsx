import { useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types";

import CarCard from "components/CarCard/CarCard";
import { CatalogLink, DefaultMainTextP, DefaultTextWrapperDiv, ListUl } from "./CarList.styled";

import ROUTER from "utils/router";

export default function CarList({ cars }) {
  const { pathname } = useResolvedPath();

  const generateDefaultText = () => {
    switch (pathname) {
      case `/${ROUTER.CATALOG}`:
        return (
          <>
            <DefaultMainTextP>Sorry, we couldn't find any adds matching your query...</DefaultMainTextP>

            <p>Try to change the filter parameters to find a match!</p>
          </>
        );

      case `/${ROUTER.FAVORITE}`:
        return (
          <>
            <DefaultMainTextP>You don't have any favorite cars yet...</DefaultMainTextP>

            <p>
              {"Go to "}
              <CatalogLink to={`../${ROUTER.CATALOG}`}>Catalog</CatalogLink>
              to look for the best match!
            </p>
          </>
        );

      default:
        break;
    }
  };

  return (
    <>
      {cars.length === 0 ? (
        <DefaultTextWrapperDiv pathname={pathname}>{generateDefaultText()}</DefaultTextWrapperDiv>
      ) : (
        <ListUl>
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </ListUl>
      )}
    </>
  );
}

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
};
