import React,{Fragment} from 'react';
// import styles from './countComp.module.css'
import styles from './countComp.module.css'

function CountComp() {
    return (
        <Fragment>
            <section className={styles.count}>
	        <div className={ " container d-md-flex d-block justify-content-md-between align-items-md-center text-white h-100"}>
		    <h6 className="flex justify-center items-center font-bold ">Students : &nbsp; <span className=" fs-1 font-semibold">10,000+</span></h6>
		    <h6 className="flex justify-center items-center font-bold">Schools Partnered : &nbsp; <span className=" fs-1 font-semibold">1000</span></h6>
		    <h6 className="flex justify-center items-center font-bold">Lessions : &nbsp; <span className=" fs-1 font-semibold">460+</span></h6>
	        </div>
            </section>
        </Fragment>
    )
}

export default CountComp;