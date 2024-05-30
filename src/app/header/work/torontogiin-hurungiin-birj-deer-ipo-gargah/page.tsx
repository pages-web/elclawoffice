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
            Торонтогийн хөрөнгийн бирж дээр IPO гаргах ажил (2018 оны 5-р сар)
          </h2>

          <div className="back-white">
            <p>
              Монголын уул, уурхайн салбарт үйл ажиллагаа явуулдаг Стэп Голд
              ХХК-ийн толгой компани болох Степ Голд Лимитэд компанийг Канадын
              Торонтогийн хөрөнгийн биржид бүртгэлтэй, нээлттэй компани болох
              ажилд Монгол Улсын хуулиар дүгнэлт боловсруулсан.
            </p>
            <span>
              <i className="fa fa-clock-o"></i> 2016.09.20
            </span>

            <div id="disqus_thread"></div>
            {/* <script>
        var disqus_shortname = '';
        if (disqus_shortname) {
            var	disqus_url = "http://elclawoffice.mn/post/45/123";
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
