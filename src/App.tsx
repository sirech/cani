import React from "react";
import "./App.css";

import { CssBaseline, Container, Box, Typography } from "@material-ui/core";

const App = () => (
  <div data-testid="app">
    <CssBaseline />

    <Box mt={12}>
      <Container component="main">
        <Typography variant="h2">Can I ... ?</Typography>
      </Container>
    </Box>
  </div>
);

export default App;
