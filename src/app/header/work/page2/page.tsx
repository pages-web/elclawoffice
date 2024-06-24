"use client";

import Link from "next/link";
import React from "react";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function Page() {
  const [modal50, setModal50] = useState(false);
  const [modal45, setModal45] = useState(false);
  const [modal47, setModal47] = useState(false);
  const [modal48, setModal48] = useState(false);
  const [modal49, setModal49] = useState(false);

  const handleOpen50 = () => setModal50(true);
  const handleClose50 = () => setModal50(false);

  const handleOpen47 = () => setModal47(true);
  const handleClose47 = () => setModal47(false);

  const handleOpen49 = () => setModal49(true);
  const handleClose49 = () => setModal49(false);

  const handleOpen48 = () => setModal48(true);
  const handleClose48 = () => setModal48(false);

  const handleOpen45 = () => setModal45(true);
  const handleClose45 = () => setModal45(false);
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        display: "block",
        backgroundImage:
          'url("http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/O9VV030.jpg")',
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <h2 className="caption-title">Гүйцэтгэсэн ажлууд</h2>
          <div className="back">
            <ul
              className="row article-list project-list nw-project-list"
              id="owl-work"
            >
              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: "288px", cursor: "pointer" }}
                  onClick={handleOpen50}
                >
                  <h2>
                    Сингапурын Хөрөнгийн Биржид бонд бүртгүүлэх ажил (2019 оны
                    4-р сар)
                  </h2>
                  <span className="line"></span>
                  <div className="desc">
                    <p>
                      Хонг Конгийн Хөрөнгийн Биржид бүртгэлтэй Монголиан Майнинг
                      Корпорэйшн, түүний шууд бус охин компани болох Энержи
                      Ресурс ХХК-ийн олон улсын хөрөнгийн зах зээлд өрийн бичиг
                      гаргах ажиллагаанд зөвлөсөн.
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: "288px", cursor: "pointer" }}
                  onClick={handleOpen48}
                >
                  <h2>
                    Торонтогийн Хөрөнгийн Бирж, Монголын Хөрөнгийн Бирж дээрх
                    давхар бүртгэл (2018 оны 6-р сар) ﻿
                  </h2>
                  <span className="line"></span>
                  <div className="desc">
                    <p>
                      Канадын Торонтогийн хөрөнгийн биржид бүртгэлтэй Эрдэнэ
                      Ресурс Девелопмент Корпорэйшн Компанийн шинээр гаргасан
                      хувьцааг Монголын Хөрөнгийн Биржид давхар бүртгэх
                      ажиллагааг хийсэн.
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: "288px", cursor: "pointer" }}
                  onClick={handleOpen47}
                >
                  <h2>
                    Боловсрол сургалтын байгууллагуудад зөвлөх, бүртгүүлэх
                    ажиллагаа (2015-2019)
                  </h2>
                  <span className="line"></span>
                  <div className="desc">
                    <p>
                      Техник технологийн дээд сургууль, Монгол Германы хамтарсан
                      38-р сургууль, Интернэшнл скүүл, Монгени цогцолбор
                      сургууль зэрэг боловсрол сургалтын байгууллагуудад зөвлөх
                      үйлчилгээ үзүүлж ажилласан.
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: "296px", cursor: "pointer" }}
                  onClick={handleOpen49}
                >
                  <h2>
                    Тусгай зөвшөөрөлд хууль зүйн дүн шинжилгээ хийх ажиллагаа
                    (2015)
                  </h2>
                  <span className="line"></span>
                  <div className="desc">
                    <p>
                      Тэвшийн Говь цахилгаан станцын төсөлтэй холбогдуулан ашигт
                      малтмалын ашиглалтын тусгай зөвшөөрөлтэй хуулийн этгээд
                      болон эрчим хүчний барилга байгууламж барих тусгай
                      зөвшөөрөлтэй хуулийн этгээдийн үйл ажиллагаанд хууль зүйн
                      дүн шинжилгээ хийсэн. (2015)
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-md-4">
                <div
                  className="item back-white"
                  style={{ minHeight: "296px", cursor: "pointer" }}
                  onClick={handleOpen45}
                >
                  <h2>
                    Торонтогийн хөрөнгийн бирж дээр IPO гаргах ажил (2018 оны
                    5-р сар)
                  </h2>
                  <span className="line"></span>
                  <div className="desc">
                    <p>
                      Монголын уул, уурхайн салбарт үйл ажиллагаа явуулдаг Стэп
                      Голд ХХК-ийн толгой компани болох Степ Голд Лимитэд
                      компанийг Канадын Торонтогийн хөрөнгийн биржид бүртгэлтэй,
                      нээлттэй компани болох ажилд Монгол Улсын хуулиар дүгнэлт
                      боловсруулсан.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="clearfix"></div>
            <div className="pagination">
              <ul>
                <li>
                  <Link href="/header/work"> &lt; </Link>
                </li>

                <li>
                  <Link href="/header/work">1</Link>
                </li>

                <li className="active">
                  <Link href="/header/work/page2">2</Link>
                </li>

                <li>
                  <span> &gt; </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <input
        type="hidden"
        value="/media/elc/content/huudasnii_background/corporate/O9VV030.jpg"
        id="sqqs"
      />

      {/* Modal start */}

      <Modal
        open={modal50}
        onClose={handleClose50}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose50}
            >
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
      </Modal>

      <Modal
        open={modal48}
        onClose={handleClose48}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose48}
            >
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
      </Modal>

      <Modal
        open={modal47}
        onClose={handleClose47}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose47}
            >
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
      </Modal>

      <Modal
        open={modal49}
        onClose={handleClose49}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose49}
            >
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
      </Modal>

      <Modal
        open={modal45}
        onClose={handleClose45}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose45}
            >
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
      </Modal>
    </div>
  );
}
