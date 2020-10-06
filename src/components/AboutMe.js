import React from 'react';

import { Link } from 'react-scroll';

import profile from '../css/img/F.png';

function AboutMe(props) {
  return (
    <section id="aboutme" className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">About me</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <h3 className="heading-tertiary u-margin-bottom-small"></h3>
          <div className="profile-picture  ">
            <img
              src={profile}
              alt="Photo 2"
              className="profile-picture__picture profile-picture__picture--p1"
            ></img>
          </div>
          <h3 className="heading-tertiary-name  u-margin-bottom-small">
            Kevin Stalker
          </h3>
        </div>

        <div className="col-2-of-3">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Hello everyone!
          </h3>
          <p className="paragraph">
            My Name is Kevin Stalker, I am 29 years old. I am a person who loves
            music, reading novels and technology articles, play 'futbol', as
            well as spending time with friends and playing video games. One of
            my favorite writers is Mr. John Katzenbach. author of among others
            the well-known novel 'the psychoanalyst'.
          </p>
          <p className="paragraph">
            My experience in recent years has been quality assurance, manual
            testing, ux. I have long been studying react.js, node.js, as well as
            sass, mongoDB, etc. My intention is to develop more and more with
            front-end technologies.
            <p></p>
            I’m interested in learn automation.
          </p>

          <p>
            <Link
              to="contact-me"
              className="footer__link"
              href="#"
              smooth={true}
              duration={500}
            >
              Contact me
            </Link>
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            About this page
          </h3>
          <p className="paragraph">
            This page was created with the purpose of presenting another
            alternative when sharing my resume (cv). but also as my first
            project and apply knowledge that I have acquired as a developer
          </p>
          <Link
            to="about-this-page"
            className="footer__link"
            href="#"
            smooth={true}
            duration={500}
          >
            Learn more about this page
          </Link>
        </div>
        {/* <h2 class="heading-tertiary-hobbies u-margin-bottom-small-hobbies">
          Hobbies
        </h2>
        <div class="col-1-of-2">
          <div class="composition">
            <img
              src={futbol}
              alt="Photo 1"
              class="composition__photo composition__photo--p1"
            />
            <img
              src={books}
              alt="Photo 2"
              class="composition__photo composition__photo--p2"
            />
            <img
              src={music}
              alt="Photo 3"
              class="composition__photo composition__photo--p3"
            />
          </div>
        </div> */}
      </div>
      <section class="section-features-separator-education"></section>
    </section>
  );
}

AboutMe.propTypes = {};

export default AboutMe;
