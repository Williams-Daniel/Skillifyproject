import styled from "styled-components";
import MyButton from "./Button";
import img from "../../Assets/circle6.png";
import { iCard3 } from "../../Utils/Interfaces";

const TeachersCard: React.FC<iCard3> = ({ title, comment }) => {
  return (
    <div>
      <Container>
        <Main>
          <Left>
            <Comp7Image src={img} />
          </Left>
          <Right>
            <Comp7Title>{title}</Comp7Title>
            <Comp7Content>{comment}</Comp7Content>
            <MyButton
              wid="190px"
              hei="48px"
              bg="#F56962"
              Brad="3px"
              text="Apply As Teacher"
              color="white"
              fs="17px"
            />
          </Right>
        </Main>
      </Container>
    </div>
  );
};

export default TeachersCard;

const Container = styled.div`
  width: 570px;
  height: 200px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  :hover {
    box-shadow: rgb(238, 152, 147) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
const Main = styled.div`
  height: 100%;
  width: 90%;
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* z-index: 1; */
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
`;
const Comp7Image = styled.img`
  height: 65px;
  margin-top: 20px;
  margin-right: 25px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;
const Comp7Title = styled.div`
  margin-top: 20px;
  font-size: 23px;
  font-weight: 500;
`;
const Comp7Content = styled.div`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
