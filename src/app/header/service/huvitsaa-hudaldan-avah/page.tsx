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
          <h2 className="caption-title">
            Хувьцаа худалдан авах, нэгдэх ажиллагаа
          </h2>
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
                  <p>
                    <span style={{ fontSize: "14px" }} rel="font-size: 14px;">
                      Бид:
                    </span>
                  </p>
                  <p>
                    <span style={{ fontSize: "14px" }} rel="font-size: 14px;">
                      - Хувьцаа эзэмшигчдийн гэрээний гол нөхцөлийг тохиролцох
                      хэлэлцээр зохион байгуулах, оролцох
                    </span>
                  </p>
                  <p>
                    <span style={{ fontSize: "14px" }} rel="font-size: 14px;">
                      - Өөрчлөн байгуулах компанийн бүтцийн өөрчлөлтийн
                      төлөвлөгөө гаргах,
                    </span>
                  </p>
                  <p>
                    <span style={{ fontSize: "14px" }} rel="font-size: 14px;">
                      - Хувьцаа эзэмшигчийн болон хөрөнгө оруулалтын гэрээ,
                      дүрмийн төсөл боловсруулах,
                    </span>
                  </p>
                  <p>
                    <span style={{ fontSize: "14px" }} rel="font-size: 14px;">
                      - Удирдлага, зохион байгуулалтын бүтцийг тодорхойлох
                    </span>
                  </p>
                  <p>
                    <span style={{ fontSize: "14px" }} rel="font-size: 14px;">
                      - Хувьцаа эзэмшигчдийн хурлыг зохион байгуулах,
                      шаардлагатай баримт бичгийг боловсруулах,
                    </span>
                  </p>
                  <p>
                    <span style={{ fontSize: "14px" }} rel="font-size: 14px;">
                      - Улсын бүртгэлд өөрчлөлтийг бүртгүүлэх зэрэг ажилд
                      зөвөлгөө, мэргэжлийн туслалцаа үзүүлнэ.
                    </span>
                  </p>
                  <ul></ul>
                  <p style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: "14px" }} rel="font-size: 14px;">
                      Ингэхдээ бид үйлчлүүлэгчийн эзэмших хувьцаатай
                      холбогдуулан түүний эрх ашгийг хамгаалан, хөрөнгө
                      оруулалтын санхүү, нягтлан бодох бүртгэлд зөвлөх, татварын
                      үр дагаврыг тооцон зохистой бүтцийг тодорхойлоход байнга
                      анхааран ажилладаг.
                    </span>
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>
                      <span style={{ fontSize: "14px" }} rel="font-size: 14px;">
                        ТУРШЛАГА
                      </span>
                    </strong>
                  </p>
                  <ul>
                    <li>
                      {" "}
                      Ард санхүүгийн Нэгдэл ХК Жинс Увс ХК-тай урвуу хамаарлаар
                      нэгдэх замаар нээлттэй хувьцаат компани болох ажиллагаанд
                      Хууль зүйн дүгнэлт гаргах, нийцлийн ажил хийсэн. (2018);
                    </li>
                    <li>
                      {" "}
                      Энержи Ресурс ХХК болон түүний охин компаниудыг нэгтгэх
                      ажлыг хариуцан ажилласан.
                    </li>
                    <li>
                      Эм Эс Эм ХХК-ийн тусгаарлалттай холбогдуулан хууль зүйн
                      дүн шинжилгээ (2014)
                      <br />
                      <br />
                    </li>
                  </ul>
                  <p>
                    <span style={{ fontSize: "14px" }} rel="font-size: 14px;">
                      <br />
                    </span>
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
