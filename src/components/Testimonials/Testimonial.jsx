import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpeg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "The website's design is superb, with a clean layout, intuitive navigation, and fast load times. It offers engaging visuals, consistent branding, and accessibility, setting a high standard for web design.",
    },
    {
      img: profilePic2,
      review:
        "The website blends elegant design with functionality, offering a sleek layout, intuitive navigation, fast load times, and a visually appealing, branded experience that sets a web design benchmark.",
    },
    {
      img: profilePic3,
      review:
        "The website impresses with its seamless blend of style and usability. Highlights include a modern layout, user-friendly navigation, and fast performance. Engaging visuals, consistent branding, and accessibility set it apart.",
    },
    {
      img: profilePic4,
      review:
        "The website's design is impressive, combining style and usability. Highlights include a modern layout, easy navigation, and fast performance. Engaging visuals and strong accessibility make it stand out.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt={`Client testimonial ${index + 1}`} />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;