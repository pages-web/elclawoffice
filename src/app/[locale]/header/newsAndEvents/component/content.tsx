"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NewsContent({ locale, reversedArticles
}: { locale: string;
  reversedArticles: Array<any>;
}) {
  const t = useTranslations("News");

  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        backgroundImage:
          "url(/image/huudasnii_background-corporate-shutterstock_363629945.png)",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "block",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <div className="row">
            {reversedArticles.length > 0 ? (
              reversedArticles.map((item, index) => (
                <div className="col-md-4 col-sm-6 col-12 mheight" key={index}>
                  <div className="cat-list back-white" style={{ height: "395px" }}>
                    <h4 className="title">
                      <Link href={`/${locale}/header/newsAndEvents/${item._id}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <div className="desc">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {item.summary}
                    </div>
                    <Link
                      href={`/${locale}/header/newsAndEvents/${item._id}`}
                      className="btn btn-more"
                    >
                      {t("More")}
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>No articles available</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}