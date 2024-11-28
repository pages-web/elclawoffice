"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import Modal from "@mui/material/Modal";  
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const [modal132, setModal132] = useState(false);
  const [modal134, setModal134] = useState(false);
  const [modal135, setModal135] = useState(false);
  const [modal136, setModal136] = useState(false);
  const [modal137, setModal137] = useState(false);
  const [modal138, setModal138] = useState(false);
  const [modal139, setModal139] = useState(false);
  const [modal141, setModal141] = useState(false);
  const [modal142, setModal142] = useState(false);
  const [modal143, setModal143] = useState(false);
  const [modal144, setModal144] = useState(false);
  const [modal145, setModal145] = useState(false);

  const handleOpen145 = () => setModal145(true);
  const handleClose145 = () => setModal145(false);

  const handleOpen143 = () => setModal143(true);
  const handleClose143 = () => setModal143(false);

  const handleOpen144 = () => setModal144(true);
  const handleClose144 = () => setModal144(false);

  const handleOpen141 = () => setModal141(true);
  const handleClose141 = () => setModal141(false);

  const handleOpen142 = () => setModal142(true);
  const handleClose142 = () => setModal142(false);

  const handleOpen139 = () => setModal139(true);
  const handleClose139 = () => setModal139(false);

  const handleOpen138 = () => setModal138(true);
  const handleClose138 = () => setModal138(false);

  const handleOpen137 = () => setModal137(true);
  const handleClose137 = () => setModal137(false);

  const handleOpen136 = () => setModal136(true);
  const handleClose136 = () => setModal136(false);

  const handleOpen134 = () => setModal134(true);
  const handleClose134 = () => setModal134(false);

  const handleOpen135 = () => setModal135(true);
  const handleClose135 = () => setModal135(false);

  const handleOpen132 = () => setModal132(true);
  const handleClose132 = () => setModal132(false);

  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        backgroundImage:
          "url(/image/huudasnii_background-corporate-O9VV030.png)",
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
                  onClick={handleOpen145}
                  style={{ cursor: "pointer", minHeight: 416 }}
                  data-toggle="modal"
                  data-target="#myModal145"
                >
                  <h2>
                    Dual Listing of TSX listed Erdene Resource Development Corporation on the Mongolian Stock Exchange (June, 2018)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p />
                    <p>
                      Executed the dual listing of Toronto Stock Exchange listed “Erdene Resource Development Corporation” on the Mongolian Stock Exchange.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: 416, cursor: "pointer" }}
                  onClick={handleOpen143}
                >
                  <h2>
                    Conducted legal due diligence on operationы of the legal entity holding a license (2015)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Conducted due diligence on operations of legal entity with minerals license and legal entity with power plant license within the “Tevshiin Govi Power Plant” project.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: 416, cursor: "pointer" }}
                  onClick={handleOpen144}
                >
                  <h2>Successful “Steppe Gold Limited’s” IPO on the Toronto Stock Exchange in Canada (March, 2018)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p />
                    <p>
                      Acted as the local counsel and provided legal opinion for Steppe Gold Limited, a parent company of the Step Gold LLC running activity in Mongolia, for its IPO on the Toronto Stock Exchange in Canada.
                    </p>
                    <p />
                    <p />
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: 320, cursor: "pointer" }}
                  onClick={handleOpen141}
                >
                  <h2>
                    Provided consulting services for educational institutions (2015-2019)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Provided consulting services for educational institutions such as the Institute of Engineering and Technology, School of 38, Mongolian-German joint school, International school, Mongeni complex school.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: 320, cursor: "pointer" }}
                  onClick={handleOpen142}
                >
                  <h2>Successful IPO of Monos Khuns LLC and Bodi Insurance LLC on Mongolian Stock Exchange (March, 2019)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Carried out the due diligence for Monos Khuns LLC and Bodi Insurance LLC for their initial public offerings, selling shares on primary and secondary securities market, and raising necessary capital. 
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: 320, cursor: "pointer" }}
                  onClick={handleOpen139}
                >
                  <h2>
                    Bond Restructuring of HKEX listed Mongolian Mining Corporation and Energy Resources on the Singapore Stock Exchange (April, 2019)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                    Acted as the local counsel for issuing bonds at international debt securities market by Mongolian legal entity “Energy Resources” LLC, an affiliate of Mongolian Mining Corporation listed on Hong Kong Stock Exchange.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: 320, cursor: "pointer" }}
                  onClick={handleOpen138}
                >
                  <h2>
                    Successful USD 700 miIlion IPO and USD 600 million Bond Issuance of Mongolian Mining Corporation on the Hong Kong Stock Exchange in 2010 and 2011 respectively.
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Acted as local counsel and conducted due diligence for the Mongolian Mining Corporation for its IPO in 2010, Senior Notes issuance in 2012 and additional share issuance in 2014.    
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: 320, cursor: "pointer" }}
                  onClick={handleOpen137}
                >
                  <h2>
                    ICC Arbitration dispute: Khan Resources vs. Government of Mongolia (October, 2012)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Issued the expert’s opinion of the arbitration dispute claimed by Khan Resources INC, Khan Resources BV and Central Asian Uran Holdings Company Ltd against the Government of Mongolia.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: 320, cursor: "pointer" }}
                  onClick={handleOpen136}
                >
                  <h2>
                    TRADEMARKS REGISTRATION SERVICE (2008-2019)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <h2>
                      We have registered the trademarks with the IPOM including, but not limited to, “GRANDKHAAN” (international registration), “CENTRAL TOWER”, “MexiKhan”, “CODE Pâtisserie & Plus”, “ХООЛОНДОО”, “Mongolian academy of law”, “UB SONGDO HOSPITAL”, “МонГени”, “MODERN NOMADS”, “NOMAD LEGENDS”, “Double Shot”, “CROCUS Event Hall”, “Silk Road Bazaar”, “TRANSWEST MONGOLIA”, “ҮЗЭЛ БОДЛЫН ЗӨРӨГ”, “Coffee with Sugar”, “CHEESE REPUBLIC”, “Био Иод – Урт насал Удаан жарга”, “VANSEMBERUU”, “KOMATSU” and “Bulgogi Brothers”.
                    </h2> 
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: 296, cursor: "pointer" }}
                  onClick={handleOpen134}
                >
                  <h2>
                    Successful IPO of Haranga Resources on the Australian Stock Exchange (July, 2013)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Conducted due diligence and acted as local counsel for Haranga Resources for its successful IPO on the Australian Securities Exchange.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: 296, cursor: "pointer" }}
                  onClick={handleOpen135}
                >
                  <h2>
                    Advised on the merger of Mongolian insurance companies Ard and Grand Daatgal LLC. (September, 2012)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Upon the issuance of the shareholders resolution to merger the insurance companies Ard Insurance and Grand Insurance, the first ever merger has been occurred in the Mongolian insurance market, consequently good practices have been established creating competition environment.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: 296, cursor: "pointer" }}
                  onClick={handleOpen132}
                >
                  <h2>
                    Concession agreement related to power plant and infrastructure (2016-2018)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Advised on USD 110 million concession agreement to build 110 kms of high voltage transmission line in Gobi and successfully represented the client’s legitimate rights and as a result MNT 54 billion payment was compensated by the respondent pursuant to such agreement.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="clearfix" />
            <div className="pagination">
              <ul>
                <li>
                  <Link href={`/${params.locale}/header/work`}> &lt;</Link>
                </li>
                <li className="active">
                  <Link href={`/${params.locale}/header/work`}>1</Link>
                </li>
                <li>
                  <Link href={`/${params.locale}/header/work/page2`}>2</Link>
                </li>
                <li>
                  <Link href={`/${params.locale}/header/work/page2`}> &gt; </Link>
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

      <Modal
        open={modal145}
        onClose={handleClose145}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose145}
            >
              ×
            </button>
            <div className="modal-body">
              <h2>
                Хонг Конгийн Хөрөнгийн Биржид Бонд гаргах ажил (2010-2014)
              </h2>
              <div className="wrap">
                <p />
                <p>
                  Монголиан Майнинг Корпорацийн дотоодын зөвлөхөөр
                  ажиллаж,&nbsp;700 сая ам.долларын IPO болон 600 сая
                  ам.долларын Бондыг Хонконгын хөрөнгийн бирж дээр 2010 онд
                  анхдагч хувьцаа, 2012 он болон 2014 онд өрийн бичиг шинээр
                  гаргаж, хөрөнгө босгох ажиллагаанд тус тус оролоцож, эрх зүйн
                  дүн шинжилгээ хийж хамтран ажилласан.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        open={modal143}
        onClose={handleClose143}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <div id="myModal143" className="modal fade" role="dialog"> */}
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose143}
            >
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
        {/* </div> */}
      </Modal>

      <Modal
        open={modal144}
        onClose={handleClose144}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose144}
            >
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
      </Modal>

      <Modal
        open={modal141}
        onClose={handleClose141}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose141}
            >
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
      </Modal>

      <Modal
        open={modal142}
        onClose={handleClose142}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose142}
            >
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
      </Modal>

      <Modal
        open={modal139}
        onClose={handleClose139}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose139}
            >
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
      </Modal>

      <Modal
        open={modal138}
        onClose={handleClose138}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose138}
            >
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
      </Modal>

      <Modal
        open={modal137}
        onClose={handleClose137}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose137}
            >
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
      </Modal>

      <Modal
        open={modal136}
        onClose={handleClose136}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose136}
            >
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
      </Modal>

      <Modal
        open={modal134}
        onClose={handleClose134}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose134}
            >
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
      </Modal>

      <Modal
        open={modal135}
        onClose={handleClose135}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose135}
            >
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
      </Modal>

      <Modal
        open={modal132}
        onClose={handleClose132}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose132}
            >
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
      </Modal>
    </div>
  );
}
