import {
  CounterContainerStyled,
  CounterSpanStyled,
  CounterButtonContainerStyled,
} from "./CounterStyles";
import Reset from "../reset/Reset";

import Substract from "../substract/Substract";
import Add from "../add/Add";
import { useSelector } from "react-redux";
import { divide } from "../../features/counterSlice";

const Counter = () => {

  const count = useSelector((state) => state.count)

  return (
    <CounterContainerStyled>
      <CounterButtonContainerStyled >
        <Substract />
        <CounterSpanStyled>{count}</CounterSpanStyled>
        <Add />
      </CounterButtonContainerStyled>

      <Reset />
    </CounterContainerStyled>
  );
};

export default Counter;
