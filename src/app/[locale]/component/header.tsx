"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation"; // Added usePathname to get the current pathname

export default function Header() {
  const params = useParams();
  const pathname = usePathname(); // Get the current pathname
  const t = useTranslations("Headerworks");

  // State to manage whether the dropdown is open or closed
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown open/close
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  

  // Language switch URL handling, keeping the pathname intact
  const languageSwitchLink = `/${
    params.locale === "en" ? "mn" : "en"
  }/${pathname.split("/").slice(2).join("/")}`;

  return (
    <section className="header nw">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/image/20_web_logo_2.png"
                  width={273}
                  height={110}
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
                  <div>
                    <ul className="nav navbar-nav top_menu">
                      <li>
                        <Link href={`/${params.locale}/header/newsAndEvents`}>
                          {t("News")}
                        </Link>
                      </li>

                      <li>
                        <Link href={`/${params.locale}/header/contact`}>
                          {t("Contact")}
                        </Link>
                      </li>

                      <li className="tsmall hidden-xs">
                        <Link href="https://www.facebook.com/Өмгөөллийн-ИЭлСи-ХХН-ELC-LLP-Advocates-539937542752306/">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>

                      {/* Dropdown for language */}
                      <li className={`dropdown lang-wrap ${isDropdownOpen ? "open" : ""}`}>
                        <Link
                          href="#"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded={isDropdownOpen ? "true" : "false"}
                          onClick={toggleDropdown} // Toggle the dropdown when clicked
                        >
                          {params.locale === "en" ? "EN" : "MN"}
                          <span className="caret" />
                        </Link>
                        <ul className="dropdown-menu" id="langbar">
                          <li>
                            {/* Link to switch to the other language */}
                            <Link href={`/${params.locale === "en" ? "mn" : "en"}/${pathname.split("/").slice(2).join("/")}`}>
                              {params.locale === "en" ? "Mongolian" : "English"}
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                    <ul className="nav navbar-nav">
                      <li>
                        <Link href={`/${params.locale}/header/about`}>
                          {t("About")}
                        </Link>
                      </li>

                      <li>
                        <Link href={`/${params.locale}/header/colleagues`}>
                          {t("Lawyers")}
                        </Link>
                      </li>

                      <li>
                        <Link href={`/${params.locale}/header/service`}>
                          {t("Services")}
                        </Link>
                      </li>

                      <li>
                        <Link href={`/${params.locale}/header/work`}>
                          {t("Our")}
                        </Link>
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
        <div className="annouced-item">{t("World")}</div>
      </div>
    </section>
  );
}
