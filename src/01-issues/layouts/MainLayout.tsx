import { FC, PropsWithChildren } from "react";
import { Stack, Container, Box } from "@mui/material";

interface Props extends PropsWithChildren {
  sideBar: React.ReactElement;
}

export const MainLayout: FC<Props> = ({ children, sideBar }) => {
  return (
    <Box>
      <Stack direction="row" gap={2}>
        {sideBar}
        <Container
          maxWidth="xl"
          sx={{
            py: 2,
          }}
        >
          {children}
        </Container>
      </Stack>
    </Box>
  );
};
