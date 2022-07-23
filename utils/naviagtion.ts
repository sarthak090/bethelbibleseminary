const navigation = [
  {
    label: "認識伯神",
    url: "/tag/info/",
  },
  {
    label: "入讀伯神",
    url: "/tag/adm/",
  },
  {
    label: "課程概覽",
    url: "/tag/course/",
  },
  {
    label: "教學團隊",
    url: "/tag/teaching-team/",
  },
  {
    label: "教務及註冊",
    url: "/tag/as/",
  },
  {
    label: "伯特利輔導中心",
    url: "/tag/counseling-centre/",
  },
  {
    label: "教牧及信徒進修中心",
    url: "/tag/extension/",
  },
  {
    label: "柏祺城市轉化中心",
    url: "/tag/ray-bakke-centre-for-urban-transformation/",
  },
  {
    label: "圖書館",
    url: "/tag/library/",
  },
  {
    label: "伯神刊物",
    url: "/tag/pub/",
  },
  {
    label: "支持伯神",
    url: "/tag/support/",
  },
  {
    label: "通告及聯絡",
    url: "/tag/circular-contact/",
  },
  {
    label: "相關連結",
    url: "/tag/links/",
  },
  {
    label: "Student Achievement",
    url: "/graduationrates/",
  },
];
import { Posts } from "../models/Posts";
export function generateSubNav() {
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
      subNav: res.map((r: Posts) => {
        return {
          label: r.title,
          slug: "/" + r.slug,
        };
      }),
    };
  });
}
