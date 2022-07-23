import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { generateSubNav } from "utils/naviagtion";
import { Nav } from "@/models/Navigation";
export default function Tag() {
  const router = useRouter();

  const { tag } = router.query;
  useEffect(() => {
    if (tag !== undefined) {
      fetch(`/api/tags/${tag}`)
        .then((r) => r.json())
        .then((res) => {
          router.push(`/${res[0].slug}`);
        });
    }
  }, [router, tag]);
  return (
    <>
      <Header />

      <div className="flex items-center justify-center my-20 p-20">
        <svg
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#85a2b6"
            strokeWidth="10"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            ></animateTransform>
          </circle>
        </svg>
      </div>

      <Footer />
    </>
  );
}
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const slug = ctx.params !== undefined ? ctx.params.tag : "";

//   const domainName = "http://localhost:3000" || "";
//   const resp = await fetch(`${domainName}/api/tags/${slug}`).then((r) =>
//     r.json()
//   );

//   return {
//     redirect: {
//       permanent: true,
//       destination: `/${resp[0].slug}`,
//     },
//     props: {},
//   };
// };
