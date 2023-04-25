import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/rk.png"}
          alt="An image showing RK"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'M R_K_8998</h1>
      <p>
        I Blog about web development - especially frontend framework like react
        or next js
      </p>
    </section>
  );
};

export default Hero;
