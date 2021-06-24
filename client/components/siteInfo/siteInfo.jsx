import {
  SiteInfoContainer,
  HowDid,
  ImgContainer,
  TxtContainer,
  BigFan,
  DiagramContainer,
} from './siteInfo.styles.jsx'

export const SiteInfo = () => {

  return (
    <SiteInfoContainer>
      <TxtContainer>
        This is a React application using a React Router for page managment and styled components for modular styling.  The client code is autotatically bundled,  compressed
        and deployed to an AWS S3 bucket using Grunt.  The server was created with Express and has been deployed with Docker to an AWS 
        EC2 insance.  Finally, https is possible because of a Nginx reverse proxy and the Lets Encrypt SSL certificate
        generator.
      </TxtContainer>
      <br></br>
      <ImgContainer>
        <img height="180" width="375" src="https://gifbucket.s3-us-west-1.amazonaws.com/S2e8_IC2_Game_Show.png" />
      </ImgContainer>
      <HowDid>
        How <strong>did</strong> you get here? 
      </HowDid>
      <BigFan>
        I am a big fan of documentation and web sequence diagrams, below is the architecture of this portfolio.
      </BigFan>
      <br></br>
      <DiagramContainer>
        <img height="490" width="660" src="https://gifbucket.s3-us-west-1.amazonaws.com/Tim's+Portfolio.png" />
      </DiagramContainer>
    </SiteInfoContainer>
  )
}
