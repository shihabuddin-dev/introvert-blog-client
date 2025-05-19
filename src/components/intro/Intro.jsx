import React from "react";
import { FaArrowCircleRight, FaFeatherAlt, FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router";
import Button from "../ui/Button";

const Intro = () => {
  return (
    <>
      <div className="pb-10 px-4 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-gray-800">Introvert Blog</h1>
            <FaFeatherAlt className="text-teal-500 text-3xl" />
          </div>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            A calm space for deep thoughts, silent strength, and personal
            reflection. Discover articles written with intention — not noise.
          </p>
        </section>
        <Link to="/blogs" className="flex justify-center">
          <Button>
            Explore Blogs
            <FaArrowCircleRight className="ml-2 transition-all duration-300 ease-in-out hover:skew-2" />
          </Button>
        </Link>

        {/* Blog Posts */}
        <section className="mt-10">
          <div className="flex items-center gap-2 mb-6">
            <FaQuoteLeft className="text-teal-600 text-2xl" />
            <h2 className="text-2xl font-semibold text-gray-700">
              Latest Reflections
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Post Card 1 */}
            <div className="bg-white shadow-sm p-5 rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Why Silence is Powerful that make you great
              </h3>
              <p className="text-gray-600 text-sm">
                In a loud world, silence speaks volumes. Learn how quiet
                reflection can bring clarity and peace.
              </p>
              <Link
                to="/blogs"
                className="mt-4 text-sm text-teal-500 font-medium"
              >
                Read More →
              </Link>
            </div>

            {/* Post Card 2 */}
            <div className="bg-white shadow-sm p-5 rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Creating a Personal Retreat at Home
              </h3>
              <p className="text-gray-600 text-sm">
                Design a space that supports your solitude, creativity, and
                mental clarity.
              </p>
              <Link
                to="/blogs"
                className="mt-4 text-sm text-teal-500 font-medium"
              >
                Read More →
              </Link>
            </div>

            {/* Post Card 3 */}
            <div className="bg-white shadow-sm p-5 rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                How Introverts Build Deep Relationships
              </h3>
              <p className="text-gray-600 text-sm">
                Quiet doesn’t mean distant. Discover how introverts nurture
                meaningful, long-term connections.
              </p>
              <Link
                to="/blogs"
                className="mt-4 text-sm text-teal-500 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Intro;
