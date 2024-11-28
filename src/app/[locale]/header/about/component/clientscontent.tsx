"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Menu from "./dashmenu";


export default function ClientsContents() {
  const t = useTranslations("Clients");
  const params = useParams();

  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        display: "block",
        backgroundImage:
          "url('/image/aboutbackground.jpg')",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <div className="col-md-3">
            <div className="nw-widget-menu">
              <h2 className="caption-title"></h2>
              <Menu/>
            </div>
          </div>
          <div className="col-md-9">
            <h2 className="caption-title">{t("TheClients")} </h2>
            {params.locale === "mn" && (
              <div className="back-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.altanjoloo.mn/">
                                Алтанжолоо Групп
                              </Link>
                              <br />
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="http://ardholdings.com">
                                Ард Санхүүгийн Нэгдэл ХК{" "}
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="http://www.iexpo.mn/barmash/branch/">
                                Бармаш ХХК
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.bv.com/">
                                Блак энд Вийтч Монголиа ХХК{" "}
                              </Link>
                              <Link href="http://www.bluemon.mn/">
                                <br />
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="http://www.bluemon.mn/">
                                Бльюмон Групп&nbsp;&nbsp;&nbsp; <br />
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://bodi-insurance.com/">
                                Бодь Даатгал ХХК
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.vestas.com/">
                                Вестас Монголиа ХХК{" "}
                              </Link>
                            </span>
                          </span>
                        </p>
                        <span style={{ fontSize: 12 }}>
                          <span style={{ color: "rgb(15, 36, 62)" }}>
                            <Link href="https://goodneighbors.org.mn">
                              Гүүд Нэйборс ТББ
                              <br />
                              <br />
                            </Link>
                          </span>
                        </span>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="http://www.master.mn/mn/">
                                Мастер Групп компаниуд
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.biznetwork.mn/company/Mon-Minerals-Minig-and-Trade-L/contact">
                                Мон Минералс ХХК
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.mongolpost.mn/">
                                Монгол Шуудан ХК
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.monos.mn/mn/">Монос Групп </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="http://www.baiguullaga.mn/mongenisurguuli">
                                Монгени цогцолбор сургууль
                              </Link>
                              <br />
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="http://www.nomadsgroup.mn/">
                                Номадс Групп компаниуд
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.proliance.mn/">
                                Пролианс ХХК{" "}
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.songdo.mn/">
                                Сөүл Сениорс Товер ХХК{" "}
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="http://www.iet.edu.mn/">
                                Техник Технологийн Коллеж
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="http://www.mtcsys.com/en/success-story/tianjin-food-group">
                                Тяньжин Фүүд Корпорац
                              </Link>
                            </span>
                          </span>
                        </p>
                        <span style={{ fontSize: 12 }}>
                          <span style={{ color: "rgb(15, 36, 62)" }} />
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: 12 }}>
                          <span style={{ color: "rgb(15, 36, 62)" }}>
                            {" "}
                            &nbsp;&nbsp;&nbsp; <br />
                          </span>
                        </span>
                      </td>
                      <td>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.toyoko-inn.com/eng/search/detail/00262?chckn_date=2019/08/25/">
                                Тоёоко Инн Зочид буудал
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.toyota-mongolia.mn/">
                                Тоёота Сэйлс Монголиа ХХК
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="http://www.transwest.mn/">
                                Трансвэст Монголиа ХХК{" "}
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://ubhotel.mn/">
                                Улаанбаатар зочид буудал ХХК
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.isumongolia.edu.mn/">
                                Улаанбаатарын Олон Улсын Дунд Сургууль
                              </Link>
                              <Link href="https://www.facebook.com/urban.jeans.mongolia">
                                <br />
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.facebook.com/urban.jeans.mongolia">
                                Урбан брэнд
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.pmi.com/markets/kazakhstan/">
                                Филип Моррис Казахстан
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.flsmidth.com/">
                                ФЛСМИДТ Монголиа ХХК
                                <br />
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.huawei.com/">
                                Хуавейтехноложи ХХК
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="http://dsmongolia.org/">
                                “Хөгжлийн шийдэл” ТББ{" "}
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="http://www.china-inv.cn/en/">
                                Чайна Инвестмент Корпораци
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="http://www.shangri-la.com/mn/ulaanbaatar/shangrila/">
                                Шангри-Ла Улаанбаатар Хотел ХХК
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.mcs.mn/">ЭмСиЭс Групп</Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="http://www.energyresources.mn/">
                                Энержи Ресурс ХХК
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.engie.com/">
                                Энжи Төлөөлөгчийн Газар
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.erdene.com/">
                                Эрдэнэ Монгол ХХК{" "}
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }}>
                              <Link href="https://www.sgs.mn/">
                                Эс Жи Эс Монголиа ХХК{" "}
                              </Link>
                            </span>
                          </span>
                        </p>
                        <p>
                          <br />
                          <span style={{ fontSize: 12 }}>
                            <span style={{ color: "rgb(15, 36, 62)" }} />
                          </span>
                        </p>
                        <p>
                          <Link href="https://www.flsmidth.com/" />
                        </p>
                        <Link href="https://www.huawei.com/" />
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <br />
                      </td>
                      <td>
                        <p>
                          <Link href="http://www.shangri-la.com/mn/ulaanbaatar/shangrila/" />
                        </p>
                        <br />{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        <br />
                      </td>
                      <td>
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <br />
                  <br />
                </p>
              </div>
            )}

            {params.locale === "en" && (
              <div className="back-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <Link href="https://www.altanjoloo.mn/">Altanjoloo Group</Link> <br />
                        <Link href="https://ardholdings.com/en/">
                          <br />
                          Ard Financial Group
                        </Link>
                        <br />
                        <Link href="http://www.iexpo.mn/barmash/branch/">
                          <br />
                          Barmash LLC
                        </Link>
                        <br />
                        <Link href="https://www.bv.com/">
                          <br />
                          Black and Veatch Mongolia
                        </Link>
                        <br />
                        <Link href="http://www.bluemon.mn/">
                          <br />
                          Bluemon Group
                        </Link>
                        <br />
                        <Link href="https://www.vestas.com/">
                          <br />
                          Vestas Mongolia
                        </Link>
                        <br />
                        <br />
                        <Link href="https://goodneighbors.org.mn/en">Good Neighbors Mongolia</Link>
                        <br />
                        <br />
                        <Link href="http://www.master.mn/en/">
                          Master Group
                          <br />
                        </Link>
                        <br />
                        <Link href="https://www.biznetwork.mn/company/Mon-Minerals-Minig-and-Trade-L/contact" />
                        <p>
                          <Link href="https://www.biznetwork.mn/company/Mon-Minerals-Minig-and-Trade-L/contact">
                            Mon Minerals LLC
                          </Link>
                          <Link href="https://www.mongolpost.mn/" />
                        </p>
                        <p>
                          <Link href="https://www.mongolpost.mn/">Mongol Post&nbsp; JSC </Link>
                        </p>
                        <Link href="https://www.monos.mn/mn/">Monos Group </Link>
                        <Link href="http://www.baiguullaga.mn/mongenisurguuli">
                          <br />
                          <br />
                          Mongeni Complex school&nbsp;
                          <br />
                        </Link>
                        <br />
                        <p>
                          <Link href="http://www.nomadsgroup.mn/">Nomads Group /companies/</Link>
                          <Link href="https://www.proliance.mn/" />
                        </p>
                        <Link href="https://www.proliance.mn/">
                          Proliance LLC <br />
                        </Link>
                        <br />
                        <p>
                          <Link href="https://www.songdo.mn/">Seoul Seniors Tower Co., Ltd </Link>
                        </p>
                        <Link href="http://www.iet.edu.mn/">
                          Institute of Engineering and Technology
                        </Link>
                        <br />
                      </td>
                      <td>
                        {" "}
                        &nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        <br />
                      </td>
                      <td>
                        <Link href="http://www.mtcsys.com/en/success-story/tianjin-food-group">
                          Tianjin Food Co., Ltd{" "}
                        </Link>
                        <br />
                        <br />
                        <Link href="https://www.toyoko-inn.com/eng/search/detail/00262?chckn_date=2019/08/25/">
                          Toyoko Inn Co., Ltd <br />
                        </Link>
                        <br />
                        <p>
                          <Link href="https://www.toyota-mongolia.mn/">
                            ToyotLink Sales MongoliLink LLC{" "}
                          </Link>
                          <Link href="http://www.transwest.mn/">
                            <br />
                          </Link>
                        </p>
                        <p>
                          <Link href="http://www.transwest.mn/">Transwest MongoliLink LLC </Link>
                          <Link href="https://ubhotel.mn/" />
                        </p>
                        <p>
                          <Link href="https://ubhotel.mn/">Ulaanbaatar Hotel LLC </Link>
                          <Link href="https://www.isumongolia.edu.mn/" />
                        </p>
                        <p>
                          <Link href="https://www.isumongolia.edu.mn/">
                            The International School of Ulaanbaatar{" "}
                          </Link>
                          <Link href="https://www.pmi.com/markets/kazakhstan/">
                            <br />
                          </Link>
                        </p>
                        <p>
                          <Link href="https://www.pmi.com/markets/kazakhstan/">
                            Phillip Morris Kazakhstan LLP
                          </Link>{" "}
                        </p>
                        <Link href="https://финтерра.рус">
                          FinterrLink LLC <br />
                        </Link>
                        <br />
                        <p>
                          <Link href="https://www.huawei.com/">Huawei Technologies Co., Ltd </Link>
                          <Link href="http://www.china-inv.cn/en/">
                            <br />
                          </Link>
                        </p>
                        <p>
                          <Link href="http://www.china-inv.cn/en/">
                            ChinLink Investment Corporation{" "}
                          </Link>
                          <Link href="http://www.shangri-la.com/mn/ulaanbaatar/shangrila/" />
                        </p>
                        <p>
                          <Link href="http://www.shangri-la.com/mn/ulaanbaatar/shangrila/">
                            Shangri-LLink Ulaanbaatar Hotel LLC{" "}
                          </Link>
                          <Link href="https://www.mcs.mn/">
                            <br />
                          </Link>
                        </p>
                        <p>
                          <Link href="https://www.mcs.mn/">MCS Group </Link>
                          <Link href="http://www.energyresources.mn/" />
                        </p>
                        <p>
                          <Link href="http://www.energyresources.mn/">Energy Resources LLC </Link>
                          <Link href="https://www.engie.com/" />
                        </p>
                        <p>
                          <Link href="https://www.engie.com/">Engie AsiLink Pacific MongoliLink </Link>
                          <Link href="https://www.erdene.com/" />
                        </p>
                        <p>
                          <Link href="https://www.erdene.com/">
                            Erdene Resource Development Corp.{" "}
                          </Link>
                          <Link href="https://www.sgs.mn/">
                            <br />
                          </Link>
                        </p>
                        <p>
                          <Link href="https://www.sgs.mn/">SGS MongoliLink LLC </Link>
                          <Link href="https://www.flsmidth.com/" />
                        </p>
                        <p>
                          <Link href="https://www.flsmidth.com/">FLSmidth MongoliLink LLC</Link>
                        </p>
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <br />
                      </td>
                      <td>
                        <br />
                      </td>
                      <td>
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            )}
          </div>
        </div>
      </section>
      <input
        type="hidden"
        defaultValue="/media/elc/content/huudasnii_background/corporate/shutterstock_317042522.jpg"
        id="sqqs"
      />
    </div>
  );
}