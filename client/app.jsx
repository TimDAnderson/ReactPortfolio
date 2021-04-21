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
  background-color: #ff0000;
  padding-left: 20px;
`;

const DisplayArea = styled.div`
  flex: 1;
  background-color: #00FF00;
`;

const PageOption = styled.div`
  cursor: pointer;
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
        <PageOption onClick={() => setPage(2)}>Projects</PageOption>
        <br></br>
        <PageOption onClick={() => setPage(3)}>This Site</PageOption>
        <br></br>
        <PageOption onClick={() => setPage(4)}>Contact Me</PageOption>
      </LeftColumn>
      <DisplayArea className="displayPage">
        {page === 0 ? <Home /> : null}
        {page === 1 ? <About /> : null}
        {page === 2 ? <Projects /> : null}
        {page === 3 ? <SiteInfo /> : null}
        {page === 4 ? <ContactMe /> : null}
      </DisplayArea>
    </AppContainer>
  );
}

export default App;