import React from "react";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layout/LayoutDashboard";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignItem from "../modules/campaign/CampaignItem";
import { v4 as uuidV4 } from "uuid";
const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number="4">Your Campaign</Heading>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={uuidV4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default DashboardPage;
