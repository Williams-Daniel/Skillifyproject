import styled from "styled-components";
import MyButton from "../reUse/Button";

const Header1 = () => {
  return (
    <div>
      <Container>
        <Main>
          <LeftSide>
            <Div />
            <Text1>
              envato
              <div
                style={{
                  color: "#7AA93C",
                  fontFamily: "BlinkMacSystemFont",
                  fontSize: "25px",
                  marginLeft: "1px",
                }}
              >
                market
              </div>
            </Text1>
          </LeftSide>
          <RightSide>
            <MyButton
              hei="32px"
              wid="90px"
              bg="#7AA93C"
              color="white"
              text="Buy now"
              Brad="4px"
              fs="14px"
            />
          </RightSide>
        </Main>
      </Container>
    </div>
  );
};

export default Header1;

const Container = styled.div`
  width: 100%;
  height: 55px;
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  height: 100%;
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 10px 0 10px 10px;
  margin-top: 5px;
  margin-right: 2px;
  background-color: #7aa93c;
`;
const Text1 = styled.div`
  display: flex;
  color: white;
  font-size: 21px;
  font-weight: 500;
`;
const RightSide = styled.div``;
