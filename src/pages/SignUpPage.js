import { Button, CheckBox, Input, Label } from "../components";
import { IconEyeToggle } from "../components/icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormGroup from "../components/common/FormGroup";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import React from "react";
import useToggleValue from "../hooks/useToggleValue";
import ButtonGoogle from "../components/button/ButtonGoogle";
import { useDispatch } from "react-redux";
import { authRegister } from "../store/auth/auth-slice";

const SignUpPagePage = () => {
  const validateScheme = yup.object({
    name: yup.string().required("This field is required"),
    email: yup
      .string()
      .required("This field is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password must be 8 character "),
  });
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validateScheme),
  });
  const handleSignUp = (values) => {
    dispatch(authRegister(values));
    reset({});
  };
  const {
    handleToggleValue: handleTogglePassword,
    booleanValue: showPassword,
  } = useToggleValue(false);
  const { handleToggleValue: handleTogglerTerm, booleanValue: acceptTerm } =
    useToggleValue(false);
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="text-xs font-normal text-text3 mb-[25px] lg:mb-[20px] lg:text-sm text-center">
        Already have an account?{" "}
        <Link to={"/sign-in"} className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign up with google"></ButtonGoogle>
      <p className="text-text2 text-center text-xs lg:text-[14px] font-thin dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            type="text"
            name="name"
            errors={errors && errors.name?.message}
            placeholder="Jhon Doe"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            type="email"
            name="email"
            errors={errors && errors.email?.message}
            placeholder="example@gmail.com"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password*</Label>
          <Input
            control={control}
            type={showPassword ? "text" : "password"}
            name="password"
            errors={errors && errors.password?.message}
            placeholder="Create a password"
          >
            <IconEyeToggle
              onClick={handleTogglePassword}
              statusEye={showPassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start gap-x-5">
          <CheckBox
            checked={acceptTerm}
            onClick={handleTogglerTerm}
            name={"term"}
          >
            <p className="flex-1 text-xs cursor-pointer lg:text-sm text-text4 dark:text-text2">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy.</span>
            </p>
          </CheckBox>
        </div>
        <Button className="w-full" kind="primary" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPagePage;
