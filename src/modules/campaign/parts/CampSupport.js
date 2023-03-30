import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";

const CampSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold">Support</h2>
      <div className="flex flex-col w-full px-6 bg-white shadow-1 py-7">
        <p className="mb-8 text-xl text-center text-text3">
          Pledge without reward
        </p>
        <Input
          placeholder="$10"
          control={control}
          name="Pledge"
          className="w-full px-5 py-3 mb-5 text-lg font-medium border rounded border-strock"
        ></Input>
        <div className="p-5 my-5 bg-grayf3 rounded-xl">
          <p className="mb-5 text-sm font-semibold text-text2">
            Back it because you believe in it.
          </p>
          <p className="text-sm text-text3">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button className="w-full" kind = "secondary">Continue</Button>
      </div>
    </div>
  );
};

export default CampSupport;
