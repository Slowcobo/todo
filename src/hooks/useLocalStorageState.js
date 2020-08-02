import { useState, useEffect } from "react";

export default (key, initialVal) => {
  // Initialize state based off initialVal
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(initialVal));
    } catch (e) {
      val = initialVal;
    }
    return val;
  });

  // useEffect to update local storage
  useEffect(
    (key) => {
      window.localStorage.setItem(key, JSON.stringify(state));
    },
    [state]
  );

  return [state, setState];
};
