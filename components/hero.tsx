import Results from "@/public/images/result.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Illustration SVG code */}
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Expand Your Airtable Capabilities
            </h1>
            <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
              Boost your productivity with our suite of Airtable extensions.
              Every tool, one platform.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link href="mailto:clasicwebtools@gmail.com" passHref>
                <p className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0">
                  Contact Us
                </p>
              </Link>
              <Link href="mailto:clasicwebtools@gmail.com" passHref>
                <p className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4">
                  Get Started
                </p>
              </Link>
            </div>
          </div>

          <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: "10px",
    overflow: "hidden",
  }}
>
  <Image
    src={Results}
    width={544}
    height={306}
    alt="Showcase of Airtable Extensions"
  />
</div>

        </div>
      </div>
    </section>
  );
}
