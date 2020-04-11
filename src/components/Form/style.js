import styled from "styled-components";
import media from "../../mediaQueries";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 40px 40px;
  background-color: #fff;
  ${media.desktop`
        padding: 0 64px 0 0;
    `}
`;
