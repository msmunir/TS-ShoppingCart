import { useEffect, useState } from "react";

// T generic type. Type of T whatever we pass in useLocalStorage hook cartItem[]
const useLocalStorage = <T>(key: string, initialValue: T | (() => T)) => {
  const [value, setValue] = useState<T>(() => {
    // only want to invoke onetime. slow process
    const jsonValue = localStorage.getItem(key);

    // value stored in local storage
    if (jsonValue != null) return JSON.parse(jsonValue);

    // if we dont have value in storage
    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
};

export default useLocalStorage;
