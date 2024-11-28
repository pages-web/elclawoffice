"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useParams } from "next/navigation";

export default function Page2WorkContentsMn() {
  const params = useParams();

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
                  style={{ cursor: "pointer", height: 320 }}
                  data-toggle="modal"
                  data-target="#myModal145"
                >
                  <h2>
                    Сингапурын Хөрөнгийн Биржид бонд бүртгүүлэх ажил (2019 оны 4-р сар)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p />
                    <p>
                      Хонг Конгийн Хөрөнгийн Биржид бүртгэлтэй Монголиан Майнинг Корпорэйшн, түүний шууд бус охин компани болох Энержи Ресурс ХХК-ийн олон улсын хөрөнгийн зах зээлд өрийн бичиг гаргах ажиллагаанд зөвлөсөн.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ height: 320, cursor: "pointer" }}
                  onClick={handleOpen143}
                >
                  <h2>
                    Торонтогийн Хөрөнгийн Бирж, Монголын Хөрөнгийн Бирж дээрх давхар бүртгэл (2018 оны 6-р сар) ﻿
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Канадын Торонтогийн хөрөнгийн биржид бүртгэлтэй Эрдэнэ Ресурс Девелопмент Корпорэйшн Компанийн шинээр гаргасан хувьцааг Монголын Хөрөнгийн Биржид давхар бүртгэх ажиллагааг хийсэн.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ height: 320, cursor: "pointer" }}
                  onClick={handleOpen144}
                >
                  <h2>Боловсрол сургалтын байгууллагуудад зөвлөх, бүртгүүлэх ажиллагаа (2015-2019)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p />
                    <p>
                      Техник технологийн дээд сургууль, Монгол Германы хамтарсан 38-р сургууль, Интернэшнл скүүл, Монгени цогцолбор сургууль зэрэг боловсрол сургалтын байгууллагуудад зөвлөх үйлчилгээ үзүүлж ажилласан.
                    </p>
                    <p />
                    <p />
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ height: 320, cursor: "pointer" }}
                  onClick={handleOpen141}
                >
                  <h2>
                    Тусгай зөвшөөрөлд хууль зүйн дүн шинжилгээ хийх ажиллагаа (2015)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Тэвшийн Говь цахилгаан станцын төсөлтэй холбогдуулан ашигт малтмалын ашиглалтын тусгай зөвшөөрөлтэй хуулийн этгээд болон эрчим хүчний барилга байгууламж барих тусгай зөвшөөрөлтэй хуулийн этгээдийн үйл ажиллагаанд хууль зүйн дүн шинжилгээ хийсэн. (2015)
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
                  <h2>Торонтогийн хөрөнгийн бирж дээр IPO гаргах ажил (2018 оны 5-р сар)
                  </h2>
                  <span className="line" />
                  <div className="desc">
                    <p>
                      Монголын уул, уурхайн салбарт үйл ажиллагаа явуулдаг Стэп Голд ХХК-ийн толгой компани болох Степ Голд Лимитэд компанийг Канадын Торонтогийн хөрөнгийн биржид бүртгэлтэй, нээлттэй компани болох ажилд Монгол Улсын хуулиар дүгнэлт боловсруулсан.
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
              Сингапурын Хөрөнгийн Биржид бонд бүртгүүлэх ажил (2019 оны 4-р сар)
              </h2>
              <div className="wrap">
                <p />
                <p>
                Хонг Конгийн Хөрөнгийн Биржид бүртгэлтэй Монголиан Майнинг Корпорэйшн, түүний шууд бус охин компани болох Энержи Ресурс ХХК-ийн олон улсын хөрөнгийн зах зээлд өрийн бичиг гаргах ажиллагаанд зөвлөсөн.
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
              Торонтогийн Хөрөнгийн Бирж, Монголын Хөрөнгийн Бирж дээрх давхар бүртгэл (2018 оны 6-р сар) ﻿
              </h2>
              <div className="wrap">
                <p>
                Канадын Торонтогийн хөрөнгийн биржид бүртгэлтэй Эрдэнэ Ресурс Девелопмент Корпорэйшн Компанийн шинээр гаргасан хувьцааг Монголын Хөрөнгийн Биржид давхар бүртгэх ажиллагааг хийсэн.
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
              <h2>Боловсрол сургалтын байгууллагуудад зөвлөх, бүртгүүлэх ажиллагаа (2015-2019)
              </h2>
              <div className="wrap">
                <p />
                <p>
                Техник технологийн дээд сургууль, Монгол Германы хамтарсан 38-р сургууль, Интернэшнл скүүл, Монгени цогцолбор сургууль зэрэг боловсрол сургалтын байгууллагуудад зөвлөх үйлчилгээ үзүүлж ажилласан.
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
              Тусгай зөвшөөрөлд хууль зүйн дүн шинжилгээ хийх ажиллагаа (2015)
              </h2>
              <div className="wrap">
                <p>
                Тэвшийн Говь цахилгаан станцын төсөлтэй холбогдуулан ашигт малтмалын ашиглалтын тусгай зөвшөөрөлтэй хуулийн этгээд болон эрчим хүчний барилга байгууламж барих тусгай зөвшөөрөлтэй хуулийн этгээдийн үйл ажиллагаанд хууль зүйн дүн шинжилгээ хийсэн. (2015)
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
              <h2>Торонтогийн хөрөнгийн бирж дээр IPO гаргах ажил (2018 оны 5-р сар)
              </h2>
              <div className="wrap">
                <p>
                Монголын уул, уурхайн салбарт үйл ажиллагаа явуулдаг Стэп Голд ХХК-ийн толгой компани болох Степ Голд Лимитэд компанийг Канадын Торонтогийн хөрөнгийн биржид бүртгэлтэй, нээлттэй компани болох ажилд Монгол Улсын хуулиар дүгнэлт боловсруулсан.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
