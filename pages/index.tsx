import type { NextPage } from "next";
import LatestActivities from "@/components/LatestActivities";
import AdmissionCourses from "@/components/AdmissionCourses";
import PostBox from "@/components/PostBox";
import IndexBottom from "@/components/IndexBottom";
import Footer from "@/components/Layout/Footer";

import LatestNews from "@/components/LatestNews";
import Header from "@/components/Layout/Header";

const Home: NextPage = () => {
  const cs_html = `<style>
  /*.banner-saction {*/

      /*background-image: url({{img_url @site.cover_image size='l'}});*/
      /*background-size: cover;*/
      /*background-position: 100%;*/
  /*}*/

  .banner-saction {
      background-image: url({{img_url @site.cover_image size='xl'}});
      background-repeat: no-repeat;
      background-size: cover;
      height: 66vh;
      /*background-position: 100%;*/
  }

  @media (max-width: 1024px) {
  /*@media (max-width: 991px) {*/
      .banner-saction {
          background-image: url({{img_url @site.cover_image size='l'}});
          background-image: -webkit-image-set(url({{img_url @site.cover_image size='l'}}) 1x,
          url({{img_url @site.cover_image size='xl'}}) 2x);
          background-image: image-set(url({{img_url @site.cover_image size='l'}}) 1x,
          url({{img_url @site.cover_image size='xl'}}) 2x);
          background-repeat: no-repeat;
          background-size: cover;
          height: 33vh;
      }
  }

  @media (max-width: 768px) {
      .banner-saction {
          background-image: url({{img_url @site.cover_image size='m'}});
          background-image: -webkit-image-set(url({{img_url @site.cover_image size='m'}}) 1x,
          url({{img_url @site.cover_image size='l'}}) 2x);
          background-image: image-set(url({{img_url @site.cover_image size='m'}}) 1x,
          url({{img_url @site.cover_image size='l'}}) 2x);
          background-repeat: no-repeat;
          background-size: cover;
          height: 33vh;
      }
  }
</style>`;
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: cs_html }}></div>
      <div className="banner-saction">
        <Header />
      </div>

      <div
        id="social-banner"
        className="flex justify-center items-center   gap-16 mb-16   p-7"
      >
        <div className="text-white">
          <a
            href="https://www.facebook.com/BethelBibleSeminary/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 43 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.28 39.5H30.1646V25.005H35.2546H35.69L35.7499 24.5738L36.5884 18.5388L36.6674 17.97H36.0931H30.1646V14.615C30.1646 13.7664 30.2969 13.1954 30.6327 12.8242C30.9602 12.4621 31.5895 12.175 32.8789 12.175H36.3135H36.3189H36.8189V11.675V6.28V5.83892L36.3812 5.7839C35.7607 5.7059 33.7024 5.54 31.3094 5.54C28.7397 5.54 26.5205 6.27057 24.9388 7.72508C23.3511 9.18512 22.462 11.3231 22.462 14.02V17.97H17.3559H16.8559V18.47V24.51V25.01H17.3559H22.462V39.5H1.72C1.0101 39.5 0.5 38.9754 0.5 38.4V1.6C0.5 1.02458 1.0101 0.5 1.72 0.5H41.28C41.9899 0.5 42.5 1.02458 42.5 1.6V38.4C42.5 38.9754 41.9899 39.5 41.28 39.5Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCMtmvsb0NBNi1UPjdgDJniQ/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 39 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.186 3.74904C37.964 3.02308 37.5288 2.36104 36.9238 1.82918C36.3188 1.29733 35.5653 0.914313 34.7387 0.718471C31.6962 1.45785e-07 19.5 0 19.5 0C19.5 0 7.30379 -1.45785e-07 4.26127 0.71465C3.43435 0.909856 2.68049 1.29266 2.07538 1.82461C1.47028 2.35656 1.03524 3.01894 0.813951 3.74522C-1.66042e-07 6.42038 0 12 0 12C0 12 -1.66042e-07 17.5796 0.813951 20.251C1.26228 21.7261 2.58549 22.8879 4.26127 23.2815C7.30379 24 19.5 24 19.5 24C19.5 24 31.6962 24 34.7387 23.2815C36.4189 22.8879 37.7377 21.7261 38.186 20.251C39 17.5796 39 12 39 12C39 12 39 6.42038 38.186 3.74904ZM15.6261 17.121V6.87898L25.7243 11.9618L15.6261 17.121Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/bethelbibleseminary/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 0H5.947C4.37015 0.00185307 2.85844 0.629143 1.74353 1.74424C0.628623 2.85933 0.00158794 4.37115 0 5.948L0 14.018C0.00185307 15.5948 0.629143 17.1066 1.74424 18.2215C2.85933 19.3364 4.37115 19.9634 5.948 19.965H14.018C15.5948 19.9631 17.1066 19.3359 18.2215 18.2208C19.3364 17.1057 19.9634 15.5938 19.965 14.017V5.947C19.9631 4.37015 19.3359 2.85844 18.2208 1.74353C17.1057 0.628623 15.5938 0.00158794 14.017 0V0ZM17.957 14.017C17.957 14.5344 17.8551 15.0467 17.6571 15.5248C17.4591 16.0028 17.1689 16.4371 16.803 16.803C16.4371 17.1689 16.0028 17.4591 15.5248 17.6571C15.0467 17.8551 14.5344 17.957 14.017 17.957H5.947C4.90222 17.9567 3.90032 17.5415 3.16165 16.8026C2.42297 16.0638 2.008 15.0618 2.008 14.017V5.947C2.00827 4.90222 2.42349 3.90032 3.16235 3.16165C3.90122 2.42297 4.90322 2.008 5.948 2.008H14.018C15.0628 2.00827 16.0647 2.42349 16.8034 3.16235C17.542 3.90122 17.957 4.90322 17.957 5.948V14.018V14.017Z"
                fill="white"
              />
              <path
                d="M9.98201 4.819C8.61344 4.82112 7.30154 5.36579 6.33391 6.33361C5.36627 7.30143 4.82186 8.61343 4.82001 9.982C4.82159 11.3509 5.36603 12.6633 6.33391 13.6314C7.30179 14.5995 8.61409 15.1441 9.98301 15.146C11.3521 15.1444 12.6647 14.5998 13.6328 13.6317C14.6008 12.6637 15.1454 11.3511 15.147 9.982C15.1449 8.61308 14.5999 7.30088 13.6317 6.33319C12.6634 5.3655 11.3509 4.82132 9.98201 4.82V4.819ZM9.98201 13.138C9.14525 13.138 8.34276 12.8056 7.75109 12.2139C7.15941 11.6222 6.82701 10.8198 6.82701 9.983C6.82701 9.14624 7.15941 8.34376 7.75109 7.75208C8.34276 7.1604 9.14525 6.828 9.98201 6.828C10.8188 6.828 11.6213 7.1604 12.2129 7.75208C12.8046 8.34376 13.137 9.14624 13.137 9.983C13.137 10.8198 12.8046 11.6222 12.2129 12.2139C11.6213 12.8056 10.8188 13.138 9.98201 13.138V13.138Z"
                fill="white"
              />
              <path
                d="M15.156 6.095C15.8392 6.095 16.393 5.54118 16.393 4.858C16.393 4.17483 15.8392 3.621 15.156 3.621C14.4728 3.621 13.919 4.17483 13.919 4.858C13.919 5.54118 14.4728 6.095 15.156 6.095Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
      {/* <Framer   /> */}
      <div className="container mx-auto px-16 lg:px-24 ">
        {/* Latest news */}

        <LatestNews />

        {/* Latest Activites */}
      </div>

      <LatestActivities />
      <div className="container mx-auto px-16 lg:px-24 ">
        {/* program-offered */}
        <AdmissionCourses />
        {/* post-box */}

        <PostBox />
        {/* index-bottom */}
      </div>

      <IndexBottom />

      <Footer />
    </>
  );
};

export default Home;
