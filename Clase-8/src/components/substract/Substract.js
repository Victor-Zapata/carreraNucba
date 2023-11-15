import { useDispatch } from "react-redux";
import { decrement, decrement_5, divide } from "../../features/counterSlice";
import { CounterButtonStyled } from "./SubstractStyles";

import { FiDivideCircle } from "react-icons/fi";
import { RiNumber5 } from "react-icons/ri";
import { AiOutlineMinusCircle } from "react-icons/ai";

const Substract = () => {

  const dispatch = useDispatch();

  return (
    <>
      <CounterButtonStyled last onClick={() => dispatch(divide())}>
        <FiDivideCircle size="32px" color="white" />
      </CounterButtonStyled>
      <CounterButtonStyled onClick={() => dispatch (decrement_5())}>
        <p>
          -<RiNumber5 size="32px" color="white" />
        </p>
      </CounterButtonStyled>
      <CounterButtonStyled onClick={() => dispatch (decrement())}>
        <AiOutlineMinusCircle size="32px" color="white" />
      </CounterButtonStyled>
    </>
  );
};

export default Substract;
