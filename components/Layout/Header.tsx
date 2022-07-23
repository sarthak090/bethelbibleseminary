import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import NavbarContext from "../../context/NavbarContext";

import { Nav } from "../../models/Navigation";

import useDeviceSize from "hooks/useDeviceSize";
type Props = {
  label: string;
  url: string;
  isVisible: boolean;
  subNav: { label: string; slug: string }[];
};

function NavItem(props: Props) {
  const { isVisible } = props;
  const [isShown, setIsShown] = useState(false);

  const { subNav } = props;
  const mouseEnter = () => {
    if (!isVisible) {
      setIsShown(true);
    }
  };
  const mouseExit = () => {
    if (!isVisible) {
      setIsShown(false);
    }
  };
  const onMouseClick = () => {
    if (isVisible) {
      setIsShown(!isShown);
    }
  };
  const test = () => {
    if (isVisible && isShown) {
      return `relative `;
    } else if (isShown) {
      return `subnav p-1 `;
    } else {
      return ` hidden  `;
    }
  };

  return (
    <>
      <div
        className="relative    "
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseExit}
      >
        <div
          className={`flex items-center w-full    lg:px-0 ${
            props.isVisible
              ? "text-primaryBlue border-b-2 justify-between  "
              : "text-white"
          }`}
        >
          <Link href={props.url} className=" ">
            <a
              className={`flex nav-link   items-center      ${
                props.isVisible
                  ? "text-primaryBlue mobile-blue   py-1"
                  : "text-white"
              }  m-2 hover:cursor-pointer hover:text-primaryBlue hover:no-underline`}
            >
              {props.label}
            </a>
          </Link>
          {subNav && subNav?.length > 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={onMouseClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          ) : (
            ""
          )}
        </div>
        {subNav.length > 0 ? (
          <div className={` text-white w-80   z-10 ${test()}   `}>
            {subNav?.map((n) => (
              <div
                key={Math.random()}
                className={` ${
                  isVisible ? "w-screen flex self-start " : ""
                }  border-b-2 bg-primaryPink p-2`}
              >
                <Link href={n.slug}>
                  <a className={"  "}>{n.label}</a>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default function Header() {
  const { navItems } = useContext(NavbarContext);
  const [width, height] = useDeviceSize();
  const router = useRouter();
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const BtnClick = () => {
    if (isBtnClicked && isVisible) {
    } else if (isBtnClicked) {
      return "absolute";
    } else {
      return "hidden";
    }
  };

  useEffect(() => {
    if (height > 150) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }, [height]);
  useEffect(() => {
    setIsVisible(false);
  }, [router.asPath]);

  return (
    <header
      className={` header fixed-top-header  ${
        isFixed ? "header-scrolled" : ""
      }`}
    >
      <nav
        id="navbar"
        className="     px-4 lg:px-16  flex justify-between   overflow-visible"
      >
        <div className="flex-shrink-0  flex   justify-end items-end lg:pl-24">
          <Link href="/" className="hover:cursor-pointer  ">
            <a className="self-end flex justify-end ">
              <Image src={"/img/logo.png"} width={200} height={50} />
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-items-end">
          <div
            className="navBtn lg:hidden hover:cursor-pointer "
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div
            className={` ${
              isVisible ? "absolute w-full bg-white py-2 border  " : "hidden"
            }    top-28 z-20 left-0 lg:pr-24  lg:flex flex-wrap lg:justify-end  overflow-visible `}
          >
            {navItems &&
              navItems.map((nav: Nav) => (
                <NavItem isVisible={isVisible} key={Math.random()} {...nav} />
              ))}
            <div className=" ">
              <div
                className="btn-wight btn-menu relative dropdown px-4"
                id="menu-student"
              >
                <a
                  href="#"
                  onClick={() => setIsBtnClicked(!isBtnClicked)}
                  className="s"
                >
                  <span>學生</span>
                </a>
                <ul
                  className={`nav-submenu text-white ${BtnClick()}   bg-primaryPink  `}
                >
                  <li>
                    <a
                      href="http://inet.bethelhk.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      內聯網 Moodle
                      <span className="glyphicon glyphicon-log-in"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&amp;service=mail&amp;hd=student.bethelhk.org&amp;sacu=1&amp;flowName=GlifWebSignIn&amp;flowEntry=AddSession"
                      target="_blank"
                      rel="noreferrer"
                    >
                      學生電郵
                      <span className="glyphicon glyphicon-log-in"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://std.bethelhk.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      學生記錄及註冊系統{" "}
                      <span className="glyphicon glyphicon-log-in"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sites.google.com/bethelhk.org/help"
                      target="_blank"
                      rel="noreferrer"
                    >
                      技術支援
                      <span className="glyphicon glyphicon-log-in"></span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <li className="btn-trans btn-menu">
                <a
                  href="http://www.bethelbsaa.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  校友
                </a>
              </li> */}
            </div>
          </div>
        </div>
      </nav>
      <div className="bottom"></div>
    </header>
  );
}

/**
 * function generateSubNav() {
    return navigation.map(async (navItem) => {
      const tagSlug = navItem.url
        .split("/")
        .filter((r) => r !== "")
        .filter((n) => n !== "tag")
        .join("");
      const res = await fetch("/api/tags/" + tagSlug).then((r) => r.json());
      return {
        label: navItem.label,
        url: navItem.url,
        subNav: res.map((r: any) => {
          return {
            label: r.title,
            slug: "/" + r.slug,
          };
        }),
      };
    });
  }
 */
