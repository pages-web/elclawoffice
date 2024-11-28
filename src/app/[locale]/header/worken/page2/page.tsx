"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import Modal from "@mui/material/Modal";

export default function Page() {
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
                    Produced legal opinion on tax consequences (2018)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p />
                    <p>
                      Provided legal opinion regarding the contract implementation entered by and between “Y”JSC and “E” LLC, incorporation of the legal entity or representative office, matter for assigning contractual obligations to third party, registration procedures of such legal entities and related tax results.    
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
                    Incorporation of the representative office of the Sumitomo Mitsui Banking Corporation (October, 2013)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      SMBC was formed by merging two largest banks in 2001 and it is one of the 20 world biggest banks in the world which is running activity establishing its branches and representative offices in the over 20 countries.   
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
                  <h2>Had the administrative legal instruments annulled (2014-2015) 
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p />
                    <p>
                      Had the administrative acts by Ministry of Food and Agriculture and Ministry of Education, Culture and Science invalidated while representing “I” LLC.
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
                    Provided legal consulting services concerning the application of the tax law (2016-2017)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Provided legal consulting services on the application of tax legislation in construction projects implemented by Master Group LLC. (2016-2017)
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
                  <h2>Successful IPO of Ard Insurance LLC and Ard credit LLC on Mongolian Stock Exchange (September, 2018)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Conducted due diligence, provided assistance and produced compatibility report on initial public offerings, selling shares on primary market, and raising necessary capital for “Ard Insurance” LLC.
                    </p>
                    <p>
                      Conducted due diligence, provided assistance and produced compatibility report on initial public offerings, selling shares on primary and secondary securities market, and raising necessary capital for “Ard Credit LLC”.
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
                    Advised for the taxation lawsuit that is resolved in favor of our client
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      The taxation authority refused to consider the value added tax refund of the client in the amount of MNT 8.3 billion and as a result of our legal representation at the court, the administrative court has decided to let the taxation authority to refund.
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
                    Worked as a legal counsel for the concession agreement for major infrastructure project and protected the legitimate interest of the client
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Advised on entering into concession agreement to build high voltage power lines at a length of 110km in South Gobi region in the amount of USD 110 million and we successfully protected our client&apos;s interests at the court proceedings.
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
                    Provided legal assistance for Mongolian franchisees of the word&apos;s most valuable brands
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Advised on the franchising agreement and participated in negotiations for the Mongolian companies when purchasing the right to use a business&apos;s trademarks and associated brands in relation to the world renowned brands such as Hugo Boss, Emporio Armani, Ermenegildo Zegna, Burberry, Ulysse Nardin.
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
                    Rendered our legal services for merger of companies in the insurance sector for the first time
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Advised on the establishment of Ard Daatgal LLC with the value of MNT 3 billion by the merger of Mongolian insurance companies Ard and Grand Daatgal LLC.
                    </p>
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
                    Advised on the establishment of Ard Daatgal LLC with the value of MNT 3 billion by the merger of Mongolian insurance companies Ard and Grand Daatgal LLC.
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Conducted legal due diligence and acting as a local counsel for Mongolian Mining Corporation for its IPO in 2010, issuance of bond in 2012 and issuance of senior notes in 2014 respectively on the Hong Kong stock exchange.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="clearfix" />
            <div className="pagination">
              <ul>
                <li>
                  <Link href="/header/work"> &lt;</Link>
                </li>
                <li className="active">
                  <Link href="/header/work">1</Link>
                </li>
                <li>
                  <Link href="/header/work/page2">2</Link>
                </li>
                <li>
                  <Link href="/header/work/page2"> &gt; </Link>
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
                Produced legal opinion on tax consequences (2018)
              </h2>
              <div className="wrap">
                <p />
                <p>
                  Provided legal opinion regarding the contract implementation entered by and between “Y”JSC and “E” LLC, incorporation of the legal entity or representative office, matter for assigning contractual obligations to third party, registration procedures of such legal entities and related tax results.    
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
                Incorporation of the representative office of the Sumitomo Mitsui Banking Corporation (October, 2013)
              </h2>
              <div className="wrap">
                <p>
                  SMBC was formed by merging two largest banks in 2001 and it is one of the 20 world biggest banks in the world which is running activity establishing its branches and representative offices in the over 20 countries.   
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
              <h2>Incorporation of the official distributer of Toyota LLC in Ulaanbaatar (December, 2017)
              </h2>
              <div className="wrap">
                <p />
                <p>
                  Provided legal consulting services to the Toyotal Sales Mongolia LLC, distributer of Toyota LLC in Mongolia.
                  Toyota Sales Mongolia LLC was estabilished in December, 2012 and officially started its activity from January, 2018.
                  The main business activity of the Toyota Sales Mongolia LLC is to supply Toyota brand automobiles and the spare parts to its official dealers, but also support the operation of dealers, monitor its sales and service quality and provide them with the appropriate training etc.
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
                Had the administrative legal instruments annulled (2014-2015)
              </h2>
              <div className="wrap">
                <p>
                  Had the administrative acts by Ministry of Food and Agriculture and Ministry of Education, Culture and Science invalidated while representing “I” LLC.
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
              <h2>Provided legal consulting services concerning the application of the tax law (2016-2017)
              </h2>
              <div className="wrap">
                <p>
                  Provided legal consulting services on the application of tax legislation in construction projects implemented by Master Group LLC. (2016-2017)
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
                Successful IPO of Ard Insurance LLC and Ard credit LLC on Mongolian Stock Exchange (September, 2018)
              </h2>
              <div className="wrap">
                <p>
                  Conducted due diligence, provided assistance and produced compatibility report on initial public offerings, selling shares on primary market, and raising necessary capital for “Ard Insurance” LLC.
                  Conducted due diligence, provided assistance and produced compatibility report on initial public offerings, selling shares on primary and secondary securities market, and raising necessary capital for “Ard Credit LLC”.
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
                Advised for the taxation lawsuit that is resolved in favor of our client
              </h2>
              <div className="wrap">
                <p>
                  The taxation authority refused to consider the value added tax refund of the client in the amount of MNT 8.3 billion and as a result of our legal representation at the court, the administrative court has decided to let the taxation authority to refund.
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
                Worked as a legal counsel for the concession agreement for major infrastructure project and protected the legitimate interest of the client
              </h2>
              <div className="wrap">
                <p>
                  Advised on entering into concession agreement to build high voltage power lines at a length of 110km in South Gobi region in the amount of USD 110 million and we successfully protected our client&apos;s interests at the court proceedings.
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
                Provided legal assistance for Mongolian franchisees of the word&apos;s most valuable brands
              </h2>
              <div className="wrap">
                <p>
                  Advised on the franchising agreement and participated in negotiations for the Mongolian companies when purchasing the right to use a business&apos;s trademarks and associated brands in relation to the world renowned brands such as Hugo Boss, Emporio Armani, Ermenegildo Zegna, Burberry, Ulysse Nardin.
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
                Rendered our legal services for merger of companies in the insurance sector for the first time
              </h2>
              <div className="wrap">
                <p>
                  Advised on the establishment of Ard Daatgal LLC with the value of MNT 3 billion by the merger of Mongolian insurance companies Ard and Grand Daatgal LLC.
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
                Advised Mongolian company for successful IPO on the foreign stock exchange
              </h2>
              <div className="wrap">
                <p>
                  Conducted legal due diligence and acting as a local counsel for Mongolian Mining Corporation for its IPO in 2010, issuance of bond in 2012 and issuance of senior notes in 2014 respectively on the Hong Kong stock exchange.
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
