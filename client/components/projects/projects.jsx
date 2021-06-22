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
  width: 1200px;
  background-color: #222831;
  border-radius: 25px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  opacity: 0.8;
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: 400px 400px 400px;
`;

const ProjectTitle = styled.div`
  grid-column-start: 1;
`;

const ProjectInfo1 = styled.div`
  grid-column-start: 2;
`;

const ProjectInfo2 = styled.div`
  grid-column-start: 3;
`;

const ProjectWide = styled.div`
  grid-column-end: span 2;
`;

const TitleText = styled.div`
  font-size: 30px;
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
          <div>
            Deployed proxy server and About service with 10 million records to AWS
            Google PageSpeed insight score of 99
            Server Side Rendering with React
            Horizontal Scaling with load balancers
            Redis cache for quick retrieval of previously rendered HTML
            Cassandra DB Cluster for data replication and speed
          </div>
        </ProjectInfo1>
        <ProjectInfo2>
        <img height="200" width="200" src="https://gifbucket.s3.us-west-1.amazonaws.com/Screen+Shot+2021-06-21+at+11.42.21+PM.png" />
        </ProjectInfo2>
      </Project>
      <Project>
        <ProjectTitle>
          <div>Service Oriented Architecture</div>
          <WhiteATag href="https://github.com/rpt26-fec-pathfinder/tim-proxy">Proxy Server Repo</WhiteATag>
          <br></br>
          <WhiteATag href="https://github.com/rpt26-fec-pathfinder/tim-review-service">Review Service Repo</WhiteATag>
        </ProjectTitle>
        <ProjectInfo2>
          <div>
            Proxy server and Review service
            Deployed to AWS with Docker and Grunt
            Let's Encrypt SSL Certification / NGINX Reverse Proxy
            Styled Components for modularity
            CI/CD with Jest and Enzyme
          </div>
        </ProjectInfo2>
      </Project>
      <Project>
        <ProjectTitle>
          <div>gif Creator</div>
          <WhiteATag href="https://github.com/TimDAnderson/gif-Maker">Link To Gif Maker Repo</WhiteATag>
        </ProjectTitle>
        <div>
          Allows users to upload large video files from the client to the server.  The video files are converted to .gif's using FFPEG.  The .gif's are uploaded to a AWS S3 buckets and the public links are persisted in a MySQL database
        </div>
        
      </Project>
      <Project>
        <ProjectTitle>
          <div>REST to WebSocket Converter</div>
          <WhiteATag href="https://github.com/TimDAnderson/ClearView-RestServer">Link To Rest Server Repo</WhiteATag>
        </ProjectTitle>
        <ProjectWide>
          <div>
            Listens for http requests then opens up a web socket connection to another server, completes various tasks, then closes the socket.  This allows software in the cloud to reach down and control physical servers.
          </div>
        </ProjectWide>
      </Project>
      <Project>
        <ProjectTitle>
          <div>This portfolio</div>
          <WhiteATag href="https://github.com/TimDAnderson/portfolio">Link To Portfolio Repo</WhiteATag>
        </ProjectTitle>
        <ProjectInfo1>
          Single Page application written with modern React syntax
        </ProjectInfo1>
      </Project>
    </ProjectContainer>
  )
}
