import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <section className="header nw">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="logo">
              <Link href="/">
                <img
                  src="http://elclawoffice.mn/media/elc/content/20_web_logo_2.png"
                  alt="ELC LLP ADVOCATES"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="main-menu justify-content-end" id="mn">
              <nav className="navbar">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" href="#">
                      MAIN MENU
                    </Link>
                  </div>

                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav top_menu">
                      <li>
                        <Link href="/header/newsAndEvents">
                          Мэдээ &amp; Арга хэмжээ
                        </Link>
                      </li>

                      <li>
                        <Link href="/header/contact">Холбоо барих</Link>
                      </li>

                      <li className="tsmall hidden-xs">
                        <Link href="https://www.facebook.com/Өмгөөллийн-ИЭлСи-ХХН-ELC-LLP-Advocates-539937542752306/">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>

                      <li className="dropdown lang-wrap">
                        <Link
                          href="#"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          mn<span className="caret"></span>
                        </Link>
                        <ul className="dropdown-menu" id="langbar">
                          <li>
                            <Link href="javascript:;" className="lang" rel="mn">
                              <span className="name">Mongolian</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;" className="lang" rel="en">
                              <span className="name">English</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;" className="lang" rel="de">
                              <span className="name">German</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;" className="lang" rel="ru">
                              <span className="name">Russia</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="javascript:;"
                              className="lang"
                              rel="zh-cn"
                            >
                              <span className="name">China</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                    <ul className="nav navbar-nav">
                      <li>
                        <Link
                          href="/header/about
                        "
                        >
                          Бидний тухай
                        </Link>
                      </li>

                      <li>
                        <Link href="/header/colleagues">Хамт олон</Link>
                      </li>

                      <li>
                        <Link href="/header/service">Үйлчилгээ</Link>
                      </li>

                      <li>
                        <Link href="/header/work">Гүйцэтгэсэн ажил</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="annouced">
        <div className="annouced-item">Дэлхийн түвшний Монгол хуульчид</div>
      </div>
    </section>
  );
};

export default Header;
