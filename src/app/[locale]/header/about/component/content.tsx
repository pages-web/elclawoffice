"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";


export default function AboutContent() {
  const t = useTranslations("About");
  const params = useParams();

  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        display: "block",
        backgroundImage:
          "url('/image/aboutbackground.jpg')",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <div className="col-md-3">
            <div className="nw-widget-menu">
              <h2 className="caption-title">{t("About")}</h2>
              <ul className="dash-menu">
                <li className="active">
                  <Link href={`/${params.locale}/header/about`}>
                    <i className="fa fa-flag-o"></i> {t("Introduction")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${params.locale}/header/about/clients`}>
                    <i className="fa fa-trophy"></i> {t("Awards")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${params.locale}/header/about/clients`}>
                    <i className="fa fa-users"></i> {t("Clients")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <h2 className="caption-title">{t("Introduction")}</h2>
            <div className="back-white">
              <p>
                {t("Taniltsuulga1")}
              </p>
              <p>
                {t("Taniltsuulga2")}
              </p>
              <p>
                {t("Taniltsuulga3")}
              </p>
              <p>
                {t("Taniltsuulga4")}
              </p>
              <p>
                {t("Taniltsuulga5")}
              </p>
              <p>
                {t("Taniltsuulga6")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <input type="hidden" value="" id="sqqs" />
    </div>
  );
}