import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';
import { getGithubRepos } from '../actions/profile';
import reactsass from '../css/img/reactsass.jpg';

function ProfileGithubRepos({ getGithubRepos, repos }) {
  useEffect(() => {
    getGithubRepos();
  }, [getGithubRepos]);

  return (
    <div className="section-about_thisPage" id="about-this-page">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">About this page</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">Purpose</h3>
          <p className="paragraph">
            The purpose of creating this page was to present my resume in a
            different way than the classic one. On the other hand, I have
            studied technologies such as react.js, node.js, sass, etc. on my own
            and I found it a good project to apply much of the knowledge
            acquired, and go much further than a classic html.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            This page has been created using:
          </h3>
          <p className="paragraph">
            react.js: dividing each section into separate components. sass: for
            everything related to styles, using the{' '}
            <a
              className="footer__link"
              href="https://medium.com/@andrew_barnes/bem-and-sass-a-perfect-match-5e48d9bc3894"
              target="blank"
            >
              BEM
            </a>{' '}
            (block-element-modifier) methodology. Node.js / express: for the
            creation of a very small application with the aim of consuming the
            github application (code that I had already written for another
            application, with slight modifications)
          </p>
        </div>
        <h2 class="heading-tertiary-hobbies u-margin-bottom-small-hobbies">
          <div class="col-1-of-2">
            <div class="composition">
              <img
                src={reactsass}
                alt="Photo 1"
                class="composition__photo composition__photo--p1"
              />
            </div>
          </div>
        </h2>

        <div className="col-2-of-2">
          <div>
            <h3 className="heading-tertiary u-margin-bottom-small">My repos</h3>
          </div>
          {repos.map((repo, index) => (
            <Fragment>
              <p className="paragraph">
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="footer__link"
                >
                  {repo.name}
                </a>
              </p>
              <p className="paragraph"> {repo.description}</p>
              <p className="paragraph"> Watchers: {repo.watchers_count}</p>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

// ProfileGithubRepos.propTypes = {
//   getGithubRepos: PropTypes.func.isRequired,
//   repos: PropTypes.array.isRequired,
// };

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithubRepos);
