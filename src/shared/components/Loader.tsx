import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  isLoading: boolean;
  text: string;
}

export const Loader: FC<Props> = ({ isLoading, text }) => {
  return <Box>{isLoading && <Typography>{text}</Typography>}</Box>;
};
