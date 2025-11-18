import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import styles from "../styles/BlogPost.module.css";
import { authors } from "@/posts/mock";

export default function Author() {
  const authorSliderRefDesktop = useRef<any>(null);
  const authorSliderRefMobile = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* Desktop Version - Shows First */}
      <div className={styles.authorSectionDesktop}>
        <div className={styles.slide_wrapper}>
          <Slider {...settings} ref={authorSliderRefDesktop}>
            {authors?.map((item, idx) => (
              <section className={styles.aboutAuthor} key={idx}>
                <h3 className={styles.aboutAuthor__name}>
                  About {item.name}
                </h3>
                <div className={styles.aboutAuthor__content}>
                  <Image
                    src={item.avatar}
                    alt={`${item.name} headshot`}
                    width={100}
                    height={100}
                  />
                  <p className={styles.aboutAuthor__bio}>{item.bio}</p>
                </div>
              </section>
            ))}
          </Slider>
        </div>
        <div className={styles.slide__btn_wrapper}>
          <button
            onClick={() => authorSliderRefDesktop.current?.slickPrev()}
            className={styles.slide__button}
          >
            <Image
              src="/images/icons/prev.png"
              alt="prev"
              width={16}
              height={16}
            />{" "}
            Previous
          </button>
          <button
            onClick={() => authorSliderRefDesktop.current?.slickNext()}
            className={styles.slide__button}
          >
            <Image
              src="/images/icons/next.png"
              alt="next"
              width={16}
              height={16}
            />{" "}
            Next
          </button>
        </div>
        <div className={styles.slide__subline}>
          <p>5 Tips for Better Cardio Sessions</p>
          <p>Meal Prep Basics for Gym Enthusiasts</p>
        </div>
      </div>

      {/* Mobile Version - Shows in Order 6 */}
      <div className={`${styles.authorSectionMobile} ${styles.mobileOrder6}`}>
        <div className={styles.slide_wrapper}>
          <Slider {...settings} ref={authorSliderRefMobile}>
            {authors?.map((item, idx) => (
              <section className={styles.aboutAuthor} key={idx}>
                <h3 className={styles.aboutAuthor__name}>
                  About {item.name}
                </h3>
                <div className={styles.aboutAuthor__content}>
                  <Image
                    src={item.avatar}
                    alt={`${item.name} headshot`}
                    width={100}
                    height={100}
                  />
                  <p className={styles.aboutAuthor__bio}>{item.bio}</p>
                </div>
              </section>
            ))}
          </Slider>
        </div>
        <div className={styles.slide__btn_wrapper}>
          <button
            onClick={() => authorSliderRefMobile.current?.slickPrev()}
            className={styles.slide__button}
          >
            <Image
              src="/images/icons/prev.png"
              alt="prev"
              width={16}
              height={16}
            />{" "}
            Previous
          </button>
          <button
            onClick={() => authorSliderRefMobile.current?.slickNext()}
            className={styles.slide__button}
          >
            <Image
              src="/images/icons/next.png"
              alt="next"
              width={16}
              height={16}
            />{" "}
            Next
          </button>
        </div>
      </div>
    </>
  );
}

