import React from "react";
import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.svg";

const About = () => {
  return (
    <section className="bg-accent py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle
            text="code and coffee"
            headerColor="text-accent-content"
          />
          <p className="text-slate-600 mt-8 leading-loose">
            As a front-end developer passionate about React and a back-end
            developer with expertise in Python and Django, I specialize in
            bringing ideas to life with seamless, user-friendly web
            applications. My focus is on creating interactive, visually
            appealing interfaces that enhance user experience. Let's build
            something amazing together!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
