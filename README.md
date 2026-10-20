# Flex Harmony multipage website

A responsive static website concept for Flex Harmony, Jaipur. It uses the provided Flex Harmony logo and real reference photos supplied for Dr. Akanksha Sharma and the studio. **There is no pricing page, price list, pricing navigation item, or price section.**

## Pages included
- `index.html` — Home
- `about.html` — About Flex Harmony and founder
- `services.html` — Services overview
- `pilates.html` — Pilates
- `physiotherapy.html` — Physiotherapy
- `weight-loss.html` — Weight management and fitness
- `classes.html` — Classes and schedule enquiry (exact schedule intentionally not invented)
- `blog.html` — Wellness journal starter cards
- `contact.html` — Enquiry form

## Preview locally
1. Extract the ZIP.
2. Open `index.html` in a browser. For best results, run a local static server (for example VS Code Live Server).
3. Some illustrative class photos load from Unsplash and Google Fonts load from Google Fonts, so those elements need an internet connection. Founder and studio photos are included locally.

## Before publishing
1. Open `assets/js/site.js` and add the public WhatsApp number, studio email, and phone number in `window.FLEX_HARMONY`.
2. Update the contact page with verified address/contact information and actual class schedule.
3. Verify Dr. Akanksha Sharma's exact qualifications, professional registration, experience and credentials before adding them. The current copy intentionally avoids inventing qualifications.
4. Replace the clearly labelled illustrative testimonial and blog starter cards with approved real reviews and reviewed article content.
5. Confirm image permissions and service descriptions.
6. Upload the folder contents to your current hosting provider (e.g. Netlify). This is a static site and does not require a build step.

## Contact form delivery
The contact form posts to FormSubmit.co and is configured to deliver enquiries to `flexharmony1018@gmail.com`. On the first submission, FormSubmit may send an activation/verification email to that inbox. Open it and confirm the activation link before expecting enquiries to arrive. This requires an internet connection and the live website. The form is not tested against the recipient inbox from this development environment. If the domain changes, update the `_next` URL in `contact.html`.

## Design
- Palette: lavender, mauve, blush, cream and deep purple
- Typography: Playfair Display + DM Sans
- Mobile navigation, responsive layouts, reduced-motion support and subtle scroll reveals
- Pricing intentionally omitted across the site

## Digital wellness journal integration
- Product landing page: `wellness-journal.html`
- Interactive journal preview: `journal/index.html`
- The main navigation now links to the journal product page.
- The homepage includes a journal feature section.

**Launch limitation:** this is a front-end integration/preview only. The journal currently saves to the same browser/device using local storage. No account system, cloud database, checkout, payment verification, paid-access gate, or regional pricing is configured. Do not accept payment for journal access until those services are implemented and tested.
