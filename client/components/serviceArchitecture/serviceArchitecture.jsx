import { DiagramContainer } from './serviceArchitecture.styles.jsx'

export const SOAContainer = styled.div`
  padding-left: 20%;
  padding-top: 10px;
  opacity: 0.9;
  line-height: 1.2;
`;

export const SOATitle = styled.div`
  font-size: 150%;
  padding-left: 120px;
`;

export const ImgContainer = styled.div`
  padding-left: 150px;
`;

export const TxtContainer = styled.div`
  width: 680px;
  background-color: #222831;
  border-radius: 25px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
  opacity: 0.8;
`;

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
          <div></div>
          <img height="510" width="680" src="https://gifbucket.s3.us-west-1.amazonaws.com/FEC+(5).png" />
      </DiagramContainer>
    </SOAContainer>
  )
}