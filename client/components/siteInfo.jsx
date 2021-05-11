const SiteInfoContainer = styled.div`
  padding-left: 20%;
  padding-top: 10px;
`;

const HowDid = styled.div`
  font-size: 150%;
  padding-left: 220px;
`;

const ImgContainer = styled.div`
  padding-left: 150px;
`;

const TxtContainer = styled.div`
  width: 680px;
`;

const SiteInfo = props => {

  return (
    <SiteInfoContainer>
      <TxtContainer>
        This is a React application using hooks for state managment and styled components for modular styling.  The client code is autotatically bundled,  compressed
        and deployed to an AWS S3 bucket using Grunt.  The server was created with Express and has been deployed with Docker to an AWS 
        EC2 insance.  Finally, https is possible because of a Nginx reverse proxy and the Lets Encrypt SSL certificate
        generator.
      </TxtContainer>
      <br></br>
      <ImgContainer>
        <img height="180" width="375" src="https://gifbucket.s3-us-west-1.amazonaws.com/S2e8_IC2_Game_Show.png" />
      </ImgContainer>
      <br></br>
      <HowDid>
        How <strong>did</strong> you get here? 
      </HowDid>
      <br></br>
      <div>
        I am a big fan of documentation and web sequence diagrams, below is the architecture of this portfolio.
      </div>
      <br></br>
      <div>
        <img height="490" width="660" src="https://gifbucket.s3-us-west-1.amazonaws.com/Tim's+Portfolio.png" />
      </div>
    </SiteInfoContainer>
  )
}

export default SiteInfo 