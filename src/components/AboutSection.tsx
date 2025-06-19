import React from "react";

import AnimatedScrollWrapper from "./shared/AnimatedScrollWrapper";

export default function AboutSection() {
  return (
    <AnimatedScrollWrapper>
      <section className="py-16 from-[#0f2027] via-[#203a43] to-[#512c64] bg-gradient-to-r">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="">
              <div className="container mx-auto ">
                <h2 className="mb-4 text-xl font-semibold">
                  Hi 👋, It&apos;s{" "}
                  <span className="text-cyan-600">Ermias Amare</span>
                </h2>

                <div className="text-justify font-[100]">
                  I&apos;m a Full-stack and Mobile App developer based in Bahir
                  Dar, Ethiopia (UTC+3)
                  <br />
                  <br />
                  I&apos;m a full-stack developer with expertise in building
                  modern web applications using cutting-edge technologies. I
                  specialize in both front-end and back-end development and have
                  a strong foundation in data structures, algorithms, and
                  database design. I&apos;m passionate about writing clean,
                  efficient, and scalable code that delivers great user
                  experiences.
                </div>
              </div>
            </div>
            <div className="">
              <div className="container md:mx-8 "></div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedScrollWrapper>
  );
}
