import type { Handle } from '@sveltejs/kit'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'
import { detectLocale } from '../src/lib/i18n/i18n-util'

export const handle: Handle = async ({ event, resolve }) => {
  // TODO: get lang from cookie / user setting
  const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(event.request)
  const locale = 'gr'
  // const locale = detectLocale(acceptLanguageHeaderDetector);
  event.locals.locale = locale

  return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', locale) })
}
