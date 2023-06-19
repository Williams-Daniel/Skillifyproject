import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { IoCheckboxOutline } from "react-icons/io5";
import img1 from "../Assets/girl-img-study.webp";
import MyButton from "../Components/reUse/Button";
import Card1 from "../Components/reUse/Card1";
import img2 from "../Assets/UntitledHEro.jpg";
import img3 from "../Assets/UntitledHEro1.jpg";
import img4 from "../Assets/circle1.png";
import img5 from "../Assets/circle2.png";
import img6 from "../Assets/circle3.png";
import img7 from "../Assets/circle3.svg";
import img8 from "../Assets/circle3.svg";
import img9 from "../Assets/circle5.png";
import img10 from "../Assets/circle6.png";
import img11 from "../Assets/circle7.png";
import img12 from "../Assets/UntitledHEro2.jpg";
import img13 from "../Assets/UntitledHEro3.jpg";
import img14 from "../Assets/glassman.webp";
import img15 from "../Assets/ideaa.webp";
import img17 from "../Assets/foxhub.webp";
import img16 from "../Assets/zootv.webp";
import img18 from "../Assets/onlinesstudies.webp";
import img19 from "../Assets/circlestudy.webp";

import Card2 from "../Components/reUse/Card2";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import StudentCard from "../Components/reUse/StudentCard";
import TeachersCard from "../Components/reUse/TeachersCard";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Hero>
          <LeftSide>
            <LeftSideHolder>
              <Image3 src={img3} />

              <Title>
                Learn more and make success the result of perfection.
              </Title>
              <Text1>
                Pick from over 100,000 online video courses with new additions
                published every month.
              </Text1>
              <div style={{ display: "flex" }}>
                <InputHolder>
                  <Input placeholder="Search for your favourite course" />
                </InputHolder>
                <SearchButton>
                  <FiSearch />
                </SearchButton>
              </div>
            </LeftSideHolder>
          </LeftSide>
          <RightSide>
            <Image src={img1} />
            <Image2 src={img2} />
            <Div />
          </RightSide>
        </Hero>
        <Comp1>
          <Comp1Main>
            <Category>
              <CategoryTitle>
                Choose favourite course from top category
              </CategoryTitle>
              <MyButton
                wid="190px"
                hei="48px"
                bg="#F56962"
                Brad="3px"
                text="See All Categories"
                color="white"
                fs="17px"
              />
            </Category>
            <CardDiv>
              <Card1
                title="Design"
                text="Learn how to design your website. We have a wide range of designing courses from which you can select the best that suits you.

"
                bg1="#EFEFF6"
                bg2="#E2DDFF"
              />
              <Card1
                title="Development"
                text="Learn how to develop your software and websites. We provide you with a wide range of different development courses that will help you to learn more.

"
                bg1="#FEF3E8"
                bg2="#FAE0D0"
              />
              <Card1
                title="IT & Software
"
                text="If you want to learn something new in IT and Software, then this is the right place to help you with different IT and Software courses from which you can get the one for you.
                "
                bg1="#DDF7FF"
                bg2="#BBF0FF"
              />
              <Card1
                title="Business"
                text="If you want to be a successful business owner, our courses will help you do so. Book your course now.

"
                bg1="#E6FAEA"
                bg2="#CEF6D6"
              />
              <Card1
                title="Marketing
"
                text="In this world, marketing is essential to learn how to do excellent marketing with our courses and get your business on top.

                "
                bg1="#E6FAEA"
                bg2="#CEF6D6"
              />
              <Card1
                title="Photography
"
                text="The most successful business today is photography, but you should know how to get it on top. Our courses will help you to pull yourself up.

                "
                bg1="#DDF7FF"
                bg2="#BBF0FF"
              />
              <Card1
                title="Health & Care
"
                text="The health and care industry has increased so far. You will need to buck yourself up to catch with, and this can be done with our courses.

                "
                bg1="#FEF3E8"
                bg2="#FAE0D0"
              />
              <Card1
                title="Technology"
                text="There are various technologies which you need to learn if you want to stay in the race. Our courses will help you to learn more.

"
                bg1="#EFEFF6"
                bg2="#E2DDFF"
              />
            </CardDiv>
          </Comp1Main>
        </Comp1>
        <Comp2>
          <Comp2Main>
            <CourseChoice>
              <CourseChoiceTitle>Get choice of your course</CourseChoiceTitle>
              <MyButton
                wid="110px"
                hei="43px"
                bg="#F56962"
                Brad="3px"
                text="View All"
                color="white"
                fs="17px"
              />
            </CourseChoice>
            <Card2Holder>
              <Card2
                starNum="4.5"
                eyeNum="49,000"
                playNum="9"
                name="Petey Cruiser"
                text="Learn Python Programming Beginner"
                formerAmount="$200.00"
                newAmount="$150.00"
              />
              <Card2
                starNum="4.3"
                eyeNum="23,000"
                playNum="7"
                name="Nicole Brown"
                text="Statistics Data Science and Business Analysis"
                formerAmount="$150"
                newAmount="$99.99"
              />
              <Card2
                starNum="4.7"
                eyeNum="70,000"
                playNum="15"
                name="Anna Sthesia"
                text="Learn HTML5 Programming Beginning"
                formerAmount="$99.99"
                newAmount="$99.99"
              />
            </Card2Holder>
            <CarouselDiv>
              <IconDiv>
                <Icon1 />
              </IconDiv>
              <LineHolder>
                <Line1 />
                <Line2 />
              </LineHolder>
              <IconDiv>
                <Icon2 />
              </IconDiv>
            </CarouselDiv>
          </Comp2Main>
        </Comp2>
        <Comp3>
          <Comp3Main>
            <Left>
              <MiddleImage1 src={img4} />
              <MiddleImage2 src={img5} />
              <MiddleImage3 src={img6} />
              <MiddleImage4 src={img7} />
              <MiddleImage5 src={img12} />
            </Left>
            <Middle>
              <MiddleTitle>
                Select the best from various online courses
              </MiddleTitle>
              <MiddleContent>
                Our online video courses give you the freedom to learn remotely,
                and our experts will guide you properly.
              </MiddleContent>
              <MyButton
                wid="140px"
                hei="48px"
                bg="#F56962"
                Brad="3px"
                text="Join Today"
                color="white"
                fs="17px"
              />
            </Middle>
            <Right>
              <MiddleImage6 src={img8} />
              <MiddleImage7 src={img9} />
              <MiddleImage8 src={img10} />
              <MiddleImage9 src={img11} />
              <MiddleImage10 src={img13} />
            </Right>
          </Comp3Main>
        </Comp3>
        <Comp4>
          <Comp4Main>
            <Comp4Left>
              <Comp4Title>Get more close with your courses.</Comp4Title>
              <Comp4Content>
                We provide a wide range of courses for the different sectors you
                can choose from, which suits you perfectly
              </Comp4Content>
              <CheckBox>
                <Inner>
                  <Comp4Icon />
                  <div
                    style={{
                      color: "#5F5982",
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  >
                    Detail description of each course
                  </div>
                </Inner>
                <Inner>
                  <Comp4Icon />
                  <div
                    style={{
                      color: "#5F5982",
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  >
                    Easy to understand language
                  </div>
                </Inner>
                <Inner>
                  <Comp4Icon />
                  <div
                    style={{
                      color: "#5F5982",
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  >
                    Simple and easy to learn courses.
                  </div>
                </Inner>
              </CheckBox>
              <MyButton
                wid="190px"
                hei="48px"
                bg="#F56962"
                Brad="3px"
                text="Start Learning Now"
                color="white"
                fs="17px"
              />
            </Comp4Left>
            <Comp4Right>
              <Comp4Div />
              <Comp4Image src={img14} />
            </Comp4Right>
          </Comp4Main>
        </Comp4>
        <Comp5>
          <Comp5Main>
            <CommentTitleDiv>
              <CommentTitle>What our students have to say</CommentTitle>
              <IconHolder>
                <IconDiv>
                  <Icon1 />
                </IconDiv>
                <IconDiv>
                  <Icon2 />
                </IconDiv>
              </IconHolder>
            </CommentTitleDiv>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <StudentCard
                name="Jenie Johnson"
                comment="I would tell al people to register now as they offer the best courses at affordable rates."
              />
              <StudentCard
                name="Mahir Dindsa"
                comment="I have learned a lot of courses from this website. This website is a life Saviour for me. So register now with this website."
              />
            </div>
          </Comp5Main>
        </Comp5>
        <Comp6>
          <Comp6Main>
            <Comp6Title>
              <div style={{ fontSize: "43px", fontWeight: "500" }}>
                Trusted by our awesome partners
              </div>
              <IconHolder>
                <IconDiv2>
                  <Icon1 />
                </IconDiv2>
                <IconDiv2>
                  <Icon2 />
                </IconDiv2>
              </IconHolder>
            </Comp6Title>
            <Comp6Partners>
              <Comp6Images src={img15} />
              <Comp6Images src={img17} />
              <Comp6Images src={img16} />
              <Comp6Images src={img18} />
              <Comp6Images src={img19} />
            </Comp6Partners>
          </Comp6Main>
        </Comp6>
        <Comp7>
          <Comp7Main>
            <Comp7Image src={img12} />
            <TeachersCard
              title="Become a teacher"
              comment="Teach what you love. Coursector gives you the tools to create a course."
            />
            <TeachersCard
              title="Coursector for business"
              comment="Get unlimited access to 3,000+ of Coursector’s top courses for your team."
            />
            <Comp7Image2 src={img13} />
          </Comp7Main>
        </Comp7>
      </Container>
    </div>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fef0ef;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Hero = styled.div`
  width: 93%;
  height: 700px;
  /* background-color: #fef0ef; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftSide = styled.div`
  height: 100%;
  width: 630px;
  /* background-color:  blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  color: black;
  font-size: 55px;
  font-weight: 700;
`;
const Text1 = styled.div`
  font-size: 25px;
  /* font-weight: 500; */
  color: #5f5982;
  margin: 30px 0;
`;
const InputHolder = styled.div`
  width: 540px;
  height: 60px;
  background-color: white;
  border-radius: 5px 0 0 5px;
  display: flex;
  justify-content: center;
  z-index: 1;
  align-items: center;
  box-shadow: rgb(249, 199, 196) 0px 30px 90px;
`;
const Input = styled.input`
  height: 88%;
  width: 98%;
  border: 0;
  outline: none;
  border-radius: 5px 0 0 5px;
  font-size: 20px;
  margin-left: 15px;
  ::placeholder {
    font-size: 17px;
  }
  z-index: 1;
`;
const RightSide = styled.div`
  height: 100%;
  width: 530px;
  /* background-color: #946c73; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  position: absolute;
  height: 530px;
  right: 96px;
  bottom: 80px;
  z-index: 1;
`;
const Div = styled.div`
  height: 525px;
  width: 370px;
  border: 3px solid #f68c20;
  border-radius: 17px;
  margin-top: 30px;
  margin-left: 150px;
  position: absolute;
`;
const SearchButton = styled.div`
  height: 60px;
  width: 90px;
  background-color: #f56962;
  border-radius: 0 3px 3px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: white;
  box-shadow: rgb(248, 170, 165) 0px 30px 90px;
`;
const LeftSideHolder = styled.div`
  margin-bottom: 350px;
`;
const Comp1 = styled.div`
  width: 100%;
  height: 975px;
  background-color: white;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
const Category = styled.div`
  width: 100%;
  height: 130px;
  /* background-color: burlywood; */
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const CategoryTitle = styled.div`
  font-size: 42px;
  font-weight: 500;
  color: #302d3a;
`;
const CardDiv = styled.div`
  height: 850px;
  /* background-color: brown; */
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const Comp1Main = styled.div`
  width: 93%;
  height: 900px;
  display: flex;
  /* justify-content: ; */
  flex-direction: column;
  /* align-items: end; */
  /* background-color: #0a0a0c; */
`;

const Comp2 = styled.div`
  width: 100%;
  height: 760px;
  display: flex;
  justify-content: center;
  background-color: #efeff6;
`;
const Comp2Main = styled.div`
  width: 93%;
  height: 800px;
  flex-direction: column;
  display: flex;
`;
const CourseChoice = styled.div`
  width: 100%;
  height: 130px;
  /* background-color: burlywood; */
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 40px;
`;
const CourseChoiceTitle = styled.div`
  font-size: 42px;
  font-weight: 500;
  color: #302d3a;
`;
const Card2Holder = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
`;
const CarouselDiv = styled.div`
  width: 100%;
  height: 90px;
  /* background-color: brown; */
  margin-bottom: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconDiv = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LineHolder = styled.div`
  width: 1050px;
  height: 20px;
  /* background-color: black; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Line1 = styled.div`
  width: 520px;
  height: 2.5px;
  background-color: #f68c20;
`;
const Line2 = styled.div`
  width: 520px;
  height: 2.5px;
  background-color: white;
`;
const Icon1 = styled(BsArrowLeftShort)`
  font-size: 30px;
  transition: all 350ms;
  color: #909090;
  :hover {
    color: #f68c20;
  }
`;
const Icon2 = styled(BsArrowRightShort)`
  font-size: 30px;
  color: #909090;
  transition: all 350ms;
  :hover {
    color: #f68c20;
  }
`;
const Image2 = styled.img`
  position: relative;
  left: 270px;
  top: -110px;
`;
const Image3 = styled.img`
  position: relative;
  left: 270px;
  top: 600px;
  left: -20px;
`;
const Comp3 = styled.div`
  width: 100%;
  height: 550px;
  background-color: #fef0ef;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Comp3Main = styled.div`
  width: 93%;
  height: 100%;
  /* background-color: purple; */
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  height: 100%;
  width: 150px;
  /* background-color: brown; */
`;
const MiddleImage1 = styled.img`
  position: relative;
  top: 50px;
`;
const MiddleImage2 = styled.img`
  position: relative;
  left: 40px;
  top: 150px;
  z-index: 1;
`;
const MiddleImage3 = styled.img`
  position: relative;
  left: 40px;
  top: 170px;
  z-index: 1;
`;
const MiddleImage4 = styled.img`
  position: relative;
  left: 80px;
  top: -80px;
  z-index: 1;
`;
const MiddleImage5 = styled.img`
  position: absolute;
  left: 10px;
  top: 2855px;
`;
const MiddleImage6 = styled.img`
  position: relative;
  right: -112px;
  top: 95px;
  z-index: 1;
`;
const MiddleImage7 = styled.img`
  position: relative;
  right: 20px;
`;
const MiddleImage8 = styled.img`
  position: relative;
  right: -50px;
  top: 80px;
  z-index: 1;
`;
const MiddleImage9 = styled.img`
  position: relative;
  right: 60px;
  top: 140px;
  z-index: 1;
`;
const MiddleImage10 = styled.img`
  position: absolute;
  right: 10px;
  top: 2720px;
`;
const Middle = styled.div`
  height: 100%;
  width: 875px;
  /* background-color: #4b1111; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const MiddleTitle = styled.div`
  font-size: 45px;
  font-weight: 500;
`;
const MiddleContent = styled.div`
  text-align: center;
  font-size: 22px;
  margin: 18px 0;
  margin-bottom: 40px;
  color: #5f5982;
`;
const Right = styled.div`
  height: 100%;
  width: 150px;
  /* background-color: brown; */
`;
const Comp4 = styled.div`
  width: 100%;
  height: 920px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Comp4Main = styled.div`
  width: 93%;
  height: 100%;
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
`;
const Comp4Left = styled.div`
  width: 560px;
  height: 100%;
  /* background-color: brown; */
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Comp4Title = styled.div`
  font-size: 45px;
  font-weight: 500;
`;
const Comp4Content = styled.div`
  font-size: 23px;
  margin-top: 20px;
  color: #5f5982;
`;
const CheckBox = styled.div`
  width: 100%;
  height: 125px;
  /* background-color: aliceblue; */
  margin-bottom: 65px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Inner = styled.div`
  display: flex;
  align-items: center;
`;
const Comp4Right = styled.div`
  width: 560px;
  height: 100%;
  /* background-color: peachpuff; */
  display: flex;
  justify-content: end;
  align-items: center;
`;
const Comp4Icon = styled(IoCheckboxOutline)`
  color: #43c8b1;
  margin-right: 10px;
  font-size: 30px;
`;
const Comp4Div = styled.div`
  width: 450px;
  height: 620px;
  border: 5px solid #f56962;
  border-radius: 0 190px 0 0;
`;
const Comp4Image = styled.img`
  position: absolute;
  right: 80px;
  top: 3300px;
`;

const Comp5 = styled.div`
  width: 100%;
  height: 430px;
  background-color: #efeff6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Comp5Main = styled.div`
  width: 93%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: pink; */
`;
const CommentTitle = styled.div`
  font-size: 45px;
  font-weight: 500;
`;
const CommentTitleDiv = styled.div`
  width: 100%;
  height: 120px;
  /* background-color: blue; */
  display: flex;
  align-items: end;
  justify-content: space-between;
`;
const IconHolder = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
`;

const Comp6 = styled.div`
  height: 330px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const Comp6Main = styled.div`
  width: 93%;
  height: 100%;
  /* background-color: purple; */
`;
const Comp6Title = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  /* background-color: aliceblue; */
`;
const Comp6Partners = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* background-color: black; */
  margin-top: 55px;
`;
const Comp6Images = styled.img`
  object-fit: contain;
`;
const IconDiv2 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efeff6;
`;
const Comp7 = styled.div`
  width: 100%;
  height: 300px;
  background-color: #fef0ef;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Comp7Main = styled.div`
  width: 93%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;
const Comp7Image = styled.img`
  position: absolute;
  bottom: -4305px;
  left: 5px;
  z-index: -1;
`;
const Comp7Image2 = styled.img`
  position: absolute;
  bottom: -4255px;
  right: 5px;
  z-index: -1;
`;
