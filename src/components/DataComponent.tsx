import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { selectTest, setTest } from "../redux/slices/testSlice";
import { useNavigate } from "react-router-dom";

type Props = {
  path: string;
  pathName: string;
};

const DataComponent = (props: Props) => {
  const selectTestValue = useAppSelector(selectTest);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div>
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
            dispatch(setTest({ value: selectTestValue - 1 }));
          }}
        >
          Decrement
        </button>
        <button
          className="bg-black px-5 py-3 text-white rounded-[5px] shadow-sm hover:bg-gray-800 ml-4"
          onClick={() => {
            navigate(props.path);
          }}
        >
          {props.pathName}
        </button>
      </div>
    </div>
  );
};

export default DataComponent;
