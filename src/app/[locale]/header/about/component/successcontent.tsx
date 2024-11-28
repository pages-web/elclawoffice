"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Menu from "./dashmenu";


export default function SuccessContents() {
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
            <Menu/>
          </div>
        </div>
        <div className="col-md-9">
          <h2 className="caption-title">{t("Awards")}</h2>
          <div className="back-white">
            <h3>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}>
                    {t("Awards1")}
                  </span>
                </span>
              </span>
            </h3>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p></p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}></span>
                </span>
              </span>
            </p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p>
              <span style={{ fontFamily: "Arial" }}></span>
            </p>
            <p></p>
            <h3>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}>
                    {t("Awards2")}
                  </span>
                </span>
              </span>
            </h3>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p></p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}></span>
                </span>
              </span>
            </p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p>
              <span style={{ fontFamily: "Arial" }}></span>
            </p>
            <p></p>
            <h3>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}>
                    {t("Awards3")}
                  </span>
                </span>
              </span>
            </h3>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p></p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}></span>
                </span>
              </span>
            </p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p>
              <span style={{ fontFamily: "Arial" }}></span>
            </p>
            <p></p>
            <h3>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}>
                  {t("Awards4")}
                  </span>
                </span>
              </span>
            </h3>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p></p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}></span>
                </span>
              </span>
            </p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p>
              <span style={{ fontFamily: "Arial" }}></span>
            </p>
            <p></p>
            <h3>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}>
                  {t("Awards5")}
                  </span>
                </span>
              </span>
            </h3>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p></p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}></span>
                </span>
              </span>
            </p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p>
              <span style={{ fontFamily: "Arial" }}></span>
            </p>
            <p></p>
            <h3>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}>
                    {t("Awards6")}
                  </span>
                </span>
              </span>
            </h3>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p></p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}></span>
                </span>
              </span>
            </p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p>
              <span style={{ fontFamily: "Arial" }}></span>
            </p>
            <p></p>
            <h3>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}>
                    {t("Awards7")}
                  </span>
                </span>
              </span>
            </h3>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p></p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}></span>
                </span>
              </span>
            </p>
            <p>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}></span>
              </span>
            </p>
            <p>
              <span style={{ fontFamily: "Arial" }}></span>
            </p>
            <p></p>
            <h3>
              <span style={{ fontSize: "14px" }}>
                <span style={{ fontFamily: "Arial" }}>
                  <span style={{ color: "rgb(15, 36, 62)" }}>
                    {t("Awards8")}
                  </span>
                </span>
              </span>
              <br />
            </h3>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}


 