import { Result } from '@/interfaces/interfaces'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

interface Props {
  character: Result
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <Grid item key={character.id} xs={12} sm={5} md={4} lg={2}>
      <Card key={character.id} sx={{ maxWidth: 345, marginBottom: 10 }}>
        <CardMedia
          component="img"
          height="300"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Status:</b> {character.status}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Species:</b> {character.species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Type:</b> {!character.type ? 'unkhown' : character.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Gender:</b> {character.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Origin:</b> {character.origin.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Location:</b> {character.location.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
