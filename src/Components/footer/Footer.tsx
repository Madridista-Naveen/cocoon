import React, { Fragment } from "react";
import styles from './footer.module.css'
import img1 from './assets/security-logos.png.png'
import Logo from './assets/Logo.png'


function Footer() {
    return(
        <Fragment>
              <section className={"container mt-5 mb-5"}>
	<div className={"d-lg-flex justify-content-lg-between col-lg-12 col-md-12 col-sm-12 h-100"}>
		<div className={"col-lg-4 col-md-12 col-sm-12"}>
			<div className={"flex flex-column justify-content-between h-100"}>
				<img className={styles.logoStyle} src={Logo} />
				<div>
					<div className={"flex mb-3 font-bold"}>
						<img src={img1} className={styles.imgs} />
					</div>
					<h6 className="font-bold">Learn through creativity</h6>
					<p>Cocoon is striving to make every student get a pathway to their future through Project led Learning.</p>
				</div>
				<p className={" d-lg-flex d-none " + styles.copyright}>Copyright &circledR; 2020-22 Dreamplug Technologies Pvt Ltd.</p>
			</div>
		</div>
		<div className={"col-lg-6 col-md-12 col-sm-12"}>
			<div className={"row row-cols-md-2 row-cols-1 mb-2 mt-3"}>
			<div className={"mb-2"}>
				<h6 className={"mb-3 font-bold "}>Products</h6>
				<p className={styles.footerLink}>Challenges</p>
				<p className={styles.footerLink}>Parent Forum</p>
			</div>
			<div className={"mb-2"}>
				<h6 className={"mb-3 font-bold"}>Cocoon</h6>
				<p className={styles.footerLink}>About</p>
				<p className={styles.footerLink}>Careers</p>
				<p className={styles.footerLink}>Customer Care</p>
			</div>
			<div className={"mb-2"}>
				<h6 className={"mb-3 font-bold"}>Resources</h6>
				<p className={styles.footerLink}>Articles</p>
				<p className={styles.footerLink}>Tech Blogs</p>
			</div>
			<div className={"mb-2"}>
				<h6 className={"mb-3 font-bold"}>Policy</h6>
				<p className={styles.footerLink}>Security</p>
				<p className={styles.footerLink}>Privacy Policy</p>
				<p className={styles.footerLink}>Terms and Conditions</p>

			</div>
			</div>	

		</div>	
		<p className={" d-lg-none flex " + styles.copyright}>Copyright &circledR; 2020-22 Dreamplug Technologies Pvt Ltd.</p>
	</div>
  </section>
        </Fragment>
    )
}

export default Footer;