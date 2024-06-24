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
            МОНГОЛ УЛСЫН НЭГДСЭН ТӨСВИЙН 2019 ОНЫ УРЬДЧИЛСАН ГҮЙЦЭТГЭЛИЙН ТОВЧ
            ТАНИЛЦУУЛГА
          </h2>

          <div className="back-white">
            <p>
              Сангийн яамнаас гаргасан “Монгол Улсын нэгдсэн төсвийн 2019 оны
              урьдчилсан гүйцэтгэлийн товч танилцуулга”-ыг{" "}
              <a
                dir="auto"
                href="https://drive.google.com/file/d/1uDG2V5AbEdbdEvB4y0XCwGBbEeNsKWxP/view?usp=sharing"
                target="_blank"
                rel="noopener"
              >
                энд
              </a>{" "}
              дарж үзнэ үү.&nbsp;
            </p>
            <span>
              <i className="fa fa-clock-o"></i> 2020.02.12
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
