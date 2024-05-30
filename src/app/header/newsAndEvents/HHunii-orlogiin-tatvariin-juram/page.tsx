import React from "react";

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
            ХУВЬ ХҮНИЙ ОРЛОГЫН АЛБАН ТАТВАРЫН ХӨНГӨЛӨЛТ, ЧӨЛӨӨЛӨЛТ ЭДЛҮҮЛЭХ
            ЖУРАМ БАТЛАВ
          </h2>

          <div className="back-white">
            <p>
              Хувь хүний орлогын албан татварын тухай хуулийн 23-р зүйлд албан
              татвар төлөгчид эдлүүлэх хөнгөлөлтүүдийг тодорхойлж заасан.&nbsp;
            </p>
            <p>
              Улмаар Татварын Ерөнхий Газрын Даргын 2019 оны 12-р сарын 30-ны
              өдрийн А/261 тоот Тушаалаар “Хувь хүний орлогын албан татварын
              хөнгөлөлт, чөлөөлөлт эдлүүлэх журам”-ыг баталсан байна.&nbsp;
            </p>
            <p>
              Журамд албан татвараас орлого чөлөөлөх, албан татварын хөнгөлөлт
              эдлүүлэх, татварын хөнгөлөлт, чөлөөлөлтийг тайлагнах, холбогдох
              баримт бүрдүүлэх зэрэг асуудлыг нарийвчлан зохицуулжээ. <br />
              <br />
              Журамтай{" "}
              <a
                dir="auto"
                href="https://www.legalinfo.mn/annex/details/10545?lawid=15008%20"
                target="_blank"
                rel="noopener"
              >
                энд
              </a>{" "}
              дарж танилцана уу
            </p>

            <span>
              <i className="fa fa-clock-o"></i> 2020.02.04
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
