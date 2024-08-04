// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
/*import Bank from '../components/Bank';*/

export default function Home() {
  return (
    <>
    <Head>
      <title>Home Page Title</title>
      <meta name="description" content="Description of the home page" />
    </Head>
    <section style={{marginTop : '80px'}}>
        <Image src="/img/banner.jpg" className="w-100" alt="Easy Swipe" width={1920} height={827} />
        <a data-bs-target="#exampleModal1" data-bs-toggle="modal" title="" style={{
                position: 'absolute',
                left: '51%',
                top: '73%',
                width: '15%',
                height: '7%',
                zIndex: 2,
                cursor: 'pointer',
              }}></a>
    </section>
    
    
    </>
  );
}
