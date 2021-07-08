import React from 'react';
import PropTypes from 'prop-types';

function Experience(props) {
  return (
    <section id="experience" class="section-experience">
      <div class="u-center-text u-margin-bottom-big ">
        <h2 class="heading-secondary">Experience</h2>
      </div>
      <div class="row">
        <div class="col-1-of-2 ">
        
        <div class="lineMarginBottom">
          <h3 class="heading-tertiary u-margin-bottom-small">
            Oktana - QA Anlyst Salesforce SSR - Nov 2020 - Current
          </h3>
            <ul>
              <li><p class="paragraph">Current Project: SONY PlayStation (Service Cloud) </p></li>
              <li><p class="paragraph">Quality Assurance.</p></li>
              <li><p class="paragraph">Automation - Selenium + Java</p></li>
              <li><p class="paragraph">Documentation, Active particiation on Agile meetings</p></li>
              <li><p class="paragraph">Ask for more data </p></li>
            </ul>

          <p class="paragraph_important">
            {' '}
            <strong>
              Currently preparing Salesforce Business Analyst certification
            </strong>
          </p>
          </div>

          <div class="lineMarginBottom">
            <h3 class="heading-tertiary u-margin-bottom-small">
              Nimacloud - QA Analyst - Salesforce - Jul 2020 - Nov 2020
            </h3>         
              <ul>
                <li><p class="paragraph">Quality Assurance. </p></li>
                <li><p class="paragraph">Automation Selenium + Java.</p></li>
                <li><p class="paragraph">Sales Cloud project</p></li>
              </ul>
          </div>
          <div class="lineMarginBottom">
            <h3 class="heading-tertiary u-margin-bottom-small">
              Altimetrik - Developer Junior React - Dec 2019 - Jul 2020
            </h3>
            <ul>
              <li><p class="paragraph">Internal application of the company. Technologies: React.js (redux).</p></li>
            </ul>
          </div>

          <div class="lineMarginBottom">
            <h3 class="heading-tertiary u-margin-bottom-small">
              Altimetrik - Quality Assurance - Nov 2018 - Dec 2019
            </h3>
            <ul>
              <li><p class="paragraph">Functional Testing</p></li>
              <li><p class="paragraph">Automation: Selenium + Java</p></li>
              <li><p class="paragraph">Requirements Analyst.</p></li>
            </ul>
          </div>
          </div>
        <div class="col-1-of-2">

        <div class="lineMarginBottom">
          <h3 class="heading-tertiary u-margin-bottom-small">
            Tata Consultancy Services - Quality Assurance - Aug 2016 - Nov 2018
          </h3>
          <p class="paragraph">
            Data Analysis - Functional Testing - Requirements analysis - UX
          </p>
        </div>

        <div class="lineMarginBottom">
          <h2 class="heading-tertiary  u-margin-bottom-small-hobbies">
            Tata Consultancy Services - Procurement Team – HSPS Team Supervisor
            - Jul 2015 - Aug 2016
          </h2>
          <p class="paragraph">
            Administrative Role - IT products purchase - Bills
          </p>

          </div>
          <div class="lineMarginBottom">
            <h2 class="heading-tertiary  u-margin-bottom-small-hobbies">
              Tata Consultancy Services - Code Setup - Team member - Nov 2014 –
              Jul 2015
            </h2>
            <p class="paragraph">
              Administrative Role - Creation and maintenance of service lines
              (tax, assurance, advisory).
            </p>
          </div>
          <div class="lineMarginBottom">
            <h2 class="heading-tertiary  u-margin-bottom-small-hobbies">
              Before TCS
            </h2>
            <p class="paragraph">
              Accounting and Finance {''}
              Sales - IT items seller Sales - Computer and video game supplies
            </p>
          </div>
        </div>
      </div>
      <section class="section-features-separator-aboutpage"></section>
    </section>
  );
}

Experience.propTypes = {};

export default Experience;
