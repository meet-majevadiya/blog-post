import Image from "next/image";
import styles from "../styles/BlogPost.module.css";

const guideList = [
  {
    id: 1,
    name: "Miranda Rachel",
    location: "Jombang, Jawa timur",
    img: "/images/user/user.png",
  },
  {
    id: 2,
    name: "Jackson Reid",
    location: "Jombang, Jawa timur",
    img: "/images/user/user.png",
  },
  {
    id: 3,
    name: "Paul Ellis",
    location: "Jombang, Jawa timur",
    img: "/images/user/user.png",
  },
];

export default function TourGuide() {
  return (
    <section className={styles.sidebarCard}>
      <div className={styles.sidebarCard__header}>Tour Guides</div>

      <ul className={styles.guideList}>
        {guideList.map((item) => (
          <li key={item.id} className={styles.guideList__wrapper}>
            <div className={styles.guideList__item}>
              <Image
                src={item.img}
                width={48}
                height={48}
                alt={item.name}
                className={styles.guideList__avatar}
              />
              <div>
                <p className={styles.guideList__name}>{item.name}</p>
                <p className={styles.guideList__role}>{item.location}</p>
              </div>
            </div>
            <div className={styles.guideList__rating}>{'★'.repeat(5)} (4.0)</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
