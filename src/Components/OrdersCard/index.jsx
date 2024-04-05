import {
  ChevronRightIcon,
  ShoppingBagIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  const currentDate = () => {
    const date = new Date().toLocaleDateString();
    return date;
  };

  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg w-80 p-4">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="w-4 h-4 text-black" />
            <span className="font-light">{currentDate()}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBagIcon className="w-4 h-4 text-black" />
            <span className="font-light">{totalProducts} articles</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-2xl">{totalPrice}€</span>
          <ChevronRightIcon className="h-6 w-6 text-black " />
        </div>
      </div>
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
};
export default OrdersCard;
