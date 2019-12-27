/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} /> */}
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('get-started')}>Get Started in under 5 Minutes!</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align={ props.align || "center" }
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const StateAndRouter = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Comes with state management library that provides functionality similar to `redux-react`, along with devtools to examine your state.',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'State Management',
          },
          {
            content: 'Easily manage forms with Final Form and a HOC wrapper for Riot components.',
            image: `${baseUrl}img/undraw_fill_forms_yltj.svg`,
            imageAlign: 'top',
            title: 'Final Form',
          },
          {
            content: 'Official Riot 4 router is built in, already configured and ready to use.',
            image: `${baseUrl}img/undraw_tabs_jf82.svg`,
            imageAlign: 'top',
            title: 'Riot Router',
          }
        ]}
      </Block>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Batteries Included Boilerplate!</h2>
        <p>Some of the best tools you will need to build web apps already come built in:
          &nbsp;<b>AnimeJS</b> - <b>Fontawesome 5</b> - <b>Jest</b> - <b>Webpack</b> - <b>Dev Server</b>
          <br />
          <br />
          <a class='button' href="/riot-4-boilerplate/docs/get-started#what-this-boilerplate-comes-with">and more!</a>
        </p>
      </div>
    );

    const DeployToCloud = () => (
      <Block background="light" align="left">
        {[
          {
            content:
              'Comes with a Dockerfile, terraform scripts, and a deploy script to make your app live, fast! ' +
              'Automatically create the necessary infrastructure to deploy your app in a simple and cost effective way.' +
              '<br /><br />Deploying is as easy as `npm run deploy`!' +
              '<br /><br /><a href="/riot-4-boilerplate/docs/deployment" class="button">Find out how</a>',
            image: `${baseUrl}img/undraw_cloud_hosting_aodd.svg`,
            imageAlign: 'right',
            title: 'Deploy to the Cloud',
          },
        ]}
      </Block>
    );

    const SetupGuide = () => (
      <Block id="try" align="left">
        {[
          {
            content:
              'Software development should be convenient, organized and scalable. ' +
              'And that\'s exactly how this project has been designed. ' +
              'This documentation details the how and the why.' +
              '<br /><br /><a href="/riot-4-boilerplate/docs/setup" class="button">Setup Guide</a>',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Structured for Scale',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <StateAndRouter />
          <FeatureCallout />
          <SetupGuide />
          <DeployToCloud />
        </div>
      </div>
    );
  }
}

module.exports = Index;
