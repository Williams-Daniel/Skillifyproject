import styled from "styled-components";
import img1 from "../../Assets/user1.webp";
import { BsStar } from "react-icons/bs";

export interface iCard2 {
  name?: string;
  comment?: string;
}
const StudentCard: React.FC<iCard2> = ({ name, comment }) => {
  return (
    <div>
      <Container>
        <Main>
          <Up>
            <Left>
              <IMage src={img1} />
              <Name>
                {name}
                <div
                  style={{
                    fontSize: "18px",
                    marginTop: "5px",
                    fontWeight: "400",
                    color: "#95969E",
                  }}
                >
                  Student
                </div>
              </Name>
            </Left>
            <AllIcons>
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
            </AllIcons>
          </Up>
          <Down>
            <i style={{ fontSize: "18.6px", color: "#696389" }}>{comment}</i>
          </Down>
        </Main>
      </Container>
    </div>
  );
};

export default StudentCard;

const Container = styled.div`
  width: 550px;
  height: 180px;
  background-color: white;
  border-radius: 0 35px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  margin-top: 50px;
  :hover {
    border-left: 5px solid #f68c20;
  }
`;
const Main = styled.div`
  height: 100%;
  width: 90%;
  /* background-color: brown; */
`;
const Up = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Name = styled.div`
  margin-left: 10px;
  font-size: 23px;
  font-weight: 500;
  color: #5f5982;
`;
const IMage = styled.img``;
const Icon = styled(BsStar)`
  margin: 0 3px;
  font-size: 20px;
  color: #f4b94d;
`;
const Down = styled.div`
  margin-top: 25px;
`;
const AllIcons = styled.div`
  display: flex;
`;
