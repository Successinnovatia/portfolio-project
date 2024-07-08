import heroImg from "../assets/hero.svg";

import { socialLinks } from "../data";
import { useAppContext } from "../AppContext";

const Hero = () => {
  const { fade, currentText } = useAppContext();

  return (
    <div className="bg-accent py-24 ">
      <div className="align-element grid md:grid-cols-2 items-center gap-8 ">
        <article>
          <h1 className="text-7xl font-bold tracking-wider text-accent-content">
            I'm Divine
          </h1>
          <p
            className={`mt-4 text-3xl text-slate-700 capitalize tracking-wide transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentText[0]}
          </p>
          <p
            className={`mt-2 text-lg text-slate-700 capitalize tracking wide transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentText[1]}
          </p>
          <div className="flex gap-x-4 mt-4">
            {socialLinks.map((socialLink) => {
              const { id, url, icon } = socialLink;
              return (
                <a key={id} href={url}>
                  {icon}
                </a>
              );
            })}
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
