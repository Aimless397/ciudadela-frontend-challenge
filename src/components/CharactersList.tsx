import { Result } from '@/interfaces/interfaces'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { CharacterCard } from './CharacterCard'

interface Props {
  characters: Result[]
}

export const CharactersList = ({ characters }: Props) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={'center'}
      sx={{ padding: '2em' }}
    >
      {characters?.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Grid>
  )
}
