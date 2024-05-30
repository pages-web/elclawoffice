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
          <h2 className="caption-title">Татвар</h2>
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
                  <p>Бид:</p>
                  <p>
                    &nbsp; &nbsp; &nbsp;- Аж ахуйн нэгжийн орлогын албан татвар,
                  </p>
                  <p>&nbsp; &nbsp; &nbsp;- Нэмэгдсэн өртгийн албан татвар,</p>
                  <p>&nbsp; &nbsp; &nbsp;- Хувь хүний орлогын албан татвар </p>
                  <p>&nbsp; &nbsp; &nbsp;- Нийгмийн даатгалын шимтгэл</p>
                  <p>
                    &nbsp; &nbsp; &nbsp;- Татварын хяналт шалгалт, акттай
                    холбоотой татварын эрх зүйн орчны асуудлаар зөвлөгөө өгч
                    ажиллана.{" "}
                  </p>
                  <ul></ul>
                  <p style={{ textAlign: "justify" }}>
                    Үйлчлүүлэгчдэдээ зориулан боловсруулж байгаа аливаа гэрээ,
                    хэлэлцээрт орлогын албан татварыг давхардуулж ногдуулахгүй
                    байх, татвар төлөхөөс зайлсхийх явдлаас урьдчилан сэргийлэх
                    тухай гэрээг харгалзан үзэж, аль болох татварын оновчтой
                    шийдлийг гарган өгч ажилладаг нь манай үйлчилгээний нэг
                    онцлог юм.{" "}
                    <strong>
                      <br />
                    </strong>
                  </p>
                  <p>
                    <strong>ТУРШЛАГА</strong>
                  </p>
                  <ul>
                    <li>
                      Мастер Групп ХХК-ийн гүйцэтгэж байгаа барилгын төслүүдэд
                      татварын хууль тогтоомжийн хэрэглээний талаар хууль зүйн
                      зөвлөх үйлчилгээг үзүүлэн ажиллаж байна. (2016-2017)
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
