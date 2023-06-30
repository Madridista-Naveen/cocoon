import React, { Fragment } from "react";
import styles from './gallery.module.css'
import img1 from './assets/Img1.png'
import img2 from './assets/Img2.png'
import img3 from './assets/Img3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import { Navigation } from "swiper";

interface galleryInterface {
  imageURL: string;
}

const Gallery = () => {
  const imageUrls: galleryInterface[] = [
    { imageURL: img1 },
    { imageURL: img2 },
    { imageURL: img3 },
    { imageURL: img1 },
    { imageURL: img2 },
    { imageURL: img3 },
    { imageURL: img1 },
    { imageURL: img2 },
    { imageURL: img3 },
  ];

  return (
    <Fragment>
      <section className={styles.gallery}>
        <div className="container h-100">
          <div className="flex flex-column justify-center items-center h-100">
            <p className={styles.heading}>Gallery</p>
            <button className={styles.whiteBtn} type="button">
              View all photos
            </button>
          </div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={10}
            style={{
              "--swiper-navigation-color": "#fff",
            } as React.CSSProperties} // Use type assertion to override type
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <div className="d-md-flex d-block justify-content-between mt-5">
              {imageUrls.map((imageUrl: galleryInterface, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.galleryImg}>
                    <img
                      className="rounded-3 img-fluid"
                      src={imageUrl.imageURL}
                      alt={`image-${index + 1}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </section>
    </Fragment>
  );
}

export default Gallery;
