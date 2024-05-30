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
          <h2 className="caption-title">Хөдөлмөрийн асуудал</h2>
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
                  <p style={{ textAlign: "justify" }}>Бид:</p>
                  <p style={{ textAlign: "justify" }}>
                    - Хөдөлмөрийн харилцаатай холбоотой гэрээ, дотоод журмын
                    төсөл бусад шаардлагатай баримт бичгийг боловсруулах, хянах,
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Хөдөлмөрийн харилцаатай холбоотой тушаал, шийдвэрийн төсөл
                    боловсруулах, хянах,
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Хөдөлмөрийн харилцаатай холбоотой өдөр тутмын үйл
                    ажиллагаанд шаардлагатай хууль, эрх зүйн зөвлөгөө өгөх,
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Хөдөлмөрийн аюулгүй байдал, эрүүл ахуйтай холбоотой дүрэм,
                    журам боловсруулах,
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Үйлдвэрлэлийн осол, хурц хордлогыг судлан бүртгэхтэй
                    холбоотой зөвлөмж, тушаал шийдвэр, холбогдох баримт бичгийг
                    &nbsp;боловсруулах,
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    - Ажилтан, ажил олгогчийн хооронд гарсан маргаанд шүүхийн
                    шатанд Үйлчлүүлэгчийг төлөөлөх зэрэг үйлчилгээг үзүүлж
                    байна.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>ТУРШЛАГААС</strong>
                  </p>
                  <ul>
                    <li>
                      {" "}
                      Шангри-Ла Хотел Улаанбаатар ХХК, Аркетайп Монголиа ХХК,
                      БДО ХХК, Энхтайван Найрамдлын Ордон зэрэг үйлчлүүлэгчдийн
                      хөдөлмөрийн маргаанд үйлчлүүлэгчдээ амжилттай төлөөлөх,
                      эвлэрүүлэх зэргээр ажилласан (2014-2016)
                    </li>
                    <li>
                      Байнгын үйлчлүүлэгч “УБ Сонгдо” эмнэлгийн өдөр тутмын үйл
                      ажиллагаатай холбоотой гэрээ хэлцэл, хөдөлмөр, худалдан
                      авалт зэрэг өргөн хүрээтэй асуудлаар хууль зүйн зөвлөгөө,
                      үйлчилгээ үзүүлж ажилласан. (2016, 2017).
                    </li>
                    <li>
                      “Номадс” ХХК-д холбогдох хөдөлмөрийн маргаанд
                      үйлчлүүлэгчийг төлөөлж амжилттай ажилласан,
                    </li>
                    <li>
                      Гадаадын иргэнийг “Ажлаас үндэслэлгүй халагдсан болохыг
                      тогтоолгох, цалин хөлс гаргуулах хөдөлмөрийн маргаанд
                      амжилттай оролцож нэхэмжлэлийн шаардлагыг хангуулсан.
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
