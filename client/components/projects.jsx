const ProjectContainer = styled.div`
  padding-left: 20%;
  padding-top: 10px;
`;

const WhiteATag = styled.a`
color: #fff;
font-size:small;
font-family: Arial, Helvetica, sans-serif;
`

const Projects = props => {

  return (
    <ProjectContainer>
      <h2>Current Projects</h2>
      <h4>SDC</h4>
      <div>

      </div>
      <WhiteATag href="">Link To Repo</WhiteATag>
      <h4>Service Oriented Architecture</h4>
      <div>
        Review Service
        Proxy Server
        <WhiteATag href="https://github.com/rpt26-fec-pathfinder/tim-proxy">Link To Proxy Server Repo</WhiteATag>
        <WhiteATag href="https://github.com/rpt26-fec-pathfinder/tim-review-service">Link To Review Service Repo</WhiteATag>
      </div>
      <h4>gif Creator</h4>
      <div>
        Allows users to upload large video files from the client to the server.  The video files are converted to .gif's using FFPEG.  The .gif's are uploaded to a AWS S3 buckets and the public links are persisted in a MySQL database
      </div>
      <WhiteATag href="https://github.com/TimDAnderson/gif-Maker">Link To Repo</WhiteATag>
      <h4>ClearView Rest Server</h4>
      <div>
        listens for http requests then opens up a web socket connection to another server, completes various tasks, then closes the socket.
      </div>
      <WhiteATag href="https://github.com/TimDAnderson/ClearView-RestServer">Link To Repo</WhiteATag>
      <h4>This portfolio</h4>
      <div>
        
      </div>
      <WhiteATag href="https://github.com/TimDAnderson/portfolio">Link To Repo</WhiteATag>
    </ProjectContainer>
  )
}

export default Projects 