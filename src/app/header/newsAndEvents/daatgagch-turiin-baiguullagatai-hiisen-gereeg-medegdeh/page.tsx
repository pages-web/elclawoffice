import React from "react";

export default function page() {
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        display: "block",
        backgroundImage:
          "url(/image/huudasnii_background-corporate-shutterstock_363629945.png)",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <h2 className="caption-title">
            ДААТГАГЧ ТӨРИЙН БАЙГУУЛЛАГАТАЙ ХИЙСЭН ГЭРЭЭГ ИЛ ТОД МЭДЭЭЛЭХ
            ҮҮРЭГТЭЙ
          </h2>

          <div className="back-white">
            <p style={{ textAlign: "justify" }}>
              Санхүүгийн зохицуулах хорооны 2019 оны 02 дугаар тогтоолоор
              баталсан “Даатгалын багц дүрэм”-ийн 5.1.17-д&nbsp; “Даатгагч нь
              төрийн байгууллага, төрийн болон орон нутгийн өмчийн оролцоотой
              компани, хувьцаат компани, гадаадын хөрөнгө оруулалттай компанитай
              гэрээ байгуулсных нь төлөө даатгалын төлөөлөгчид олгосон төлбөр,
              хөлс, даатгуулагч, даатгалын гэрээний талаарх мэдээллийг улирал
              бүр өөрийн цахим хуудсанд олон нийтэд ил тод зарлан мэдээлнэ” гэж
              заасан&nbsp; тул даатгалын компаниуд дээрх шаардлагыг хэрэгжүүлж
              ажиллах үүрэгтэй болно.
            </p>
            <p style={{ textAlign: "justify" }}>
              Иргэд, байгууллага, даатгуулагч нар даатгагчийн гадаадын хөрөнгө
              оруулалттай болон төрийн өмчит байгууллагатай хийсэн гэрээний
              мэдээллийг тухайн компанийн цахим хуудаснаас үзэх боломжтой юм.
              <br />
              <br />
              Эх сурвалж: Санхүүгийн Зохицуулах Хороо
            </p>
            <span>
              <i className="fa fa-clock-o"></i> 2020.01.21
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
