import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { getPostSlugs, getPostBySlug } from "../../lib/posts";
import styles from "../../styles/BlogPost.module.css";
import Comments from "@/components/Comments";
import Explore from "@/components/Explore";
import TourGuide from "@/components/TourGuide";
import AddComment from "@/components/AddComment";
import Articles from "@/components/Articles";

// Dynamically load the Markdown editor only when requested
const EditEditor = dynamic(() => import("../../components/EditEditor"), {
  ssr: false,
  loading: () => <p>Loading editor…</p>,
});

type PostContent = Record<string, string>;

type PostProps = {
  slug: string;
  meta: { title: string; date: string | null; description?: string };
  content: PostContent;
};

const AUTHOR = {
  name: "Alex Carter",
  role: "Certified Functional Trainer",
  avatar: "/images/user/user.png",
  bio: "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
};

export default function Post({ post }: { post: PostProps }) {
  const [isEditing, setIsEditing] = useState(false);

  const { paragraphs, quote } = useMemo(() => {
    const { quote: quoteCopy, ...rest } = post.content || {};
    const paragraphList = Object.values(rest).filter(Boolean);

    return {
      paragraphs: paragraphList,
      quote: quoteCopy,
    };
  }, [post.content]);

  const publishedDate = post.meta.date
    ? new Date(post.meta.date).toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "—";

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
            className={styles.hero__image}
          />
        </div>

        <div className={styles.page}>
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
                  </div>
                </div>
                <div className={styles.article__actions}>23 January 2025</div>
              </header>

              <section className={styles.article__body}>
                {paragraphs.map((text, idx) => (
                  <p key={idx} className={styles.article__paragraph}>
                    {text}
                  </p>
                ))}

                {quote && (
                  <blockquote className={styles.article__quote}>
                    {quote}
                  </blockquote>
                )}
              </section>

              <section className={styles.aboutAuthor}>
                <h3 className={styles.aboutAuthor__name}>About {AUTHOR.name}</h3>
                <div className={styles.aboutAuthor__content}>
                  <Image
                    src={AUTHOR.avatar}
                    alt={`${AUTHOR.name} headshot`}
                    width={100}
                    height={100}
                  />
                  <p className={styles.aboutAuthor__bio}>{AUTHOR.bio}</p>
                </div>
              </section>

              {isEditing && (
                <div className={styles.editorPanel}>
                  <EditEditor
                    initialValue={
                      paragraphs.join("\n\n") + `\n\n${quote ?? ""}`
                    }
                  />
                </div>
              )}
            </article>

            <aside className={styles.sidebar}>
              <Explore />
              <TourGuide />
            </aside>
          </section>
          <Comments slug={post.slug} />
          <AddComment />
          <Articles />
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
