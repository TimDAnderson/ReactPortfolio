export const ProjectContainer = styled.div`
  /* padding-left: 10%; */
  padding-top: 0px;
  justify-content: center;
`;

export const WhiteATag = styled.a`
color: #fff;
font-size:small;
font-family: Arial, Helvetica, sans-serif;
`

export const Project = styled.div`
  width: 1150px;
  background-color: #222831;
  border-radius: 25px;
  padding: 20px;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
  opacity: 0.8;
  /* margin-bottom: 50px;
  margin-top: 50px; */
  display: grid;
  grid-template-columns: 350px 400px 400px;
  margin: auto;
  margin-top: 50px;
`;

export const ProjectTitle = styled.div`
  grid-column-start: 1;
`;

export const ProjectInfo1 = styled.div`
  grid-column-start: 2;
`;

export const ProjectInfo1Img = styled.div`
  grid-column-start: 2;
  padding-left: 100px;
`;

export const ProjectInfo2 = styled.div`
  grid-column-start: 3;
`;

export const ProjectInfo2Img = styled.div`
  grid-column-start: 3;
  padding-left: 100px;
`;

export const ProjectWide = styled.div`
  grid-column-end: span 2;
`;

export const TitleText = styled.div`
  font-size: 150%;
`;

export const Title = styled.div`
  font-size: 150%;
  text-align: center;
`;