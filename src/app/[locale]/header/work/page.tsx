"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useParams } from "next/navigation";
import WorkContentsMn from "./component/mnworkcontent";
import WorkContentsEn from "./component/enworkContents";

export default function Page() {
  const { locale } = useParams();

  return (
    <>{locale === "mn" ? <WorkContentsMn /> : <WorkContentsEn />}</>
  );
}
