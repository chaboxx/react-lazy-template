import { FC, PropsWithChildren, useContext } from "react";
import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";

import { SideBarLayoutContext } from "./SideBarLayout";

interface Props extends PropsWithChildren {
  style?: React.CSSProperties;
}

export const SideBarBody: FC<Props> = ({ children, style }) => {
  const { open, maxWidthSideBar } = useContext(SideBarLayoutContext);

  return (
    <StyledBox
      ml={{
        xl: open ? `${maxWidthSideBar! + 25}px` : 0,
        md: open ? "265px" : 0,
        sm: open ? "215px" : 0,
      }}
      style={style}
      sx={{
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="xl">{children}</Container>
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  @media screen and (max-width: 768px) {
    & {
      margin-left: 0;
    }
  }
`;
