import Home from './components/home.jsx'
import About from './components/about.jsx'
import Projects from './components/projects.jsx'
import SiteInfo from './components/siteInfo.jsx'
import ContactMe from './components/contactMe.jsx'

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const LeftColumn = styled.div`
  height: 100%;
  width: 180px;
  background-color: #222831;
  padding-left: 20px;
  color: #fff;
  opacity: 0.9;
  font-family: Arial, Helvetica, sans-serif;
  border-right: 5px solid black;
`;

const DisplayArea = styled.div`
  flex: 1;
  background-color: #30475e;
  color: #fff;
`;

const PageOption = styled.div`
  cursor: pointer;
`;

const ContactContainer = styled.div`
position: absolute;
    bottom: 0;
  padding-bottom: 15px;

`;

const Header = styled.div`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  cursor: pointer;
`;

const WhiteA = styled.a`
color: #fff;
font-size:small;
font-family: Arial, Helvetica, sans-serif;
padding-left: 5px;
`

const ContactSpacer = styled.div`
  padding-top: 10px;
`;

const { useState } = React

const App = props => { 
  const [page, setPage] = useState(0);

  return (
    <AppContainer>
      <LeftColumn className="TableOfContents">
        <Header onClick={() => setPage(0)}>Tim's Portfolio</Header>
        <PageOption onClick={() => setPage(0)}>Home</PageOption>
        <br></br>
        <PageOption onClick={() => setPage(1)}>About Me </PageOption>
        <br></br>
        <PageOption onClick={() => setPage(2)}>This Portfolio</PageOption>
        <br></br>
        <PageOption onClick={() => setPage(3)}>Current Projects</PageOption>
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
      <DisplayArea className="displayPage">
        {page === 0 ? <Home /> : null}
        {page === 1 ? <About /> : null}
        {page === 2 ? <SiteInfo /> : null}
        {page === 3 ? <Projects /> : null}
        {page === 4 ? <ContactMe /> : null}
      </DisplayArea>
    </AppContainer>
  );
}

export default App;