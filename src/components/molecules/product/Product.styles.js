import styled from "styled-components";
import { Tile } from "../../atoms/tile/Tile";
import { Title } from "../../atoms/title/Title";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";

export const Bcg = styled(Tile)`
  height: 327px;
  margin-bottom: 32px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media (min-width: 760px) {
    background-image: url(${({ imgM }) => imgM});
  }

  @media (min-width: 1100px) {
    background-image: url(${({ imgB }) => imgB});
    height: 540px;
    margin-bottom: 160px;
    width: 48%;
  }
`;

export const StyledTitle = styled(Title)`
  white-space: pre-line;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const StyledText = styled(Text)`
  padding-inline: 10%;
  margin-bottom: 24px;

  @media (min-width: 1100px) {
    padding: 0;
  }
`;

export const StyledButton = styled(Button)`
  margin-bottom: 120px;

  @media (min-width: 1100px) {
    margin: 0;
  }
`;
