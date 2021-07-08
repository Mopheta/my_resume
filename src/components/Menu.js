import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { SocialMediaIconsReact } from 'social-media-icons-react';

function Menu(props) {
  return (
    <section class="section-contactme" id="contact-me">
      <div class="row">
        <div class="col-1-of-4">
          <div class="feature-box">
            <div>
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="0"
                borderStyle="solid"
                icon="mail"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(47,139,156,1)"
                iconSize="5"
                roundness="50%"
                size="45"
              />
            </div>
            <h3 class="heading-tertiary u-margin-bottom-small">Email</h3>
            <p class="feature-box__text">kevinstalker14@gmail.com</p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
            <div>
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="0"
                borderStyle="solid"
                icon="phone"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(47,139,156,1)"
                iconSize="5"
                roundness="50%"
                url="#"
                size="45"
              />
            </div>
            <h3 class="heading-tertiary u-margin-bottom-small">Phone</h3>
            <p class="feature-box__text">+598 94 226 372</p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
            <div>
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="0"
                borderStyle="solid"
                icon="linkedin"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(47,139,156,1)"
                iconSize="5"
                roundness="50%"
                url="https://www.linkedin.com/in/kevin-stalker-7b631b140/"
                size="45"
              />
            </div>
            <h3 class="heading-tertiary u-margin-bottom-small">Linkedin</h3>
            <p class="feature-box__text">
              <a
                href="https://www.linkedin.com/in/kevin-stalker-7b631b140/"
                target="_blank"
                className="education_course__link"
              >
                See my full profile
              </a>
            </p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
            <div>
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="0"
                borderStyle="solid"
                icon="github"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(47,139,156,1)"
                iconSize="5"
                roundness="50%"
                url="#"
                size="45"
              />
            </div>
            <h3 class="heading-tertiary u-margin-bottom-small">Github</h3>
            <p class="feature-box__text">
              <a
                href="#"
                target="_blank"
                className="education_course__link"
              >
                Ask for Link
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Menu.propTypes = {};

export default Menu;
