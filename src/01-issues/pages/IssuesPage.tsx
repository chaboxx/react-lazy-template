import { FC } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const IssuesPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h2">Issues</Typography>
      <Box display="flex" gap={2}>
        <Button variant="outlined" onClick={() => navigate("")}>
          Issues
        </Button>
        <Button variant="outlined" onClick={() => navigate("dependencies")}>
          Dependecies
        </Button>
        <Button variant="outlined" onClick={() => navigate("name")}>
          Name
        </Button>
        <Button variant="outlined" onClick={() => navigate("problem")}>
          Error
        </Button>
      </Box>
    </Box>
  );
};
