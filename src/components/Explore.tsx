import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import styles from "../styles/BlogPost.module.css";

const exploreItems = [
  {
    id: 1,
    title: "Culinary",
    date: "13 Jun 2022",
    subLine: "Two women in local stand are chatting during morning.",
    img: "/images/explore/explore-1.png",
  },
  {
    id: 2,
    title: "Outdoors",
    date: "18 Jun 2022",
    subLine: "Best sunrise spots for trail runners in Bali.",
    img: "/images/explore/explore-2.png",
  },
  {
    id: 3,
    title: "Wellness",
    date: "21 Jun 2022",
    subLine: "Breathing exercises for faster recovery.",
    img: "/images/explore/explore-3.png",
  },
];

export default function Explore() {
  const sliderRef = useRef<any>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.sidebarCard}>
      <div className={styles.sidebarCard__header}>Explore more</div>

      {/* Desktop List View */}
      <ul className={styles.exploreList}>
        {exploreItems.map((item) => (
          <li key={item.id} className={styles.exploreList__item}>
            <Image
              src={item.img}
              alt={item.title}
              width={301}
              height={165}
              className={styles.exploreList__image}
            />
              <div className={styles.exploreList__wrapper}>
                <p className={styles.exploreList__title}>{item.title}</p>
                <p className={styles.exploreList__date}>| {" "}{item.date}</p>
              </div>
              <p className={styles.exploreList__excerpt}>{item.subLine}</p>
          </li>
        ))}
      </ul>

      {/* Mobile Slider View */}
      <div className={styles.exploreSlider}>
        <Slider {...settings} ref={sliderRef}>
          {exploreItems.map((item) => (
            <div key={item.id} className={styles.exploreList__item}>
              <Image
                src={item.img}
                alt={item.title}
                width={301}
                height={165}
                className={styles.exploreList__image}
              />
              <div className={styles.exploreList__wrapper}>
                <p className={styles.exploreList__title}>{item.title}</p>
                <p className={styles.exploreList__date}>| {" "}{item.date}</p>
              </div>
              <p className={styles.exploreList__excerpt}>{item.subLine}</p>
            </div>
          ))}
        </Slider>
        <div className={styles.exploreSlider__buttons}>
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className={styles.slide__button}
          >
            <Image
              src="/Images/icons/prev.png"
              alt="prev"
              width={16}
              height={16}
            />{" "}
            Previous
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className={styles.slide__button}
          >
            <Image
              src="/Images/icons/next.png"
              alt="next"
              width={16}
              height={16}
            />{" "}
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
