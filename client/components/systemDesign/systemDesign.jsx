import { DiagramContainer } from "./systemDesign.styles.jsx"

export const SystemContainer = styled.div`
  padding-left: 15%;
  padding-top: 10px;
  opacity: 0.9;
  line-height: 1.2;
`;

export const SystemTitle = styled.div`
  font-size: 150%;
  padding-left: 220px;
`;

export const ImgContainer = styled.div`
  padding-left: 150px;
`;

export const TxtContainer = styled.div`
  width: 680px;
  background-color: #222831;
  border-radius: 25px;
  padding: 20px;
  margin-left: 80px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
  opacity: 0.8;
`;

export const SystemDesign = props => {

  return (

    <SystemContainer>
      <SystemTitle>
        Scaling: An iterative and measurable process
      </SystemTitle>
      <br></br>
      <TxtContainer>
        Scalability is crucial when it comes to enterprise software.  As developers
        we must meet technical specifications and business requirements while building software
        flexible enough to be scaled wtihout the need for redesign after the application
        is already in production
      </TxtContainer>
      <br></br>
      <TxtContainer>
        Below is an example of a service that I scaled out for production.  I inherited 
        a code base that was a working prototype for a about / description service.  It included
        a prototype db and working tests.  I migraded the database over to a cluster of Cassandra nodes,
        implemented Server Side Rendering and built from there.  Using a variety of scaling techniques including load balancing and cacheing 
        I was able to accomodate high throughput with low latency.  Blow is a diagram of the architecture.  
        Links to the repos are available on the current projects page.
      </TxtContainer>
      <br></br>
      <DiagramContainer>
        {/* <img height="490" width="660" src="https://gifbucket.s3.us-west-1.amazonaws.com/Server+Design+(2).pdf" /> */}
        <img height="60%" width="60%" src="https://gifbucket.s3.us-west-1.amazonaws.com/Server+Design.jpeg" />
      </DiagramContainer>
    </SystemContainer>
  )
}