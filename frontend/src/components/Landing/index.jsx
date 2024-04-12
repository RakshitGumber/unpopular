import React from "react";
import "./style.css";

export const Landing = () => {
  return (
    <>
      <main className="body">
        <section className="hero">
          <h1 className="hero-head-text">HERO SECTION</h1>
        </section>
        <div className="divider"></div>
        <section className="what-is-sec">
          <div className="what-is-left">
            <h2 className="heading-text">What is Unpopular?</h2>
            <p className="desc-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ut
              id quisquam odit libero delectus quaerat? Dignissimos blanditiis
              hic odit nam officia placeat explicabo ullam modi labore, maxime
              quos possimus.
            </p>
            <p className="desc-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              alias delectus ipsam architecto rem laudantium dignissimos quia
              dolorum molestias labore voluptate, eos neque fugit natus unde
              ullam itaque, enim magni?
            </p>
          </div>
          <div className="what-is-right">
            <div className="box"></div>
          </div>
        </section>
        <div className="divider"></div>
        <section className="features-sec">
          <h2 className="heading-text">Features of Unpopular</h2>

          <div className="features-grid">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </section>
        <div className="divider"></div>
        <section className="about-sec">
          <div className="avatar">
            <div className="avatar-image" />
          </div>
          <div className="content">
            <p className="un-text strong-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsa
              magni minima.
            </p>
            <p className="strong-text">Rakshit Gumber</p>
            <p className="desc-text p-left-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              accusantium tempora magnam!
            </p>
          </div>
        </section>
        <div className="divider"></div>
        <section className="contact">
          <div className="contact-right">
            <h2 className="heading-text">Contact</h2>
          </div>
          <div className="contact-left">
            <h2 className="heading-text">Connect</h2>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="desc-text">Copyright@Rakshit-Gumber2024</p>
      </footer>
    </>
  );
};
