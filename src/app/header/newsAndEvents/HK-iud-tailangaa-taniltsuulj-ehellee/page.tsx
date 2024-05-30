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
            Бүртгэлтэй ХК-иуд тайлангаа танилцуулж эхэллээ
          </h2>

          <div className="back-white">
            <p style={{ textAlign: "justify" }}>
              Монголын Хөрөнгийн биржид бүртгэлтэй ХК-иуд өнөөдрөөс эхлэн хагас
              жилийн санхүү, үйл ажиллагааны тайлангаа танилцуулах гэж байна.
            </p>
            <p style={{ textAlign: "justify" }}>
              Тухайлбал, өнөөдөр “Монгол базальт” болон “АПУ” ХК танилцуулах бол
              наймдугаар сарын 8-нд “Ард санхүүгийн нэгдэл”, болон “Ард
              даатгал”, наймдугаар сарын 9-нд “Түмэн шувуут”, “Говь” ХК
              тайлангаа тавина. Ирэх долоо хоногт “Мах импекс”, “Талх чихэр”,
              “Сүү”, “Тавантолгой”, “Монгол шуудан”, “Мик холдинг”, “Дархан
              нэхий” зэрэг томоохон ХК-иуд хуваарийн дагуу тайлангаа танилцуулах
              талаар Монголын Хөрөнгийн биржээс мэдээллээ.
            </p>
            <p style={{ textAlign: "justify" }}>
              ХК-иуд санхүүгийн тайлангаа тавихтай холбогдуулан тухайн компанийн
              хөрөнгө оруулагч, хувьцаа эзэмшигчдийг Монголын Хөрөнгийн биржийн
              байранд ирж, компаниудын хагас жилийн үйл ажиллагааны тайлан
              мэдээлэлтэй танилцаж, үйл ажиллагааны талаар дэлгэрэнгүй мэдээлэл
              авахыг зөвлөжээ.
            </p>
            <p>
              Эх сурвлаж:{" "}
              <a href="https://www.montsame.mn/mn/read/197170" target="_blank">
                https://www.montsame.mn/mn&nbsp;
              </a>
              <br />{" "}
            </p>
            <span>
              <i className="fa fa-clock-o"></i> 2019.08.07
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
