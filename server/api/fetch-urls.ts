import { GET_PAGES } from '~/graphql/pages'
import type { PagesQuery } from '~/types/global'  // <-- define this once

export default defineEventHandler(async () => {
  const { public: { strapiUrl } } = useRuntimeConfig()
  const graphqlUrl = `${strapiUrl}/graphql`

  try {
    // Fetch + destructure in one go
    const { data: { pages } = {} } = await $fetch<PagesQuery>(graphqlUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { query: GET_PAGES.loc?.source.body },
    })


    if (!pages) {
      console.error('Unexpected response, no pages field returned')
      return []
    }

    // Directly map `pages` → sitemap route objects
    return pages.map(({ slug }) => ({ loc: `/${slug}` }))
  } catch (err: any) {
        console.error('Error fetching pages for sitemap:', err)
    return []
  }
})