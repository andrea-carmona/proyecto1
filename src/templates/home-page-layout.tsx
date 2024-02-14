import React from 'react'

import { Container, Box, Typography, Paper, Grid } from '@mui/material';

interface HomePageLayoutProps {
    children: React.ReactElement [];
}

function HomePageLayout({children}: HomePageLayoutProps) {
  const [header, hero, menu, container]= children
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
        {/* Header */}
        <Paper >
          {header}
        </Paper>
        {/* Main Content */}
        <Box flexGrow={1}>
          {/* Main Image */}
          <Box
            sx={{
              height: 300,
              backgroundColor: '#fff8e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 2
            }}
            
            >
            {hero} 
          </Box>
          {/* Container for Categories and Products */}
          <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
            <Grid container spacing={2}>
              {/* Category Section */}
              <Grid item xs={12} md={3}>
                <Paper sx={{ height: '100%', backgroundColor: '#d3d3d3' }}>
                  <Typography variant="h6" align="center">
                    CATEGORY
                  </Typography>
                </Paper>
              </Grid>
              {/* Products Container */}
              <Grid item xs={12} md={9}>
                <Paper sx={{ height: 300, backgroundColor: '#fff8e1' }}>
                  <Typography variant="h6" align="center">
                    CONTAINER CATEGORY PRODUCTS
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* Footer */}
        <Paper sx={{ padding: 2, backgroundColor: '#8f9779' }}>
          <Typography variant="h6" component="footer" align="center">
            FOOTER
          </Typography>
        </Paper>
      </Box>
    );
}

export default HomePageLayout;