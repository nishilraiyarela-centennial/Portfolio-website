import React from 'react'
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
    <Typography variant="h2" component="h1" gutterBottom>
    I'm Nishil Raiyarela
    </Typography>
    <Typography variant="h5" component="p" paragraph>
      A student form Centennial College and a Software developer.
    </Typography>
    <Box marginTop={4}>
      <Typography variant="h3" component="p" style={{ marginBottom: '20px', marginTop: '50px' }}>
        Mission Statement
      </Typography>
      <Typography variant="h5" component="p" paragraph>
        My mission is to create innovative solutions that make life easier and more enjoyable. Through my work, I aim to combine creativity, technology, and user-centric design to develop applications that inspire and empower users.
      </Typography>
    </Box>
    <Box marginTop={4}>
      <Button variant="contained" color="primary" component={Link} to="/about" style={{ margin: '10px' }}>
        About Me
      </Button>
      <Button variant="contained" color="secondary" component={Link} to="/projects" style={{ margin: '10px' }}>
        My Projects
      </Button>
    </Box>
  </Container>
    </>
  )
}

export default Home
