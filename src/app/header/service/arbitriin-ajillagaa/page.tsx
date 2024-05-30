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
          <h2 className="caption-title">Арбитрын ажиллагаа</h2>
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
                    Бид эдийн засаг, бизнес, худалдаа арилжаа, хөрөнгө оруулалт,
                    ажил гүйцэтгэх, хамтран ажиллах зэрэг эцсийн үр дүн нь эдийн
                    засгийн үр ашиг авчрах аливаа гэрээ хэлцэлээс үүссэн
                    маргаанд үйлчлүүлэгчээ дотоодын арбитар болон Олон улсын
                    арбитрын ажиллагаанд төлөөлөн ажиллаж байна.&nbsp;
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Өнөөдөр дэлхийн эдийн засгийн хөгжил бүхий 200 гаруй улс
                    оронд олон улсын болон үндэсний хэмжээнд үйл ажиллагаа
                    явуулах эрхтэй&nbsp;арбитрын байгууллагууд үйл ажиллагаагаа
                    явуулж байгаа бөгөөд цаашдаа бизнесийн маргааныг зөвхөн
                    арбитраар шийдвэрлүүлэх чиг хандлага давамгайлж байна.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>ТУРШЛАГА</strong>
                  </p>
                  <ul>
                    <li>
                      Олон улсын Арбитрын шүүхийн Монгол Улсын Засгийн газарт
                      холбогдох хэрэгт ажилласан.{" "}
                    </li>
                    <li>
                      ОХУ-ын “Р” ХХК-ийн нэхэмжлэлтэй “М” ХХК-д холбогдох
                      арбитрын маргаанд нэхэмжлэгчийг төлөөлөн оролцож, талууд
                      эвлэрснээр арбитрын ажиллагаа дуусгавар болсон (2018);
                    </li>
                    <li>
                      "Э" ХХК-ийн нэхэмжлэлтэй ОХУ-ын “Ц” ХК-д холбогдох
                      арбитрын хэрэгтэй холбоотойгоор нэхэмжлэгчийг Москва хот
                      дахь арбитрын шүүхэд төлөөлж байгаа Орос улсын хуульч
                      нарын үйл ажиллагааг дэмжиж, хууль зүйн зөвлөмж, санал
                      хүргүүлсэн (2018-2019).
                    </li>
                    <li>
                      Хонг Конгийн Олон Улсын Арбитраар шийдвэрлүүлсэн хэрэгт
                      зөвлөх, төлөөлөгчөөр ажилласан.{" "}
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
