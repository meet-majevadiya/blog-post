import { useEffect, useState } from 'react';
import styles from '../styles/BlogPost.module.css';


function CommentSkeleton() {
    return (
        <div className={styles['comment'] + ' ' + styles['comment--skeleton']}>
            <div className={styles['comment__avatar']} />
            <div className={styles['comment__body']}>
                <div className={styles['skeleton-line']} style={{ width: '40%' }} />
                <div className={styles['skeleton-line']} style={{ width: '70%' }} />
            </div>
        </div>
    );
}


export default function Comments({ slug }: { slug: string }) {
    const [comments, setComments] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);


    useEffect(() => {
        let mounted = true;
        setLoading(true);
        setError(null);


        // Mock fetch: replace with real API in production
        const fetchComments = async () => {
            try {
                await new Promise((r) => setTimeout(r, 800));
                // Simulated data
                const data = [
                    { id: 1, author: 'Jane', body: 'Great post! Thanks for sharing.' },
                    { id: 2, author: 'Alex', body: 'I found this really useful.' },
                ];
                if (mounted) {
                    setComments(data);
                    setLoading(false);
                }
            } catch (err) {
                if (mounted) {
                    setError('Failed to load comments.');
                    setLoading(false);
                }
            }
        };


        fetchComments();
        return () => {
            mounted = false;
        };
    }, [slug]);


    return (
        <aside className={styles['comments']} aria-live="polite">
            <h3 className={styles['comments__title']}>Comments</h3>
            {loading && (
                <div>
                    <CommentSkeleton />
                    <CommentSkeleton />
                </div>
            )}
        </aside>
    );
}