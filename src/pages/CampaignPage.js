import React from "react";
import Gap40 from "../components/common/Gap40";
import Heading from "../components/common/Heading";
import { IconPlus, IconPlusSmall } from "../components/icons";
import CampaignFeature from "../modules/campaign/CampaignFeature";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import Button from "../components/button/Button";

const CampaignPage = () => {
  return (
    <React.Fragment>
      <Gap40>
        <div className="px-10 py-[31px] bg-white flex items-center justify-between rounded-3xl">
          <div className="flex items-start gap-x-[25px]">
            <div className="w-[54px] h-[54px] rounded-full bg-secondary bg-opacity-40 text-white flex justify-center items-center">
              <IconPlus></IconPlus>
            </div>
            <div className="flex-1">
              <h1 className="text-text1 font-semibold text-[22px] mb-2">
                Create Your Campaign
              </h1>
              <p className="mb-2 text-sm text-text3">
                Jump right into our editor and create your first Virtue
                campaign!
              </p>
              <a href="/" className="text-sm text-primary">
                Need any help? Learn More...
              </a>
            </div>
          </div>
          <Button
            kind="ghostSecondary"
            href="/start-campaign"
            type="button"
            className="px-[30px]"
          >
            create campaign
          </Button>
        </div>
      </Gap40>
      <Heading number={4}>Your Campaign</Heading>
      <CampaignGrid type="primary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <div className="mt-10 text-center"></div>
      <Gap40>
        <Button kind="ghostSecondary" className="px-8 mx-auto">
          <span>See more</span>
          <IconPlusSmall></IconPlusSmall>
        </Button>
      </Gap40>
    </React.Fragment>
  );
};

export default CampaignPage;
