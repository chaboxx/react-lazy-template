import { FC, PropsWithChildren, useContext } from "react";
import { Box, Button, Stack } from "@mui/material";
import { AiFillLeftSquare } from "react-icons/ai";

import { SideBarLayoutContext } from "./SideBarLayout";

interface Props extends PropsWithChildren {}

export const SideBar: FC<Props> = ({ children }) => {
  const { open, onClose, maxWidthSideBar } = useContext(SideBarLayoutContext);

  return (
    <Stack
      bgcolor="white"
      borderRight="1px solid black"
      direction="column"
      display={open ? "flex" : "none"}
      height="100vh"
      left={0}
      padding={2}
      position="fixed"
      sx={{
        transition: "all 0.3s ease",
      }}
      top={0}
      width={{
        xl: maxWidthSideBar,
        md: 250,
      }}
      zIndex={9}
    >
      <Box
        position="absolute"
        right={-12}
        top={5}
        zIndex={19}
        onClick={() => (open ? onClose() : null)}
      >
        <AiFillLeftSquare size={24} />
      </Box>
      {children}
    </Stack>
  );
};
