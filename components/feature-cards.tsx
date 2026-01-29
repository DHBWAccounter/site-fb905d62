import Link from "next/link";
import Image from "next/image";

export function FeatureCards() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* About Card */}
          <div className="group">
            <div className="relative overflow-hidden rounded-lg shadow-md mb-6">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg"
                alt="About Bitcoin Association"
                width={2048}
                height={1366}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                <Link href="/about-1" className="hover:text-[#3D9991] transition-colors">
                  About
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">
                Find out about our organization and mission.
              </p>
              <Link
                href="/about-1"
                className="inline-flex items-center text-[#3D9991] font-semibold hover:text-[#2d7a73] transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Join Us Card */}
          <div className="group">
            <div className="relative overflow-hidden rounded-lg shadow-md mb-6">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg"
                alt="Join Bitcoin Association"
                width={2500}
                height={1875}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                <Link href="/meetups-events" className="hover:text-[#3D9991] transition-colors">
                  Join Us
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">
                You can become a contributor to our cause, or participate yourself.
              </p>
              <Link
                href="/meetups-events"
                className="inline-flex items-center text-[#3D9991] font-semibold hover:text-[#2d7a73] transition-colors"
              >
                Find Out How →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
