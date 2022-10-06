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
      text-align: center;
    `};
`;

Text.defaultProps = {
  type: "default",
  color: "var(—color-black)",
};

export { Text };
