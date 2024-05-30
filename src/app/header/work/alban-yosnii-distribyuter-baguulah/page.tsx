import React from "react";

export default function page() {
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        display: "block",
        backgroundImage:
          'url("http://elclawoffice.mn/media/elc/content/huudasnii_background/corporate/shutterstock_363629945.jpg")',
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <h2 className="caption-title">
            Албан ёсны дистрибьютер байгуулах ажил (2017 оны 12-р сар)
          </h2>

          <div className="back-white">
            <p>
              Тоёота ХХК-ийн Монгол дахь дистрибьютер болох Тоёота Сэйлс
              Монголиа ХХК-д хууль зүйн зөвлөх үйлчилгээ үзүүлсэн.{" "}
            </p>
            <p>
              ТОЁОТА СЭЙЛС МОНГОЛИА ХХК нь 2017 оны 12-р сард үүсгэн
              байгуулагдсан бөгөөд 2018 оны 1-р сараас албан ёсоор үйл
              ажиллагаагаа эхлүүлсэн. <br />
            </p>
            <span>
              <i className="fa fa-clock-o"></i> 2019.07.17
            </span>

            <div id="disqus_thread"></div>
            {/* <script>
        var disqus_shortname = '';
        if (disqus_shortname) {
            var	disqus_url = "http://elclawoffice.mn/post/136/123";
            (function() {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        }
    </script> */}
          </div>
        </div>
      </section>
      <input
        type="hidden"
        value="/media/elc/content/huudasnii_background/corporate/shutterstock_363629945.jpg"
        id="sqqs"
      />
    </div>
  );
}
