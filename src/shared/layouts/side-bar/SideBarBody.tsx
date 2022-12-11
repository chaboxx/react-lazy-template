import { FC, PropsWithChildren, useContext } from "react";
import { Box, Container } from "@mui/material";

import { SideBarLayoutContext } from "./SideBarLayout";

interface Props extends PropsWithChildren {
  style?: React.CSSProperties;
}

export const SideBarBody: FC<Props> = ({ children, style }) => {
  const { open, maxWidthSideBar } = useContext(SideBarLayoutContext);

  return (
    <Box
      ml={{
        xl: open ? `${maxWidthSideBar + 25}px` : 0,
        md: open ? "275px" : 0,
      }}
      style={style}
      sx={{
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};
