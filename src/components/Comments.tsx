import { useEffect, useState } from "react";
import styles from "../styles/BlogPost.module.css";
import Image from "next/image";

type Comment = {
  id: number;
  author: string;
  rating: number;
  body: string;
  date: string;
};

function CommentSkeleton() {
  return (
    <div className={`${styles.comment} ${styles["comment--skeleton"]}`}>
      <div className={styles.comment__avatar} />
      <div className={styles.comment__body}>
        <div className={styles["skeleton-line"]} style={{ width: "40%" }} />
        <div className={styles["skeleton-line"]} style={{ width: "70%" }} />
      </div>
    </div>
  );
}

const mockApi = async (): Promise<Comment[]> => {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return [
    {
      id: 1,
      author: "Sarah Lynn",
      rating: 5,
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
      date: "2 days ago",
    },
    {
      id: 2,
      author: "Diego Martin",
      rating: 4,
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
      date: "1 week ago",
    },
  ];
};

export default function Comments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const fetchComments = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await mockApi();
      setComments(data);
    } catch (err) {
      setError("Failed to load comments.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await mockApi();
        if (mounted) {
          setComments(data);
        }
      } catch {
        if (mounted) {
          setError("Failed to load comments.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, [slug]);

  return (
    <section className={styles.comments} aria-live="polite">
      <header className={styles.comments__header}>
        <h3 className={styles.comments__title}>Comments</h3>
      </header>

      {loading && (
        <div aria-busy="true">
          <CommentSkeleton />
          <CommentSkeleton />
        </div>
      )}

      {error && !loading && (
        <div className={styles.comments__error}>
          <p>{error}</p>
          <button
            type="button"
            onClick={fetchComments}
            className={styles.buttonLink}
          >
            Retry
          </button>
        </div>
      )}

      {!loading &&
        !error &&
        comments.map((comment) => (
          <article key={comment.id} className={styles.comment}>
            <Image
              src="/images/user/user.png"
              alt={`profile photo`}
              width={64}
              height={64}
              className={styles.authorCard__avatar}
            />
            <div className={styles.comment__body}>
              <div className={styles.comment__seperate}>
                <div className={styles.comment__topLine}>
                  <span className={styles.comment__author}>
                    {comment.author}
                  </span>
                  <span className={styles.comment__rating}>
                    {"★".repeat(comment.rating)}
                    <span className={styles.comment__rating_number}>(5.0)</span>
                  </span>
                </div>
                <span className={styles.comment__date}>22 jul 2022</span>
              </div>
              <p className={styles.comment__text}>{comment.body}</p>
            </div>
          </article>
        ))}
    </section>
  );
}
