"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";


export default function Menu() {
  const t = useTranslations("About");
  const params = useParams();

  return (
    <ul className="dash-menu">
      <li className="active">
        <Link href={`/${params.locale}/header/about`}>
          <i className="fa fa-flag-o"></i> {t("Introduction")}
        </Link>
      </li>
      <li>
      <Link href={`/${params.locale}/header/about/success`}>
          <i className="fa fa-trophy"></i> {t("Awards")}
        </Link>
      </li>

      <li>
        <Link href={`/${params.locale}/header/about/clients`}>
          <i className="fa fa-users"></i> {t("Clients")}
        </Link>
      </li>
    </ul>
  );
}