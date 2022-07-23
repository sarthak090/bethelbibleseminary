import useTags from "hooks/useTags";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
function LatestNews() {
  const { data } = useTags("latest-news");

  return (
    <>
      <p className="  text-center text-4xl font-semibold">最新消息</p>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // 480: {
          //   slidesPerView: 2,
          //   spaceBetween: 30,
          // },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 3000 }}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        {data &&
          data.map((news) => (
            <SwiperSlide key={news.id}>
              <motion.div key={news.id} className="item   p-10 ">
                <Image
                  width={400}
                  height={400}
                  className="pointer-events-none w-full h-full"
                  src={news.feature_image}
                />
                <Link href={`/${news.slug}`}>
                  <a> {news.title}</a>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default LatestNews;
