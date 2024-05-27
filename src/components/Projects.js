import React from 'react'
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import project1 from '../Assets/event_manage.jpg';  // Adjust the paths to project images
import project2 from '../Assets/food_ordering.jpg';
import project3 from '../Assets/biometric.jpeg';

// File name :  Project.js
// Student Id: 301429369
// Student Name: Nishil Raiyarela
// Date: 2024-05-26 /vrrgrg

const projects = [
  {
    image: project1,
    title: 'Event Management System',
    description: 'Developed an Android App using Android Studio that management multiple events, and reduced event management load for event creators',
    role: 'Lead Developer',
    outcome: 'Successfully launched the project which improved user engagement by 40%.'
  },
  {
    image: project2,
    title: 'Food Order Application',
    description: 'Created a food ordering application, with a awesome user-oriented interface, and backend using SQLite with smooth animations.',
    role: 'Frontend Developer',
    outcome: 'Redesigned the user interface, resulting in a 25% increase in user satisfaction.'
  },
  {
    image: project3,
    title: 'Biometric Andorid Application',
    description: 'Developed multiple Android biometric projects using Java and Kotlin, delivering on time with testing, good UI with SQLite.',
    role: 'Backend Developer',
    outcome: 'Got appreciation from teamas well as monetary reward for the projects.'
  }
];

export default function Projects() {
  return (
    <div>
      <Container maxWidth="md" className='container'>
    <Typography variant="h4" component="h1" gutterBottom className='my_projects' style={{marginBottom:'50px'}}>
      My Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
            
              component="img"
              height="140"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <Box marginTop={2} className='my_projects'>
                <Typography variant="body2" component="p">
                  <strong>Role:</strong> {project.role}
                </Typography>
                <Typography variant="body2" component="p">
                  <strong>Outcome:</strong> {project.outcome}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
    </div>
  )
}