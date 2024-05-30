import React from "react";

export default function page() {
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        backgroundImage: "url(&quot;&quot;)",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "block",
      }}
    >
      <div className="news-list-main nw-padding-top category-service">
        <div className="container">
          <h2 className="caption-title">Виз болон ажиллах зөвшөөрөл</h2>
        </div>

        <div className="container cat-padding-top">
          <div className="row">
            <div className="col-sm-1 col-md-3">
              <div className="tags current-position cat-service">
                <h3>Мэргэшсэн Хуульч</h3>
                <ul></ul>
              </div>
            </div>

            <div className="col-sm-1 col-md-9  no-md">
              <div className="back-white no-gradient">
                <div className="service-about">
                  <p style={{ textAlign: "justify" }}>
                    Бид:
                    <br />
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Компанийн хөрөнгө оруулагч гадаадын иргэн, түүнчлэн
                    гадаадаас ажиллах хүч урьж ажиллуулах талаар зөвлөгөө
                    өгөх,&nbsp; <br />
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Виз, оршин суух зөвшөөрөл авах
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Виз, оршин суух зөвшөөрлийн хугацааг сунгуулах асуудлаар
                    зөвлөгөө өгөх, үйлчлүүлэгчийг төлөөлөх үйлчилгээг үзүүлэн
                    ажиллаж байна.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>ТУРШЛАГА</strong>
                    <br />
                  </p>
                  <ul>
                    <li>
                      Монгол улсын хүүхдийг АНУ-ын иргэнд үрчлүүлэх, өмнө
                      хийгдсэн дотоодын үрчлэлтийг Олон улсад хүлээн
                      зөвшөөрөгдсөн үрчлэлт болгон залруулж, хууль ёсны
                      болгосон. (2015-2016);
                    </li>
                  </ul>
                  <ul></ul>
                </div>
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
