"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollAnimationComponentSection2 from "../animate-section-2/page";

import ScrollAnimationComponentSection4 from "../animate-section-4/page";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <div id="content" className="lan-mn index">
      {/* start section 1 */}

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
                      <Image
                        alt="ELC nuur 1 medremjtei"
                        src="/image/ELC-nuur-1-medremjtei.png"
                        width={1920}
                        height={1200}
                      />
                    </div>
                    <div className="overlay">
                      &quot;2010 оноос хойш ИЭлСи-тэй ажиллаж байна. Хуулийн
                      үйлчилгээ авч байна гэхээс илүү хамтран зүтгэгч, найзаасаа
                      зөвлөгөө авч ирсэн мэт санагддаг&quot;
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 1519 }}>
                  <div className="item">
                    <div className="photo">
                      <Image
                        alt="nuur 2 yaraltai hereg"
                        src="/image/nuur-2-yaraltai-hereg.png"
                        width={1920}
                        height={1200}
                      />
                    </div>
                    <div className="overlay">
                      &quot;Мэдрэмжтэй, аливаа шинэ зүйлийг ойлгож хүлээж
                      авахдаа хурдан, чадварлаг баг&quot;
                    </div>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: 1519 }}>
                  <div className="item">
                    <div className="photo">
                      <Image
                        alt="ELC LLP"
                        src="/image/ELC-LLP.png"
                        width={1920}
                        height={1200}
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
                      <Image
                        alt="ELC LLP"
                        src="/image/ELC-LPP-2.png"
                        width={1920}
                        height={1200}
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
                      <Image
                        alt="nuur 5"
                        src="/image/nuur-5.png"
                        width={1920}
                        height={1200}
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

      {/* start section 2 */}

      <section
        className="habout wrap"
        style={{
          backgroundImage: "url(/image/huudasnii_background/bb4.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "auto",
        }}
      >
        <div className="habout-con">
          <ScrollAnimationComponentSection2>
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
                        болон бүх төрлийн зөвлөх үйлчилгээг Монгол, Англи,
                        Хятад, Орос, Герман, Солонгос, Япон хэлээр үзүүлдэг.
                        Туршлагатай, чадварлаг хуульчдаар дамжуулан
                        үйлчлүүлэгчийн эрх ашгийг хамгаалж, хамтын ажиллагаанд
                        үнэ цэнийг бий болгодог.
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
          </ScrollAnimationComponentSection2>
        </div>
      </section>

      {/* start section 3  */}

      <section className="h-services wrap">
        <div className="service-wrap">
          <div
            className="owl-carousel owl-theme"
            id="service-carousel"
            style={{ opacity: 1, display: "block" }}
          >
            <div className="owl-wrapper-outer">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 1700,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <div
                  className="owl-wrapper"
                  style={{
                    width: "16720px",
                    left: "0px",
                    display: "block",
                    transition: "all 400ms ease 0s",
                    transform: "translate3d(-5320px, 0px, 0px)",
                  }}
                >
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage: "url(/image/IPO_and_bond.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage: "url(/image/service_pic-21.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage: "url(/image/service_pic-22.png)",
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
                    </SwiperSlide>
                  </div>

                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage:
                            "url(/image/Khagas_tsagiin_khuulich.png)",
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
                    </SwiperSlide>
                  </div>

                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage:
                            "url(/image/service_pic-new-b2..png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage:
                            "url(/image/Sanhuugiin_huuliin_zuvluh.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage:
                            "url(/image/content-service_pic-18.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage: "url(/image/service_pic-b10.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage:
                            "url(/image/service_pic-new-new4.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage:
                            "url(/image/khudaldaanii_geree_heltsel.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage: "url(/image/service_pic-new-b9.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage:
                            "url(/image/service_pic-new-new5.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage:
                            "url(/image/khuuliin_etgeed_tatan_buulgah.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage:
                            "url(/image/content-service_pic-new-b8.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item active" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage:
                            "url(/image/service_pic-new-b11.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item active" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage:
                            "url(/image/tuluulugchiin_gazar_baiguulah.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item active" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage:
                            "url(/image/OUiin_arbitriin_ajillagaa.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item active" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage: "url(/image/service_pic-new-b5.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage: "url(/image/Tatvar.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage:
                            "url(/image/khuuli_togtoomjiin_tusu.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage: "url(/image/service_pic-new-b4.png)",
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
                    </SwiperSlide>
                  </div>
                  <div className="owl-item" style={{ width: "380px" }}>
                    <SwiperSlide>
                      <div
                        className="service-item"
                        style={{
                          backgroundImage: "url(/image/service_pic-17.png)",
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
                    </SwiperSlide>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* start section 4 */}

      <section className="ab-serv">
        <div
          className="color_jobs"
          style={{
            backgroundImage:
              "url(/image/huudasnii_background/corporate/O9VV030.png)",
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
                    <ScrollAnimationComponentSection4>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/honkong-iin-hurungiin-birjid-bond-gargah">
                            Хонг Конгийн Хөрөнгийн Биржид Бонд гаргах ажил
                            (2010-2014)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/zasgiin-gazriin-esreg-arbitriin-margaan">
                            Монгол Улсын Засгийн Газрын эсрэг арбитрын маргаан
                            (2012 оны 10-р сар)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/baraanii-temdgiin-burtgeliin-ajil">
                            Барааны тэмдгийн бүртгэлийн ажил (2008-2019)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/avstraliin-hurungiin-birj-deer-ipo-gargah">
                            Австралийн хөрөнгийн бирж дээр IPO гаргах ажил (2013
                            оны 7 сар)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/daatgaliin-companiudiig-negtgeh-ajil">
                            Даатгалын компаниудыг нэгтгэх ажил (2012 оны 9-р
                            сар)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/kontsessiin-gereetei-holbootoi-ajillagaa">
                            Концессын гэрээтэй холбогдох ажиллагаа (2016-2018 он
                            хүртэл)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/tatvariin-ur-dagavariin-talaar">
                            Татварын үр дагаварын талаар хууль зүйн дүгнэлт
                            боловсруулсан (2018)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/smbc">
                            SMBC-ийн төлөөлөгчийн газрыг үүсгэн байгуулах ажил
                            (2013 оны 10-р сар)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-prev"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/alban-yosnii-distribyuter-baguulah">
                            Албан ёсны дистрибьютер байгуулах ажил (2017 оны
                            12-р сар)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-active"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/zahirgaanii-aktuudiig-huchingui-bolgoson">
                            Захиргааны ﻿актуудыг хүчингүй болгож шийдвэрлүүлсэн
                            (2014-2015)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-next"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/tatvariin-huuliar-erh-zuin-zuvluguu-uguh">
                            Татварын хуулиар эрх зүйн зөвлөгөө өгөх ажиллагаа
                            (2016-2017)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/mongoliin-hurungiin-birj-deer-ipo-gargah">
                            Монголын хөрөнгийн бирж дээр IPO гаргах ажил (2018
                            оны 9 сар)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/singapuriin-hurungiin-birjid-bond-burtguuleh">
                            Сингапурын Хөрөнгийн Биржид бонд бүртгүүлэх ажил
                            (2019 оны 4-р сар)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/toronto-mongoliin-hurungiig-birj-davhar-burtgel">
                            Торонтогийн Хөрөнгийн Бирж, Монголын Хөрөнгийн Бирж
                            дээрх давхар бүртгэл (2018 оны 6-р сар) ﻿
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/bolovsrol-surgaltiin-baiguullagad-zuvluh-burtguuleh">
                            Боловсрол сургалтын байгууллагуудад зөвлөх,
                            бүртгүүлэх ажиллагаа (2015-2019)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/heder/work/tusgai-zuvshuuruld-huuli-zuin-shinjilgee-hiih">
                            Тусгай зөвшөөрөлд хууль зүйн дүн шинжилгээ хийх
                            ажиллагаа (2015)
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ height: 40, marginBottom: 25 }}
                      >
                        <h3>
                          <Link href="/header/work/torontogiin-hurungiin-birj-deer-ipo-gargah">
                            Торонтогийн хөрөнгийн бирж дээр IPO гаргах ажил
                            (2018 оны 5-р сар)
                          </Link>
                        </h3>
                      </div>
                    </ScrollAnimationComponentSection4>
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
