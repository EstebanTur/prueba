import react from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className=" text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Esteban Tur
      </h1>
      <p className=" text-base md:text-xl mb-3 font-medium ">
        Programmer and web Developer
      </p>
      <p className=" text-sm max-w-xl mb-6 font-bold">
        Welcome to my portfolio! I'm a programmer and web developer who's also a
        certified{" "}
        <a
          href="www.instagram.com/estebantur.ok"
          target="_blank"
          className=" text-cyan-600 hover:underline underline-offset-2 decoration-1 decoration-red-600"
          rel="noreferrer noopener"
        >
          professional coach
        </a>{" "}
        . I enjoy creating user-friendly websites and apps. What makes me
        different is my coaching background. It helps me communicate
        effectively, work well with teams, and lead projects smoothly. I believe
        that being a good team player is just as important as writing great
        code. Check out my portfolio to see how my mix of tech skills and
        coaching experience brings a fresh perspective to my work.{" "}
        <a
          href="https://www.linkedin.com/in/estebanturllacer/?locale=en_US"
          target="_blank"
          className=" text-cyan-600 hover:underline underline-offset-2 decoration-1 decoration-red-600"
          rel="noreferrer noopener"
        >
          Linkdin
        </a>
        .
      </p>
    </div>
  );
}

export default Intro;
