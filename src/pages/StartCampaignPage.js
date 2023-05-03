import React from "react";
import CampaignAddNew from "../modules/campaign/CampaignAddNew";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StartCampaignPage = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <React.Fragment>
      <CampaignAddNew></CampaignAddNew>
    </React.Fragment>
  );
};

export default StartCampaignPage;
