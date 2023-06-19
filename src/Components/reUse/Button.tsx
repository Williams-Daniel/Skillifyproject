import styled from "styled-components";
import { iButtons } from "../../Utils/Interfaces";

const MyButton: React.FC<iButtons> = ({
  bg,
  text,
  color,
  wid,
  hei,
  Brad,
  fs,
  ml,
}) => {
  return (
    <div>
      <Button
        Brad={`${Brad}`}
        wid={`${wid}`}
        hei={`${hei}`}
        fs={`${fs}`}
        ml={`${ml}`}
        bg={`${bg}`}
        color={`${color}`}
      >
        <Text fs={`${fs}`}>{text}</Text>
      </Button>
    </div>
  );
};

export default MyButton;

const Button = styled.div<{
  bg: string;
  color: string;
  wid: string;
  hei: string;
  Brad: string;
  fs: string;
  ml: string;
}>`
  height: ${({ hei }) => hei};
  width: ${({ wid }) => wid};
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border-radius: ${({ Brad }) => Brad};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ ml }) => ml};
  cursor: pointer;
  transition: all 350ms;
  :hover {
    box-shadow: rgb(241, 147, 142) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
const Text = styled.div<{ fs: string }>`
  font-size: ${({ fs }) => fs};
  /* font-weight: 500; */
`;
