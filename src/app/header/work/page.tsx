"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function page() {
  const [showModal145, setShowModal145] = useState(false);

  const handleClose145 = () => setShowModal145(false);
  const handleShow145 = () => setShowModal145(true);

  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        backgroundImage:
          'url("http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/O9VV030.jpg")',
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "block",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <div className="back">
            <ul
              className="row article-list project-list nw-project-list"
              id="owl-work"
            >
              <li className="col-md-4">
                <div
                  className="item back-white"
                  onClick={handleShow145}
                  style={{ cursor: "pointer", minHeight: 416 }}
                  data-toggle="modal"
                  data-target="#myModal145"
                >
                  {/* <Link
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#myModal145"
                  > */}
                  <h2>
                    Хонг Конгийн Хөрөнгийн Биржид Бонд гаргах ажил (2010-2014)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p />
                    <p>
                      Монголиан Майнинг Корпорацийн дотоодын зөвлөхөөр
                      ажиллаж,&nbsp;700 сая ам.долларын IPO болон 600 сая
                      ам.долларын Бондыг Хонконгын хөрөнгийн бирж дээр 2010 онд
                      анхдагч хувьцаа, 2012 он болон 2014 онд өрийн бичиг шинээр
                      гаргаж, хөрөнгө босгох ажиллагаанд тус тус оролоцож, эрх
                      зүйн дүн шинжилгээ хийж хамтран ажилласан.{" "}
                    </p>
                  </div>
                  {/* </Link> */}
                </div>
              </li>
              <li className="col-md-4">
                <div className="item back-white" style={{ minHeight: 416 }}>
                  <Link
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#myModal143"
                  >
                    <h2>
                      Монгол Улсын Засгийн Газрын эсрэг арбитрын маргаан (2012
                      оны 10-р сар)
                    </h2>
                    <span className="line" />
                    <div className="desc">
                      <p>
                        Хан Ресурс ИНК, Хан Ресурс Би Ви болон Төв Азийн Уран
                        Холдинг Компани Эл Ти Ди нарын нэхэмжлэлтэй Монгол Улсын
                        Засгийн газарт холбогдох арбитрын хэрэгт тус тус
                        Шинжээчийн дүгнэлт гаргасан.
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="col-md-4">
                <div className="item back-white" style={{ minHeight: 416 }}>
                  <Link
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#myModal144"
                  >
                    <h2>Барааны тэмдгийн бүртгэлийн ажил (2008-2019)</h2>
                    <span className="line" />
                    <div className="desc">
                      <p />
                      <p>
                        “GRANDKHAAN” (олон улсын бүртгэл), “CENTRAL TOWER”,
                        “MexiKhan”, “CODE Pâtisserie &amp; Plus”, “ХООЛОНДОО”,
                        “Mongolian academy of law”, “УБ СОНГДО ЭМНЭЛЭГ”,
                        “МонГени”, “MODERN NOMADS”, “NOMAD LEGENDS”, “Double
                        Shot”, “CROCUS Event Hall”, “Silk Road Bazaar”,
                        “TRANSWEST MONGOLIA”, “ҮЗЭЛ БОДЛЫН ЗӨРӨГ”, “Coffee with
                        Sugar”, “CHEESE REPUBLIC”, “Био Иод – Урт насал Удаан
                        жарга”, “VANSEMBERUU”, “KOMATSU”, “Bulgogi Brothers”
                        зэрэг барааны тэмдгийг тус тус бүртгүүлсэн.
                      </p>
                      <p />
                      <p />
                    </div>
                  </Link>
                </div>
              </li>
              <li className="col-md-4">
                <div className="item back-white" style={{ minHeight: 320 }}>
                  <Link
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#myModal141"
                  >
                    <h2>
                      Австралийн хөрөнгийн бирж дээр IPO гаргах ажил (2013 оны 7
                      сар)
                    </h2>
                    <span className="line" />
                    <div className="desc">
                      <p>
                        Харанга Ресурс компанийг Австралийн Хөрөнгийн Бирж дээр
                        анхдагч хувьцаагаа амжилттай гаргахад эрх зүйн дүн
                        шинжилгээ хийж, дотоодын хуулийн зөвлөхөөр ажилласан.
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="col-md-4">
                <div className="item back-white" style={{ minHeight: 320 }}>
                  <Link
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#myModal142"
                  >
                    <h2>
                      Даатгалын компаниудыг нэгтгэх ажил (2012 оны 9-р сар)
                    </h2>
                    <span className="line" />
                    <div className="desc">
                      <p>
                        2011 оны 1 дүгээр улиралд Ард Даатгал болон Гранд
                        Даатгалын хувь нийлүүлэгчид тус компаниудыг нэгтгэх
                        шийдвэрийг гаргаснаар Монголын даатгалын зах зээл дээр
                        бий болсон даатгалын компаниудын&nbsp;анхны нэгдэл болж,
                        өрсөлдөөны зөв орчин бүрдүүлэх олон зөв хандлага,
                        жишгийг зах зээлд бий болгосон билээ.
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="col-md-4">
                <div className="item back-white" style={{ minHeight: 320 }}>
                  <Link
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#myModal139"
                  >
                    <h2>
                      Концессын гэрээтэй холбогдох ажиллагаа (2016-2018 он
                      хүртэл)
                    </h2>
                    <span className="line" />
                    <div className="desc">
                      <p>
                        Өмнийн говьд нийт 110км өндөр хүчдэлийн дамжуулах шугам
                        барих 110 сая ам.долларын үнийн дүн бүхий концессын
                        гэрээг байгууллахад зөвлөж, улмаар уг гэрээний дагуу
                        үйлчлүүлэгчийн эрх ашгийг амжилттай хамгаалж 53 тэрбум
                        төгрөгний төлбөрийг шүүхээр нэхэмжилж хариуцагчаас
                        гаргуулсан.{" "}
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="col-md-4">
                <div className="item back-white" style={{ minHeight: 320 }}>
                  <Link
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#myModal138"
                  >
                    <h2>
                      Татварын үр дагаварын талаар хууль зүйн дүгнэлт
                      боловсруулсан (2018)
                    </h2>
                    <span className="line" />
                    <div className="desc">
                      <p>
                        “У” ХНН болон ОХУ-ын “Э” ХК нарын хооронд байгуулсан
                        гэрээний хэрэгжилт, компани эсхүл төлөөний газар
                        байгуулах, эсхүл гэрээний үүргийг гуравдагч этгээдэд
                        шилжүүлэх асуудал, эдгээр байгууллагыг бүртгүүлэх журам,
                        холбогдох татварын үр дагаварын талаар хууль зүйн
                        дүгнэлт боловсруулсан (2018);
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="col-md-4">
                <div className="item back-white" style={{ minHeight: 320 }}>
                  <Link
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#myModal137"
                  >
                    <h2>
                      SMBC-ийн төлөөлөгчийн газрыг үүсгэн байгуулах ажил (2013
                      оны 10-р сар)
                    </h2>
                    <span className="line" />
                    <div className="desc">
                      <p>
                        SMBC банкны хувьд 2001 онд Япон улсын томоохон хоёр
                        банкийг нэгтгэн байгуулсан бөгөөд 20 гаруй улсад өөрийн
                        салбар, төлөөлөгчийн газрыг нээн, үйл ажиллагаагаа
                        явуулж байгаа дэлхийн хэмжээний 20 том банкны нэг юм.{" "}
                        <br />
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="col-md-4">
                <div className="item back-white" style={{ minHeight: 320 }}>
                  <Link
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#myModal136"
                  >
                    <h2>
                      Албан ёсны дистрибьютер байгуулах ажил (2017 оны 12-р сар)
                    </h2>
                    <span className="line" />
                    <div className="desc">
                      <p>
                        Тоёота ХХК-ийн Монгол дахь дистрибьютер болох Тоёота
                        Сэйлс Монголиа ХХК-д хууль зүйн зөвлөх үйлчилгээ
                        үзүүлсэн.{" "}
                      </p>
                      <p>
                        ТОЁОТА СЭЙЛС МОНГОЛИА ХХК нь 2017 оны 12-р сард үүсгэн
                        байгуулагдсан бөгөөд 2018 оны 1-р сараас албан ёсоор үйл
                        ажиллагаагаа эхлүүлсэн. <br />
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="col-md-4">
                <div className="item back-white" style={{ minHeight: 296 }}>
                  <Link
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#myModal134"
                  >
                    <h2>
                      Захиргааны ﻿актуудыг хүчингүй болгож шийдвэрлүүлсэн
                      (2014-2015)
                    </h2>
                    <span className="line" />
                    <div className="desc">
                      <p>
                        “И” ХХК-ийн нэхэмжлэлтэй Аж үйлдвэрийн яам, Боловсрол
                        соёл шинжлэх ухааны яаманд холбогдох захиргааны хэрэг
                        хянан шийдвэрлэх ажиллагаанд нэхэмжлэгчийг төлөөлөн
                        оролцож, хариуцагч нарын гаргасан захиргааны актуудыг
                        хүчингүй болгож шийдвэрлүүлсэн (2014-2015);
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="col-md-4">
                <div className="item back-white" style={{ minHeight: 296 }}>
                  <Link
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#myModal135"
                  >
                    <h2>
                      Татварын хуулиар эрх зүйн зөвлөгөө өгөх ажиллагаа
                      (2016-2017)
                    </h2>
                    <span className="line" />
                    <div className="desc">
                      <p>
                        Мастер Групп ХХК-ийн гүйцэтгэж байгаа барилгын төслүүдэд
                        татварын хууль тогтоомжийн хэрэглээний талаар хууль зүйн
                        зөвлөх үйлчилгээг үзүүлэн ажиллаж байна. (2016-2017)
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="col-md-4">
                <div className="item back-white" style={{ minHeight: 296 }}>
                  <Link
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#myModal132"
                  >
                    <h2>
                      Монголын хөрөнгийн бирж дээр IPO гаргах ажил (2018 оны 9
                      сар)
                    </h2>
                    <span className="line" />
                    <div className="desc">
                      <p>
                        Ард Даатгал ХХК болон Ард Кредит ХХК нь анх удаа үнэт
                        цаасаа нийтэд санал болгож, хувьцаагаа анхдагч болон
                        хоёрдогч зах зээлд арилжаалах, шаардлагатай хөрөнгийг
                        төвлөрүүлэх ажиллагаанд тус тус Хууль зүйн дүн шинжилгээ
                        хийсэн.
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
            <div className="clearfix" />
            <div className="pagination">
              <ul>
                <li>
                  <span> &lt; </span>
                </li>
                <li className="active">
                  <span>1</span>
                </li>
                <li>
                  <Link href="?page=2&_=1716985968828">2</Link>
                </li>
                <li>
                  <Link href="?page=2&_=1716985968828"> &gt; </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <input
        type="hidden"
        defaultValue="/media/elc/content/huudasnii_background/corporate/O9VV030.jpg"
        id="sqqs"
      />
      {/* Modal */}
      <Modal id="myModal145" show={showModal145} onHide={handleClose145}>
        <Modal.Body>
          <Modal.Header closeButton>
            <Modal.Title>
              Хонг Конгийн Хөрөнгийн Биржид Бонд гаргах ажил (2010-2014)
            </Modal.Title>
          </Modal.Header>
          <p>
            Монголиан Майнинг Корпорацийн дотоодын зөвлөхөөр ажиллаж,&nbsp;700
            сая ам.долларын IPO болон 600 сая ам.долларын Бондыг Хонконгын
            хөрөнгийн бирж дээр 2010 онд анхдагч хувьцаа, 2012 он болон 2014 онд
            өрийн бичиг шинээр гаргаж, хөрөнгө босгох ажиллагаанд тус тус
            оролоцож, эрх зүйн дүн шинжилгээ хийж хамтран ажилласан.
          </p>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose145}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>

      <div id="myModal143" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                Монгол Улсын Засгийн Газрын эсрэг арбитрын маргаан (2012 оны
                10-р сар)
              </h2>
              <div className="wrap">
                <p>
                  Хан Ресурс ИНК, Хан Ресурс Би Ви болон Төв Азийн Уран Холдинг
                  Компани Эл Ти Ди нарын нэхэмжлэлтэй Монгол Улсын Засгийн
                  газарт холбогдох арбитрын хэрэгт тус тус Шинжээчийн дүгнэлт
                  гаргасан.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal144" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>Барааны тэмдгийн бүртгэлийн ажил (2008-2019)</h2>
              <div className="wrap">
                <p />
                <p>
                  “GRANDKHAAN” (олон улсын бүртгэл), “CENTRAL TOWER”,
                  “MexiKhan”, “CODE Pâtisserie &amp; Plus”, “ХООЛОНДОО”,
                  “Mongolian academy of law”, “УБ СОНГДО ЭМНЭЛЭГ”, “МонГени”,
                  “MODERN NOMADS”, “NOMAD LEGENDS”, “Double Shot”, “CROCUS Event
                  Hall”, “Silk Road Bazaar”, “TRANSWEST MONGOLIA”, “ҮЗЭЛ БОДЛЫН
                  ЗӨРӨГ”, “Coffee with Sugar”, “CHEESE REPUBLIC”, “Био Иод – Урт
                  насал Удаан жарга”, “VANSEMBERUU”, “KOMATSU”, “Bulgogi
                  Brothers” зэрэг барааны тэмдгийг тус тус бүртгүүлсэн.
                </p>
                <p />
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal141" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                Австралийн хөрөнгийн бирж дээр IPO гаргах ажил (2013 оны 7 сар)
              </h2>
              <div className="wrap">
                <p>
                  Харанга Ресурс компанийг Австралийн Хөрөнгийн Бирж дээр
                  анхдагч хувьцаагаа амжилттай гаргахад эрх зүйн дүн шинжилгээ
                  хийж, дотоодын хуулийн зөвлөхөөр ажилласан.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal142" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>Даатгалын компаниудыг нэгтгэх ажил (2012 оны 9-р сар)</h2>
              <div className="wrap">
                <p>
                  2011 оны 1 дүгээр улиралд Ард Даатгал болон Гранд Даатгалын
                  хувь нийлүүлэгчид тус компаниудыг нэгтгэх шийдвэрийг
                  гаргаснаар Монголын даатгалын зах зээл дээр бий болсон
                  даатгалын компаниудын&nbsp;анхны нэгдэл болж, өрсөлдөөны зөв
                  орчин бүрдүүлэх олон зөв хандлага, жишгийг зах зээлд бий
                  болгосон билээ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal139" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                Концессын гэрээтэй холбогдох ажиллагаа (2016-2018 он хүртэл)
              </h2>
              <div className="wrap">
                <p>
                  Өмнийн говьд нийт 110км өндөр хүчдэлийн дамжуулах шугам барих
                  110 сая ам.долларын үнийн дүн бүхий концессын гэрээг
                  байгууллахад зөвлөж, улмаар уг гэрээний дагуу үйлчлүүлэгчийн
                  эрх ашгийг амжилттай хамгаалж 53 тэрбум төгрөгний төлбөрийг
                  шүүхээр нэхэмжилж хариуцагчаас гаргуулсан.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal138" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                Татварын үр дагаварын талаар хууль зүйн дүгнэлт боловсруулсан
                (2018)
              </h2>
              <div className="wrap">
                <p>
                  “У” ХНН болон ОХУ-ын “Э” ХК нарын хооронд байгуулсан гэрээний
                  хэрэгжилт, компани эсхүл төлөөний газар байгуулах, эсхүл
                  гэрээний үүргийг гуравдагч этгээдэд шилжүүлэх асуудал, эдгээр
                  байгууллагыг бүртгүүлэх журам, холбогдох татварын үр дагаварын
                  талаар хууль зүйн дүгнэлт боловсруулсан (2018);
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal137" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                SMBC-ийн төлөөлөгчийн газрыг үүсгэн байгуулах ажил (2013 оны
                10-р сар)
              </h2>
              <div className="wrap">
                <p>
                  SMBC банкны хувьд 2001 онд Япон улсын томоохон хоёр банкийг
                  нэгтгэн байгуулсан бөгөөд 20 гаруй улсад өөрийн салбар,
                  төлөөлөгчийн газрыг нээн, үйл ажиллагаагаа явуулж байгаа
                  дэлхийн хэмжээний 20 том банкны нэг юм. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal136" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                Албан ёсны дистрибьютер байгуулах ажил (2017 оны 12-р сар)
              </h2>
              <div className="wrap">
                <p>
                  Тоёота ХХК-ийн Монгол дахь дистрибьютер болох Тоёота Сэйлс
                  Монголиа ХХК-д хууль зүйн зөвлөх үйлчилгээ үзүүлсэн.{" "}
                </p>
                <p>
                  ТОЁОТА СЭЙЛС МОНГОЛИА ХХК нь 2017 оны 12-р сард үүсгэн
                  байгуулагдсан бөгөөд 2018 оны 1-р сараас албан ёсоор үйл
                  ажиллагаагаа эхлүүлсэн. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal134" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                Захиргааны ﻿актуудыг хүчингүй болгож шийдвэрлүүлсэн (2014-2015)
              </h2>
              <div className="wrap">
                <p>
                  “И” ХХК-ийн нэхэмжлэлтэй Аж үйлдвэрийн яам, Боловсрол соёл
                  шинжлэх ухааны яаманд холбогдох захиргааны хэрэг хянан
                  шийдвэрлэх ажиллагаанд нэхэмжлэгчийг төлөөлөн оролцож,
                  хариуцагч нарын гаргасан захиргааны актуудыг хүчингүй болгож
                  шийдвэрлүүлсэн (2014-2015);
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal135" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                Татварын хуулиар эрх зүйн зөвлөгөө өгөх ажиллагаа (2016-2017)
              </h2>
              <div className="wrap">
                <p>
                  Мастер Групп ХХК-ийн гүйцэтгэж байгаа барилгын төслүүдэд
                  татварын хууль тогтоомжийн хэрэглээний талаар хууль зүйн
                  зөвлөх үйлчилгээг үзүүлэн ажиллаж байна. (2016-2017)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal132" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                Монголын хөрөнгийн бирж дээр IPO гаргах ажил (2018 оны 9 сар)
              </h2>
              <div className="wrap">
                <p>
                  Ард Даатгал ХХК болон Ард Кредит ХХК нь анх удаа үнэт цаасаа
                  нийтэд санал болгож, хувьцаагаа анхдагч болон хоёрдогч зах
                  зээлд арилжаалах, шаардлагатай хөрөнгийг төвлөрүүлэх
                  ажиллагаанд тус тус Хууль зүйн дүн шинжилгээ хийсэн.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal50" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                Сингапурын Хөрөнгийн Биржид бонд бүртгүүлэх ажил (2019 оны 4-р
                сар)
              </h2>
              <div className="wrap">
                <p>
                  Хонг Конгийн Хөрөнгийн Биржид бүртгэлтэй Монголиан Майнинг
                  Корпорэйшн, түүний шууд бус охин компани болох Энержи Ресурс
                  ХХК-ийн олон улсын хөрөнгийн зах зээлд өрийн бичиг гаргах
                  ажиллагаанд зөвлөсөн.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal48" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                Торонтогийн Хөрөнгийн Бирж, Монголын Хөрөнгийн Бирж дээрх давхар
                бүртгэл (2018 оны 6-р сар) ﻿
              </h2>
              <div className="wrap">
                <p>
                  Канадын Торонтогийн хөрөнгийн биржид бүртгэлтэй Эрдэнэ Ресурс
                  Девелопмент Корпорэйшн Компанийн шинээр гаргасан хувьцааг
                  Монголын Хөрөнгийн Биржид давхар бүртгэх ажиллагааг хийсэн.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal47" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                Боловсрол сургалтын байгууллагуудад зөвлөх, бүртгүүлэх ажиллагаа
                (2015-2019)
              </h2>
              <div className="wrap">
                <p>
                  Техник технологийн дээд сургууль, Монгол Германы хамтарсан
                  38-р сургууль, Интернэшнл скүүл, Монгени цогцолбор сургууль
                  зэрэг боловсрол сургалтын байгууллагуудад зөвлөх үйлчилгээ
                  үзүүлж ажилласан.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal49" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                Тусгай зөвшөөрөлд хууль зүйн дүн шинжилгээ хийх ажиллагаа (2015)
              </h2>
              <div className="wrap">
                <p>
                  Тэвшийн Говь цахилгаан станцын төсөлтэй холбогдуулан ашигт
                  малтмалын ашиглалтын тусгай зөвшөөрөлтэй хуулийн этгээд болон
                  эрчим хүчний барилга байгууламж барих тусгай зөвшөөрөлтэй
                  хуулийн этгээдийн үйл ажиллагаанд хууль зүйн дүн шинжилгээ
                  хийсэн. (2015)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal45" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="modal-body">
              <h2>
                Торонтогийн хөрөнгийн бирж дээр IPO гаргах ажил (2018 оны 5-р
                сар)
              </h2>
              <div className="wrap">
                <p>
                  Монголын уул, уурхайн салбарт үйл ажиллагаа явуулдаг Стэп Голд
                  ХХК-ийн толгой компани болох Степ Голд Лимитэд компанийг
                  Канадын Торонтогийн хөрөнгийн биржид бүртгэлтэй, нээлттэй
                  компани болох ажилд Монгол Улсын хуулиар дүгнэлт
                  боловсруулсан.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
