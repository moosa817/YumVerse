import React, { useEffect, useState } from "react";
import style from "./testimonial.module.css";
import { RiDoubleQuotesL } from "react-icons/ri";

// swiper
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// avatars
import avatar1 from "../../../assets/images/avatar1.jpg";
import avatar2 from "../../../assets/images/avatar2.jpg";
import avatar3 from "../../../assets/images/avatar3.jpg";
import avatar4 from "../../../assets/images/avatar4.jpg";
import avatar5 from "../../../assets/images/avatar5.jpg";
import avatar6 from "../../../assets/images/avatar6.jpg";

const Testimonials = () => {
  const [view, setView] = useState(null);

  useEffect(() => {
    if (window.innerWidth >= 1815) {
      setView(5);
    } else if (window.innerWidth >= 1460) {
      setView(4);
    } else if (window.innerWidth >= 1110) {
      setView(3);
    } else if (window.innerWidth >= 740) {
      setView(2);
    } else if (window.innerWidth <= 740) {
      setView(1);
    }
  }, []);
  return (
    <div className={style.mainDiv}>
      <h1>Testimonials</h1>
      <h3>We value your satisfaction and appreciate your feedback</h3>
      {view !== null ? (
        <Swiper
          slidesPerView={view}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <RiDoubleQuotesL className={style.icon} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolorum provident aperiam magnam rem non voluptatem ea libero
            dignissimos dolor!
            <div className={style.container}>
              <img src={avatar1} alt="avatar" className={style.avatar} />
              <h4>Adam Zampa</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <RiDoubleQuotesL className={style.icon} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolorum provident aperiam magnam rem non voluptatem ea libero
            dignissimos dolor!
            <div className={style.container}>
              <img src={avatar2} alt="avatar" className={style.avatar} />
              <h4>Josh Philippe</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <RiDoubleQuotesL className={style.icon} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolorum provident aperiam magnam rem non voluptatem ea libero
            dignissimos dolor!
            <div className={style.container}>
              <img src={avatar3} alt="avatar" className={style.avatar} />
              <h4>Alex Carey</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <RiDoubleQuotesL className={style.icon} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolorum provident aperiam magnam rem non voluptatem ea libero
            dignissimos dolor!
            <div className={style.container}>
              <img src={avatar4} alt="avatar" className={style.avatar} />
              <h4>Sinira Fira</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <RiDoubleQuotesL className={style.icon} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolorum provident aperiam magnam rem non voluptatem ea libero
            dignissimos dolor!
            <div className={style.container}>
              <img src={avatar5} alt="avatar" className={style.avatar} />
              <h4>Sherri Horton</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <RiDoubleQuotesL className={style.icon} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolorum provident aperiam magnam rem non voluptatem ea libero
            dignissimos dolor!
            <div className={style.container}>
              <img src={avatar6} alt="avatar" className={style.avatar} />
              <h4>Aliesha Preston</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Testimonials;
