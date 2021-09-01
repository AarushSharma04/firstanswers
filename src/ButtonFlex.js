import React, { useState } from "react";
import ButtonCheck from "./Components/ButtonCheck";
import fire from "./fire";

const ButtonFlex = () => {
  return (
    <div className="button-container">
      <ButtonCheck name="Programming" />
      <ButtonCheck name="Mechanical" />
      <ButtonCheck name="Team Help" />
      <ButtonCheck name="Field/game" />
      <ButtonCheck name="Outreach" />
      <ButtonCheck name="Fundraising" />
      <ButtonCheck name="Team management" />
      <ButtonCheck name="Resources" />
      <ButtonCheck name="General" />
    </div>
  );
};

export default ButtonFlex;
