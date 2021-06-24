import { Home } from '../home/home.jsx'
import { Projects } from '../projects/projects.jsx'
import { SiteInfo } from '../siteInfo/siteInfo.jsx'
import { ServiceArchitecture } from '../serviceArchitecture/serviceArchitecture.jsx'
import { SystemDesign } from '../systemDesign/systemDesign.jsx'

import {
  AppContainer,
  LeftColumn,
  LinkStyle,
  HeaderLink,
  DisplayArea,
  ContactContainer,
  WhiteA,
  ContactSpacer,
} from './app.styles.jsx'

const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const Router = ReactRouterDOM.BrowserRouter;

export const App = () => {

  return (
    <Router>
      <AppContainer>
        <LeftColumn className="TableOfContents">
          <HeaderLink to="/">Tim's <i className="fab fa-react"></i> Portfolio</HeaderLink>
          <LinkStyle to="/" >Home</LinkStyle>
          <br></br>
          <br></br>
          <LinkStyle to="/ThisPortfolio">This Portfolio</LinkStyle>
          <br></br>
          <br></br>
          <LinkStyle to="/ServiceOrientedArchitecture">Service Oriented Architecture</LinkStyle>
          <br></br>
          <br></br>
          <LinkStyle to="/SystemDesign">System Design</LinkStyle>
          <br></br>

          <br></br>
          <LinkStyle to="/CurrentProjects">Current Projects</LinkStyle>
          <br></br>
          <ContactContainer>
            <ContactSpacer>
              <i className="fab fa-github"></i>
              <WhiteA href="https://github.com/TimDAnderson">TimDAnderson</WhiteA>
            </ContactSpacer>
            <ContactSpacer>
              <i className="fab fa-linkedin"></i>
              <WhiteA href="https://www.linkedin.com/in/tim-anderson-5bb85452/">LinkedIn</WhiteA>
            </ContactSpacer>
            <ContactSpacer>
              <i className="fas fa-envelope"></i>
              <WhiteA href="mailto:me@timdanderson.com">me@TimDAnderson.com</WhiteA>
            </ContactSpacer>
            <ContactSpacer>
              <i className="fas fa-phone"></i>
              <WhiteA>+1 (925) 348 5133</WhiteA>
            </ContactSpacer>
          </ContactContainer>
        </LeftColumn>
        <DisplayArea>
          <Switch>
            <Route path="/ThisPortfolio">
              <SiteInfo />
            </Route>
            <Route path="/ServiceOrientedArchitecture">
              <ServiceArchitecture />
            </Route>
            <Route path="/SystemDesign">
              <SystemDesign />
            </Route>
            <Route path="/CurrentProjects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </DisplayArea>
      </AppContainer>
    </Router>
  );
}
