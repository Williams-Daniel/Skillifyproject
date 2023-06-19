import React from "react";
import styled from "styled-components";
import img from "../../Assets/likeBoi.webp";
import img2 from "../../Assets/profile-img1.webp";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";
import { FiPlayCircle } from "react-icons/fi";

export interface iCard2 {
  starNum?: string;
  eyeNum?: string;
  playNum?: string;
  text?: string;
  name?: string;
  formerAmount?: any;
  newAmount?: any;
}
const Card2: React.FC<iCard2> = ({
  starNum,
  eyeNum,
  playNum,
  text,
  name,
  formerAmount,
  newAmount,
}) => {
  const [show, setShow] = React.useState<boolean>(false);
  const onToggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <Container>
        <Main>
          <ImageHolder>
            <Image src={img} />
            {/* <IconHolder 
            onClick={onToggle}
            >
              {
                show?(<Icon4/>):(<Icon5/>)
              }
            </IconHolder> */}
          </ImageHolder>
          <Properties>
            <Holder>
              <Icon1>
                <AiOutlineStar />
              </Icon1>
              <Number1>{starNum}</Number1>
            </Holder>
            <Holder>
              <Icon2>
                <HiOutlineEye />
              </Icon2>
              <Number2>{eyeNum}</Number2>
            </Holder>
            <Holder>
              <Icon3>
                <FiPlayCircle />
              </Icon3>
              <Number3>{playNum}</Number3>
            </Holder>
          </Properties>
          <Text>{text}</Text>
          <ImageCost>
            <Left>
              <SmallImage src={img2} />
              <Name>{name}</Name>
            </Left>
            <Right>
              <FormerAmount>{formerAmount}</FormerAmount>
              <NewAmount>{newAmount}</NewAmount>
            </Right>
          </ImageCost>
        </Main>
      </Container>
    </div>
  );
};
export default Card2;

const Container = styled.div`
  width: 375px;
  height: 435px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  width: 90%;
  height: 95%;
  /* background-color: brown; */
  border-radius: 5px;
`;
const ImageHolder = styled.div`
  width: 100%;
  height: 240px;
  /* background-color: blue; */
  border-radius: 5px;
  display: flex;
`;
const Image = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 3px;
  object-fit: cover;
`;
const Icon1 = styled.div`
  font-size: 25px;
  margin-right: 3px;
  color: #f3b23a;
`;
const Icon2 = styled.div`
  font-size: 23px;
  margin-right: 4px;
  color: #db4500;
`;
const Icon3 = styled.div`
  font-size: 23px;
  margin-right: 4px;
  color: #3e9365;
`;
// const Icon4 = styled(AiOutlineHeart)`
//   font-size: 25px;
//   color: white;
//   position: absolute;
//   /* background-color: black; */
//   left: 370px;
//   bottom: -1280px;
// `;
// const Icon5 = styled(AiFillHeart)`
//   font-size: 25px;
//   color: red;
//   position: absolute;
//   /* background-color: black; */
//   left: 370px;
//   bottom: -1280px;
// `;
const Properties = styled.div`
  width: 100%;
  height: 35px;
  /* background-color: white; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid silver;
  margin-top: 10px;
`;
const Holder = styled.div`
  display: flex;
`;
const Number1 = styled.div`
  margin-top: 3px;
  color: #6c6969;
`;
const Number2 = styled.div`
  margin-top: 3px;
  color: #6c6969;
`;
const Number3 = styled.div`
  margin-top: 3px;
  color: #6c6969;
`;
const Text = styled.div`
  font-size: 25px;
  font-weight: 500;
`;
const ImageCost = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: burlywood; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SmallImage = styled.img`
  border-radius: 7px;
  margin-right: 5px;
`;
const Name = styled.div`
  color: #5f5982;
  font-size: 15px;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormerAmount = styled.div`
  color: #91929a;
  margin-right: 8px;
  text-decoration: line-through;
  font-size: 18px;
`;
const NewAmount = styled.div`
  font-size: 20px;
  font-weight: 1000;
  color: #f68c20;
`;
const IconHolder = styled.div``;
