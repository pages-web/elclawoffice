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
            Хонг Конгийн Хөрөнгийн Биржид Бонд гаргах ажил (2010-2014)
          </h2>

          <div className="back-white">
            <p></p>
            <p>
              Монголиан Майнинг Корпорацийн дотоодын зөвлөхөөр ажиллаж,&nbsp;700
              сая ам.долларын IPO болон 600 сая ам.долларын Бондыг Хонконгын
              хөрөнгийн бирж дээр 2010 онд анхдагч хувьцаа, 2012 он болон 2014
              онд өрийн бичиг шинээр гаргаж, хөрөнгө босгох ажиллагаанд тус тус
              оролоцож, эрх зүйн дүн шинжилгээ хийж хамтран ажилласан.{" "}
            </p>
            <span>
              <i className="fa fa-clock-o"></i> 2019.07.17
            </span>

            <div id="disqus_thread"></div>
            {/* <script>
        var disqus_shortname = '';
        if (disqus_shortname) {
            var	disqus_url = "http://elclawoffice.mn/post/145/123";
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
