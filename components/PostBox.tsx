import useTags from "hooks/useTags";
import Image from "next/image";
import Link from "next/link";

function Program(props: { tagSlug: string; tagName: string; imgSrc: string }) {
  const { data } = useTags(props.tagSlug);

  return (
    // <div className="grid lg:grid-cols-2  m-2">
    //   <div>
    //     <Image
    //       src={props.imgSrc}
    //       width={130}
    //       layout="responsive"
    //       height={180}
    //       alt={".."}
    //     />
    //   </div>

    //   <div className="p-2">
    //     <h4 className="text-3xl font-semibold mx-2">{props.tagName}</h4>
    //     <ul>
    //       {data?.map((p) => (
    //         <li key={p.id} className="list-none">
    //           {" "}
    //           <Link href={`/${p.slug}`}>
    //             <a className="flex items-center">
    //               <Image
    //                 src={`/img/Group 10.png`}
    //                 width={40}
    //                 height={40}
    //                 alt={".."}
    //               />

    //               {p.title}
    //             </a>
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>

    <div className="col-md-6">
      <div className="home-saction-three-box">
        <div className="home-saction-three-box-img">
          <a href={props.tagSlug}>
            <img src={props.imgSrc} />
          </a>
        </div>
        <div className="home-saction-three-box-content">
          <h4>
            <a href={props.tagSlug}>{props.tagName}</a>
          </h4>
          <ul>
            {data?.map((p) => (
              <>
                <li>
                  <Link href={`/${p.slug}`}>
                    <a href={p.slug} className="flex gap-2 items-center">
                      <img src="/img/Group 10.png" />
                      {p.title}
                    </a>
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function PostBox() {
  const tags = [
    { tagName: "學士課程", tagSlug: "ug", imgSrc: "/img/ug.jpeg" },
    {
      tagName: "碩士課程",
      tagSlug: "pg",
      imgSrc: "/img/pg.jpeg",
    },
    { tagName: "博士課程", tagSlug: "dg", imgSrc: "/img/dg.jpeg" },
    { tagName: "短期課程", tagSlug: "sc", imgSrc: "/img/extension.jpeg" },
    {
      tagName: "伯特利輔導中心",
      tagSlug: "counseling-centre",
      imgSrc: "/img/Rectangle 573.jpg",
    },
    {
      tagName: "柏祺城市轉化中心",
      tagSlug: "ray-bakke-centre-for-urban-transformation",
      imgSrc: "/img/Rectangle 574.jpg",
    },
  ];
  return (
    <div className="my-4">
      <div className="home-saction-three">
        <div className="container">
          <div className="row">
            {tags.map((tag) => (
              <Program key={Math.random()} {...tag} />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="grid lg:grid-cols-2 bg-gray-100   gap-8">
        {tags.map((tag) => (
          <Program key={Math.random()} {...tag} />
        ))}
      </div> */}
    </div>
  );
}
