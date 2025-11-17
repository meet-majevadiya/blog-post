import Head from "next/head";
import { getPostSlugs, getPostBySlug } from "../../lib/posts";
import dynamic from "next/dynamic";
import { useState } from "react";
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

export default function Post({
  post,
}: {
  post: {
    slug: string;
    meta: { title: string; date: string; description?: string };
    content: string;
  };
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <Head>
        <title>{post.meta.title} — My Blog </title>
        <meta name="description" content={post.meta.description || ""} />
      </Head>
      <div className={styles["post"]}>
        <header className={styles["post__header"]}>
          <p className={styles["post__title"]}> {post?.meta?.title} </p>
        </header>
        <img src="/Images/thumbnail/thumb-1.png" />
        <div>
          <img src="/Images/user/user.png" />
          <p>Alex Carter</p>
          <p>{new Date(post.meta.date).toDateString()}</p>

          {/* need to display the other content from mock.json here */}

          <Explore />
          <TourGuide />
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
