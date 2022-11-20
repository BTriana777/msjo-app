import React from "react";
import Carousel from "react-material-ui-carousel";
import MesaLogoWhite from "../../assets/imgs/mesa_logo_white.svg";
import { BsArrowDownCircleFill } from "react-icons/bs";
import styles from './Portal.style.module.scss';

const imgsCarousel = [
  {
    name: "Cañasgordas - 2019",
    url: "https://i.imgur.com/Gl6gcwy.jpg",
  },
  {
    name: "Ebéjico - 2021",
    url: "https://i.imgur.com/uFV0ojf.jpg",
  },
  {
    name: "Dabeiba - 2022",
    url: "https://i.imgur.com/MgWwYel.jpg",
  },
];

const Portal = () => (
    <div className={styles['screen-main home-main']}>
      <div className={styles["home-main-firts"]}>
        <div className={styles["back-color"]}></div>
        <Carousel
          className={styles["back-container"]}
          interval={2000}
          navButtonsAlwaysInvisible={true}
          indicators={false}
        >
          {imgsCarousel.map((data, i) => (
            <div
              className={styles["back-container-img"]}
              style={{ backgroundImage: `url(${data.url})` }}
            ></div>
          ))}
        </Carousel>

        <div className={styles["home-main-firts-content"]}>
          <img src={MesaLogoWhite} alt="logo" />
          <div className={styles["text"]}>
            <h1>Mesa Subregional de Juventud</h1>
            <p>Mas que una promesa, somos una realidad.</p>
          </div>
        </div>

        <BsArrowDownCircleFill className={styles["arrow-icon"]} color="white" size={28} />
      </div>
    </div>
  );

export default Portal; 