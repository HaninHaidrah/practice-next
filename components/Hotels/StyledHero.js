// import styled from "styled-components";
import "../../public/images"
// import defaultImg from "../../public/img1";
const StyledHero = styled.header`
  min-height: 60vh;
  /* background: url(${img1}); */
  background: url(${props => (props.img ? props.img : img1)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;