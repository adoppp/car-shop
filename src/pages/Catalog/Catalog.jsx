import { useEffect, useState } from "react";

import CarList from "components/CarList/CarList";
import Filter from "components/Filter/Filter";
import PageTitle from "components/PageTitle/PageTitle";
import Loader from "components/Loader/Loader";
import BasicModalWindow from "components/BasicModalWindow/BasicModalWindow";
import { Button, ErrorMessageP } from "./Catalog.styled";

import { useLazyGetAllCarsQuery } from "src/redux/api";

export function Catalog() {
  const [showError, setShowError] = useState(false);
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isFinalPage, setIsFinalPage] = useState(false);
  const [filter, setFilter] = useState({
    make: null,
    price: null,
    mileage: { from: "", to: "" },
  });

  const [fetchCars, { isFetching, isError, error }] = useLazyGetAllCarsQuery();

  useEffect(() => {
    const fetch = async () => {
      const filterCars = cars => {
        return cars.filter(
          car =>
            (filter.price
              ? +car.rentalPrice.slice(1, car.rentalPrice.length) <
                +filter.price.slice(1, filter.price.length)
              : true) &&
            (filter.mileage.from ? car.mileage > +filter.mileage.from : true) &&
            (filter.mileage.to ? car.mileage < +filter.mileage.to : true)
        );
      };

      const data = await fetchCars({ page, make: filter.make }).unwrap();

      if (page === 1) {
        setCars(filterCars(data));
      } else {
        setCars(cars => [...cars, ...filterCars(data)]);
      }
      if (data.length < 12) {
        setIsFinalPage(true);
      } else {
        setIsFinalPage(false);
      }

      if (data.length > 0 && filterCars(data).length === 0) {
        setPage(page => page + 1);
      }
    };

    fetch();
  }, [page, filter, fetchCars]);

  useEffect(() => {
    let id;

    if (isError) {
      setShowError(true);
      id = setTimeout(setShowError, 2000, false);
    } else {
      setShowError(false);
    }

    return () => clearTimeout(id);
  }, [isError]);

  return (
    <>
      <PageTitle />

      <Filter setFilter={setFilter} setPage={setPage} />

      <CarList cars={cars} />

      {(!isFinalPage || (!isFinalPage && cars.length > 0)) && (
        <Button onClick={() => setPage(page + 1)}>Load More</Button>
      )}

      {isFetching && <Loader />}

      <BasicModalWindow isShown={showError} type={"error"} onClose={() => setShowError(false)}>
        <ErrorMessageP>
          {"Error: "}
          {error?.data}
        </ErrorMessageP>
      </BasicModalWindow>
    </>
  );
}
