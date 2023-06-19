import styled from "styled-components";
import FooterCard from "../reUse/FooterCard";
import { FiLinkedin } from "react-icons/fi";
import { BsTwitter, BsGoogle } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
          <Up>
            <FooterCard
              title="Home Pages"
              content1="Home V1"
              content2="Home V2"
              content3="Home V3"
            />
            <FooterCard
              title="Courses"
              content1="All Courses"
              content2="Design"
              content3="Development"
              content4="Marketing"
              content5="Photography"
            />
            <FooterCard
              title="Pages"
              content1="Blog"
              content2="Blog Details"
              content3="Courses"
              content4="Contact us"
              content5="Teacher Profile"
              content6="404 Page"
            />
            <FooterCard
              title="Features"
              content1="Course Detail V1"
              content2="Course Detail V2"
            />
          </Up>
          <Down>
            <Left>
              <Text>
                © 2021 Skilify Education Private Limited. All rights reserved
              </Text>
            </Left>
            <Right>
              <Icon2 />
              <Icon3 />
              <Icon4 />
              <Icon5 />
            </Right>
          </Down>
        </Main>
      </Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  height: 430px;
  width: 100%;
  background-color: #33333d;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  width: 93%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background-color: pink; */
`;
const Up = styled.div`
  height: 310px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #91929a;
  margin-top: 35px;
`;
const Down = styled.div`
  width: 100%;
  /* height: 70px; */
  display: flex;
  justify-content: space-between;
  align-items: end;
  /* background-color: black; */
  /* margin-top:0px; */
`;
const Left = styled.div``;
const Text = styled.div`
  color: #91929a;
  margin-top: 30px;
  font-size: 17px;
`;
const Right = styled.div`
  display: flex;
  width: 170px;
  /* background-color: black; */
  justify-content: space-between;
  align-items: center;
`;
const Icon3 = styled(BsTwitter)`
  font-size: 25px;
  color: #91929a;
`;
const Icon2 = styled(RiFacebookFill)`
  font-size: 30px;
  color: #91929a;
`;
const Icon4 = styled(BsGoogle)`
  font-size: 23px;
  color: #91929a;
`;
const Icon5 = styled(FiLinkedin)`
  font-size: 28px;
  color: #91929a;
`;
