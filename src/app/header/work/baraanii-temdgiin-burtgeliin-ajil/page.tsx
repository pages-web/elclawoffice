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
            Барааны тэмдгийн бүртгэлийн ажил (2008-2019)
          </h2>

          <div className="back-white">
            <p></p>
            <p>
              “GRANDKHAAN” (олон улсын бүртгэл), “CENTRAL TOWER”, “MexiKhan”,
              “CODE Pâtisserie &amp; Plus”, “ХООЛОНДОО”, “Mongolian academy of
              law”, “УБ СОНГДО ЭМНЭЛЭГ”, “МонГени”, “MODERN NOMADS”, “NOMAD
              LEGENDS”, “Double Shot”, “CROCUS Event Hall”, “Silk Road Bazaar”,
              “TRANSWEST MONGOLIA”, “ҮЗЭЛ БОДЛЫН ЗӨРӨГ”, “Coffee with Sugar”,
              “CHEESE REPUBLIC”, “Био Иод – Урт насал Удаан жарга”,
              “VANSEMBERUU”, “KOMATSU”, “Bulgogi Brothers” зэрэг барааны
              тэмдгийг тус тус бүртгүүлсэн.
            </p>
            <p></p>
            <p></p>
            <span>
              <i className="fa fa-clock-o"></i> 2019.07.17
            </span>

            <div id="disqus_thread"></div>
            {/* <script>
        var disqus_shortname = '';
        if (disqus_shortname) {
            var	disqus_url = "http://elclawoffice.mn/post/144/123";
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
