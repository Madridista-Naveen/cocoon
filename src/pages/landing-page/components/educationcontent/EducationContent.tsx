import React, { Fragment } from "react";
import styles from './educationContent.module.css'
import img1 from './assets/Concept.png'
import img2 from './assets/Cognitive.png'
import img3 from './assets/Creative.png'
import img4 from './assets/Experience.png'
import img from './assets/image.png'
import vector from './assets/Vector 7.png'
interface EducationContentInterface  {
  source:string;
  header:string;
  content:string;
}

const EducationContest = () => {
  const EducationContest:EducationContentInterface[] = [
    {
      source: img1,
      header: "Curated Concepts",
      content: "Improve understanding of Maths / science / language concepts",
    },

    {
      source:  img2,
      header: "Cognitive Thinking",
      content: "Increase Cognitive Thinking",
    },

    {
      source: img3,
      header: "Creative thinking",
      content: "Nurture child’s inherent creativity",
    },

    {
      source: img4,
      header: "Experience Learning",
      content: "Provide the Joy of Learning experience",
    },
  ];

  return (
    <Fragment>
      <section className={styles.educationContent}>
        <div className=" container">
        <div className="mb-lg-5 mb-md-4 mb-3">
          <p className={styles.childEducation}>Fulfil your Child’s education need with Rhapsody</p>
        </div>

        <div className="container d-lg-flex justify-content-lg-center align-items-lg-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="row row-cols-md-2 row-cols-1 gap-4 justify-content-evenly text-center">
              {EducationContest.map((education:EducationContentInterface, index) => (
                <div key={"education-" + index} className={styles.childContent}>
                  <img className= {" img-fluid mb-1 " + styles.iconStyle }  src={education.source} alt="icon-1" />
                  <p className={styles.childHeader}>{education.header}</p>
                  <p>{education.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img className={styles.imgStyle} src={img} alt="" />
          </div>
          </div>
        </div>
        <div className={styles.backgroundWave}>
          <img className={styles.waveImg} src={vector}/>
        </div>
                
      </section>
    </Fragment>
  );
};

export default EducationContest;
