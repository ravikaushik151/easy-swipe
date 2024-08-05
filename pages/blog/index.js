// pages/blog/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '../../data/posts';

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog Page</title>
                <meta name="description" content="Description of the blog page" />
            </Head>
            <section className="custom-header" style={{ background: "url('/img/blog-header.jpg')" }}></section>

            <section className="mb-4" style={{ marginTop: '-80px' }}>
                <div className="container">
                    <div className="row d-flex align-content-center justify-content-center">
                        <div className="title text-center">
                            <h2 className="text-main">Blogs</h2>
                        </div>

                        <div className="row">
                            {posts.map((post) => (
                                <div className="col-md-6 mb-3" key={post.slug}>
                                    <div className="services-item shine-animate-item bg-white shadow-sm">
                                        <div className="services-thumb">
                                            <Link href={`/blog/${post.slug}`}>
                                                <Image
                                                    src={post.image}
                                                    className="img-fluid"
                                                    alt={post.title}
                                                    width={500}
                                                    height={500}
                                                />
                                            </Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="fa-solid fa-barcode"></i>
                                            </div>
                                            <h4 className="title">
                                                <Link href={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </h4>
                                            <p>
                                                {post.excerpt}
                                            </p>
                                            <Link href={`/blog/${post.slug}`} className="btn btn-danger text-white">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
