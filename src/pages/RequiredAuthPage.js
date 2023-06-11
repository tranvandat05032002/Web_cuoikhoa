import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequiredAuthPage = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log(user);
  React.useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (!user) return null;
  return <React.Fragment>{children}</React.Fragment>;
};

export default RequiredAuthPage;
