import {
  HomeContainer,
  BackGroundPhoto,
  MyInfo,
  Description,
  NameDiv,
  PicContainer,
  MyTitle,
} from './home.styles.jsx'

export const Home = () => {

  return (
    <HomeContainer className="homeContainer">
      <BackGroundPhoto />
      <MyInfo>
        <PicContainer className="circular--portrait">
          <img src="https://gifbucket.s3-us-west-1.amazonaws.com/timphoto.jpg" />
        </PicContainer>
        <br></br>
        <NameDiv>Tim Andeson</NameDiv>
        <MyTitle>Software Engineer</MyTitle>
        <br></br>
        <Description>
          Hello and welcome to my portfolio built with React.  I'm a software engineer with 
          a passion for creating and connecting complex applications.  I have a B.S. in engineering
          and am currently working in the video industry.  Professionally I've traveled the world and 
          created custom applications for many Research and Development / Engineering groups.  I've also 
          worked on a number of personal projects that are highlighted within this portfolio.  Please 
          feel free to contact me. I'm always happy to chat about past, current and future projects.
        </Description>
      </MyInfo>
    </HomeContainer>
  )
}
