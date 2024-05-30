import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div id="content" className="lan-mn index">
      <section className="slider">
        <div className="position-relative">
          <div
            id="owl-example"
            className="owl-carousel owl-theme"
            style={{ opacity: 1, display: "block" }}
          >
            <div className="owl-wrapper-outer">
              <div
                className="owl-wrapper"
                style={{
                  width: 15190,
                  left: 0,
                  display: "block",
                  transition: "all 0ms ease 0s",
                  transform: "translate3d(-3038px, 0px, 0px)",
                  transformOrigin: "3797.5px center",
                  perspectiveOrigin: "3797.5px center",
                }}
              >
                <div className="owl-item active" style={{ width: 1519 }}>
                  <div className="item">
                    <div className="photo">
                      <img
                        alt="ELC nuur 1 medremjtei"
                        src="http://elclawoffice.mn/media/elc/content/huudasnii_background/.-8305092180150145249_1920_x_1200.jpg"
                      />
                    </div>
                    <div className="overlay">
                      "2010 оноос хойш ИЭлСи-тэй ажиллаж байна. Хуулийн
                      үйлчилгээ авч байна гэхээс илүү хамтран зүтгэгч, найзаасаа
                      зөвлөгөө авч ирсэн мэт санагддаг"
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 1519 }}>
                  <div className="item">
                    <div className="photo">
                      <img
                        alt="nuur 2 yaraltai hereg"
                        src="http://elclawoffice.mn/media/elc/content/huudasnii_background/bayar_ah_all_photo/.-8160851325438875575_1920_x_1200.JPG"
                      />
                    </div>
                    <div className="overlay">
                      "Мэдрэмжтэй, аливаа шинэ зүйлийг ойлгож хүлээж авахдаа
                      хурдан, чадварлаг баг"
                    </div>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: 1519 }}>
                  <div className="item">
                    <div className="photo">
                      <img
                        alt="ELC LLP"
                        src="	http://elclawoffice.mn/media/elc/content/huudasnii_background/.-3324998811395711062_1920_x_1200.JPG"
                      />
                    </div>
                    <div className="overlay">
                      “Гол нь шүүхийн хэрэг маргаанд ч, бизнесийн зөвлөх
                      үйлчилгээнд ч арвин туршлагатай. Хуулийн нэг цэгийн
                      үйлчилгээг эндээс л авч болно”
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 1519 }}>
                  <div className="item">
                    <div className="photo">
                      <img
                        alt="ELC LLP"
                        src="http://elclawoffice.mn/media/elc/content/huudasnii_background/.-1096224438272427223_1920_x_1200.JPG"
                      />
                    </div>
                    <div className="overlay">
                      “Эрч хүчтэй, цоглог залуучуудтай ажиллахад урамтай, сэтгэл
                      хангалуун байдаг”
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 1519 }}>
                  <div className="item">
                    <div className="photo">
                      <img
                        alt="nuur 5"
                        src="http://elclawoffice.mn/media/elc/content/huudasnii_background/.-5478828469191432365_1920_x_1200.JPG"
                      />
                    </div>
                    <div className="overlay">
                      “Яаралтай хэрэг гарсан үед ажлын бус цагт ч туслалцаа
                      үзүүлэхэд бэлэн байдаг. Сэтгэлтэй хуульчид”
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="icon-scroll" />
        </div>
      </section>

      <section
        className="habout wrap"
        style={{
          backgroundImage:
            "url(http://elclawoffice.mn/media/elc/content/huudasnii_background/bb4.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "auto",
        }}
      >
        <div className="habout-con">
          <div className="container">
            <h2
              className="about-title aos-init aos-animate"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={1200}
              data-aos-anchor-placement="bottom-bottom"
            >
              20 жилийн туршлага
            </h2>
            <div className="row">
              <div className="col-md-4">
                <div
                  className="about-mid aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration={1500}
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <h2>Манай үйлчилгээ</h2>
                  <div className="content">
                    <p>
                      Мэргэжлийн, итгэлтэй, ёс зүйтэй хуульчдын баг өмгөөллийн
                      болон бүх төрлийн зөвлөх үйлчилгээг Монгол, Англи, Хятад,
                      Орос, Герман, Солонгос, Япон хэлээр үзүүлдэг. Туршлагатай,
                      чадварлаг хуульчдаар дамжуулан үйлчлүүлэгчийн эрх ашгийг
                      хамгаалж, хамтын ажиллагаанд үнэ цэнийг бий болгодог.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="about-mid aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration={1600}
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <h2>МАНАЙ ХУУЛЬЧИД</h2>
                  <div className="content">
                    <p />
                    <p>
                      Хууль зүйн үйлчилгээний салбарт 30 гаруй жил ажилласан
                      ахмад өмгөөлөгчид, дотоод, гадаадын шилдэг сургуулийг
                      төгссөн чадварлаг залуу хуульчид нэг баг болон хамтран
                      ажиллаж, харилцан хүндэтгэл, зөвшилцөлд түшиглэн
                      ажилладаг.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="about-mid aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration={1700}
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <h2>БИД ЮУГ ЭРХЭМЛЭДЭГ ВЭ</h2>
                  <div className="content">
                    <p />
                    <p>
                      Найдвартай, мэргэжлийн үйлчилгээг үзүүлэх замаар хууль
                      зүйн болон бизнесийн зөвлөгөө, үйлчилгээний чанар,
                      хүртээмжийг сайжруулахыг эрхэмлэн үйлчлүүлэгчдийнхээ
                      хэрэгцээг зөв тодорхойлон, асуудлыг цогцоор нь оновчтой
                      шийдвэрлэх арга замыг эрэлхийлж ажиллахыг зорьдог.
                    </p>
                    <p />
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-services wrap">
        <div className="service-wrap">
          <div
            className="owl-carousel owl-theme"
            id="service-carousel"
            style={{ opacity: 1, display: "block" }}
          >
            <div className="owl-wrapper-outer">
              <div
                className="owl-wrapper"
                style={{
                  width: "16720px",
                  left: "0px",
                  display: "block",
                  transition: "all 400ms ease 0s",
                  // transform: "translate3d(-5320px, 0px, 0px)",
                }}
              >
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/IPO_and_bond.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/ipo-ba-bond"
                        className="item-title anim-3"
                      >
                        IPO ба Бонд
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/21.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/huvitsaa-hudaldan-avah"
                        className="item-title anim-3"
                      >
                        Хувьцаа худалдан авах, нэгдэх ажиллагаа
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/22.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/huuli-zuin-dun-shinjilgee"
                        className="item-title anim-3"
                      >
                        Хууль зүйн дүн шинжилгээ
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/Khagas_tsagiin_khuulich.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/huuliin-etgeediin-burtgel"
                        className="item-title anim-3"
                      >
                        Хуулийн этгээдийн бүртгэл
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/new/b2.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/baraanii-temdgiin-burtgel"
                        className="item-title anim-3"
                      >
                        Барааны тэмдгийн бүртгэл
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/Sanhuugiin_huuliin_zuvluh.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/sanhuugiin-huuliin-zuvluh"
                        className="item-title anim-3"
                      >
                        Санхүүгийн хуулийн зөвлөх
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/18.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/oyunii-umchiin-burtgels"
                        className="item-title anim-3"
                      >
                        Оюуны өмчийн бүртгэл
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/b10.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/tur-huviin-hevshliin-tunshlel"
                        className="item-title anim-3"
                      >
                        Төр хувийн хэвшлийн түншлэл
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/new/new4.")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/companii-zasaglal"
                        className="item-title anim-3"
                      >
                        Компанийн засаглал
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/khudaldaanii_geree_heltsel.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/hudaldaanii-geree-heltsel"
                        className="item-title anim-3"
                      >
                        Худалдааны гэрээ хэлцэл
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/new/b9.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/huuliin-etgeed-tatan-buulgah"
                        className="item-title anim-3"
                      >
                        Хуулийн этгээд татан буулгах
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/new/new5.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/irgenii-hereg-margaan"
                        className="item-title anim-3"
                      >
                        Иргэний хэрэг, маргаан
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/khuuliin_etgeed_tatan_buulgah.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/eruugiin-hereg-margaan"
                        className="item-title anim-3"
                      >
                        Эрүүгийн хэрэг маргаан
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/new/b8.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/zahirgaanii-hereg-margaan"
                        className="item-title anim-3"
                      >
                        Захиргааны хэрэг маргаан
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/new/b11.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/hudulmuriin-asuudal"
                        className="item-title anim-3"
                      >
                        Хөдөлмөрийн асуудал
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/tuluulugchiin_gazar_baiguulah.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/tuluulugchiin-gazar-baiguulah"
                        className="item-title anim-3"
                      >
                        Төлөөлөгчийн газар байгуулах
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/OUiin_arbitriin_ajillagaa.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/arbitriin-ajillagaa"
                        className="item-title anim-3"
                      >
                        Арбитрын ажиллагаа
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/new/b5.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/viz-bolon-ajillah-zuvshuurul"
                        className="item-title anim-3"
                      >
                        Виз болон ажиллах зөвшөөрөл
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/Tatvar.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/tatvar"
                        className="item-title anim-3"
                      >
                        Татвар
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/khuuli_togtoomjiin_tusul.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/huuli-togtoomjiin-tusul"
                        className="item-title anim-3"
                      >
                        Хууль тогтоомжийн төсөл
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/new/b4.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/tusgai-zuvshuurul"
                        className="item-title anim-3"
                      >
                        Тусгай зөвшөөрөл
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "380px" }}>
                  <div
                    className="service-item"
                    style={{
                      backgroundImage:
                        'url("http://elclawoffice.mn/media/elc/content/service_pic/17.jpg")',
                    }}
                  >
                    <div className="item-desc">
                      <Link
                        href="/header/service/hagas-tsagiin-huulich"
                        className="item-title anim-3"
                      >
                        Хагас цагийн хуульч
                        <span className="more">Дэлгэрэнгүй</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-serv">
        <div
          className="color_jobs"
          style={{
            backgroundImage:
              'url("http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/O9VV030.jpg")',
            backgroundRepeat: "no- repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="latest_jobs wrap">
              <div className="latest_jobs_con">
                <h2 className="title">Гүйцэтгэсэн ажлууд</h2>
                <div className="swiper-container swiper-container-initialized swiper-container-vertical">
                  <div
                    className="job-list swiper-wrapper"
                    style={{
                      transitionDuration: "0ms",
                      transform: "translate3d(0px, -585px, 0px)",
                    }}
                  >
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/honkong-iin-hurungiin-birjid-bond-gargah">
                          Хонг Конгийн Хөрөнгийн Биржид Бонд гаргах ажил
                          (2010-2014)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/zasgiin-gazriin-esreg-arbitriin-margaan">
                          Монгол Улсын Засгийн Газрын эсрэг арбитрын маргаан
                          (2012 оны 10-р сар)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/baraanii-temdgiin-burtgeliin-ajil">
                          Барааны тэмдгийн бүртгэлийн ажил (2008-2019)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/avstraliin-hurungiin-birj-deer-ipo-gargah">
                          Австралийн хөрөнгийн бирж дээр IPO гаргах ажил (2013
                          оны 7 сар)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/daatgaliin-companiudiig-negtgeh-ajil">
                          Даатгалын компаниудыг нэгтгэх ажил (2012 оны 9-р сар)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/kontsessiin-gereetei-holbootoi-ajillagaa">
                          Концессын гэрээтэй холбогдох ажиллагаа (2016-2018 он
                          хүртэл)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/tatvariin-ur-dagavariin-talaar">
                          Татварын үр дагаварын талаар хууль зүйн дүгнэлт
                          боловсруулсан (2018)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/smbc">
                          SMBC-ийн төлөөлөгчийн газрыг үүсгэн байгуулах ажил
                          (2013 оны 10-р сар)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-prev"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/alban-yosnii-distribyuter-baguulah">
                          Албан ёсны дистрибьютер байгуулах ажил (2017 оны 12-р
                          сар)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-active"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/zahirgaanii-aktuudiig-huchingui-bolgoson">
                          Захиргааны ﻿актуудыг хүчингүй болгож шийдвэрлүүлсэн
                          (2014-2015)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-next"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/tatvariin-huuliar-erh-zuin-zuvluguu-uguh">
                          Татварын хуулиар эрх зүйн зөвлөгөө өгөх ажиллагаа
                          (2016-2017)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/mongoliin-hurungiin-birj-deer-ipo-gargah">
                          Монголын хөрөнгийн бирж дээр IPO гаргах ажил (2018 оны
                          9 сар)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/singapuriin-hurungiin-birjid-bond-burtguuleh">
                          Сингапурын Хөрөнгийн Биржид бонд бүртгүүлэх ажил (2019
                          оны 4-р сар)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/toronto-mongoliin-hurungiig-birj-davhar-burtgel">
                          Торонтогийн Хөрөнгийн Бирж, Монголын Хөрөнгийн Бирж
                          дээрх давхар бүртгэл (2018 оны 6-р сар) ﻿
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/bolovsrol-surgaltiin-baiguullagad-zuvluh-burtguuleh">
                          Боловсрол сургалтын байгууллагуудад зөвлөх, бүртгүүлэх
                          ажиллагаа (2015-2019)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/heder/work/tusgai-zuvshuuruld-huuli-zuin-shinjilgee-hiih">
                          Тусгай зөвшөөрөлд хууль зүйн дүн шинжилгээ хийх
                          ажиллагаа (2015)
                        </a>
                      </h3>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ height: 40, marginBottom: 25 }}
                    >
                      <h3>
                        <a href="/header/work/torontogiin-hurungiin-birj-deer-ipo-gargah">
                          Торонтогийн хөрөнгийн бирж дээр IPO гаргах ажил (2018
                          оны 5-р сар)
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/* Add Pagination */}
                  <div className="swiper-pagination" />
                  <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
