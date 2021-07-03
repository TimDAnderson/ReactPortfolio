import {
  DiagramContainer,
  SystemContainer,
  SystemTitle,
  ImgContainer,
  TxtContainer
} from "./systemDesign.styles.jsx"

export const SystemDesign = () => {

  return (
    <SystemContainer>
      <SystemTitle>
        <h2>
        Scaling: An iterative and measurable process
        </h2>
      </SystemTitle>
      <br></br>
      <TxtContainer>
        Scalability is crucial when it comes to enterprise software.  As developers
        we must meet technical specifications and business requirements while building software
        flexible enough to be scaled wtihout the need for redesign after the application
        is already in production.
      </TxtContainer>
      <br></br>
      <TxtContainer>
        {/* Below is an example of a service that I scaled out for production.  I inherited 
        a code base that was a working prototype for an About / Description service.  It included
        a prototype DB and working tests.  I migraded the database over to a cluster of Cassandra nodes,
        implemented Server Side Rendering and built from there.  Using a variety of scaling techniques, including load balancing and caching, 
        I was able to accomodate high throughput with low latency.  Blow is a diagram of the architecture.  
        Links to the repos are available on the current projects page. */}
        <ul>
            <li>Below is an example of a service that I scaled out for production.</li>
            <li>I inherited a code base that was a working prototype for an About / Description service.</li>
            <li>It included
        a prototype DB (Mongo) and working tests.</li>
            <li>I migraded the database over to a cluster of Cassandra nodes,
        implemented Server Side Rendering and built from there.</li>
            <li>Using a variety of scaling techniques, including load balancing and caching, 
        I was able to accomodate high throughput with low latency.</li>
            <li>Blow is a diagram of the architecture.  
        Links to the repos are available on the current projects page.</li>
          </ul>  
      </TxtContainer>
      <br></br>
      <DiagramContainer>
        {/* <img height="490" width="660" src="https://gifbucket.s3.us-west-1.amazonaws.com/Server+Design+(2).pdf" /> */}
        <img height="530" width="820" src="https://gifbucket.s3.us-west-1.amazonaws.com/Server+Design.jpeg" />
      </DiagramContainer>
    </SystemContainer>
  )
}