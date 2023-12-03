import { components } from "react-select";
import PropTypes from "prop-types";

const PriceControl = ({ children, ...props }) => {

  return (
    <components.Control {...props}>
      to
      {children}
    </components.Control>
  );
};

PriceControl.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PriceControl;
