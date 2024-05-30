import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        display: "block",
        backgroundImage:
          'url("http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/shutterstock_317042522.jpg")',
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <div className="col-md-3">
            <div className="nw-widget-menu">
              <h2 className="caption-title">Бидний тухай</h2>
              <ul className="dash-menu">
                <li className="active">
                  <Link href="/header/about">
                    <i className="fa fa-flag-o"></i> Танилцуулга
                  </Link>
                </li>

                <li>
                  <Link href="/header/about/success">
                    <i className="fa fa-trophy"></i> Амжилт
                  </Link>
                </li>

                <li>
                  <Link href="/header/about/clients">
                    <i className="fa fa-users"></i> Манай үйлчлүүлэгчид
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <h2 className="caption-title">Танилцуулга</h2>
            <div className="back-white">
              <p>
                Монгол Улсын тэргүүлэх өмгөөллийн нөхөрлөлүүдийн нэг Өмгөөллийн
                ИЭлСи ХХН-ийг анх 2000 онд тус нөхөрлөлийн Ахлах Партнер
                Бүдрагчаагийн Баяр үүсгэн байгуулсан. Үүсгэн байгуулагдсан
                цагаасаа хойш эдийн засгийн олон салбарт, тэр дундаа уул уурхай,
                эрчим хүч, дэд бүтэц, барилга болон үнэт цаасны зах зээлийн үйл
                ажиллагаанд идэвхитэй оролцож, бизнесийн зөвлөх үйлчилгээ,
                төслийн удирдлага, шүүхэд хэрэг маргаан шийдвэрлэх ажиллагаанд
                голлон ажиллаж байна. Найдвартай, мэргэжлийн бөгөөд зохистой үйл
                ажиллагааг хэрэгжүүлэх замаар үйлчилгээний чанар, хүртээмжийг
                сайжруулах нь нөхөрлөлийн гол үзэл баримтлал юм. Үзүүлсэн
                үйлчилгээ, үйлчлүүлэгчийн хэрэгцээ шаардлагыг мэдэрч, тэдэнтэй
                бий болгосон хамтын ажиллагаа нь нөхөрлөлийн өнөөдрийн нэр
                хүндийг бий болгосон.{" "}
              </p>

              <p>
                Монгол Улсын хөгжиж буй, түргэн өөрчлөгддөг бизнесийн болон эрх
                зүйн орчинд үйлчлүүлэгчийн хэрэгцээг зөв тодорхойлон, асуудлыг
                цогцоор нь шийдвэрлэх арга замыг эрэлхийлж ажиллахыг зорьдог.
                Чанартай, шуурхай үйлчилгээг хүргэхийн зэрэгцээ үйлчлүүлэгч
                болон хамтран ажиллагсад хоорондоо бүхий л цаг үед харилцан
                итгэлцлийг бий болгож ажиллах нь нөхөрлөлийн үйлчилгээний нэг
                онцлог байдаг.{" "}
              </p>

              <p>
                Нөхөрлөл нь үнэт цаасны зах зээлд үйлчилгээ үзүүлэх эрхийг
                Санхүүгийн Зохицуулах Хорооноос хамгийн анх авсан хуулийн
                үйлчилгээ үзүүлэгч байгууллага бөгөөд мэргэжлийн хуульчдын баг
                нь оюуны өмчийн итгэмжлэгдсэн төлөөлөгчийн эрх авсан хуульчдаас
                бүрддэг.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <input type="hidden" value="" id="sqqs" />
    </div>
  );
}
