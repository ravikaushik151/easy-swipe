// pages/index.js
import Bank from '../components/Bank';

export default function Home() {
  return (
    <>
      <section>
        <img src="/img/banner.jpg" className="w-100" alt="Easy Swipe" />
          <a data-bs-target="#exampleModal1" data-bs-toggle="modal" title="" style={{
            position: 'absolute',
            left: '35.11%',
            top: '87.29%',
            width: '29.98%',
            height: '4.63%',
            zIndex: 2,
            cursor: 'pointer',
          }}></a>
    </section>
    <Bank />
    
    </>
  );
}
