import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Header />

      <main
        id="site-main"
        className=" my-16 site-main outer error-content      "
      >
        <div className="inner flex items-center w-screen justify-center">
          <section className="error-message">
            <h1 className="error-code ">404</h1>
            <p className="error-description">Page not found</p>

            <Link href="/">
              <a className="error-link">Go to the front page →</a>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
