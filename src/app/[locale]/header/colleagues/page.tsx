import React from "react";

export default function page() {
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        display: "block",
        backgroundImage: "url(/image/huudasnii_background-corporate-crop9.png)",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <section className="container">
        <div className="news-list-main nw-padding-top">
          <div className="row">
            <div className="clearfix"></div>
          </div>
          <div className="clearfix"></div>
        </div>
      </section>
      <input type="hidden" value="" id="sqqs" />
    </div>
  );
}

