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
          <h2 className="caption-title">Хууль тогтоомжийн төсөл</h2>
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
                    Бид Монгол Улсын хууль, эрх зүйн орчныг сайжруулахад
                    чиглэсэн олон тооны хуулийн төсөл боловсруулахад хамтран
                    ажилласан ба тухайлбал
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Санхүүгийн түрээсийн тухай
                    <br />
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Санхүүгийн Зохицуулах Хорооны эрх зүйн байдлын тухай
                    <br />
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Харилцаа холбооны тухай
                    <br />
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Мөнгө угаах, тероризмтай тэмцэх тухай <br />
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Захиргааны хэрэг шүүхэд хянан шийдвэрлэх тухай <br />
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Газар чөлөөлөх нүүлгэн шилжүүлэх тухай <br />
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Шүүхийн шинэчлэлийн багц хуулиуд
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Ашигт малтмалын тухай
                    <br />
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Усны тухай
                    <br />
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Газрын хэвлийн тухай
                    <br />
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Хөрөнгө оруулалтын тухай <br />
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Үндэсний баяр наадмын тухай зэрэг хуулийн төсөл
                    боловсруулахад оролцсон болно.
                  </p>
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
