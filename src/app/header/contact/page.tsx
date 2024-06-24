"use client";

import React, { useEffect } from "react";

interface AjaxResponse {
  is_valid: string;
  redirect_url?: string;
  content?: any;
  errors?: any;
}

export default function Page() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js"; // Or your local path
    script.onload = () => {
      // Once jQuery is loaded, execute your jQuery-dependent code
      $(document).ready(function () {
        $("#form_id_2").submit(function (event) {
          // Prevent the default form submission
          event.preventDefault();

          // Serialize the form data
          var formData = $(this).serialize();

          // Make the AJAX request
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

    // Cleanup function to remove the dynamically created script element
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
            <div id="mapid"></div>
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
                      <h3>Холбоо Барих</h3>
                      <div className="errors"></div>
                      <p>
                        <input
                          type="text"
                          name="form_field_6"
                          placeholder="Таны нэр"
                        />
                      </p>
                      <p>
                        <input
                          type="text"
                          name="form_field_7"
                          placeholder="Таны и-мэйл"
                        />
                      </p>
                      <p>
                        <input
                          type="text"
                          name="form_field_8"
                          placeholder="Холбогдох сэдэв"
                        />
                      </p>
                      <p>
                        <input
                          type="text"
                          name="form_field_9"
                          placeholder="Утасны дугаар"
                        />
                      </p>
                      <p>
                        <textarea
                          name="form_field_10"
                          placeholder="Захидалаа энд бичнэ үү"
                        ></textarea>
                      </p>
                      <p>
                        <button type="submit">Илгээх</button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="address">
                  <div className="list">
                    <i className="fa fa-map-marker"></i>
                    <div className="desc">
                      <b>Манай хаяг</b>
                      Монгол Улс, Улаанбаатар, Сүхбаатар дүүрэг, 1-р хороо,
                      Гэндэнгийн гудамж 16, Ардчиллын Өргөө, 6 давхар
                    </div>
                  </div>
                  <div className="list">
                    <i className="fa fa-phone"></i>
                    <div className="desc">
                      <b>Холбогдох утас</b>+976 77118193, +976 77118194
                    </div>
                  </div>
                  <div className="list">
                    <i className="fa fa-envelope"></i>
                    <div className="desc">
                      <b>И-Мэйл хаяг</b>Info@elclawoffice.mn
                    </div>
                  </div>
                  <div className="list">
                    <i className="fa fa-clock-o"></i>
                    <div className="desc">
                      <b>Ажиллах цагийн хуваарь</b>
                      Даваа-Баасан: 09:00 – 18:00 <br /> Бямба, Ням: Амарна
                    </div>
                  </div>
                  <div className="list">
                    <i className="fa fa-car"></i>
                    <div className="desc">
                      <b>Авто машины зогсоол</b>
                      UB Mart их дэлгүүрийн урд талын зогсоол /төлбөртэй/ <br />
                      Сарны титэм /Выставка/ үзэсгэлэн худалдааны төвийн хойд
                      болон урд талын зогсоол /төлбөртэй/
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
