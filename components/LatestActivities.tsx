import useTags from "hooks/useTags";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
export default function LatestActivities() {
  const imgs = ["/img/Rectangle 549.jpg", "/img/002.jpg", "/img/003.jpg"];
  const { data } = useTags("latest-activities");
  const [currentImage, setCurrentImage] = useState("/img/Rectangle 549.jpg");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(imgs[Math.floor(Math.random() * imgs.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="saction-tow-home   flex flex-col gap-2 lg:gap-0 lg:flex-row  lg:items-center   lg:justify-evenly py-20 lg:px-64 text-white my-8   overflow-visible">
      <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} slidesPerView={1}>
        {imgs.map((img) => (
          <SwiperSlide key={img} className="  self-center">
            <div>
              <Image src={img} width={500} height={400} alt={"F"} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex-shrink-0">
        <div className="saction-tow-home-box">
          <p className="text-3xl lg:text-5xl font-light mx-3 lg:mb-5">
            學院動態
          </p>

          <div className="flex flex-col  mx-8 lg:mx-0 lg:gap-4 my-8">
            {data &&
              data.map((post) => (
                <div key={post.id} className="li-div flex   items-center">
                  <Image src={`/img/icone.png`} width={35} height={35} />
                  <Link href={`/${post.slug}`}>
                    <a> {post.title}</a>
                  </Link>
                </div>
              ))}
            <Link href="/tag/latest-activities">
              <a className="home-box-btn">看全部</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
