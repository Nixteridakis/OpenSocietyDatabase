/// file: src/routes/blog/[slug]/+page.js
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  let content = ''
  if (params.slug === 'Germany') {
    content =
      'Germany is a representative democracy with a vibrant political culture and civil society. Political rights and civil liberties are largely assured in law and practice1. Germany has generally been stable since the mid-20th century1. However, political tensions have grown in recent years following an influx of asylum seekers into the country, and the growing popularity of right-wing populist movements.'
  }
  return {
    post: {
      title: `${params.slug}`,
      content: `${content}`
    }
  }
}
