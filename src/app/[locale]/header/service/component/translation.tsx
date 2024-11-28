
"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function ServiceTranslation() {
  const t = useTranslations("Service");

  return (
    <header id="page-header">
      <h3 id="page-title">{t("Title")}</h3>
    </header>
  );
}