import React from 'react'
import { Container, Typography, Box, Avatar, Button } from '@mui/material';
import me from '../Assets/n_logo.jpg';  // Adjust the path to your image file

// File name :  About.js
// Student Id: 301429369
// Student Name: Nishil Raiy  arela
// Date: 2024-05-26

export default function About() {
  return (
    <div>
        <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      About Me
    </Typography>
    <Avatar
      alt="Your Name"
      src={me}
      style={{ width: '150px', height: '150px', margin: '20px auto' }}
    />
    <Typography variant="h5" component="h2">
      Nishil Raiyarela
    </Typography>
    <Typography variant="body1" component="p" paragraph style={{ marginTop: '20px' }}>
    I am Nishil Raiyarela, a passionate software developer with a keen interest in building impactful applications. 
    With a strong background in IT, I specialize in Android development and have extensive experience working with Flutter. 
    My appreciation for good UI drives me to create visually appealing and user-friendly interfaces. 
    Proficient in Java and knowledgeable in web development, 
    I am dedicated to continuously improving my skills and contributing to meaningful projects that make a difference.
    </Typography>
    <Box marginTop={4}>
      <Button
        variant="contained"
        color="primary"
        href="/Nishil_ProfessionalResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Resume (PDF)
      </Button>
    </Box>
  </Container>
    </div>
  )
}

