import { useState, useEffect } from 'react'
import { request } from '@/lib/graphql'
import { fetchCharacters } from '@/queries/fetchCharacters'
import { Result } from '@/interfaces/interfaces'
import { Grid, Pagination, Typography } from '@mui/material'
import { CharactersList } from '@/components/CharactersList'

export default function Home() {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [characters, setCharacters] = useState<Result[]>()

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const fetchData = async () => {
    try {
      const data = await request(fetchCharacters, { page })
      setTotalPages(data.fetchCharacters.info.pages)
      if (!data.fetchCharacters.info.next) return

      const charactersData = data.fetchCharacters.results.filter(
        (character) => character.species === 'Human'
      )

      setCharacters(charactersData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Grid sx={{ margin: '2em' }}>
        <Typography variant="h4" textAlign={'center'}>
          Available Humans from Rick & Morty
        </Typography>
      </Grid>

      <Pagination
        count={totalPages - 1}
        /* variant="outlined" */
        color="primary"
        page={page}
        onChange={(event, page) => setPage(page)}
        sx={{
          marginTop: '2em',
          marginRight: '2em',
          display: 'flex',
          justifyContent: 'end',
        }}
      />
      <Grid
        container
        spacing={2}
        justifyContent={'center'}
        sx={{ padding: '2em' }}
      >
        <CharactersList characters={characters!} />
      </Grid>

      <Pagination
        count={totalPages - 1}
        /* variant="outlined" */
        color="primary"
        page={page}
        onChange={(event, page) => setPage(page)}
        sx={{
          marginTop: '2em',
          marginBottom: '2em',
          display: 'flex',
          justifyContent: 'center',
        }}
      />
    </>
  )
}
