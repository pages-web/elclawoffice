import { getKbArticleDetail } from "@/lib/kb";
import React from "react";

export const revalidate = 1;

export default async function page({ params }: { params: { id: string; locale: string } }) {
  const { article } = await getKbArticleDetail({
    variables: { id: params.id },
  }); 
  console.log(article, "dkkddk")
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        display: "block",
        backgroundImage: "url(/image/huudasnii_background-corporate-shutterstock_363629945.png)",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <h2 className="caption-title">
            {article?.title}
          </h2>
          <div className="back-white">
            <div dangerouslySetInnerHTML={{ __html: article?.content }} className="service-about"></div>
            <div id="disqus_thread" />
          </div>
        </div>
      </section>
      <input
          type="hidden"
          value="/media/elc/content/huudasnii_background/Hyrgas_nuur.JPG"
          id="sqqs"
        />
    </div>
  );
}

 

