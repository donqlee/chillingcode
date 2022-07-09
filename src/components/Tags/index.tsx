import styled from "styled-components";

import fonts from "styles/fonts";
import colors from "styles/colors";

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <Container>
      {tags.map((tag, index) => (
        <div key={index}>{tag}</div>
      ))}
    </Container>
  );
};

export default Tags;

const Container = styled.div`
  ${fonts.Caption};
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  div {
    border-radius: 4px;
    padding: 4px 6px;
  }
  div:nth-child(odd) {
    color: ${colors.white};
    background-color: ${colors.primary1};
  }
  div:nth-child(even) {
    color: ${colors.gray1};
    background-color: ${colors.gray5};
  }
`;
