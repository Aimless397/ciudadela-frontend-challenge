export const fetchCharacters = `
  query FetchCharacters($page: Int) {
    fetchCharacters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
          url
        }
        location {
          name
          url
        }
        image
        
        created
      }
    }
  }
`
