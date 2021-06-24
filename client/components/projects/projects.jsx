const ProjectContainer = styled.div`
  padding-left: 10%;
  padding-top: 0px;
`;

const WhiteATag = styled.a`
color: #fff;
font-size:small;
font-family: Arial, Helvetica, sans-serif;
`

const Project = styled.div`
  width: 1150px;
  background-color: #222831;
  border-radius: 25px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  opacity: 0.8;
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: 350px 400px 400px;
`;

const ProjectTitle = styled.div`
  grid-column-start: 1;
`;

const ProjectInfo1 = styled.div`
  grid-column-start: 2;
`;

const ProjectInfo1Img = styled.div`
  grid-column-start: 2;
  padding-left: 100px;
`;

const ProjectInfo2 = styled.div`
  grid-column-start: 3;
`;

const ProjectInfo2Img = styled.div`
  grid-column-start: 3;
  padding-left: 100px;
`;

const ProjectWide = styled.div`
  grid-column-end: span 2;
`;

const TitleText = styled.div`
  font-size: 150%;
`;

export const Projects = props => {

  return (
    <ProjectContainer>
      {/* <h1>Current Projects</h1> */}
      <Project>
        <ProjectTitle>
          <TitleText>System Design</TitleText>
          <WhiteATag href="https://github.com/SDC-Builder/Tim-Proxy-Server">Proxy Server Repo with SSR</WhiteATag>
          <br></br>
          <WhiteATag href="https://github.com/SDC-Builder/Tim-About-Service">About Service Repo</WhiteATag>
        </ProjectTitle>
        <ProjectInfo1>
          <ul>
            <li>Deployed proxy server and About service with 10 million records to AWS</li>
            <li>Google PageSpeed insight score of 99</li>
            <li>Server Side Rendering with React</li>
            <li>Horizontal Scaling with load balancers</li>
            <li>Redis cache for quick retrieval of previously rendered HTML</li>
            <li>Cassandra DB Cluster for data replication and speed</li>
          </ul>  
          {/* <div>
            Deployed proxy server and About service with 10 million records to AWS
            Google PageSpeed insight score of 99
            Server Side Rendering with React
            Horizontal Scaling with load balancers
            Redis cache for quick retrieval of previously rendered HTML
            Cassandra DB Cluster for data replication and speed
          </div> */}
        </ProjectInfo1>
        <ProjectInfo2Img>
        <img height="150" width="150" src="https://gifbucket.s3.us-west-1.amazonaws.com/Screen+Shot+2021-06-21+at+11.42.21+PM.png" />
        </ProjectInfo2Img>
      </Project>
      <Project>
        <ProjectTitle>
          <TitleText>Service Oriented Architecture</TitleText>
          <WhiteATag href="https://github.com/rpt26-fec-pathfinder/tim-proxy">Proxy Server Repo</WhiteATag>
          <br></br>
          <WhiteATag href="https://github.com/rpt26-fec-pathfinder/tim-review-service">Review Service Repo</WhiteATag>
        </ProjectTitle>
        <ProjectInfo1Img>
        <img height="150" width="150" src="https://gifbucket.s3.us-west-1.amazonaws.com/Screen+Shot+2021-06-22+at+7.39.17+PM.png" />
        </ProjectInfo1Img>
        <ProjectInfo2>
          <ul>
            <li>Deployed proxy server and Review service</li>
            <li>Deployed to AWS with Docker and Grunt</li>
            <li>Let's Encrypt SSL Certification / NGINX Reverse Proxy</li>
            <li>Styled Components for modularity</li>
            <li>Relational DB and join tables used for review retrieval</li>
            <li>CI/CD with Jest and Enzyme</li>
          </ul>
        </ProjectInfo2>
      </Project>
      <Project>
        <ProjectTitle>
          <TitleText>.gif Creator</TitleText>
          <WhiteATag href="https://github.com/TimDAnderson/gif-Maker">Link To Gif Maker Repo</WhiteATag>
        </ProjectTitle>
        <ProjectInfo1>
          <ul>
            <li>Allows users to upload large video files from the client to the server</li>
            <li>The video files are converted to .gif's using FFPEG</li>
            <li>The .gif's are uploaded to a AWS S3 buckets</li>
            <li>Public links to the .gif's are persisted in a MySQL database</li>
          </ul>
        </ProjectInfo1>
        <ProjectInfo2Img>
          <img height="150" width="150" src="https://gifbucket.s3.us-west-1.amazonaws.com/zoom_1.gif" />
        </ProjectInfo2Img>
      </Project>
      <Project>
        <ProjectTitle>
          <TitleText>REST to WebSocket Converter</TitleText>
          <WhiteATag href="https://github.com/TimDAnderson/ClearView-RestServer">Link To Rest Server Repo</WhiteATag>
        </ProjectTitle>
        <ProjectWide>
          <ul>
            <li>Listens for http requests then opens up a web socket connection to another server</li>
            <li>Automation software in the cloud can reach down and control physical servers</li>
          </ul>
        </ProjectWide>
      </Project>
      <Project>
        <ProjectTitle>
          <TitleText>This portfolio</TitleText>
          <WhiteATag href="https://github.com/TimDAnderson/portfolio">Link To Portfolio Repo</WhiteATag>
        </ProjectTitle>
        <ProjectWide>
          <ul>
            <li>Single Page application written with modern React syntax</li>
            <li>Optomized for viewing on a 1920x1080 Desktop screen</li>
          </ul>
        </ProjectWide>
      </Project>
    </ProjectContainer>
  )
}
