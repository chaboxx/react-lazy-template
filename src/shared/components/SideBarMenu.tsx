import { FC } from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

interface Props {
  isOpen: boolean;
  title: string;
  links: {
    href: string;
  }[];
  maxWidth?: number;
}

export const SideBarMenu: FC<Props> = ({ isOpen, title, maxWidth = 300, links }) => {
  return (
    <StyledBox
      display={isOpen ? "flex" : "none"}
      width={{
        md: 250,
        xl: maxWidth,
      }}
    >
      <Box>
        <Typography color="GrayText" fontSize={22} fontWeight={650} variant="h6">
          {title}
        </Typography>
      </Box>

      {links.map((link) => (
        <Box key={link.href}>
          <Typography>{link.href}</Typography>
        </Box>
      ))}
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  height: 100vh;
  padding: 15px;
  transition: all 0.25s ease-in-out;
  flex-direction: column;
  gap: 10px;
  border-right: 1px solid black;
  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;
