import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { selectTest, setTest } from "../redux/slices/testSlice";
import { useNavigate } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  const selectTestValue = useAppSelector(selectTest);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-[48px] font-bold">Home</h1>
      <h1 className="text-[28px] font-bold">
        Redux Store - Test Slice Value: {selectTestValue && selectTestValue}
      </h1>
      <div className="mt-4">
        <button
          className="bg-black px-5 py-3 text-white rounded-[5px] shadow-sm hover:bg-gray-800"
          onClick={() => {
            dispatch(setTest({ value: selectTestValue + 1 }));
          }}
        >
          Increment
        </button>
        <button
          className="bg-black px-5 py-3 text-white rounded-[5px] shadow-sm hover:bg-gray-800 ml-4"
          onClick={() => {
            navigate("about");
          }}
        >
          Go To About
        </button>
      </div>
    </div>
  );
};

export default Home;
