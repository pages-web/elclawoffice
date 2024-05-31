import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        display: "block",
        backgroundImage:
          'url("http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/shutterstock_363629945.jpg")',
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <h2 className="caption-title">
            {" "}
            Олон улсын хуульчдын холбооны 2018 оны шилдэг хуульч
          </h2>

          <div className="back-white">
            <p>
              Манай нөхөрлөлийн гишүүн, өмгөөлөгч Х.Баасанжаргал Олон улсын
              хуульчдын<span className="redactor-invisible-space"></span>
            </p>
            <figure>
              <Image
                alt=""
                src="http://elclawoffice.mn/media/elc/content/43527306_10213456267223329_8596360795082719232_n.jpg"
                style={{
                  width: "290px",
                  height: "387px",
                  float: "right",
                  margin: "0px 0px 10px 10px",
                }}
                data-image="au8j7ud1i9mh"
                width="290"
                height="387"
              />
            </figure>
            <p></p>
            <p>
              холбооны 2018 оны "Үнэ төлбөргүй үйлчилгээ үзүүлсэн оны шилдэг
              хуульч"{" "}
            </p>
            <p>
              хэмээх нэр хүндтэй шагналыг анх Монгол Улсаас хүртлээ. <br />
            </p>
            <p>
              <span className="redactor-invisible-space">
                Энэ жилийн IBA Pro Bono Award-д дэлхийн олон орны чадварлаг
                хуульчид өрсөлдө
              </span>
              <span className="redactor-invisible-space">
                хөөр материалаа ирүүлсэнээс сүүлийн шатанд Их Британи, Нигер,
                АНУ, Бангладеш, Монгол, Австрали, Польш гэсэн орнуудаас нийт 7
                хуульч эцсийн шатанд үлдсэнээс манай нөхөрлөлийн Партнер,
                Өмгөөлөгч Х.Баасанжаргал шалгарсан байна. Тэрээр 2016 оноос
                өвөл, хаврын цагт бага насны хүүхдээр хурдан морь унуулж
                уралдуулах тухай Засгийн газрын шийдвэрийн эсрэг олон улсын
                болон дотоодын хүүхдийн эрхийн төрийн бус байгууллагуудад хууль
                зүйн туслалцаа үзүүлэн, хамтран ажиллаж, Захиргааны хэргийн
                шүүхээс Засгийн газрын шийдвэрийг хууль бус байсан болохыг
                тогтоосон билээ. <br />
              </span>
            </p>
            <span>
              <i className="fa fa-clock-o"></i> 2018.10.09
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
