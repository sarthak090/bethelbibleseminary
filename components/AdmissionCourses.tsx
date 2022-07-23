import useTags from "hooks/useTags";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

export default function AdmissionCourses() {
  const { data } = useTags("programs-offered");

  return (
    <>
      <h3 className="text-4xl text-center my-28  ">招生‧課程</h3>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation
        className="p-12 lg:p-16   "
      >
        {data?.map((post) => (
          <SwiperSlide key={post.id} className=" ">
            <div
              className="post-box-slider "
              style={{
                backgroundImage: `url('${post.feature_image}')`,
              }}
            >
              <div className="post-box-slider-content ">
                <h3 className="lg:p-4 lg:pb-2 p-3 font-bold">{post.title}</h3>
                <div
                  className="post-box-main-content p-3 lg:p-4"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                ></div>

                <Link href={`/${post.slug}`}>
                  <a className="lg:p-1 mb-4 mx-4    text-primaryBlue rounded-md my-2 bg-white text-center ">
                    了解更多
                  </a>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
