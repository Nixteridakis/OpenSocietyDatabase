/// file: src/routes/blog/[slug]/+page.js
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    post: {
      title: `Here you can see all the data for ${params.slug}`,
      content: `Content for ${params.slug} goes here`
    }
  }
}
