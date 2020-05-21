import React, { Fragment } from 'react';
import { Link } from 'react-scroll';

function Index(props) {
  return (
    <Fragment>
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Kevin Stalker</span>
            <span className="heading-primary--sub">welcome to my resume</span>
          </h1>

          <Link
            to="aboutme"
            className="btn btn--white"
            href="#"
            smooth={true}
            duration={500}
          >
            Explore my profile
          </Link>
        </div>
      </header>
    </Fragment>
  );
}

export default Index;
