import React, { use } from "react";
import Works from "../Works/Works";

const HowItWorks = ({ dataPromise }) => {
  const works = use(dataPromise);
  console.log(works);

  return (
    <div>
      <Works works={works}></Works>
    </div>
  );
};

export default HowItWorks;
