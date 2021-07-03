const Link = ReactRouterDOM.Link;

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const LeftColumn = styled.div`
  height: 100%;
  width: 180px;
  background-color: #222831;
  padding-left: 20px;
  color: #fff;
  opacity: 0.9;
  font-family: Arial, Helvetica, sans-serif;
  border-right: 5px solid black;
`;

export const DisplayArea = styled.div`
  flex: 1;
  background-color: #30475e;
  color: #fff;
  overflow: auto;
`;

// export const PageOption = styled.div`
//   cursor: pointer;
// `;

export const ContactContainer = styled.div`
position: absolute;
    bottom: 0;
  padding-bottom: 15px;

`;

// export const Header = styled.div`
//   display: block;
//   font-size: 2em;
//   margin-block-start: 0.67em;
//   margin-block-end: 0.67em;
//   margin-inline-start: 0px;
//   margin-inline-end: 0px;
//   font-weight: bold;
//   cursor: pointer;
// `;

export const LinkStyle = styled(Link)`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
`;

export const HeaderLink = styled(Link)`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
`;

export const WhiteA = styled.a`
color: #fff;
font-size:small;
font-family: Arial, Helvetica, sans-serif;
padding-left: 5px;
`

export const ContactSpacer = styled.div`
  padding-top: 10px;
`;