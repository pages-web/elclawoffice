"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useParams } from "next/navigation";
import Page2WorkContentsEn from "../component/pg2encontent";
import Page2WorkContentsMn from "../component/pg2mncontent";

export default function Page() {
  const {locale} = useParams();

  return (
    <>{locale === "mn" ? <Page2WorkContentsMn /> : <Page2WorkContentsEn />}</>
  );
}
