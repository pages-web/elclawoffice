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
          <h2 className="caption-title">Санхүүгийн хуулийн зөвлөх</h2>
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
                    Монгол Улсын татварын болон нягтлан бодох бүртгэлийн хууль,
                    тогтоомж, дүрэм, журам, стандарт, шаардлагын талаар
                    зөвлөгөөг тодорхой шүүхийн практик, кэйсүүдэд тулгуурлан
                    өгдөг. Санхүү, нягтлан бодох бүртгэлийн чиглэлээр мэргэшсэн
                    хуульчид болон шинжээчид үйлчилгээг үзүүлдэг. Анхан шатны
                    бүртгэл, бодлогын баримт бичиг болон татварын хяналт
                    шалгалттай холбоотой үйл ажиллагаанд хууль, тогтоомжийн
                    талаас зөвлөж ажилладаг.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>ТУРШЛАГА</strong>
                  </p>
                  <ul>
                    <li>
                      “Текра Монголиа” Япон Улсын санхүүжилттэй компани,
                      Сумитомо Мицүй банкны төлөөлөгчийн газрын санхүүгийн
                      тайлан бэлтгэх болон санхүү,татварын зөвлөх, “Эм Жэй Эм”
                      ХХК-ний “PRO3” Төслийн “Нягтлан бодох бүртгэлийн бодлогын
                      баримт бичиг” боловсруулах ажлыг хийсэн. (2016-2017)
                    </li>
                    <li>
                      &nbsp;Японы сүлжээ зочид буудал “Тоёоко Инн Монголиа”
                      ХХК-д санхүү, татварын зөвлөгөө өгөх, “Нягтлан бодох
                      бүртгэлийн баримт бичиг” боловсруулах, үйл ажиллагаатай
                      холбогдох гэрээ хэлцлийг боловсруулан ажиллаж байна.
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
