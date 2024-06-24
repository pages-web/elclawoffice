import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        backgroundImage:
          'url("http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/shutterstock_363629945.jpg")',
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "block",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <h2 className="caption-title">Хууль зүйн мэдээлэл</h2>

          <div className="row">
            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "313px" }}>
                <h4 className="title">
                  <Link href="/header/newsAndEvents/covid-ba-zeeliin-hariltsaa">
                    КОВИД 19 БА ЗЭЭЛИЙН ХАРИЛЦАА
                  </Link>
                </h4>
                <div className="desc">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Цар тахлын үед зээлийн эргэн төлөлтийг хойшлуулах,
                  бууруулахтай холбоотой гаргаж байгаа шийдвэрийн тухай
                  2020.03.18-ны өдөр Монгол Банкнаас 2020.01.31-2020.07.31-ний
                  өдөр хүртэл хугацаанд зээлийн эргэн төлөлтөнд учирч байгаа
                  хүндрэлтэй нөхцөл байдлыг харгалзан ипотек, ...
                </div>
                <Link
                  href="/header/newsAndEvents/covid-ba-zeeliin-hariltsaa"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </Link>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "313px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/covid-ba-tureesiin-hariltsaa">
                    КОВИД 19 БА ТҮРЭЭСИЙН ХАРИЛЦАА
                  </a>
                </h4>
                <div className="desc">
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...
                </div>
                <a
                  href="/header/newsAndEvents/covid-ba-tureesiin-hariltsaa"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "313px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/covid-ba-erh-zuin-hariltsaa">
                    КОВИД 19 БА КОМПАНИЙН ЭРХ ЗҮЙН ХАРИЛЦАА
                  </a>
                </h4>
                <div className="desc">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Хувьцаа эзэмшигчдийн хурал болон Төлөөлөн удирдах зөвлөлийн
                  ээлжит болон ээлжит бус хурлуудыг цар тахлын үед хэрхэн зохион
                  байгуулах боломжтой вэ? Цар тахлын улмаас олон хүн нэг дор
                  цуглахыг хориглосон шийдвэрүүдтэй холбоотойгоор ...
                </div>
                <a
                  href="/header/newsAndEvents/covid-ba-erh-zuin-hariltsaa"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "329px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/covid-ba-hudulmuriin-hariltsaand-uzuuleh-nuluu">
                    КОВИД 19 БА ХӨДӨЛМӨРИЙН ХАРИЛЦААНД ҮЗҮҮЛЭХ НӨЛӨӨЛӨЛ
                  </a>
                </h4>
                <div className="desc">
                  Ажил олгогчид нь хууль тогтоомжоор үүрэг болгосон эсэхээс үл
                  хамааран ажилтнууд, ажиллагсдынхаа эрүүл, аюулгүй байдлыг
                  хамгаалах, ажлын байрыг хамгаалах, ажилтнуудад учруулах нөлөө
                  хамгийн бага байхаар арга хэмжээ авч хэрэгжүүлэн хүнд нөхцөл
                  байдлыг ...
                </div>
                <a
                  href="/header/newsAndEvents/covid-ba-hudulmuriin-hariltsaand-uzuuleh-nuluu"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "329px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/covid-ba-geree-heltseld-uzuuleh-nuluu">
                    КОВИД 19 ба гэрээ, хэлцэлд үзүүлэх нөлөөлөл
                  </a>
                </h4>
                <div className="desc">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Олон улсын болон дотоодын
                  тээврийн хэрэгслийн хөдөлгөөний хязгаарлалт, бусад
                  хязгаарлалтын арга хэмжээний улмаас та гэрээгээр хүлээсэн
                  үүргээ биелүүлж чадахгүйд хүрч байна уу? &nbsp;&nbsp;&nbsp;
                  Дэлхий нийтийн хэмжээнд цар тахал гэж зарлагдаад буй ...
                </div>
                <a
                  href="/header/newsAndEvents/covid-ba-geree-heltseld-uzuuleh-nuluu"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "329px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/undurjuulsen-belen-baidal">
                    Өндөржүүлсэн бэлэн байдал ба гомдол гаргах эрх
                  </a>
                </h4>
                <div className="desc">
                  &nbsp;&nbsp; Монгол Улсын Засгийн газар шинэ коронавирусийн
                  халдвараас урьдчилан сэргийлэх, эрсдэлийг бууруулах зорилгоор
                  улсын хэмжээнд засаг захиргаа, нутаг дэвсгэрийн нэгж, төрийн
                  болон нутгийн захиргааны байгууллага, хуулийн этгээдийг
                  2020.02.13-ны өдрөөс 2020.06.30-ны өдрийг дуустал ...
                </div>
                <a
                  href="/header/newsAndEvents/undurjuulsen-belen-baidal"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "379px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/ulsiin-negdsen-tusuv-2019">
                    МОНГОЛ УЛСЫН НЭГДСЭН ТӨСВИЙН 2019 ОНЫ УРЬДЧИЛСАН
                    ГҮЙЦЭТГЭЛИЙН ТОВЧ ТАНИЛЦУУЛГА
                  </a>
                </h4>
                <div className="desc">
                  Сангийн яамнаас гаргасан “Монгол Улсын нэгдсэн төсвийн 2019
                  оны урьдчилсан гүйцэтгэлийн товч танилцуулга”-ыг энд дарж үзнэ
                  үү.&nbsp;
                </div>
                <a
                  href="/header/newsAndEvents/ulsiin-negdsen-tusuv-2019"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "379px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/2020-onii-havriin-chuulganaar-heltseh-asuudluud">
                    УЛСЫН ИХ ХУРЛЫН 2020 ОНЫ ХАВРЫН ЭЭЛЖИТ ЧУУЛГАНААР ХЭЛЭЛЦЭХ
                    АСУУДЛУУД&nbsp;
                  </a>
                </h4>
                <div className="desc">
                  УИХ-ын 2020 оны хаврын ээлжит чуулганаар дараах асуудлуудыг
                  хэлэлцэхээр холбогдох тогтоолыг баталсан байна. Үүнд: Монгол
                  Улсын нэгдсэн төсвийн 2021 оны төсвийн хүрээний мэдэгдэл,
                  2022-2023 оны төсвийн төсөөллийн тухай хуулийн төсөл; “Монгол
                  Улсын ...
                </div>
                <a
                  href="/header/newsAndEvents/2020-onii-havriin-chuulganaar-heltseh-asuudluud"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "379px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/shine-mungun-temdegtuudiig-guilgeend-gargana">
                    ШИНЭЧИЛСЭН ХАМГААЛАЛТЫН ЭЛЕМЕНТ БҮХИЙ МӨНГӨН ТЭМДЭГТҮҮДИЙГ
                    ГҮЙЛГЭЭНД ГАРГАЖ, 2006 ОНЫ 20,000 ТӨГРӨГИЙН ДЭВСГЭРТИЙГ
                    ГҮЙЛГЭЭНЭЭС ТАТНА
                  </a>
                </h4>
                <div className="desc">
                  Монголбанк нөөцийг нь дахин бүрдүүлэх шаардлагатай болсон 50,
                  20000 төгрөгийн дэвсгэртүүдэд орчин үеийн технологи бүхий
                  хамгаалалтын шинэ элементүүдийг оруулан шинэчлэн сайжруулж,
                  гүйлгээнд гаргахаар боллоо.Шинэчилсэн хамгаалалтын элементүүд
                  нь иргэд энгийн нүдээр хараад хуурамч ...
                </div>
                <a
                  href="/header/newsAndEvents/shine-mungun-temdegtuudiig-guilgeend-gargana"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "359px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/noogdol-ashigiig-taraah">
                    НОГДОЛ АШГИЙГ ТАРААХ АЖИЛЛАГААГ НАРИЙВЧЛАН ТОГТООЛОО
                  </a>
                </h4>
                <div className="desc">
                  Санхүүгийн зохицуулах хорооны 2020 оны нэгдүгээр сарын 29-ний
                  өдрийн хуралдаанаар хувьцаат компаниудын ногдол ашиг тараах
                  ажиллагааг нарийвчлан тогтоох асуудлыг хэлэлцэж, жижиг хувьцаа
                  эзэмшигчдийн эрх ашгийг хамгаалах зорилгоор хувьцаат
                  компаниудын ногдол ашгийг зөвхөн ...
                </div>
                <a
                  href="/header/newsAndEvents/noogdol-ashigiig-taraah"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "359px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/songuuliin-udriig-togtoov">
                    УИХ-ЫН ЭЭЛЖИТ СОНГУУЛИЙН ӨДРИЙГ 2020 ОНЫ 6-Р САРЫН 24-НИЙ
                    ӨДӨР БАЙХААР ТОГТОВ
                  </a>
                </h4>
                <div className="desc">
                  УИХ-аас 2019 оны 12 дугаар сарын 20-ны өдөр баталсан Монгол
                  Улсын Их Хурлын сонгуулийн тухай хуульд&nbsp;“УИХ ээлжит
                  сонгуулийг сонгуулийн жилийн 02 дугаар сарын 01-ний өдрөөс
                  өмнө товлон зарлаж, санал авах өдрийг тогтооно”,&nbsp;“ээлжит
                  ...
                </div>
                <a
                  href="/header/newsAndEvents/songuuliin-udriig-togtoov"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "359px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/AANegjiin-tatvariin-juram">
                    АЖ АХУЙН НЭГЖИЙН ОРЛОГЫН АЛБАН ТАТВАРЫН ТАЙЛАНГААР ГАРСАН
                    АЛДАГДЛЫГ ИРЭЭДҮЙД ШИЛЖҮҮЛЭН ТООЦОХ, БАТАЛГААЖУУЛАХ ЖУРАМ
                    БАТАЛЛАА&nbsp;
                  </a>
                </h4>
                <div className="desc">
                  Аж ахуй нэгжийн орлогын албан татварын тухай хуулийн дагуу
                  албан татвар ногдох нийт орлогоос тус хуульд заасан нөхцөл,
                  шаардлагыг хангасан зардлыг хасаж, зардлын илүү гарсан хэсгийг
                  татварын тайлангаар гарсан алдагдал гэнэ. Харьяалах ...
                </div>
                <a
                  href="/header/newsAndEvents/AANegjiin-tatvariin-juram"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "355px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/HHunii-orlogiin-tatvariin-juram">
                    ХУВЬ ХҮНИЙ ОРЛОГЫН АЛБАН ТАТВАРЫН ХӨНГӨЛӨЛТ, ЧӨЛӨӨЛӨЛТ
                    ЭДЛҮҮЛЭХ ЖУРАМ БАТЛАВ
                  </a>
                </h4>
                <div className="desc">
                  Хувь хүний орлогын албан татварын тухай хуулийн 23-р зүйлд
                  албан татвар төлөгчид эдлүүлэх хөнгөлөлтүүдийг тодорхойлж
                  заасан.&nbsp;Улмаар Татварын Ерөнхий Газрын Даргын 2019 оны
                  12-р сарын 30-ны өдрийн А/261 тоот Тушаалаар “Хувь хүний
                  орлогын ...
                </div>
                <a
                  href="/header/newsAndEvents/HHunii-orlogiin-tatvariin-juram"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "355px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/mongol-ulsad-bainga-orshin-suugch-suugch-busiin-tatvariin-juram">
                    МОНГОЛ УЛСАД БАЙНГА ОРШИН СУУГЧ ТАТВАР ТӨЛӨГЧ БОЛОН ОРШИН
                    СУУГЧ БУС АЛБАН ТАТВАР ТӨЛӨГЧИЙГ&nbsp; ТОДОРХОЙЛОХ, БҮРТГЭХ,
                    БҮРТГЭЛЭЭС ХАСАХ, АЛБАН ТАТВАРЫН ТООЦОО ХИЙХ ЖУРАМ БАТЛАВ
                  </a>
                </h4>
                <div className="desc">
                  &nbsp;Хувь хүний орлогын албан татварын тухай хуульд заасны
                  дагуу албан татвар төлөгчийг Монгол Улсад байнга оршин суугч
                  болон Монгол Улсад оршин суугч бус албан татвар төлөгч гэж
                  ангилдаг. Монгол Улсад байнга оршин ...
                </div>
                <a
                  href="/header/newsAndEvents/mongol-ulsad-bainga-orshin-suugch-suugch-busiin-tatvariin-juram"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "355px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/niigem-ediin-zasgiin-baidliin-iltgel-2019">
                    МОНГОЛ УЛСЫН НИЙГЭМ, ЭДИЙН ЗАСГИЙН БАЙДЛЫН ИЛТГЭЛ, 2019 ОНЫ
                    УРЬДЧИЛСАН ГҮЙЦЭТГЭЛИЙГ ТАНИЛЦУУЛЛАА{" "}
                  </a>
                </h4>
                <div className="desc">
                  Монгол Улсын Үндэсний Статистикийн Хорооноос “Монгол Улсын
                  нийгэм, эдийн засгийн байдлын илтгэл, 2019 оны урьдчилсан
                  гүйцэтгэл” танилцуулгыг 1-р сарын 16-ны өдөр нийтэлсэн байна.
                  Уг илтгэлд 2019 оны эцсийн байдлаарх хүн амын амьжиргааны ...
                </div>
                <a
                  href="/header/newsAndEvents/niigem-ediin-zasgiin-baidliin-iltgel-2019"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "326px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/il-uurhain-ayulgui-baidliin-durem">
                    ИЛ УУРХАЙН АЮУЛГҮЙ БАЙДЛЫН ДҮРМИЙГ ШИНЭЧЛЭН БАТАЛЛАА
                  </a>
                </h4>
                <div className="desc">
                  Уул уурхай, хүнд үйлдвэрийн сайд болон Хөдөлмөр, нийгмийн
                  хамгааллын сайдын 2019 оны 12-р сарын 11-ний өдрийн A/231
                  A/368 тоот хамтарсан тушаалаар Ил уурхайн аюулгүй байдлын
                  дүрмийг шинэчлэн баталсан байна. Уг дүрмийг Монгол ...
                </div>
                <a
                  href="/header/newsAndEvents/il-uurhain-ayulgui-baidliin-durem"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "326px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/daatgagch-turiin-baiguullagatai-hiisen-gereeg-medegdeh">
                    ДААТГАГЧ ТӨРИЙН БАЙГУУЛЛАГАТАЙ ХИЙСЭН ГЭРЭЭГ ИЛ ТОД МЭДЭЭЛЭХ
                    ҮҮРЭГТЭЙ
                  </a>
                </h4>
                <div className="desc">
                  Санхүүгийн зохицуулах хорооны 2019 оны 02 дугаар тогтоолоор
                  баталсан “Даатгалын багц дүрэм”-ийн 5.1.17-д&nbsp; “Даатгагч
                  нь төрийн байгууллага, төрийн болон орон нутгийн өмчийн
                  оролцоотой компани, хувьцаат компани, гадаадын хөрөнгө
                  оруулалттай компанитай гэрээ байгуулсных ...
                </div>
                <a
                  href="/header/newsAndEvents/daatgagch-turiin-baiguullagatai-hiisen-gereeg-medegdeh"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "326px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/oyunii-umchiin-huuliin-tusul">
                    ОЮУНЫ ӨМЧИЙГ ЭДИЙН ЗАСГИЙН ЭРГЭЛТЭД ОРУУЛАХ ХУУЛИЙН ТӨСЛИЙГ
                    ХЭЛЭЛЦЭЖ БАЙНА
                  </a>
                </h4>
                <div className="desc">
                  УИХ-ын Хууль зүйн байнгын хорооны 1-р сарын 21-ний өдрийн
                  хуралдаанаар Оюуны өмчийг эдийн засгийн эргэлтэд оруулах тухай
                  хуулийн төслийн эцсийн хэлэлцүүлгийг хийхээр товлоод байна.
                  Тус хуулийн төслийн талаар товч танилцуулахад тус хуулийн ...
                </div>
                <a
                  href="/header/newsAndEvents/oyunii-umchiin-huuliin-tusul"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "289px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/zeeliin-heleltseer-batlah-huuliin-taniltsuulga">
                    Зээлийн хэлэлцээр соёрхон батлах тухай хуулийн танилцуулга
                  </a>
                </h4>
                <div className="desc">
                  Төсөв, Эдийн засгийн болон Аюулгүй байдал, гадаад бодлогын
                  байнгын хороодын хуралдаанаар тус тус урьдчилан зөвшилцөж,
                  Монгол Улсын Засгийн газраас 2019 оны 06 дугаар сарын 14-ний
                  өдөр өргөн мэдүүлсэн Уур амьсгалын ногоон сангийн ...
                </div>
                <a
                  href="/header/newsAndEvents/zeeliin-heleltseer-batlah-huuliin-taniltsuulga"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "289px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/PATP-aas-mongol-ulsad-ugsun-uureg">
                    ФАТФ-ААС МОНГОЛ УЛСАД ӨГСӨН ҮҮРЭГ ДААЛГАВАР
                  </a>
                </h4>
                <div className="desc">
                  Мөнгө угаахтай тэмцэх санхүүгийн хориг арга хэмжээ авах
                  байгууллага /ФАТФ/-аас 2019 оны 10 дугаар сарын 18-ны өдөр
                  гаргасан мэдэгдэлдээ Монгол Улсыг хяналтын буюу “саарал
                  жагсаалт”-д оруулж, тодорхой үйл ажиллагааны төлөвлөгөө
                  хэрэгжүүлэх үүрэг ...
                </div>
                <a
                  href="/header/newsAndEvents/PATP-aas-mongol-ulsad-ugsun-uureg"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "289px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/HK-iud-tailangaa-taniltsuulj-ehellee">
                    Бүртгэлтэй ХК-иуд тайлангаа танилцуулж эхэллээ
                  </a>
                </h4>
                <div className="desc">
                  Монголын Хөрөнгийн биржид бүртгэлтэй ХК-иуд өнөөдрөөс эхлэн
                  хагас жилийн санхүү, үйл ажиллагааны тайлангаа танилцуулах гэж
                  байна. Тухайлбал, өнөөдөр “Монгол базальт” болон “АПУ” ХК
                  танилцуулах бол наймдугаар сарын 8-нд “Ард санхүүгийн нэгдэл”,
                  болон ...
                </div>
                <a
                  href="/header/newsAndEvents/HK-iud-tailangaa-taniltsuulj-ehellee"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "326px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/tender-shalgaruulaltiin-juram">
                    Тендер шалгаруулалтын материалыг тендерт оролцогчдод ил
                    болгох журам батлагджээ
                  </a>
                </h4>
                <div className="desc">
                  Тендерт оролцогчдод тендер шалгаруулалтын материалыг ил болгож
                  захиалагч тендер шалгаруулалтыг хуулийн дагуу зохион
                  байгуулсан эсэхэд хяналт тавих зорилготой “Тендер
                  шалгаруулалтын материалыг тухайн тендерт оролцогчдод ил болгох
                  журам”-ыг Сангийн сайдын 2019 оны 6 ...
                </div>
                <a
                  href="/header/newsAndEvents/tender-shalgaruulaltiin-juram"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "326px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/gadaadiin-hurungu-oruulaltai-companiudiin-anhaarald">
                    Гадаадын хөрөнгө оруулалттай компаниуд болон хөрөнгө
                    оруулагчдын анхааралд{" "}
                  </a>
                </h4>
                <div className="desc">
                  Гадаадын хөрөнгө оруулагчдад үзүүлж буй төрийн үйлчилгээг нэг
                  дор төвлөрүүлж, зарим үйлчилгээний шийдвэрлэх хугацааг
                  багасгаж, хөрөнгө оруулагчдад тулгардаг хүндрэлийг арилгаж,
                  илүү таатай орчин нөхцөлийг бүрдүүлэх зорилгоор гадаадын
                  хөрөнгө оруулалттай аж ахуйн нэгжтэй ...
                </div>
                <a
                  href="/header/newsAndEvents/gadaadiin-hurungu-oruulaltai-companiudiin-anhaarald"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "326px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/2018-onii-olon-ulsiin-shildeg-huulich">
                    {" "}
                    Олон улсын хуульчдын холбооны 2018 оны шилдэг хуульч
                  </a>
                </h4>
                <div className="desc">
                  Манай нөхөрлөлийн гишүүн, өмгөөлөгч Х.Баасанжаргал Олон улсын
                  хуульчдын холбооны 2018 оны &quot;Үнэ төлбөргүй үйлчилгээ
                  үзүүлсэн оны шилдэг хуульч&quot; хэмээх нэр хүндтэй шагналыг
                  анх Монгол Улсаас хүртлээ. Энэ жилийн IBA Pro Bono Award-д ...
                </div>
                <a
                  href="/header/newsAndEvents/2018-onii-olon-ulsiin-shildeg-huulich"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "326px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/shildeg-pro-bono-huulich">
                    “ШИЛДЭГ ПРО БОНО ХУУЛЬЧ” НОМИНАЦИД СҮҮЛИЙН ШАТАНД ШАЛГАРЛАА
                  </a>
                </h4>
                <div className="desc">
                  Дэлхийн хуульчдын хамгийн том нэгдэл болох International Bar
                  Association буюу Олон Улсын Барын Холбооноос жил бүр Олон
                  Улсын Хуульчдын Нэгдсэн Чуулган (IBA Annual Conference)-г
                  зохион байгуулдаг уламжлалтай бөгөөд манай нөхөрлөлийн гишүүд
                  болон ...
                </div>
                <a
                  href="/header/newsAndEvents/shildeg-pro-bono-huulich"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "326px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/irgediin-huuli-yosnii-erh-ashig-sonirhliig-hamgaalsan-ni">
                    {" "}
                    1400 гаруй иргэдийн хууль ёсны эрх, ашиг сонирхлыг
                    хамгаалсан нь
                  </a>
                </h4>
                <div className="desc">
                  1940-оод онд баригдсан 100 айлын 2-3 давхар нийтийн цагаан
                  байрнуудыг хүмүүс мэдэх байх. Энэ байрнуудыг буулган шинээр
                  барих дахин төлөвлөлт хийх эрхийг 2010 онд Нийслэлийн Засаг
                  Дарга Г компанид олгосон. Г компани ...
                </div>
                <a
                  href="/header/newsAndEvents/irgediin-huuli-yosnii-erh-ashig-sonirhliig-hamgaalsan-ni"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "326px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/hurdan-mori-unaach-huuhduud">
                    Өмгөөллийн “ИЭлСи” ХХН нь хурдан морь унаач хүүхдүүдийн эрх
                    ашгийг хамгаалсан нь
                  </a>
                </h4>
                <div className="desc">
                  Засгийн газар өвөл хаврын уралдаануудыг дэг журамд оруулж,
                  хяналттай болгох зорилгоор2008 оноос эхлэн хүйтний улиралд
                  болох хурдан морины уралдааныг зохион байгуулах хугацаа,
                  хувиарыг товлосон тогтоол гаргаж эхэлсэн. Гэвч хүүхэд мориноос
                  унаж гэмтэх, ...
                </div>
                <a
                  href="/header/newsAndEvents/hurdan-mori-unaach-huuhduud"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "326px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/tavantolgoi-huvitsaa-ezemshigchdiin-erh">
                    “Эрдэнэс-Тавантолгой” ХК-н хувьцаа эзэмшигчдийн эрхийг
                    баталгаажуулах ажиллагаа
                  </a>
                </h4>
                <div className="desc">
                  “Эрдэнэс-Тавантолгой” ХК-н хувьцаа эзэмшигчдийн эрхийг
                  баталгаажуулах ажиллагаа Монгол Улсын Засгийн газрын 2010 оны
                  10 дугаар сарын 20-ны өдрийн 272 дугаартай тогтоолоор
                  ““Эрдэнэс-Тавантолгой” ХК-ийн хувьцааны 10 хувийг Монгол Улсын
                  иргэдэд эзэмшүүлэх, 10 хувийг ...
                </div>
                <a
                  href="/header/newsAndEvents/tavantolgoi-huvitsaa-ezemshigchdiin-erh"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "326px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/tavantolgoi-huvitsaa-ezemshigchid">
                    “Эрдэнэс-Тавантолгой” ХК-ийн хувьцаа эзэмшигчдийн анхааралд{" "}
                  </a>
                </h4>
                <div className="desc">
                  “Эрдэнэс-Тавантолгой” ХК 2017 оныг хүртэл хувьцаа эзэмшигчдийн
                  ээлжит хуралд жижиг хувьцаа эзэмшигч иргэд болон үндэсний аж
                  ахуйн нэгжүүд нь оролцох эрхгүй байсан. Тодруулбал,
                  “Эрдэнэс-Тавантолгол” ХК нь хувьцаа эзэмшигчдийн ээлжит хурлыг
                  зарлахдаа “Эрдэнэс-Тавантолгой” ...
                </div>
                <a
                  href="/header/newsAndEvents/tavantolgoi-huvitsaa-ezemshigchid"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{ height: "326px" }}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/import-exportiin-litsenz-olgoh-jurmiin-tusul/">
                    Импорт, экспортын лиценз олгох журмын төсөл
                  </a>
                </h4>
                <div className="desc">
                  Импорт, экспортын лиценз олгох журам Эрүүл мэндийн сайдын 2011
                  оны 343 тоот тушаалаар батлагдсан “Импорт, экспортын лиценз
                  олгох журам”-д нэмэлт өөрчлөлт оруулах журмын төсөлд холбогдох
                  саналаа Эрүүл мэндийн хөгжлийн төвийн эмийн зохицуулалтын ...
                </div>
                <a
                  href="/header/newsAndEvents/import-exportiin-litsenz-olgoh-jurmiin-tusul/"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-4 mheight">
              <div className="cat-list back-white" style={{}}>
                <h4 className="title">
                  <a href="/header/newsAndEvents/deed-shuuhiin-zuvlumj">
                    {" "}
                    МОНГОЛ УЛСЫН ДЭЭД ШҮҮХИЙН ЗӨВЛӨМЖ
                  </a>
                </h4>
                <div className="desc">
                  МОНГОЛ УЛСЫН ДЭЭД ШҮҮХЭЭС Анхан шатны шүүх хэрэг, маргааныг
                  хамтран шийдвэрлэхдээ иргэдийн төлөөлөгчийг оролцуулах,
                  Хариуцагчийг оршин суугаа хаяг тодорхойгүй, Хариуцагчийг эрэн
                  сурвалжлуулах болон Шүүхийн шийдвэр хүчинтэй болох, хүчин
                  төгөлдөр болох талаар зөвлөмж ...
                </div>
                <a
                  href="/header/newsAndEvents/deed-shuuhiin-zuvlumj"
                  className="btn btn-more"
                >
                  Дэлгэрэнгүй
                </a>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </section>
      <input type="hidden" value="" id="sqqs" />
    </div>
  );
}
