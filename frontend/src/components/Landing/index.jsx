import React from "react";
import "./style.css";

export const Landing = () => {
  return (
    <>
      <main className="body">
        <section className="hero">
          <h1 className="hero-head-text">
            <span className="colored">U</span>npopular
          </h1>
          <p className="desc-text">A new social media in the market</p>
        </section>
        <div className="divider"></div>
        <section className="what-is-sec">
          <div className="what-is-left">
            <h2 className="heading-text">What is Unpopular?</h2>
            <p className="desc-text">
              Welcome to Unpopular! Here, we celebrate the unconventional,
              embrace diverse perspectives, and explore the roads less traveled.
              Join us in discovering the beauty of the unpopular, where every
              voice is heard, and every idea is valued.
            </p>
            <p className="desc-text">
              In this corner of the digital world, we invite you to break free
              from the echo chambers of mainstream culture and explore the
              hidden gems of human creativity and intellect
            </p>
          </div>
          <div className="what-is-right">
            <div className="box">
              <h1 className="hero-head-text">
                <span className="colored">U</span>npopular
              </h1>
            </div>
          </div>
        </section>
        <div className="divider"></div>
        <section className="features-sec">
          <h2 className="heading-text">Features of Unpopular</h2>

          <div className="features-grid">
            <div className="card">
              <h3>Post On Unpopular</h3>
              <p>Create unpopular posts on the platform</p>
            </div>
            <div className="card">
              <h3>Profile Management</h3>
              <p>Manage your profile</p>
            </div>
            <div className="card">
              <h3>Interact With Other Posts</h3>
              <p>
                Comment on other peoples post and share your opinions, also like
                the posts.
              </p>
            </div>
          </div>
        </section>
        <div className="divider"></div>
        <section className="about-sec">
          <div className="avatar">
            {/* <div className="avatar-image" /> */}
            <img
              src="http://localhost:3000/myPhoto.jpg"
              alt="myPhoto"
              className="avatar-image"
            />
          </div>
          <div className="content">
            <p className="un-text strong-text">
              I am an enthusiast full stack web developer
            </p>
            <p className="strong-text">Rakshit Gumber</p>
            <p className="desc-text p-left-0">
              Strive for excellence and success will follow you &emsp;&emsp;~
              Rakshit Gumber
            </p>
          </div>
        </section>
        <div className="divider"></div>
      </main>
      <footer className="footer">
        <p className="desc-text">Copyright@Rakshit-Gumber2024</p>
      </footer>
    </>
  );
};
