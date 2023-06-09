import React from "react";
import Button from "../components/button/Button";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import useToggleValue from "../hooks/useToggleValue";
import { useForm } from "react-hook-form";
import FormGroup from "../components/common/FormGroup";
import { Input, Label } from "../components";
import { IconEyeToggle } from "../components/icons";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonGoogle from "../components/button/ButtonGoogle";
import { authLogin } from "../store/auth/auth-slice";
import { useDispatch } from "react-redux";
const SignInPage = () => {
  const validateSignIn = yup.object({
    email: yup.string().email("").required("This field is required"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password must be 8 character "),
  });
  const {
    booleanValue: showPassword,
    handleToggleValue: handleTogglePassword,
  } = useToggleValue(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onSubmit", resolver: yupResolver(validateSignIn) });
  const dispatch = useDispatch();
  const handleSignIn = (values) => {
    dispatch(authLogin(values));
  };
  return (
    <div>
      <LayoutAuthentication heading="Welcome Back!">
        <p className="text-xs font-normal text-text3 mb-[25px] lg:mb-[20px] lg:text-sm text-center">
          Don't have an account?{" "}
          <Link to={"/register"} className="font-medium underline text-primary">
            Sign up
          </Link>
        </p>
        <ButtonGoogle text="Sign in with google"></ButtonGoogle>
        <form onSubmit={handleSubmit(handleSignIn)}>
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
              placeholder="Enter password"
            >
              <IconEyeToggle
                onClick={handleTogglePassword}
                statusEye={showPassword}
              ></IconEyeToggle>
            </Input>
          </FormGroup>
          <FormGroup>
            <div className="text-right cursor-pointer">
              <span className="inline-block text-sm font-medium text-primary">
                Forgot password
              </span>
            </div>
          </FormGroup>
          <Button className="w-full" kind="primary" type="submit">
            Sign in
          </Button>
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignInPage;
