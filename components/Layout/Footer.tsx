import { Nav } from "@/models/Navigation";
import useDeviceSize from "hooks/useDeviceSize";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import NavbarContext from "../../context/NavbarContext";

export default function Footer() {
  const { navItems } = useContext(NavbarContext);

  const [width, height] = useDeviceSize();
  const [isVisble, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    if (height > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [height]);
  return (
    <>
      <div
        onClick={scrollToTop}
        className={`back-to-top ${
          !isVisble && "opacity-0"
        }  scroll-to-top bg-blue-500  flex items-center justify-center m-3 w-16 h-16 absolute right-0`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
      </div>
      <div className="absolute left-0 right-0">
        <div className="footer ">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="footer-box-logo">
                  <img src="/img/logo.png" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-box">
                  <p>
                    <img src="/img/Vector.png" />
                    Address: 45-47 Grampian Road, Kowloon, Hong Kong
                    <br />
                    Email: seminary@bethelhk.org
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-box">
                  <p>
                    <img src="/img/phone.png" />
                    Tel: +852 2336 9197
                  </p>
                  <p>
                    <img src="/img/Vector(1).png" />
                    Fax: +852 2336 1852
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-box">
                  <ul>
                    {navItems?.map((nav: Nav) => (
                      <li key={Math.random()}>
                        <Link href={nav.url}>
                          <a>{nav.label}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-2">
                <div className="footer-box"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <div className="container">
            <div className="row">
              <p>
                <Link href={"/privacy"}>
                  <a className="mx-2">個人資料收集聲明 | </a>
                </Link>
                <Link href={"/sitemap"}>
                  <a>網站指南 | </a>
                </Link>
                <Link href={"/contact"}>
                  <a>聯絡我們</a>
                </Link>
                |
                <br />
                ©2009-2022 Bethel Bible Seminary. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
