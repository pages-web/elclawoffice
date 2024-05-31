import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    // <div
    //   id="content"
    //   className="lan-mn"
    //   style={{
    //     display: "block",
    //     backgroundImage:
    //       'url("http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/crop7.jpg")',
    //     backgroundSize: "cover",
    //     minHeight: "100vh",
    //   }}
    // >
    //   <section className="container">
    //     <div className="news-list-main nw-padding-top service-catt">
    //       <h2 className="caption-title">Үйлчилгээ</h2>
    //       <div>
    //         <ul className="article-list news-list nw-list">
    //

    //           <li className="col-xs-12 col-md-6 other service-list text-right">
    //             <Link href="/header/service/hagas-tsagiin-huulich">
    //               <div className="img ">
    //                 <Image
    //                   alt="Хагас цагийн хуульч"
    //                   src="http://elclawoffice.mn/media/elc/content/service_pic/17.jpg"
    //                 />
    //               </div>
    //               <div className="desc">Хагас цагийн хуульч</div>
    //               <div className="hover-bg">
    //                 <i className="more fa fa-link"></i>
    //               </div>
    //             </Link>
    //           </li>
    //         </ul>
    //         <div className="clearfix"></div>
    //       </div>
    //     </div>
    //   </section>
    //   <input type="hidden" value="" id="sqqs" />
    // </div>
    <div
      id="content"
      className="lan-mn"
      style={{
        display: "block",
        backgroundImage:
          'url("http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/crop7.jpg")',
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top service-catt">
          <div>
            <ul className="article-list news-list nw-list">
              <li className="col-xs-12 col-md-6 other service-list text-left">
                <a href="/header/service/ipo-ba-bond">
                  <div className="desc">IPO ба Бонд</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-right">
                <a href="/header/service/huvitsaa-hudaldan-avah">
                  <div className="desc">
                    Хувьцаа худалдан авах, нэгдэх ажиллагаа
                  </div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-left">
                <a href="/header/service/huuli-zuin-dun-shinjilgee">
                  <div className="desc">Хууль зүйн дүн шинжилгээ</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-right">
                <a href="/header/service/huuliin-etgeediin-burtgel">
                  <div className="desc">Хуулийн этгээдийн бүртгэл</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-left">
                <a href="/header/service/baraanii-temdgiin-burtgel">
                  <div className="desc">Барааны тэмдгийн бүртгэл</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-right">
                <a href="/header/service/sanhuugiin-huuliin-zuvluh">
                  <div className="desc">Санхүүгийн хуулийн зөвлөх</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-left">
                <a href="/header/service/oyunii-umchiin-burtgel">
                  <div className="desc">Оюуны өмчийн бүртгэл</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-right">
                <a href="/header/service/tur-huviin-hevshliin-tunshlel">
                  <div className="desc">Төр хувийн хэвшлийн түншлэл</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-left">
                <a href="/header/service/companii-zasaglal">
                  <div className="desc">Компанийн засаглал</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-right">
                <a href="/header/service/hudaldaanii-geree-heltsel">
                  <div className="desc">Худалдааны гэрээ хэлцэл</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-left">
                <a href="/header/service/huuliin-etgeed-tatan-buulgah">
                  <div className="desc">Хуулийн этгээд татан буулгах</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-right">
                <a href="/header/service/irgenii-hereg-margaan">
                  <div className="desc">Иргэний хэрэг, маргаан</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-left">
                <a href="/header/service/eruugiin-hereg-margaan">
                  <div className="desc">Эрүүгийн хэрэг маргаан</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-right">
                <a href="/header/service/zahirgaanii-hereg-margaan">
                  <div className="desc">Захиргааны хэрэг маргаан</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-left">
                <a href="/header/service/hudulmuriin-asuudal">
                  <div className="desc">Хөдөлмөрийн асуудал</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-right">
                <a href="/header/service/tuluulugchiin-gazar-baiguulah">
                  <div className="desc">Төлөөлөгчийн газар байгуулах</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-left">
                <a href="/header/service/arbitriin-ajillagaa">
                  <div className="desc">Арбитрын ажиллагаа</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-right">
                <a href="/header/service/viz-bolon-ajillah-zuvshuurul">
                  <div className="desc">Виз болон ажиллах зөвшөөрөл</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-left">
                <a href="/header/service/tatvar">
                  <div className="desc">Татвар</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-right">
                <a href="/header/service/huuli-togtoomjiin-tusul">
                  <div className="desc">Хууль тогтоомжийн төсөл</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-left">
                <a href="/header/service/tusgai-zuvshuurul">
                  <div className="desc">Тусгай зөвшөөрөл</div>
                </a>
              </li>
              <li className="col-xs-12 col-md-6 other service-list text-right">
                <a href="/header/service/hagas-tsagiin-huulich">
                  <div className="desc">Хагас цагийн хуульч</div>
                </a>
              </li>
            </ul>
            <div className="clearfix" />
          </div>
        </div>
      </section>
      <input
        type="hidden"
        defaultValue="http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/crop7.jpg"
        id="sqqs"
      />
    </div>
  );
}
