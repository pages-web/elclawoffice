import React from "react";
import Image from "next/image";
import { getKbArticlesByCode } from "@/lib/kb";
import { text } from "stream/consumers";
import Link from "next/link";
 


export default async function Page({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { locale: string };
}) {
  const code = params.locale === "mn" ? "works" : "works-en";
  const { articles } = await getKbArticlesByCode(code);
  const reversedArticles = [...articles].reverse();

 
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        display: "block",
        backgroundImage: "url(/image/huudasnii_background-corporate-crop7.png)",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top service-catt">
          <div>
            <ul className="article-list news-list nw-list">
              {reversedArticles.length > 0 ? (
                reversedArticles.map((item, index) => (
                  <li key={index} className={`col-xs-12 col-md-6 other service-list`}>
                    <Link href={`/${params.locale}/header/works/${item?._id}`}>
                      <div className="desc">{item.title}</div>
                    </Link>
                  </li>
                )) 
              ) : (
                  <p>No articles available</p>
              )}
            </ul>
            <div className="clearfix" />
          </div>
        </div>
      </section>
      <input
        type="hidden"
        defaultValue="http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/crop7.jpg"
        id="sqqs"
      />
    </div>
  );
}
