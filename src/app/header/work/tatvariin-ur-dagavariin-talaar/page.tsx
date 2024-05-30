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
            Татварын үр дагаварын талаар хууль зүйн дүгнэлт боловсруулсан (2018)
          </h2>

          <div className="back-white">
            <p>
              “У” ХНН болон ОХУ-ын “Э” ХК нарын хооронд байгуулсан гэрээний
              хэрэгжилт, компани эсхүл төлөөний газар байгуулах, эсхүл гэрээний
              үүргийг гуравдагч этгээдэд шилжүүлэх асуудал, эдгээр байгууллагыг
              бүртгүүлэх журам, холбогдох татварын үр дагаварын талаар хууль
              зүйн дүгнэлт боловсруулсан (2018);
            </p>
            <span>
              <i className="fa fa-clock-o"></i> 2019.07.17
            </span>

            <div id="disqus_thread"></div>
            {/* <script>
        var disqus_shortname = '';
        if (disqus_shortname) {
            var	disqus_url = "http://elclawoffice.mn/post/138/123";
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
