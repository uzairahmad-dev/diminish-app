import React from "react";

import FreeForm from "../FreeForm";
import BuyPlan from "../BuyPlan";

type SectionFreeTryProps = {};

const SectionFreeTry: React.FC<SectionFreeTryProps> = () => {
  return (
    <>
      <FreeForm />
      <BuyPlan />
    </>
  );
};

export default SectionFreeTry;
