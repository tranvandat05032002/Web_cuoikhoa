import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, CheckBox, Input, Label } from "../components";
import FormGroup from "../components/common/FormGroup";
import LayoutAuthentication from "../layout/LayoutAuthentication";

const SignUpPagePage = () => {
  const { handleSubmit, control } = useForm({});
  const [acceptTerm, setAcceptTerm] = React.useState(false);

  const handleSignUp = (values) => {
    // console.log(values)
    console.log(values)
  };
  const handleTogglerTerm = () => {
    setAcceptTerm(!acceptTerm);
  };
  return (
    <LayoutAuthentication heading="SignUpPage">
      <p className="text-xs font-normal text-text3 mb-[25px] lg:mb-[20px] lg:text-sm text-center">
        Already have an account?{" "}
        <Link to={"/sign-in"} className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-[13px] gap-x-[10px] mb-5 font-medium border border-strock rounded-[10px]">
        <img srcSet="/google.png 2x" alt="icon-google" />
        <span className="text-base text-text2">Sign up with google</span>
      </button>
      <p className="text-text2 text-center text-xs lg:text-[14px] font-thin">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            type="text"
            name="name"
            placeholder="Jhon Doe"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            type="email"
            name="email"
            placeholder="example@gmail.com"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password*</Label>
          <Input
            control={control}
            type="password"
            name="password"
            placeholder="Create a password"
          ></Input>
        </FormGroup>
        <div className="flex items-start gap-x-5">
          <CheckBox
            checked={acceptTerm}
            onClick={handleTogglerTerm}
            name={"term"}
          >
            <p
              className="flex-1 text-sm cursor-pointer text-text4"
            >
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy.</span>
            </p>
          </CheckBox>
        </div>
        <Button className="w-full bg-primary" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPagePage;
