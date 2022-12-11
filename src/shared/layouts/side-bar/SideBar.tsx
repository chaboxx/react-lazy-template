import React, { FC, PropsWithChildren, useContext } from "react";
import { Box, Stack } from "@mui/material";
import styled from "@emotion/styled";

import { SideBarLayoutContext } from "./SideBarLayout";

interface Props extends PropsWithChildren {}

export const SideBar: FC<Props> = ({ children }) => {
  const { open, onClose, maxWidthSideBar, closeIcon } = useContext(SideBarLayoutContext);

  return (
    <StyledBox
      display={open ? "flex" : "none"}
      width={{
        xl: maxWidthSideBar,
        md: 250,
        sm: 200,
      }}
    >
      <Box
        bgcolor="white"
        display="flex"
        position="absolute"
        right={!closeIcon?.props?.size ? -7 : -(closeIcon?.props.size / 2)}
        top={5}
        zIndex={19}
        onClick={() => (open ? onClose() : null)}
      >
        {closeIcon}
      </Box>
      {children}
    </StyledBox>
  );
};

const StyledBox = styled(Stack)`
  border-right: 1px solid black;
  direction: column;
  background-color: white;
  height: 100vh;
  left: 0;
  top: 0;
  padding: 15px;
  position: fixed;
  transition: all 0.3s ease;
  z-index: 9;
  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;
