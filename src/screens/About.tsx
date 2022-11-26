import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { selectTest, setTest } from "../redux/slices/testSlice";
import { useNavigate } from "react-router-dom";
import DataComponent from "../components/DataComponent";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="p-4">
      <h1 className="text-[48px] font-bold">About</h1>
      <DataComponent path="/" pathName="Go To Home" />
    </div>
  );
};

export default About;
