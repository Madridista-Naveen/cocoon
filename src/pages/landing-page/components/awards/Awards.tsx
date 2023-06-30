import React, { Fragment } from "react";
import styles from './awards.module.css'; 
import img1 from './assets/Wharton.png';
import img2 from './assets/Entrepreneur.png';
import img3 from './assets/CNBC.png';
import img4 from './assets/GSV.png';
import img5 from './assets/IC3.png';
import img6 from './assets/Umagine.png';

interface AwardsInteface {
  src: string;
}

function Awards() {
  const awards: AwardsInteface[] = [
    { src:img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6},
  ];

  return (
    <Fragment>
      <section className={styles.container}>
        <div className={styles.awardSection + ' text-center'}>
          <p className={styles.awardHeader}>Awards and Recognitions</p>
          <p className={styles.awardContent}>
            Unleashing Excellence: Celebrating Our Achievements!
          </p>
          <div className={"flex flex-wrap justify-between w-100 mt-5 place-content-center" +styles.awardImages}>
            {awards.map((award: AwardsInteface, index) => (
              <img className={styles.imgAward} src={award.src} alt={`image-${index + 1}`} />
            ))}
          </div>
          <button className={styles.regBtn + " mb-4 cursor-default btn-lg"} type="button"> View all awards </button>
        </div>
      </section>
    </Fragment>
  );
}

export default Awards;
