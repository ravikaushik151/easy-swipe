import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bank = () => {
  useEffect(() => {
    // Ensure jQuery and OwlCarousel are available and initialize OwlCarousel
    if (window.$ && window.jQuery) {
      const $ = window.$;
      require('owl.carousel');

      // Initialize the carousel
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
          0: { items: 1 },
          600: { items: 3 },
          1000: { items: 5 }
        }
      });
    }
  }, []);

  const items = [
    { src: '/img/visa.png', alt: 'Visa' },
    { src: '/img/amrexp.png', alt: 'American Express' },
    { src: '/img/master.png', alt: 'MasterCard' },
    { src: '/img/one-caed.png', alt: 'One Card' },
    { src: '/img/Dinesr-club.png', alt: 'Diners Club' },
    { src: '/img/RuPay.png', alt: 'RuPay' },
  ];

  return (
    <section className={`py-3 bg-light`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="owl-carousel owl-theme py-3 mb-0">
              {items.map((item, index) => (
                <div className="item" key={index}>
                  <a data-fancybox={`gallery-${index}`} href={item.src} data-expand="-1">
                    <img src={item.src} alt={item.alt} className="img-fluid" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bank;
