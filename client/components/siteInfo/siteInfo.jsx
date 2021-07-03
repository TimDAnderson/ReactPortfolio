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
        <ul>
            <li>This is a single page React application using styled components for modular styling.</li>
            <li>The client code is automatically bundled, compressed and deployed to an AWS S3 bucket using Grunt.</li>
            <li>The server was created with Express and has been deployed with Docker to an AWS EC2 instance.</li>
            <li>HTTPS is possible because of a Nginx reverse proxy and the Lets Encrypt SSL certificate
        generator.</li>
          </ul>
      </TxtContainer>
      <br></br>
      <ImgContainer>
        <img height="280" width="475" src="https://gifbucket.s3-us-west-1.amazonaws.com/S2e8_IC2_Game_Show.png" />
      </ImgContainer>
      <HowDid>
        How <strong>did</strong> you get here? 
      </HowDid>
      <BigFan>
        I am a big fan of documentation and web sequence diagrams, below is the architecture of this portfolio.
      </BigFan>
      <br></br>
      <DiagramContainer>
        <img height="590" width="760" src="https://gifbucket.s3-us-west-1.amazonaws.com/Tim's+Portfolio.png" />
      </DiagramContainer>
    </SiteInfoContainer>
  )
}
