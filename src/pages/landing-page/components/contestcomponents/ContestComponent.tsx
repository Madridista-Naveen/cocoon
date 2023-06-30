import React, { Fragment } from "react";
import styles from "./contestComponents.module.css";
import rectangle from "./Rectangle.png";
import vector from "./assets/Vector 13.png";
interface ContestInterface {
  name: string;
  date: string;
  note: string;
}

const ContestComponent = () => {
  const contests: ContestInterface[] = [
    {
      name: "Music Challenge 1",
      date: "12/06/2023.",
      note: "In this challenge you will have to create a nusic note to denote a theory from className",
    },
    {
      name: "Music Challenge 2",
      date: "12/06/2023.",
      note: "In this challenge you will have to create a nusic note to denote a theory from className",
    },
    {
      name: "Music Challenge 3",
      date: "12/06/2023.",
      note: "In this challenge you will have to create a nusic note to denote a theory from className",
    },
  ];

  return (
    <Fragment>
      <section className={styles.contestContainer}>
        <div className=" container ">
          <div
            className={
              styles.upcomingContest +
              " d-lg-flex d-block justify-between items-center"
            }
          >
            <div className={" text-center d-lg-none d-flex"}>
              <p className={styles.mainHeader + " mb-md-3 mb-5"}>
                Upcoming Contests
              </p>
            </div>

            <div className={" col-lg-6 col-md-12 col-sm-12"}>
              <div className={" d-flex flex-column justify-content-between"}>
                {contests.map((contest: ContestInterface, index) => (
                  <div
                    key={"contest" + index}
                    id={"contest-card-" + index}
                    className={styles.customeCard + " d-flex"}
                  >
                    <div className={" col-8 p-3"}>
                      <p className={styles.contestHeader}>{contest.name}</p>
                      <p className={styles.contestDate}>{contest.date}</p>
                      <p>{contest.note}</p>
                      <button className={styles.regBtn} type="button">
                        Register
                      </button>
                    </div>
                    <div className={" col-4 bg-info rounded-end"}></div>
                  </div>
                ))}
              </div>
            </div>
            <div className={" col-lg-6 col-md-12 col-sm-12"}>
              <div
                className={
                  " flex flex-col align-items-lg-end items-center h-100"
                }
              >
                <div className={" text-end d-lg-flex d-none"}>
                  <p className={styles.mainHeader + " mb-5"}>
                    Upcoming Contests
                  </p>
                </div>
                <div className={styles.videoCard}>
                  <img
                    className={" img-fluid video"}
                    src={rectangle}
                    alt="video"
                  />
                  <h6 className={" mb-0 text-center text-white"}>Cocoon</h6>
                </div>
              </div>
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

export default ContestComponent;
