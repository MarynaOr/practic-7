import { Outlet } from "react-router-dom";
import Header from "./module-8_less-1/Header/Header";

const LayOut = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
};

export default LayOut;