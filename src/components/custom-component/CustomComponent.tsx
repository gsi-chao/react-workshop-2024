import { useContext, useEffect, useMemo } from "react";
import { GlobalContext } from "../../stores/global";
import Button from "../button/Button";

const CustomComponent = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({ type: "ADD_COUNT", payload: undefined });
  }, [state.list]);

  const itemLength = useMemo(() => {
    return state.list.length;
  }, [state.list]);

  const addItemToList = () => {
    dispatch({ type: "ADD_TO_LIST", payload: `item-${Math.random()}` });
  };
  return (
    <div>
      <h1>Count2 :{state.count}</h1>
      <h2>Item Length: {itemLength}</h2>
      {
        <ul>
          {state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      }
      <Button onClick={addItemToList} text="Add Item to list with context" />
    </div>
  );
};

export default CustomComponent;
