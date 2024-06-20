import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {tasksList} = useSelector((state) => state.tasks) //use the key given in the store for the reducer
  
  return (
    <>
      <h1 className="text-center my-4 text-primary">CRUD Using Redux</h1>
      <p className="text-center lead">{`Currently ${tasksList.length} task(s) pending`}</p>
    </>
  );
};

export default Navbar;
