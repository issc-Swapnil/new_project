import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box  display="flex"
    justifyContent={"center"}
    alignItems={"center"}
    position="fixed"
    height={"100%"}
    top={0}
    right={0}
    bottom={0}
    left={0}
    bgcolor="rgba(0, 0, 0, 0.1)">
      <CircularProgress />
    </Box>
  );
}