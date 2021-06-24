import {
  DiagramContainer,
  SOAContainer,
  SOATitle,
  ImgContainer,
  TxtContainer
} from './serviceArchitecture.styles.jsx'

export const ServiceArchitecture = props => {

  return (
    <SOAContainer>
      <SOATitle>
        Service Oriented Architecture and Microservices
      </SOATitle>
      <br></br>
      <TxtContainer>
        As applications grow in complexity developers need to break away from
        the monolithic architecture and move towards service oriented architecture.  Customers get to experience a feature 
        rich application and us developers get to break the application down
        into manageable pieces.  Below is a review microservice that I designed
        and deployed.  In addition to the review service I also dsigned and deployed
        a proxy server to combine four other microservices into the same applciation.
        Links to the repos are available on the current projects page.
      </TxtContainer>
      <br></br>
      <DiagramContainer>
        <img height="510" width="680" src="https://gifbucket.s3.us-west-1.amazonaws.com/FEC+(5).png" />
      </DiagramContainer>
    </SOAContainer>
  )
}