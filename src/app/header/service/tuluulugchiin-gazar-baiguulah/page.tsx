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
          <h2 className="caption-title">Төлөөлөгчийн газар байгуулах</h2>
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
                    Гадаадын компани, банк, төрийн бус байгууллага, ОУ-ын
                    байгууллагын төлөөлөгчийн газрыг үүсгэн байгуулах буюу
                    Монгол Улсын холбогдох эрх бүхий байгууллагаас бүртгэлийн
                    гэрчилгээг гаргуулах үйлчилгээг үзүүлдэг. Үйлчлүүлэгчээс
                    авсан илтгэмжлэл болон бусад мэдээлэл үндэслэн бүртгэл
                    хийлгэхэд шаардлагатай дүрэм, тогтоол, шийдвэр болон бусад
                    баримт бичгийн төслийг бэлтгэдэг.{" "}
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>ТУРШЛАГА</strong>
                  </p>
                  <ul>
                    <li>
                      Япон Улсын Сумитомо Мицубиши Банкны Корпорацийн
                      төлөөлөгчийн газрыг байгуулсан (2013)
                    </li>
                    <li>
                      ИБУИНВУ-ын Стандарт Чартеред Банкны Төлөөлөгчийн газар
                      зөвлөсөн, хожим нь тус газрыг татан буулгасан (2017);
                    </li>
                    <li>
                      Мянганы Сорилтын Сангийн 2 дугаар компакт гэрээний хүрээнд
                      ажиллах АНУ-ын Кардногийн төлөөлөгчийн газрыг Монгол Улсад
                      байгуулсан(2018);
                    </li>
                  </ul>
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
