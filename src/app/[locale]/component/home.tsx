"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollAnimationComponentSection2 from "./animate-section-2/section2";
import ScrollAnimationComponentSection4 from "./animate-section-4/section4";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Sliderhome from "./homesliders";



export default function Homecomponent() {
  const t = useTranslations("Headerworks");
  const params = useParams();

 
  return (
    <div id="content" className="lan-mn index">
      {/* start section 1 */}
      <Sliderhome/>

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
                {t("20turshlaga")}
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
                    <h2>{t("Capa")}</h2>
                    <div className="content">
                      <p>
                        {t("Capabilities")}
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
                    <h2>{t("Prof")}</h2>
                    <div className="content">
                      <p />
                      <p>
                        {t("Professionals")}
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
                    <h2>{t("Ourpr")}</h2>
                    <div className="content">
                      <p />
                      <p>
                        {t("Ourpriority")}
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

      {/* start section 3 service.title */}
      
      {params.locale === "mn" && (
        <section className="h-services wrap">
          <div className="service-wrap">
            <div
              className="owl-carousel owl-theme"
              id="service-carousel"
              style={{ opacity: 1, display: "block" }}
            >
              <div className="owl-wrapper-outer">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  centeredSlides={false}
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
                      transitionDuration: "all 500ms ease 0s",
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
                              href={`/${params.locale}/header/service/mC84Jc6vax9dKDPi9CUWh`}
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
                              href={`/${params.locale}/header/service/mC84Jc6vax9dKDPi9CUWh`}
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
                              href={`/${params.locale}/header/service/4nXDtwdG0uknkpY9OZXsZ`}
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
                              href={`/${params.locale}/header/service/pSsE2Kvci_bt-pk95ZTXP`}
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
                              href={`/${params.locale}/header/service/tPKHBGtz75aHfffk7RTGH`}
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
                              href={`/${params.locale}/header/service/yC-YOwskHTPWBJL0uOiBr`}
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
                              href={`/${params.locale}/header/service/rI1Fc8OPBwsQJfFJpYit6`}
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
                              href={`/${params.locale}/header/service/GeiUe2p70RMRMNMlXwY-w`}
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
                              href={`/${params.locale}/header/service/M_alg7FGjbXLCk1EuA0Bw`}
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
                              href={`/${params.locale}/header/service/uPCFGXsLQfZcYP6chINfw`}
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
                              href={`/${params.locale}/header/service/4NowZKKGA89usp4gBYz3Z`}
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
                              href={`/${params.locale}/header/service/VH_MNWM5JBMpV_mJ5N_OM`}
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
                              href={`/${params.locale}/header/service/sMoAXdUjnvKQgLRuFEmUD`}
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
                              href={`/${params.locale}/header/service/m_GSXkFu8mtlAddSAY4pu`}
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
                              href={`/${params.locale}/header/service/Bdq9Y7eoDydgFBmyCDFob`}
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
                              href={`/${params.locale}/header/service/w2TYBhj9NZPmdVAkBOu8U`}
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
                              href={`/${params.locale}/header/service/P4lyG5zPb0siWcRrP-YOu`}
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
                              href={`/${params.locale}/header/service/NQh66Us68YXWkt_N73ake`}
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
                              href={`/${params.locale}/header/service/RM-D3samgkkyDPzMJ4tGo`}
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
                              href={`/${params.locale}/header/service/cTFvxb7kg6z7jWT2Qs_6C`}
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
                              href={`/${params.locale}/header/service/v5RcM-1kyLH7DybtyAJXE`}
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
                              href={`/${params.locale}/header/service/Rq0yERUqUHnkE1HXG7qyy`}
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
      )}

      {params.locale === "en" && (
        <section className="h-services wrap">
          <div className="service-wrap">
            <div
              className="owl-carousel owl-theme"
              id="service-carousel"
              style={{ opacity: 1, display: "block" }}
            >
              <div className="owl-wrapper-outer">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  centeredSlides={false}
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
                      transition: "transform 0.8s ease-in-out",
                      transform: "translate3d(0px, -585px, 0px)",
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
                              href={`/${params.locale}/header/service/g6JOd2Fq2yOG7fO1rVt-r`}
                              className="item-title anim-3"
                            >
						                IPO AND BOND
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/r_-9yRXufyVQGLifypzqs`}
                              className="item-title anim-3"
                            >
                              Share sale and purchase, M&A
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/brbqR1YqP-uOYZ2YTDhV3`}
                              className="item-title anim-3"
                            >
                             Legal Due Diligence
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/mjLXPlewSb92O1tJnKqXK`}
                              className="item-title anim-3"
                            >
                              Registration of legal entity
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/tqDjYAzDmNyVXpqVEjjCb`}
                              className="item-title anim-3"
                            >
                              Trademark Registration
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/EdCfD5J9Z3Sm44QBY1f83`}
                              className="item-title anim-3"
                            >
                              Finance Law Advisor
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/Em50XGm1_05nuXyOcgs2B`}
                              className="item-title anim-3"
                            >
                              Intellectual Property
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/fsQnEBAMtg_7u6Z-nwwtW`}
                              className="item-title anim-3"
                            >
                              Public-Private Partnership
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/odJewOj_nnJeEpxfcQ50E`}
                              className="item-title anim-3"
                            >
                              Corporate governance
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/vdOdYTsNRcXPAa4hLaZ3D`}
                              className="item-title anim-3"
                            >
                              Commercial Agreements
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/I_e1ag_5MtcZT8fPliqGl`}
                              className="item-title anim-3"
                            >
                              Liquidation
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/i1EzGh4IAi-Aee_rkzxxL`}
                              className="item-title anim-3"
                            >
                              Civil Disputes
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/6N0Nc6G3AWaVGd_ilU4Xv`}
                              className="item-title anim-3"
                            >
                              Criminal Case
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/c7B0hIIyHaEd_QWr5Kz-x`}
                              className="item-title anim-3"
                            >
                              Administrative Disputes
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/QpT3ArEpT_ho5hY4DA34j`}
                              className="item-title anim-3"
                            >
                              Labor Issues
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/VhqzO34EyRqTkbuA-9kn0`}
                              className="item-title anim-3"
                            >
                              Incorporation of representative office
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/3VF7vzFvJxNNUSjiLPgpN`}
                              className="item-title anim-3"
                            >
                              Arbitration
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/071FAM1zS64Rm34T7Pl2G`}
                              className="item-title anim-3"
                            >
                              Visa and Work Permit
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/uy1Wt0224F1iediJax26p`}
                              className="item-title anim-3"
                            >
                              Tax
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/xiiunjzQZXMKxAMfT_VbS`}
                              className="item-title anim-3"
                            >
                              Legislation project
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/hG_2D7bIdQkA6jQQ8QxnQ`}
                              className="item-title anim-3"
                            >
                              License
                              <span className="more">More</span>
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
                              href={`/${params.locale}/header/service/ijeprOyPLok9J9_l94wVm`}
                              className="item-title anim-3"
                            >
                              Secondment
                              <span className="more">More</span>
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
      )}

      {/* start section 4  if en, if mn works.title */}

      {params.locale === "mn" && (
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
                  <h2 className="title">{t("Title")}</h2>
                  <div className="swiper-container swiper-container-initialized swiper-container-vertical">
                    <div
                      className="job-list swiper-wrapper"
                      style={{
                        transitionDuration: "0ms",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <ScrollAnimationComponentSection4>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/IJVft2T5NkVISEbwA4ZE4`}>
                              {t("Title1")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/Miw6z58UGshwNQDiPcnOL`}>
                              {t("Title2")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/_bhD0rhLQN8cKC_le8DzH`}>
                              {t("Title3")}                          
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/UxOjBwH8Na0kc8_WsU-XK`}>
                              {t("Title4")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/KipMw86Dto3KwshosFf30`}>
                              {t("Title5")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/kL5TutBV0lG9IBs4xdU0T`}>
                              {t("Title6")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/ZmRAc57gHj4YMfLTzj0H5`}>
                              {t("Title7")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/knD25nyYFmMNXhHlvflIC`}>
                              {t("Title8")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-prev"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/alban-yosnii-distribyuter-baguulah`}>
                            {t("Title9")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-active"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/kNFjaRd3I4jz7Pz-R-IXL`}>
                              {t("Title10")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/CnkFcxxzSmnXRkHVBtjPL`}>
                              {t("Title11")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/D8md48ZJRu-_p3TP-cFTR`}>
                            {t("Title12")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/FRJzHSW13EehAjbzXq0PV`}>
                            {t("Title13")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/Un3Icw_kl2ZL2OdGQ3Jdi`}>
                            {t("Title14")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/Hw-9jBN82DLREuBTD58DV`}>
                            {t("Title15")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/xHqXb33mQ9Ge4MqRtC7NG`}>
                            {t("Title16")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/sbWGrOgOUPoRp6mwutNfO`}>
                            {t("Title17")}
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
      )}

      {params.locale === "en" && (
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
                  <h2 className="title">{t("Title")}</h2>
                  <div className="swiper-container swiper-container-initialized swiper-container-vertical">
                    <div
                      className="job-list swiper-wrapper"
                      style={{
                        transitionDuration: "30ms",
                        transform: "translate3d(0px, -585px, 0px)",
                      }}
                    >
                      <ScrollAnimationComponentSection4>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/tfjrpFazBlFe5Yu1CDYOI`}>
                              {t("Title1")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/IE1F79sgMGfuvGgJapE9s`}>
                              {t("Title2")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/hgyPOl4qSVqBumuFpTndJ`}>
                              {t("Title3")}                          
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/Yc7aUscj0xZ2hNnlWWDCY`}>
                              {t("Title4")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/eca1gho190x3HkvmLLz-a`}>
                              {t("Title5")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/l_zdA1dYkLTHL3P7cI-1a`}>
                              {t("Title6")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/_6xxtqZGB0e4rVw5HtDag`}>
                              {t("Title7")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/oImbDkwn1iEXKhqUSfgXL`}>
                              {t("Title8")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-prev"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/WjEh08Y0ZZR36H6mu4GZF`}>
                            {t("Title9")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-active"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/fPF1ORWa9ErrOjGVzjq5h`}>
                              {t("Title10")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/7oWgwAE8x8Mz33fh_o_nv`}>
                              {t("Title11")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/hR9t1_dqOunvYat7786pP`}>
                            {t("Title12")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/kbtZ1UK8yV7nESzZGxeeG`}>
                            {t("Title13")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/8GoFc7KHUhiH0VFMpMOx7`}>
                            {t("Title14")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/77Hns2pBDvihxPFK0-rXW`}>
                            {t("Title15")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/VBdDph_N5G8I9fgCNriX5`}>
                            {t("Title16")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/yUQ0t4oApY6bbt4J0o8X8`}>
                            {t("Title17")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/bkICMKkPrQsbGRnPrzAji`}>
                            {t("Title18")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/Oh84MEyVtld2hnaHtqGKO`}>
                            {t("Title19")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/SgpPwP8-kBV7EBQMg8r26`}>
                            {t("Title20")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/TIBgyHBlb4_sT2CVI5gn6`}>
                            {t("Title21")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/ujFV_hkURYQ0m8C50LwJm`}>
                            {t("Title22")}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ height: 40, marginBottom: 25 }}
                        >
                          <h3>
                            <Link href={`/${params.locale}/header/works/4LV-LiMd8GVQG7S3rvjbS`}>
                            {t("Title23")}
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
      )}
    </div>
  );
};

 
