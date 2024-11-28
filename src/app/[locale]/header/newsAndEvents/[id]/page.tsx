import { getKbArticleDetail } from "@/lib/kb";
import React from "react";
import { get } from "http";
import ServiceTranslation from "../../service/component/translation";

export const revalidate = 1;

export default async function page({ params }: { params: { id: string; locale: string } }) {
  const { article } = await getKbArticleDetail({
    variables: { id: params.id },
  }); 
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        backgroundImage: "url(/image/newsbackground.jpg)",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "block",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <h2 className="caption-title">{article?.title}</h2>
          <div className="back-white no-gradient">
            <div dangerouslySetInnerHTML={{ __html: article?.content }} className="service-about"></div>
          </div>
        </div>
      </section>

      <input type="hidden" value="" id="sqqs" />
    </div>
  );
}


 