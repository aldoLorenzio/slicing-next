import React from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <>
      <div className={`text-lg w-3/12`}>Dodo</div>
      <div className="w-6/12">
        <ul className="flex justify-center space-x-10">
          <Nav />
        </ul>
      </div>
      <div className="w-3/12 text-end text-lg">
        <Button href="#kontak">Kontak</Button>
      </div>
    </>
  );
};

export default Navbar;
