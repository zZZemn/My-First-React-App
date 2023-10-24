import { useState } from "react";

const ButtonComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <button onClick={handleClick}>Click Me! {count}</button>
    </>
  );
};

export default ButtonComponent;
