import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import MyButton from "../reUse/Button";
import React from "react";

const Header = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const onToggle = () => {
    setShow(!show);
  };
  return (
    <div>
      <Container>
        <Main>
          <LogoWrapper>
            <Div />
            <Logo>Skilify</Logo>
          </LogoWrapper>
          <NavHolder>
            <Wrapper onMouseEnter={onToggle} onMouseLeave={onToggle}>
              <Navs>Home</Navs>
              <Icon />

              {show ? (
                <BoxContainer>
                  <Box1>
                    <Image1>Image1</Image1>
                  </Box1>
                  <Box1>
                    <Image2>Image2</Image2>
                  </Box1>
                  <Box1>
                    <Image3>Image3</Image3>
                  </Box1>
                </BoxContainer>
              ) : null}
            </Wrapper>
            <Wrapper>
              <Navs>Pages</Navs>
              <Icon />
            </Wrapper>
            <Wrapper>
              <Navs>Courses</Navs>
              <Icon />
            </Wrapper>
            <Wrapper>
              <Navs>Features</Navs>
              <Icon />
            </Wrapper>
            <Wrapper>
              <Navs>Blog</Navs>
              <Icon />
            </Wrapper>
          </NavHolder>
          <RightSide>
            <Icon1>
              <FiSearch />
            </Icon1>
            <Icon1>
              <BsCart2 />
            </Icon1>
            <MyButton
              hei="45px"
              wid="110px"
              text="Register"
              bg="#F56962"
              color="white"
              Brad="4px"
              fs="18px"
              ml="25px"
            />
          </RightSide>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fef0ef;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
`;
const Main = styled.div`
  width: 93%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Navs = styled.div`
  color: #5f5990;
  margin: 0 20px;
  font-size: 18px;
`;
const Icon = styled(MdOutlineKeyboardArrowDown)`
  font-size: 22px;
  margin: 0 -20px;
  color: #5f5990;
  margin-top: 2px;
`;
const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 25px;
  font-weight: 700;
`;
const Icon1 = styled.div`
  margin: 0 25px;
  font-size: 20px;
  color: #5f5990;
  font-weight: 700;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 0 15px;
  cursor: pointer;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #f56962;
  border-bottom: 8px solid #5f5990;
  margin-right: 4px;
`;
const Box1 = styled.div``;
const Image1 = styled.div``;
const Image2 = styled.div``;
const Image3 = styled.div``;
const BoxContainer = styled.div`
  width: 90%;
  height: 300px;
  background-color: #5f5990;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 65px;
  top: 100px;
  z-index: 1;
`;
