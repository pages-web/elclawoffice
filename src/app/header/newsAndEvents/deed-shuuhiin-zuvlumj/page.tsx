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
          <h2 className="caption-title"> МОНГОЛ УЛСЫН ДЭЭД ШҮҮХИЙН ЗӨВЛӨМЖ</h2>

          <div className="back-white">
            <p>
              <img src="http://elclawoffice.mn/media/elc/content/soymbo.jpg" />
            </p>
            <p>
              <strong>МОНГОЛ УЛСЫН ДЭЭД Ш</strong>
              <strong>ҮҮ</strong>
              <strong>ХЭЭС </strong>
            </p>{" "}
            Анхан шатны шүүх хэрэг, маргааныг хамтран шийдвэрлэхдээ иргэдийн
            төлөөлөгчийг оролцуулах, Хариуцагчийг оршин суугаа хаяг тодорхойгүй,
            Хариуцагчийг эрэн сурвалжлуулах болон Шүүхийн шийдвэр хүчинтэй
            болох, хүчин төгөлдөр болох талаар зөвлөмж гаргасан байна.{" "}
            <p>
              Дэлгэрэнгүйг{" "}
              <a href="http://legalinfo.mn/law/details/12296?lawid=12296">
                http://legalinfo.mn/law/details/12296?lawid=12296
              </a>
            </p>
            <br />
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
