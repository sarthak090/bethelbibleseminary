import Link from "next/link";
import { useRef, useState } from "react";
const courses = [
  {
    label: "通識教育",
    slug: "/course#ge",
    id: "course-ge",
  },
  {
    label: "聖經研究",
    slug: "/course#bs",
    id: "course-bs",
  },
  {
    label: "神學研究",
    slug: "/course#th",
    id: "course-th",
  },
  {
    label: "教牧輔導",
    slug: "/course#pc",
    id: "course-pc",
  },
  {
    label: "婚姻及家庭治療",
    slug: "/course#mf",
    id: "course-mf",
  },
  {
    label: "輔導專業",
    slug: "/course#tr",
    id: "course-tr",
  },
  {
    label: "臨床牧關教育",
    slug: "/course#cpe",
    id: "course-cpe",
  },
  {
    label: "基督教教育",
    slug: "/course#ce",
    id: "course-ce",
  },
  {
    label: "青少年事工",
    slug: "/course#ym",
    id: "course-ym",
  },
  {
    label: "實踐神學",
    slug: "/course#pt",
    id: "course-pt",
  },
  {
    label: "領導與靈命塑造",
    slug: "/course#sp",
    id: "course-sp",
  },
  {
    label: "城巿事工",
    slug: "/course#um",
    id: "course-um",
  },
  {
    label: "寫作研究",
    slug: "/course#wr",
    id: "course-wr",
  },
  {
    label: "屬靈操練",
    slug: "/course#sd",
    id: "course-sd",
  },
  {
    label: "心理學博士",
    slug: "/course#dp",
    id: "course-dp",
  },
  {
    label: "牧養關懷(教牧學博士)",
    slug: "/course#dc",
    id: "course-dc",
  },
];
export default function IndexBottom() {
  const [currentBckg, setCurrentBckg] = useState("/img/bottom-img.png");
  const linkTag = useRef<any>();

  const setBackground = (e: any) => {
    setCurrentBckg(`/img/${e.target.id}.jpg`);
  };
  const mouseLeave = () => {
    setCurrentBckg("/img/bottom-img.png");
  };
  return (
    <div className="post-bottom">
      <div
        id="post-bottom-bg-img"
        style={{ backgroundImage: `url(${currentBckg})` }}
      ></div>
      <div className="bottom-content">
        <div className=" bc-title">
          培育時代工人 實踐上帝使命 - 伯特利神學院十六學科
        </div>
        <div className="bc-course">
          {courses.map((course) => (
            <Link href={course.slug} key={course.id}>
              <a
                id={course.id}
                onMouseLeave={mouseLeave}
                onMouseEnter={setBackground}
                ref={linkTag}
                className="bc-course-item  "
              >
                {course.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
