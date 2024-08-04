import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Dynamically import OwlCarousel component (client-side only)
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });

const Bank = () => {
  const items = [
    { src: '/img/visa.png', alt: 'Visa' },
    { src: '/img/amrexp.png', alt: 'American Express' },
    { src: '/img/master.png', alt: 'MasterCard' },
    { src: '/img/one-caed.png', alt: 'One Card' },
    { src: '/img/Dinesr-club.png', alt: 'Diners Club' },
    { src: '/img/RuPay.png', alt: 'RuPay' },
  ];

  return (
    <section className="py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              className="owl-theme py-3 mb-0"
              loop
              margin={10}
              nav={false}
              dots={false}
              autoplay
              autoplayTimeout={3000}
              smartSpeed={1000} // Smooth scrolling speed in milliseconds
              responsive={{
                0: { items: 1 },
                600: { items: 3 },
                1000: { items: 5 },
              }}
            >
              {items.map((item, index) => (
                <div className="item" key={index}>
                  <a data-fancybox={`gallery-${index}`} href={item.src} data-expand="-1">
                  <Image src={item.src} alt={item.alt} className="img-fluid"  width={213} height={56}  />
                  </a>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bank;
