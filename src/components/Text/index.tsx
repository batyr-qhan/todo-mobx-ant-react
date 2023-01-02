import styled from "styled-components";

interface Props {
  done?: boolean;
}

export const Text: React.FC<Props> = ({ done, children }) => {
  const Span = styled.span`
  text-align: left;
    color: #fff;
    text-decoration: ${(props) => (done ? "line-through" : "")};
  `;

  return <Span>{children}</Span>;
};
