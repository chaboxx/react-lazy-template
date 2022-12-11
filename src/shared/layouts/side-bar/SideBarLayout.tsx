import React, { createContext, FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { AiFillLeftSquare } from "react-icons/ai";

interface Props extends PropsWithChildren {
  // sideBar?: React.ReactElement;
  open: boolean;
  maxWidthSideBar?: number;
  onClose: () => void;
  closeIcon?: React.ReactElement;
}

interface SideBarLayoutValues {
  open: boolean;
  maxWidthSideBar?: number;
  onClose: () => void;
  closeIcon?: React.ReactElement;
}

export const SideBarLayoutContext = createContext({} as SideBarLayoutValues);

export const SideBarLayout: FC<Props> = ({
  children,
  open,
  maxWidthSideBar = 350,
  closeIcon = <AiFillLeftSquare size={25} />,
  onClose,
}) => {
  return (
    <SideBarLayoutContext.Provider
      value={{
        open,
        onClose,
        maxWidthSideBar,
        closeIcon,
      }}
    >
      <Box>{children}</Box>
    </SideBarLayoutContext.Provider>
  );
};
