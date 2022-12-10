import { FC } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ProblemPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography>Problem Page</Typography>
      <Button variant="outlined" onClick={() => navigate("/issues")}>
        Issues
      </Button>
    </Box>
  );
};

export default ProblemPage;
