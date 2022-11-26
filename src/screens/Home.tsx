import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { selectTest, setTest } from "../redux/slices/testSlice";
import { useNavigate } from "react-router-dom";
import DataComponent from "../components/DataComponent";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="p-4">
      <h1 className="text-[48px] font-bold">Home</h1>
      <DataComponent path="about" pathName="Go To About" />
    </div>
  );
};

export default Home;
