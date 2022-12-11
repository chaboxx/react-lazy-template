import React, { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { Box } from "@mui/material";

interface Props extends PropsWithChildren {
  // sideBar?: React.ReactElement;
  open: boolean;
  maxWidthSideBar: number;
  onClose: () => void;
}

interface SideBarLayoutValues {
  open: boolean;
  maxWidthSideBar: number;
  onClose: () => void;
}

export const SideBarLayoutContext = createContext({} as SideBarLayoutValues);

export const SideBarLayout: FC<Props> = ({
  children,
  open,
  maxWidthSideBar,
  onClose,
}) => {
  return (
    <SideBarLayoutContext.Provider
      value={{
        open,
        onClose,
        maxWidthSideBar,
      }}
    >
      <Box>{children}</Box>
    </SideBarLayoutContext.Provider>
  );
};
