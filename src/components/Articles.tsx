import Image from 'next/image';
import styles from '../styles/BlogPost.module.css';

const articlesArr = [
    {
        id: 1,
        title: 'The Ultimate Guide to Full-Body Workouts',
        description:
            'Discover exercises that target every muscle group, helping you build strength and endurance.',
        user: 'Alex Carter',
        img: '/images/articles/articles-1.png'
    },
    {
        id: 2,
        title: '10 Tips for Faster Cardio Sessions',
        description: 'Discover exercises that target every muscle group, helping you build strength and endurance.',
        user: 'Alex Carter',
        img: '/images/articles/articles-2.png'
    },
    {
        id: 3,
        title: 'Meal Prep Basics for Gym Lovers',
        description: 'Discover exercises that target every muscle group, helping you build strength and endurance.',
        user: 'Alex Carter',
        img: '/images/articles/articles-3.png'
    },
    {
        id: 4,
        title: 'Active Core Strength Routine',
        description: 'Discover exercises that target every muscle group, helping you build strength and endurance.',
        user: 'Alex Carter',
        img: '/images/articles/articles-4.png'
    }
];

export default function Articles() {
    return (
        <section className={styles.related}>
            <div className={styles.related__header}>
                <h1>Related articles</h1>
            </div>
            <div className={styles.related__grid}>
                {articlesArr.map((item) => (
                    <article key={item.id} className={styles.articleCard}>
                        <Image
                            src={item.img}
                            width={280}
                            height={180}
                            alt={item.title}
                            className={styles.articleCard__image}
                        />
                        <div className={styles.articleCard__body}>
                            <h3 className={styles.articleCard__title}>{item.title}</h3>
                            <p className={styles.articleCard__description}>{item.description}</p>
                        </div>
                        <footer className={styles.articleCard__footer}>
                            <span>By {item.user}</span>
                        </footer>
                    </article>
                ))}
            </div>
        </section>
    );
}
