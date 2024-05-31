import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        display: "block",
        backgroundImage:
          "url(http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/shutterstock_363629945.jpg)",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <h2 className="caption-title">
            Импорт, экспортын лиценз олгох журмын төсөл
          </h2>

          <div className="back-white">
            <Image
              alt=""
              src="	http://elclawoffice.mn/media/elc/content/moh.png"
              width={1090}
              height={479}
            />
            <div>
              <div>Импорт, экспортын лиценз олгох журам </div>
              <p>
                Эрүүл мэндийн сайдын 2011 оны 343 тоот тушаалаар батлагдсан
                “Импорт, экспортын лиценз олгох журам”-д нэмэлт өөрчлөлт оруулах
                журмын төсөлд холбогдох саналаа Эрүүл мэндийн хөгжлийн төвийн
                эмийн зохицуулалтын албанд,{" "}
                <a href="mailto:hulan@hdc.gov.mn">hulan@hdc.gov.mn</a> цахим
                хаягаар ирүүлнэ үү. Төслийг{" "}
                <a href="http://www.mohs.mn/web/upload/files/Import%20exportiin%20lisence-nemelt%284%29.docx">
                  <u>эндээс</u>
                </a>{" "}
                харна уу. Дэлгэрэнгүйг{" "}
                <a href="http://www.mohs.mn/web/index.php/project/item/62">
                  http://www.mohs.mn/web/index.php/project/item/62
                </a>
                <br />
              </p>
              <span className="end">Дуусах өдөр: 2017-01-13 </span>
            </div>
            <span>
              <i className="fa fa-clock-o"></i> 2016.12.16
            </span>

            <div id="disqus_thread"></div>
          </div>
        </div>
      </section>
      <input
        type="hidden"
        value="/media/elc/content/huudasnii_background/corporate/shutterstock_363629945.jpg"
        id="sqqs"
      />
    </div>
  );
}
