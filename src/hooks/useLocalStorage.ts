import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);

      if (storedValue === null) {
        return initialValue;
      }

      return JSON.parse(storedValue) as T;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.error(`Could not save "${key}" to localStorage.`);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
