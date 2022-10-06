import styled, { css } from "styled-components";

const Text = styled.p`
  color: ${(props) => props.color};
  ${(props) =>
    props.type === "default" &&
    css`
      font-size: 14px;
    `}
  ${(props) =>
    props.type === "title" &&
    css`
      font-size: 16px;
      font-weight: 700;
    `}
    ${(props) =>
    props.type === "content" &&
    css`
      font-size: 18px;
    `};
`;

Text.defaultProps = {
  type: "default",
  color: "black",
};

export { Text };
