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
            Боловсрол сургалтын байгууллагуудад зөвлөх, бүртгүүлэх ажиллагаа
            (2015-2019)
          </h2>

          <div className="back-white">
            <p>
              Техник технологийн дээд сургууль, Монгол Германы хамтарсан 38-р
              сургууль, Интернэшнл скүүл, Монгени цогцолбор сургууль зэрэг
              боловсрол сургалтын байгууллагуудад зөвлөх үйлчилгээ үзүүлж
              ажилласан.
            </p>
            <span>
              <i className="fa fa-clock-o"></i> 2016.09.20
            </span>

            <div id="disqus_thread"></div>
            {/* <script>
        var disqus_shortname = '';
        if (disqus_shortname) {
            var	disqus_url = "http://elclawoffice.mn/post/47/123";
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
