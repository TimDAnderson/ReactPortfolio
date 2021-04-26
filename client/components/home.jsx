const HomeContainer = styled.div`
  /* padding-left: 40%;
  padding-top: 10%; */

`;

const BackGroundPhoto = styled.div`
  background-image: url("https://gifbucket.s3-us-west-1.amazonaws.com/apple-5k-yosemite-forest-wallpaper-preview.jpeg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  opacity: 0.2;
`;

const MyInfo = styled.div`
  position: fixed;
  top: 10%;
  left: 45%;
`;

const NameDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 150%;
  opacity: 1.0;
  padding-left: 30px;
`;

const PicContainer = styled.div`
  opacity: 1.0;
`;

const MyTitle = styled.div`
font-family: Arial, Helvetica, sans-serif;
padding-left: 27px;
`;

const Home = props => {

  return (
    <HomeContainer className="homeContainer">
      <BackGroundPhoto />
      <MyInfo>
        <PicContainer className="circular--portrait">
          <img src="https://gifbucket.s3-us-west-1.amazonaws.com/timphoto.jpg" />
        </PicContainer>
        <NameDiv>Tim Andeson</NameDiv>
        <MyTitle>Full Stack Developer</MyTitle>
      </MyInfo>
    </HomeContainer>
  )
}

export default Home 