import React, { Fragment } from "react";
import styles from "./howDoes.module.css";
import img1 from "./assets/Concept.png";
import img2 from "./assets/Cognitive.png";
import img3 from "./assets/Creative.png";
import img4 from "./assets/Experience.png";
import img5 from "./assets/Experience.png";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
interface HowDoesInterface {
  src: string;
  learning: string;
  uses: string;
}

function HowDoes() {
  const howdoes: HowDoesInterface[] = [
    {
      src: img1,
      learning: "Use effective tools",
      uses: "Uses Performing arts like music as an education tool",
    },

    {
      src: img2,
      learning: "Trained Faculty",
      uses: "Trained faculty members for an engaging and fun learning className",
    },

    {
      src: img3,
      learning: "Improving skills",
      uses: "Critical skills - thinking, ability and creativity levels mapped to every lesson",
    },

    {
      src: img4,
      learning: "New world of education",
      uses: "NEP mapped lesson plans that covers Math, Science, Language and EVS",
    },

    {
      src: img5,
      learning: "Curated to individual goals",
      uses: "Proprietary unique grade specific lessons for diverse subjects inline with the curriculum",
    },
  ];

  return (
    <Fragment>
      <section className={styles.howDoes}>
        <div className={"container " + styles.environment}>
          <div className="text-center">
            <p className={styles.howDoesHeader}>
              How does Rhapsody provide the perfect Learning Environment
            </p>
          </div>
          <div className="row justify-content-evenly row-cols-md-3 row-cols-1 gap-4 text-center">
            {howdoes.map((howdo, index) => (
              <div
                key={"howdo" + index}
                id={"-" + index}
                className={styles.content}
              >
                <img className=" img-fluid mb-1 mx-auto " src={howdo.src} alt="icon-1" />
                <p className={styles.learning}>{howdo.learning}</p>
                <p className="">{howdo.uses}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default HowDoes;
