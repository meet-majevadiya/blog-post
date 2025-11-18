import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";
import { getPostSlugs, getPostBySlug } from "../../lib/posts";
import styles from "../../styles/BlogPost.module.css";
import Comments from "@/components/Comments";
import Explore from "@/components/Explore";
import TourGuide from "@/components/TourGuide";
import AddComment from "@/components/AddComment";
import Articles from "@/components/Articles";
import Slider from "react-slick";
import { authors } from "@/posts/mock";

// Dynamically load the Markdown editor only when requested
const EditEditor = dynamic(() => import("../../components/EditEditor"), {
  ssr: false,
  loading: () => <p>Loading editor…</p>,
});

type PostContent = string;

type PostProps = {
  slug: string;
  meta: { title: string; date: string | null; description?: string };
  content: {
    first: PostContent[];
    quote: PostContent;
    second: PostContent[];
  };
};

const AUTHOR = {
  name: "Alex Carter",
  role: "Certified Functional Trainer",
  avatar: "/images/user/user.png",
  bio: "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
};

export default function Post({ post }: { post: PostProps }) {
  const authorSliderRef = useRef<any>(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Head>
        <title>{post.meta.title} — My Blog </title>
        <meta name="description" content={post.meta.description || ""} />
      </Head>

      <div>
        <section className={styles.hero}>
          <p className={styles.hero__eyebrow}>
            <span className={styles.hero__eyebrow__link}>Home</span> / Articles
            /
          </p>
          <p className={styles.hero__title}>{post.meta.title}</p>
        </section>

        <div className={styles.hero__imageWrapper}>
          <Image
            src="/images/thumbnail/thumb-1.png"
            alt="Athlete training in a gym"
            width={1440}
            height={640}
            priority
            className={`${styles.hero__image} ${styles.hero__desktop}`}
          />
          <Image
            src="/images/thumbnail/thumb-2.png"
            alt="Athlete training in a gym"
            width={1440}
            height={640}
            priority
            className={`${styles.hero__image}  ${styles.hero__mobile}`}
          />
        </div>

        <div className={styles.page}>
          <div className={styles.contentWrapper}>
            <section className={styles.layout}>
              <article className={styles.article}>
                <header className={styles.article__header}>
                  <div className={styles.authorCard}>
                    <Image
                      src={AUTHOR.avatar}
                      alt={`${AUTHOR.name} profile photo`}
                      width={64}
                      height={64}
                      className={styles.authorCard__avatar}
                    />
                    <div>
                      <p className={styles.authorCard__name}>{AUTHOR.name}</p>
                      <div className={styles.article__actions__mobile}>
                        23 January 2025
                      </div>
                    </div>
                  </div>
                  <div className={styles.article__actions__desktop}>
                    23 January 2025
                  </div>
                </header>

                <section
                  className={`${styles.article__body} ${styles.mobileOrder1}`}
                >
                  {post.content.first?.map((item, idx) => {
                    return (
                      <p key={idx} className={styles.article__paragraph}>
                        {item}
                      </p>
                    );
                  })}
                  <blockquote className={styles.article__quote}>
                    {post.content.quote}
                  </blockquote>
                  {post.content.second?.map((item, idx) => {
                    return (
                      <p key={idx} className={styles.article__paragraph}>
                        {item}
                      </p>
                    );
                  })}
                </section>
                <div
                  className={`${styles.slide_wrapper} ${styles.aboutAuthorDesktop}`}
                >
                  <Slider {...settings} ref={authorSliderRef}>
                    {authors?.map((item, idx) => (
                      <section className={styles.aboutAuthor} key={idx}>
                        <h3 className={styles.aboutAuthor__name}>
                          About {item.name}
                        </h3>
                        <div className={styles.aboutAuthor__content}>
                          <Image
                            src={item.avatar}
                            alt={`${AUTHOR.name} headshot`}
                            width={100}
                            height={100}
                          />
                          <p className={styles.aboutAuthor__bio}>{item.bio}</p>
                        </div>
                      </section>
                    ))}
                  </Slider>
                </div>

                <div
                  className={`${styles.slide__btn_wrapper} ${styles.aboutAuthorDesktop}`}
                >
                  <button
                    onClick={() => authorSliderRef.current?.slickPrev()}
                    className={styles.slide__button}
                  >
                    <Image
                      src="/Images/icons/prev.png"
                      alt={`prev`}
                      width={16}
                      height={16}
                    />{" "}
                    Previous
                  </button>
                  <button
                    onClick={() => authorSliderRef.current?.slickNext()}
                    className={styles.slide__button}
                  >
                    <Image
                      src="/Images/icons/next.png"
                      alt={`next`}
                      width={16}
                      height={16}
                    />{" "}
                    Next
                  </button>
                </div>
                <div className={`${styles.aboutAuthorDesktop}`}>
                  <div className={styles.slide__subline}>
                    <p>5 Tips for Better Cardio Sessions</p>
                    <p>Meal Prep Basics for Gym Enthusiasts</p>
                  </div>
                </div>
              </article>
              <aside className={styles.sidebar}>
                <div className={styles.mobileOrder2}>
                  <Explore />
                </div>
                <div className={styles.mobileOrder3}>
                  <TourGuide />
                </div>
              </aside>
            </section>
            <div className={`${styles.mobileOrder4}`}>
              <Comments slug={post.slug} />
            </div>
            <div className={`${styles.mobileOrder5}`}>
              <AddComment />
            </div>
            <div
              className={`${styles.slide_wrapper} ${styles.mobileOrder6} ${styles.aboutAuthorMobile}`}
            >
              <Slider {...settings} ref={authorSliderRef}>
                {authors?.map((item, idx) => (
                  <section className={styles.aboutAuthor} key={idx}>
                    <h3 className={styles.aboutAuthor__name}>
                      About {item.name}
                    </h3>
                    <div className={styles.aboutAuthor__content}>
                      <Image
                        src={item.avatar}
                        alt={`${AUTHOR.name} headshot`}
                        width={100}
                        height={100}
                      />
                      <p className={styles.aboutAuthor__bio}>{item.bio}</p>
                    </div>
                  </section>
                ))}
              </Slider>
            </div>
            <div
              className={`${styles.mobileOrder6} ${styles.aboutAuthorMobile}`}
            >
              <div className={styles.slide__btn_wrapper}>
                <button
                  onClick={() => authorSliderRef.current?.slickPrev()}
                  className={styles.slide__button}
                >
                  <Image
                    src="/Images/icons/prev.png"
                    alt={`prev`}
                    width={16}
                    height={16}
                  />{" "}
                  Previous
                </button>
                <button
                  onClick={() => authorSliderRef.current?.slickNext()}
                  className={styles.slide__button}
                >
                  <Image
                    src="/Images/icons/next.png"
                    alt={`next`}
                    width={16}
                    height={16}
                  />{" "}
                  Next
                </button>
              </div>
            </div>
            <div className={`${styles.mobileOrder7}`}>
              <Articles />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return {
    props: { post },
    revalidate: 60, // optional ISR: regenerate at most every 60s
  };
}
