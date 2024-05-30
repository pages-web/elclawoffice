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
          <h2 className="caption-title">Хагас цагийн хуульч</h2>
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
                    Манай нөхөрлөл нь үйлчлүүлэгч байгууллага дахь хуульчийн
                    хэрэгцээ шаардлагаас хамааруулан 7 хоногт 24 цаг хүртэлх
                    хугацаагаар 1-2 хуульчийг үйлчлүүлэгчийн ажлын байранд
                    ажиллуулах “<em>Хагас цагийн хуульч</em>” буюу “Secondment”
                    үйлчилгээг хэрэгжүүлж эхлээд байна.{" "}
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Энэ үйчилгээг авснаар хуульчид маань үйлчлүүлэгчид ойртон
                    түүний хэрэгцээ, шаардлагад түргэн шуурхай, мэргэжлийн
                    үйлчилгээг үзүүлэх бөгөөд зөвхөн тухайн очиж ажиллах
                    хуульчийн ур чадвар, туршлагаас гадна манай фирмийн бусад
                    хуульчдын үйлчилгээ, хүн хүчийг давхар ашиглаж болох давуу
                    талтай.
                    <br />
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
