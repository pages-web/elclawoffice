const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return <html>
    <head>
      <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/css/reset.css" />
      <link rel="stylesheet" href="/static/css/gallery_styles.css" />
      <link rel="stylesheet" href="/static/css/main.css" />
      <link rel="stylesheet" href="/static/css/mobile.css" />
      <link rel="stylesheet" href="/static/css/styles.css" />
      <link rel="stylesheet" href="/static/owl-carousel/animate.css" />
      <link rel="stylesheet" href="/static/owl-carousel/owl.carousel.css" />
      <link rel="stylesheet" href="/static/owl-carousel/owl.theme.css" />
      <link rel="stylesheet" href="/static/owl-carousel/owl.transitions.css"/>
      <link rel="stylesheet" href="/static/owl-carousel/owl-ken-burns.css" />
      <link rel="stylesheet" href="/static/font-awesome-4.3.0/css/font-awesome.css" />
      <link rel="stylesheet" href="/static/gerege/gerege-codes.css" />
      <link rel="stylesheet" href="/static/gerege/gerege-embedded.css" />
      <link rel="stylesheet" href="/static/gerege/gerege-ie7-codes.css" />
      <link rel="stylesheet" href="/static/gerege/gerege-ie7.css" />
      <link rel="stylesheet" href="/static/gerege/gerege.css" />
      <link rel="stylesheet" href="/static/swiper/swiper.min.css" />
    </head>
    <body>
    {children}
    </body>
  </html>
};

export default RootLayout;
