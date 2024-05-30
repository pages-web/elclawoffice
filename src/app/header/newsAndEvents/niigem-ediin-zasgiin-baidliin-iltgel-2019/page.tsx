import React from "react";

export default function page() {
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        display: "block",
        backgroundImage:
          "url(http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/shutterstock_363629945.jpg)",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <h2 className="caption-title">
            МОНГОЛ УЛСЫН НИЙГЭМ, ЭДИЙН ЗАСГИЙН БАЙДЛЫН ИЛТГЭЛ, 2019 ОНЫ
            УРЬДЧИЛСАН ГҮЙЦЭТГЭЛИЙГ ТАНИЛЦУУЛЛАА{" "}
          </h2>

          <div className="back-white">
            <p style={{ textAlign: "justify" }}>
              Монгол Улсын Үндэсний Статистикийн Хорооноос “Монгол Улсын нийгэм,
              эдийн засгийн байдлын илтгэл, 2019 оны урьдчилсан гүйцэтгэл”
              танилцуулгыг 1-р сарын 16-ны өдөр нийтэлсэн байна. Уг илтгэлд 2019
              оны эцсийн байдлаарх хүн амын амьжиргааны доод түвшин, ажилгүй
              иргэдийн тоо, үйлдвэрлэлийн осол, гадаад иргэдийн ажил эрхлэлт,
              нийгмийн даатгал, эрүүл мэнд, гэмт хэрэг, аялал жуулчлал, мөнгө
              зээл, улсын{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
              нэгдсэн төсөв, гадаад худалдаа, хэрэглээний үнийн индекс, аж
              үйлдвэр, тээвэр зэрэг мэдээллийг багтаасан байна.
              <br />
              <br />
              Илтгэлийг&nbsp;
              <a
                href="https://publicate.it/c/96071977?alt_obj=hre&amp;method=email&amp;url=http%3A%2F%2Fwww.nso.mn%2Fcontent%2F2372%23.XiRluf4zbIU"
                target="_blank"
                data-saferedirecturl="https://www.google.com/url?q=https://publicate.it/c/96071977?alt_obj%3Dhre%26method%3Demail%26url%3Dhttp%253A%252F%252Fwww.nso.mn%252Fcontent%252F2372%2523.XiRluf4zbIU&amp;source=gmail&amp;ust=1579665493182000&amp;usg=AFQjCNHwMJ3lohtWf1ZEN5PEwO9Dtc2Stw"
              >
                энд
              </a>
              &nbsp;дарж үзнэ үү.&nbsp;&nbsp;
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
