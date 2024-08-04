// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'; // Import global CSS
import Header from '../components/Header';
import Footer from '../components/Footer';
import '@fancyapps/fancybox/dist/jquery.fancybox.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Load jQuery
    import('jquery').then($ => {
      window.$ = $;
      window.jQuery = $;

      // Load Fancybox JavaScript
      import('@fancyapps/fancybox').then(Fancybox => {
        // Optionally initialize Fancybox here if needed
      }).catch(err => console.error('Error loading Fancybox:', err));
    }).catch(err => console.error('Error loading jQuery:', err));
  }, []);
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
