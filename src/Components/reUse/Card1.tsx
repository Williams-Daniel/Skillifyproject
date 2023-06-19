import styled from "styled-components";
import img from "../../Assets/pantone.svg";
import React from "react";
import { iCard } from "../../Utils/Interfaces";

const Card1: React.FC<iCard> = ({ text, title, bg1, bg2 }) => {
  return (
    <div>
      <CardContainer bg1={`${bg1}`}>
        <CardMain>
          <Holder>
            <InnerCardDiv bg2={`${bg2}`}>
              <Images src={img} />
            </InnerCardDiv>
            <CardTitle>{title}</CardTitle>
            <Content>{text}</Content>
          </Holder>
        </CardMain>
      </CardContainer>
    </div>
  );
};

export default Card1;

const CardContainer = styled.div<{ bg1: string }>`
  width: 280px;
  height: 350px;
  border-radius: 5px;
  background-color: ${({ bg1 }) => bg1};
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
const CardMain = styled.div`
  width: 75%;
  height: 75%;
  display: flex;
  flex-direction: column;
  /* background-color: brown; */
  margin-top: 25px;
`;
const InnerCardDiv = styled.div<{ bg2: string }>`
  width: 70px;
  height: 75px;
  background-color: ${({ bg2 }) => bg2};
  border-radius: 3px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardTitle = styled.div`
  font-size: 25px;
  font-weight: 500;
`;
const Content = styled.div`
  font-size: 17.2px;
  margin-top: 10px;
  color: #5f5986;
`;
const Holder = styled.div``;
const Images = styled.img``;
