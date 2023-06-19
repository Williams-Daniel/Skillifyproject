import styled from "styled-components";

export interface iFooter {
  title?: string;
  content1?: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  content6?: string;
}

const FooterCard: React.FC<iFooter> = ({
  title,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
}) => {
  return (
    <div>
      <Container>
        <Title>{title}</Title>
        <ContentHolder>
          <Content1>{content1}</Content1>
          <Content2>{content2}</Content2>
          <Content3>{content3}</Content3>
          <Content4>{content4}</Content4>
          <Content5>{content5}</Content5>
          <Content6>{content6}</Content6>
        </ContentHolder>
      </Container>
    </div>
  );
};

export default FooterCard;

const Container = styled.div`
  width: 180px;
  height: 300px;
  /* background-color: white; */
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
  color: white;
`;
const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content1 = styled.div`
  font-size: 19px;
  margin: 7px 0;
  color: #91929a;
`;
const Content2 = styled.div`
  font-size: 19px;
  margin: 7px 0;
  color: #91929a;
`;
const Content3 = styled.div`
  font-size: 19px;
  margin: 7px 0;
  color: #91929a;
`;
const Content4 = styled.div`
  font-size: 19px;
  margin: 7px 0;
  color: #91929a;
`;
const Content5 = styled.div`
  font-size: 19px;
  margin: 7px 0;
  color: #91929a;
`;
const Content6 = styled.div`
  font-size: 19px;
  margin: 7px 0;
  color: #91929a;
`;
