import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne } from "./Data";

export default function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
    </>
  );
}
