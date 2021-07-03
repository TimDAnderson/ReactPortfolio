import {
  DiagramContainer,
  SOAContainer,
  SOATitle,
  // ImgContainer,
  TxtContainer
} from './serviceArchitecture.styles.jsx'

export const ServiceArchitecture = props => {

  return (
    <SOAContainer>
      <SOATitle>
        <h2>
        Service Oriented Architecture and Microservices

        </h2>
      </SOATitle>
      <br></br>
      <TxtContainer>
        As applications grow in complexity, developers need to break away from
        the monolithic architecture and move towards service oriented architecture.  Customers get to experience a feature 
        rich application and us developers get to break the application down
        into manageable pieces.
      </TxtContainer>
      <TxtContainer>
{/* Below is a Review microservice that I designed
        and deployed.  In addition to the Review service I also designed and deployed
        a proxy server to combine four other microservices into the same application.
        Links to the repos are available on the current projects page. */}
        <ul>
            <li>Below is a Review microservice that I designed and deployed.</li>
            <li>In addition to the Review service I also designed and deployed a proxy server to combine four other microservices into the same application.</li>
            <li>Links to the repos are available on the current projects page.</li>
            {/* <li>Horizontal Scaling with load balancers</li>
            <li>Redis cache for quick retrieval of previously rendered HTML</li>
            <li>Cassandra DB Cluster for data replication and speed</li> */}
          </ul>  
      </TxtContainer>
      
      <br></br>
      <DiagramContainer>
        <img height="610" width="780" src="https://gifbucket.s3.us-west-1.amazonaws.com/FEC+(5).png" />
      </DiagramContainer>
    </SOAContainer>
  )
}