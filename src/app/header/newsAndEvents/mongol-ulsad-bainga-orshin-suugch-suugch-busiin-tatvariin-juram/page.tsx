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
            МОНГОЛ УЛСАД БАЙНГА ОРШИН СУУГЧ ТАТВАР ТӨЛӨГЧ БОЛОН ОРШИН СУУГЧ БУС
            АЛБАН ТАТВАР ТӨЛӨГЧИЙГ&nbsp; ТОДОРХОЙЛОХ, БҮРТГЭХ, БҮРТГЭЛЭЭС ХАСАХ,
            АЛБАН ТАТВАРЫН ТООЦОО ХИЙХ ЖУРАМ БАТЛАВ
          </h2>

          <div className="back-white">
            <p>
              &nbsp;Хувь хүний орлогын албан татварын тухай хуульд заасны дагуу
              албан татвар төлөгчийг Монгол Улсад байнга оршин суугч болон
              Монгол Улсад оршин суугч бус албан татвар төлөгч гэж ангилдаг.
              Монгол Улсад байнга оршин суугч албан татвар төлөгч гэж доор
              дурдсан нөхцөлийн аль нэгийг хангасан хувь хүнийг хэлнэ:
              <br />
            </p>
            <ul>
              <li>
                үргэлжилсэн 12 сарын хугацаанд нийт 183 ба түүнээс дээш хоног
                Монгол Улсад оршин суусан;
              </li>
              <li>
                албан татвар ногдох орлогын 50 ба түүнээс дээш хувийг Монгол
                Улсад олсон орлого болон Монгол Улсаас эх үүсвэртэй олсон орлого
                эзэлж байвал.
              </li>
            </ul>
            <p>
              Тэгвэл Татварын Ерөнхий Газрын Даргын 2019 оны 12-р сарын 30-ны
              өдрийн А/266 тоот Тушаалаар “Монгол Улсад байнга оршин суугч
              татвар төлөгч болон оршин суугч бус албан татвар төлөгчийг
              тодорхойлох, бүртгэх, бүртгэлээс хасах, албан татварын тооцоо хийх
              журам”-ыг баталсан байна. <br />
              <br />
              Журамтай{" "}
              <a
                dir="auto"
                href="https://www.legalinfo.mn/annex/details/10551?lawid=15013%20"
                target="_blank"
                rel="noopener"
              >
                энд
              </a>{" "}
              дарж танилцана уу.
            </p>
            <span>
              <i className="fa fa-clock-o"></i> 2020.02.04
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
