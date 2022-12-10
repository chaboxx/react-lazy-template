import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" gap={2}>
      <Button variant="outlined" onClick={() => navigate("/")}>
        Home
      </Button>
      <Button variant="outlined" onClick={() => navigate("/issues")}>
        Issues
      </Button>
    </Box>
  );
};
