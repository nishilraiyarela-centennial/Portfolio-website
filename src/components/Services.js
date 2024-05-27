import React from 'react'
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import project1 from '../Assets/web_dev.jpg';  // Adjust the paths to project images
import project2 from '../Assets/mobile_app_dev.png';
import project3 from '../Assets/programming.png';

// File name :  Services.js
// Student Id: 301429369
// Student Name: Nishil Raiyarela
// Date: 2024-05-26


// Service data with images
const services = [
  {
    title: 'Web Development',
    description: 'Design personalized websites specifically crafted to meet your unique requirements.',
    image: project1,
  },
  {
    title: 'Mobile App Development',
    description: 'Design and develop Android mobile applications using Kotlin and Java to meet your specific needs.',
    image: project2,
  },
  {
    title: 'General Programming',
    description: 'Expert custom software solutions to meet your unique business needs. From development to deployment.',
    image: project3,
  },
];

export default function Services() {
  return (
    <div>
      <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" component="h1" gutterBottom style={{marginBottom:'50px'}}>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  )
}

