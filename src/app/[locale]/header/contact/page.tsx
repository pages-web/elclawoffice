"use client";

import React, { useEffect } from "react";
// import GoogleMapComponent from "../../component/googlemap/googlemap";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface AjaxResponse {
  is_valid: string;
  redirect_url?: string;
  content?: any;
  errors?: any;
}

export default function Page() {
  const t = useTranslations("Contacts");
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script.onload = () => {
      $(document).ready(function () {
        $("#form_id_2").submit(function (event) {
          event.preventDefault();
          var formData = $(this).serialize();
          $.ajax({
            type: "POST",
            url: "/admin/forms/submission/2/",
            data: formData,
            success: function (res: AjaxResponse) {
              if (res.is_valid === "true") {
                if (res.redirect_url) {
                  location.href = res.redirect_url;
                } else {
                  $("#form_container_2").html(res.content);
                }
              } else {
                $("#form_id_2 .errors").html(res.errors);
              }
            },
          });
        });
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        backgroundImage:
          "url(/image/huudasnii_background-corporate-shutterstock_363629945.png)",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "block",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <div className="back-white contact">
            {/* Google Map Component */}
            {/* <div id="mapid">
              <GoogleMapComponent />
            </div> */}
            <div>
              <Image layout="responsive" width={700} height={700} alt="zur" src="/image/googlemap.png" />
            </div>

            <div className="contact row">
              <div className="col-md-7">
                <div className="contact_form">
                  <div id="form_container_2">
                    <form
                      encType="multipart/form-data"
                      action="/admin/forms/submission/2/"
                      method="post"
                      id="form_id_2"
                    >
                      <input
                        type="hidden"
                        name="csrfmiddlewaretoken"
                        value="nQ3ARaNXLWWgjf7RnNl0mlvOB4opBRPA"
                      />
                      <input
                        type="text"
                        name="gerege"
                        value=""
                        style={{ display: "none" }}
                      />
                      <h3>{t("Contact")}</h3>
                      <div className="errors"></div>
                      <p>
                        <input
                          type="text"
                          name="form_field_6"
                          placeholder={t("Name")}
                        />
                      </p>
                      <p>
                        <input
                          type="text"
                          name="form_field_7"
                          placeholder={t("Gmail")}
                        />
                      </p>
                      <p>
                        <input
                          type="text"
                          name="form_field_8"
                          placeholder={t("Topic")}
                        />
                      </p>
                      <p>
                        <input
                          type="text"
                          name="form_field_9"
                          placeholder={t("Number")}
                        />
                      </p>
                      <p>
                        <textarea
                          name="form_field_10"
                          placeholder={t("Write")}
                        ></textarea>
                      </p>
                      <p>
                        <button type="submit">{t("Send")}</button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div className="col-md-5">
                <div className="address">
                  <div className="list">
                    <i className="fa fa-map-marker"></i>
                    <div className="desc">
                      <b>{t("Address")}</b>
                      {t("Address1")}
                    </div>
                  </div>
                  <div className="list">
                    <i className="fa fa-phone"></i>
                    <div className="desc">
                      <b>{t("Phone")}</b>{t("Phone1")}
                    </div>
                  </div>
                  <div className="list">
                    <i className="fa fa-envelope"></i>
                    <div className="desc">
                      <b>{t("Email")}</b>{t("Email1")}
                    </div>
                  </div>
                  <div className="list">
                    <i className="fa fa-clock-o"></i>
                    <div className="desc">
                      <b>{t("Schedule")}</b>
                      {t("Schedule1")} 
                      <br />
                      {t("Schedule2")} 
                    </div>
                  </div>
                  <div className="list">
                    <i className="fa fa-car"></i>
                    <div className="desc">
                      <b>{t("Parking")}</b>
                        {t("Mart")}
                      <br />
                        {t("Mart2")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <input
        type="hidden"
        value="http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/shutterstock_363629945.jpg"
        id="sqqs"
      />
    </div>
  );
}
