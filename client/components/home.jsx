const HomeContainer = styled.div`
  padding-left: 40%;
  padding-top: 10%;
`;

const Home = props => {

  return (
    <HomeContainer className="homeContainer">
      <div className="circular--portrait">
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/timphoto.jpg" />
      </div>
      <div>Tim Andeson</div>
      <div>Full Stack Developer</div>
    </HomeContainer>
  )
}

export default Home 