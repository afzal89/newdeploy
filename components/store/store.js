import { createContext, useState } from "react";

export const StoreContext = createContext({ hashSearch: "" });

export const Store = ({ children }) => {
  const [hashSearch, updatehashSearch] = useState("");
  const [token] = useState();
  function sethashSearch(value) {
    updatehashSearch(value);
  }

  return (
    <StoreContext.Provider value={{ hashSearch, sethashSearch, token }}>
      {children}
    </StoreContext.Provider>
  );
};
