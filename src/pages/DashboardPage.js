import React from "react";
import Heading from "../components/common/Heading";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignItem from "../modules/campaign/CampaignItem";
import { v4 as uuidV4 } from "uuid";
import Gap30 from "../components/common/Gap30";
import CampaignFeature from "../modules/campaign/CampaignFeature";
const DashboardPage = () => {
  return (
    <React.Fragment>
      <Heading number="4">Your Campaign</Heading>
      <Gap30>
        <CampaignFeature></CampaignFeature>
      </Gap30>
      <Heading>Popular Campaign</Heading>
      <Gap30>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={uuidV4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </Gap30>
      <Heading>Recent campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={uuidV4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </React.Fragment>
  );
};

export default DashboardPage;
