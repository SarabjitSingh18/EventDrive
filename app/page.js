import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] h-125 w-125 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-125 w-125 rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center px-6 sm:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <span className="inline-block mb-6 text-sm tracking-widest uppercase text-gray-400">
              spott<span className="text-purple-400">*</span>
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              Discover &
              <br />
              create
              <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                unforgettable events
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
              Host, explore, and experience events that actually matter.
              Spott connects people through moments worth remembering.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/explore">
                <Button
                  size="xl"
                  className="rounded-full px-8 py-6 text-base shadow-lg shadow-purple-500/30 hover:scale-105 transition"
                >
                  Get Started
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  variant="outline"
                  size="xl"
                  className="rounded-full px-8 py-6 text-base border-gray-700 hover:bg-white/5"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-purple-500/20 to-blue-500/20 blur-3xl" />
            <Image
              src="/3d-react.png"
              alt="Event preview"
              width={800}
              height={800}
              priority
              className="relative w-full max-w-130 mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
