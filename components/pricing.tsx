import Link from "next/link";

export default function Pricing() {
  const handleGetStartedClick = () => {
    window.open("https://form.jotform.com/240696265138059", "_blank");
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="text-center pb-12 md:pb-20">
          <h2 className="h3 text-gray-900 mb-4">
            Tailored Pricing for Step-by-Step Article Creation
          </h2>
          <p className="text-xl text-gray-600">
            Our plans are all about giving your team a supercharge, boosting
            content that wouldn't have existed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Basic Tier */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg mb-2">Basic</h3>
            <p className="mb-5">Get started with the essentials.</p>
            <p className="text-2xl font-bold mb-5">
              $1,000 <span className="text-lg">/ month</span>
            </p>
            <ul className="mb-5">
              <li>Up to 20 articles</li>
              <li>Email support</li>
              <li>Basic video tutorials</li>
            </ul>
            <Link href="https://form.jotform.com/240696265138059" passHref>
              <p
                className="bg-green-500 text-white rounded py-2 px-4 hover:bg-green-700 transition-colors"
              >
                Get Started
              </p>
            </Link>
          </div>

          {/* Standard Tier */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg mb-2">Standard</h3>
            <p className="mb-5">Everything in Basic plus more features.</p>
            <p className="text-2xl font-bold mb-5">
              $2,000 <span className="text-lg">/ month</span>
            </p>
            <ul className="mb-5">
              <li>Up to 40 articles</li>
              <li>Priority email support</li>
              <li>SEO optimization</li>
              <li>Enhanced video tutorials</li>
              <li>Multi language support</li>
            </ul>
            <Link href="https://form.jotform.com/240696265138059" passHref>
              <p
                className="bg-green-500 text-white rounded py-2 px-4 hover:bg-green-700 transition-colors"
              >
                Get Started
              </p>
            </Link>
          </div>

          {/* Premium Tier */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg mb-2">Premium</h3>
            <p className="mb-5">For businesses that need more customization.</p>
            <p className="text-2xl font-bold mb-5">
              $5,000 <span className="text-lg">/ month</span>
            </p>
            <ul className="mb-5">
              <li>Unlimited articles</li>
              <li>Dedicated Editor</li>
              <li>Professional video production</li>
              <li>Advanced SEO optimization</li>
            </ul>
            <Link href="https://form.jotform.com/240696265138059" passHref>
              <p
                className="bg-green-500 text-white rounded py-2 px-4 hover:bg-green-700 transition-colors"
              >
                Get Started
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
