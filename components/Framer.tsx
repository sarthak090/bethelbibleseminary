import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import useTags from "hooks/useTags";
import Image from "next/image";
import Link from "next/link";
export default function Framer() {
  const { data } = useTags("latest-news");

  const [width, setWidth] = useState(0);
  const carousel = useRef<any>();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [data]);
  const images = [
    "002.jpg",
    "003.jpg",
    "Rectangle 549.jpg",
    "Rectangle 573.jpg",
    "002.jpg",
    "003.jpg",
  ];
  return (
    <div>
      <motion.div
        ref={carousel}
        className="carousel   cursor-grab overflow-hidden mx-7"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="innner-carousel  flex"
        >
          {data &&
            data.map((post) => (
              <motion.div className="item  w-1/3 p-10 " key={Math.random()}>
                <img
                  className="pointer-events-none w-full h-full"
                  src={post.feature_image}
                />
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
