import React, { Fragment } from "react";
import styles from "./navbar.module.css";
import Logo from "./assets/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
      <section className={styles.navbar}>
        <div className="container h-100">
          <div className=" flex justify-between items-center w-100 h-100">
            <Link to={"/"} className={styles.cocoonLogo}>
              <img
                className={ " img-fluid mb-0"}
                src={Logo}
                alt="Logo"
              />
            </Link>
            <Link to={"/demo-tailwind"} className="mb-0">
              Mentorship
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default Navbar;
