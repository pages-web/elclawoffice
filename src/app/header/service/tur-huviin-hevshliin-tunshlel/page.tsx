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
          <h2 className="caption-title">Төр хувийн хэвшлийн түншлэл</h2>
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
                    <strong>Бид:</strong>
                  </p>
                  <ul>
                    <li>
                      Концессийн уралдаант шалгаруулалтад оролцоход мэргэжлийн
                      туслалцаа үзүүлэх, гэрээ байгуулах, хянах&nbsp;
                    </li>
                    <li>
                      Тендер шалгаруулалтанд оролцох, баримт материал бүрдүүлэх
                    </li>
                    <li>Концесс болон тендер шалгаруулалт зохион байгуулах</li>
                    <li>
                      Төслийн санхүүжүүлэгчид зориулж хууль зүйн дүгнэлт гаргах
                    </li>
                    <li>
                      Бүх төрлийн тусгай зөвшөөрөл авах, хугацаа сунгах зэрэг
                      аливаа бизнест төртэй харилцахад шаардлагатай мэргэжлийн
                      зөвлөгөө үзүүлдэг.
                    </li>
                  </ul>
                  <p>
                    <strong>ТУРШЛАГА</strong>
                  </p>
                  <ul>
                    <li>
                      Хатуу хучилттай авто зам болон цахилгааны станц барих дэд
                      бүтцийн концессийн төслүүдэд олон улсын санхүүжүүлэгч,
                      даатгалын компаниудад зөвлөх (2016-2017);
                    </li>
                    <li>
                      Иргэний нисэхийн ерөнхий газраас зарласан Зорчигч
                      мэдээллийн систем нэвтрүүлэх ажлын тендерт оролцогч
                      БНХАУ-ын компанид хууль зүйн зөвлөгөө, үйлчилгээ үзүүлсэн.
                      (2019)
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
