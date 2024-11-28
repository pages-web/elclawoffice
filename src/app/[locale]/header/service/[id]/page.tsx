import { getKbArticleDetail } from "@/lib/kb";
import React from "react";
import { get } from "http";
import ServiceTranslation from "../component/translation";


export const revalidate = 1;

export default async function Page({ params }: { params: { id: string; locale: string } }) {

  const { id, locale } = params;

  const { article } = await getKbArticleDetail({
    variables: { id},
  }); 
  
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        backgroundImage: "",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "block",
      }}
    >
      <div className="news-list-main nw-padding-top category-service">
        <div className="container cat-padding-top">
          <div className="row">
            <div className="col-sm-1 col-md-3">
              <div className="tags current-position cat-service">
                <ServiceTranslation/>
              </div>
            </div>
            <div className="col-sm-1 col-md-9  no-md">
              <div className="back-white no-gradient">
                <div dangerouslySetInnerHTML={{ __html: article?.content }} className="service-about"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="clear"></div>
        </div>
      </div>

      <input type="hidden" value="" id="sqqs" />
    </div>
  );
}
