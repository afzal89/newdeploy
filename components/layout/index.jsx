import Header from "../Header";
import { Footer } from "./footer";

export const Layout = ({ token, children }) => {
  return (
    <>
      <Header token={token} />
      {children}
      <Footer />
    </>
  );
};
