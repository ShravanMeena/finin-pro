import React from "react";
import { InfoSection, SecuritySection } from "../../components";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  homeObjSix,
  homeObjSeven,
} from "./Data";

export default function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <SecuritySection {...homeObjSeven} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <SecuritySection {...homeObjSix} />
      <InfoSection {...homeObjFive} />
    </>
  );
}
