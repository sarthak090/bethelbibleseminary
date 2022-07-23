import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

export default function Carausel() {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        // autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div>
            <img
              src="https://bethelbibleseminary.hk/content/images/size/w1000/2022/04/Neutral-Retro-Bloom-Quote-Instagram-Post.png"
              alt=""
            />
          </div>
          <div className="bg-primaryBlue">
            <h3>Title</h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              iusto nulla repellendus rem eveniet obcaecati, iste asperiores
              deleniti consequuntur saepe. Explicabo nesciunt placeat eligendi
              facilis cum, nisi sapiente tempora doloremque.
            </p>
            <button>Understand</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className="post-box-slider overflow-hidden"
              style={{
                backgroundImage: `url('https://bethelbibleseminary.hk/content/images/size/w600/2022/06/---------5---1-.png')`,
              }}
            >
              <div className="post-box-slider-content">
                <h3>{"{title}"}</h3>
                <div className="post-box-main-content">{"{content}"}</div>

                <a href="{{url}}"> </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://bethelbibleseminary.hk/content/images/size/w1000/2022/04/Neutral-Retro-Bloom-Quote-Instagram-Post.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://bethelbibleseminary.hk/content/images/size/w1000/2022/07/BBS-2022-----_--------2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://bethelbibleseminary.hk/content/images/size/w1000/2022/07/BBS-2022-----_--------2.png"
            alt=""
          />
        </SwiperSlide>
        ...
      </Swiper>
    </>
  );
}
