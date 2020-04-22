import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
import GlobalStyle from "./abstract/Styles/GlobalStyle";
import dark from "./abstract/theme";
import Navigation, {
  NavigationLink,
  NavigationAnchor,
} from "./components/Navigation";
import Button from "./components/Button";
import Banner from "./components/Banner";
import FeatureList, {
  Feature,
  FeatureIcon,
  FeatureHeading,
} from "./components/FeatureList";
import {
  Section,
  SectionHeading,
  SectionList,
  SectionListItem,
  SectionListItemTitle,
  SectionListItemDetail,
} from "./components/Section";
import navigationList from "./abstract/data/navigation-items.json";
import features from "./abstract/data/features.json";

const QuoteButton = () => (
  <Button
    as="a"
    href="https://docs.google.com/forms/d/1Plbqshuv0pHLpbyua1lDHCa6pMlh5qrV1EXzOWDGV_M/edit"
    target="_blank"
    variant="default"
  >
    Get a quote
  </Button>
);

const Home = () => (
  <Section id="about">
    <SectionHeading>Kia ora,</SectionHeading>
    <SectionList>
      <SectionListItem fluid={true}>
        <SectionListItemDetail>
          <p>
            World is changing and so are we. The way businesses operate in New
            Zealand is changing rapidly. Going forward organisations are going
            operate on digital and contactless models and following the
            regulations issued by New Zealand Govt. Work places will be more
            secure, hygienic and organised for reporting and tracing purposes.{" "}
            <br />
            We understand this can be very difficult and overwhelming to manage
            especially if you are medium to large scale business.
          </p>
          <p>
            This is where our story begins. With the begining of new era,
            WorkSafe is born and we have accepted the challenge to do the hard
            work for you so you can focus on success of your business. WorkSafe
            is secure platform designed to help you to keep track of your
            business activities, control plans and employee health for record
            and reporting purpose.
            <br />
            <br />
          </p>
          <p>
            <Button as="a" href="/what-we-offer" variant="default">
              Find out more
            </Button>
          </p>
        </SectionListItemDetail>
      </SectionListItem>
    </SectionList>
  </Section>
);

const Services = () => (
  <Section id="what-we-offer">
    <SectionHeading>What we offer</SectionHeading>
    <FeatureList>
      {features.map((feature) => {
        return (
          <Feature key={feature.id}>
            <FeatureIcon name={feature.icon}></FeatureIcon>
            <FeatureHeading className="feature-heading">
              {feature.text}
            </FeatureHeading>
          </Feature>
        );
      })}
    </FeatureList>
    <p>
      <QuoteButton />
    </p>
  </Section>
);

const Pricing = () => (
  <Section id="pricing">
    <SectionHeading>Pricing & Quotes</SectionHeading>
    <SectionList>
      <SectionListItem fluid={true}>
        <SectionListItemDetail>
          <p>
            Get in touch with us so we can understand your business and
            requirements and provide you best pricing and solution.
            <br />
            Once your signup process is completed you will get 1 month
            subscription for free!
            <br />
            After 1 month you can upgrade or downgrade your pricing tier based
            on what you feel is most suitable for you.
            <br />
            <br />
          </p>
          <p>
            <QuoteButton />
          </p>
        </SectionListItemDetail>
      </SectionListItem>
    </SectionList>
  </Section>
);

const News = () => (
  <Section id="pricing">
    <SectionHeading>News & Articles</SectionHeading>
    <SectionList>
      <SectionListItem fluid={true}>
        <SectionListItemDetail>
          <p>
            This Page under currently construction. We apologies for any
            inconvenience.
            <br />
            <br />
          </p>
        </SectionListItemDetail>
      </SectionListItem>
    </SectionList>
  </Section>
);

function App() {
  // ReactGA.initialize("UA-143436222-1");
  // ReactGA.pageview("/");
  return (
    <ThemeProvider theme={dark}>
      <Fragment>
        <GlobalStyle />
        <Router>
          <Navigation>
            {navigationList.map((data) => {
              return data.isExternal ? (
                <NavigationAnchor key={data.id} href={data.uri} target="_blank">
                  {data.label}
                </NavigationAnchor>
              ) : (
                <NavigationLink key={data.id} to={data.uri}>
                  {data.label}
                </NavigationLink>
              );
            })}
          </Navigation>
          <Banner />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/what-we-offer">
              <Services />
            </Route>
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/news">
              <News />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
