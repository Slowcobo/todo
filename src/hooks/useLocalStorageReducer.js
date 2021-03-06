import { useReducer, useEffect } from "react";

export default (key, initialVal, reducer) => {
  // Initialize state based off initialVal
  const [state, dispatch] = useReducer(reducer, initialVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(initialVal));
    } catch (e) {
      val = initialVal;
    }
    return val;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
};
