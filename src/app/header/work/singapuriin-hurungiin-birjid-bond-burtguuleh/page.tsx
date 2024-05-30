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
            Сингапурын Хөрөнгийн Биржид бонд бүртгүүлэх ажил (2019 оны 4-р сар)
          </h2>

          <div className="back-white">
            <p>
              Хонг Конгийн Хөрөнгийн Биржид бүртгэлтэй Монголиан Майнинг
              Корпорэйшн, түүний шууд бус охин компани болох Энержи Ресурс
              ХХК-ийн олон улсын хөрөнгийн зах зээлд өрийн бичиг гаргах
              ажиллагаанд зөвлөсөн.
            </p>
            <span>
              <i className="fa fa-clock-o"></i> 2016.09.20
            </span>

            <div id="disqus_thread"></div>
            {/* <script>
        var disqus_shortname = '';
        if (disqus_shortname) {
            var	disqus_url = "http://elclawoffice.mn/post/50/123";
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
