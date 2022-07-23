import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetServerSideProps,
} from "next";
import Error from "@/components/Error";
import { PostData } from "@/models/Posts";
import { useEffect, useState } from "react";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Head from "next/head";

const apiUrl: any = process.env.GHOST_API_URL;
const apiKey: any = process.env.GHOST_API_KEY;

type Props = {
  postsData: PostData | null;
  relatedPosts: PostData[];
  error: boolean;
};
const PostsBySlug: NextPage<Props> = (props: Props) => {
  // useEffect(() => {
  //   Promise.all(generateSubNav()).then((r) => setNavItems(r));
  // }, []);
  const router = useRouter();
  const { postsData } = props;
  const [relatedPosts, setRelatedPosts] = useState<PostData[]>();
  const [isRedirect, setIsRedirect] = useState(false);
  const fetchRelatedPosts = async () => {
    if (
      props.postsData &&
      props.postsData.primary_tag !== undefined &&
      props.postsData.primary_tag !== null
    ) {
      const rel = await fetch(
        `/api/tags/${props.postsData.primary_tag.slug}`
      ).then((r) => r.json());
      setRelatedPosts(rel);
    }
  };
  useEffect(() => {
    if (postsData && postsData.codeinjection_head) {
      const urlText = postsData.codeinjection_head.split('"');
      if (urlText.length > 0 && urlText[0].includes("window.location.href")) {
        setIsRedirect(true);
        router.push(urlText[1]);
      } else {
        fetchRelatedPosts();
      }
    } else {
      fetchRelatedPosts();
    }
  }, []);
  if (props.postsData == null) {
    return <Error />;
  }
  if (postsData !== null) {
    return (
      <>
        <Header />

        <NextSeo title={postsData.title} />
        <div
          className="m-0"
          dangerouslySetInnerHTML={{
            __html: postsData.codeinjection_head
              ? postsData.codeinjection_head
              : "",
          }}
        ></div>

        <div className="jumbotron flex flex-col items-center justify-center text-white font-bold">
          <p className="text-center hidden opacity-0 text-5xl lg:block lg:text-8xl">
            Bethel Bible Seminary
          </p>

          <div className="jtron flex items-center text-md font-extralight  justify-center  container mx-auto  px-24">
            <p>
              {postsData.primary_tag && (
                <Link href={`/tag/${postsData.primary_tag.slug}`}>
                  <a>{postsData.primary_tag.name}</a>
                </Link>
              )}{" "}
              /{" "}
              <Link href={`/${postsData.slug}#`}>
                <a>{postsData.title}</a>
              </Link>
            </p>
          </div>
        </div>

        <main className="container -mt-1  mb-8   md:px-24">
          <section className="p-0 lg:grid grid-cols-2 justify-center  md:grid-cols-8 gap-4">
            <aside className="col-span-2 border-2   bg-primaryBlue text-white">
              <h2 className="p-4 mb-8 border-b-1 text-3xl ">
                {postsData.primary_tag && postsData.primary_tag.name}
              </h2>
              {relatedPosts &&
                relatedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="tag-link  border-b-1   hover:bg-primaryPink hover:cursor-pointer"
                  >
                    <Link href={post.slug}>
                      <a className="  hover:no-underline font-extralight  ">
                        {post.title}
                      </a>
                    </Link>
                  </div>
                ))}
            </aside>

            <section className=" col-span-6     p-4">
              <h3 className="my-4 text-5xl font-semibold text-primaryBlue ">
                {postsData.title}
              </h3>
              {isRedirect && (
                <div className="flex items-center justify-center">
                  <Image layout="fill" src={"spinner.svg"} />
                </div>
              )}
              <div className="inner-saction-one-right">
                {props.postsData != null ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: props.postsData.html }}
                  ></div>
                ) : (
                  ""
                )}
              </div>
            </section>
          </section>
        </main>

        <Footer />
      </>
    );
  }
  return <>Error</>;
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params !== undefined ? ctx.params.slug : "";
  const isPreview = ctx.preview;

  const reqUrl = `https://next-bethelbibleseminary.vercel.app/api/admin/posts?slug=${slug}`;

  const res = await fetch(reqUrl).then();

  const postsData = await res.json();
  if (postsData.errors == undefined && postsData.posts.length > 0) {
    return {
      props: {
        postsData: postsData.posts[0],
      },
    };
  }

  const reqUrlPage = `https://next-bethelbibleseminary.vercel.app/api/admin/pages?slug=${slug}`;

  const resp = await fetch(reqUrlPage).then((r) => r.json());
  console.log(reqUrl, postsData);

  if (resp.errors == undefined && resp.pages.length > 0) {
    return {
      props: {
        postsData: resp.pages[0],
      },
    };
  }
  return {
    props: {
      postsData: null,
      error: true,
      msg: "Not Found",
    },
  };
};

export default PostsBySlug;
