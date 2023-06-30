import React from "react";
// import styles from "./Home.module.css"
import img from './assets/Screen Recording 2023-06-13 at 9.58.39 AM 2.png'
import styles from "./Home.module.css";

export default function Home () {
  return (
    <>
      <section className={"container"}>
        <div className=" d-md-flex d-block justify-content-md-centers items-center mainPage mt-3">
          <div className=" col-lg-6 col-md-6 col-sm-12">
            <p className={styles.mainHeader}>Creative Intelligence Delivered</p>
            <p className={styles.mainSubHeader}>
              An award winning art integrated program for children
            </p>
            <p className={styles.mainContent}>
              Rhapsody brings to children a Creativity-Led Educational approach
              for primary education. A structured Art-Integrated program that
              provides a fertile environment that enhances every child’s
              creativity and learning ability. We touch Cognitive and Artistic
              Creativity to provide the foundation for a successful fun-filled
              learning experience of concepts across diverse subjects.
            </p>
            <button
              className={styles.regBtn + " mb-4 cursor-default"}
              type="button"
            >
              Register
            </button>
          </div>
          <div className=" col-lg-6 col-md-6 col-sm-12">
            <div className=" bg-light rounded-3 p-2 butterfly"></div>
          </div>
        </div>
      </section>
	  
    </>
  );
}
