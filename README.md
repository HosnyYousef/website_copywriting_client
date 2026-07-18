# Hadeel Bahaa — Content Services Website

Static one-page portfolio site implemented from the Claude Design project
"Hadeel Bahaa Content Services" (`Hadeel Bahaa.dc.html`).

## Files

- `index.html` — page structure and content
- `styles.css` — all styling (design palette, responsive breakpoints)
- `script.js` — contact form handling

## Preview locally

```sh
cd /Users/yh/Documents/Hadeel_website
python3 -m http.server 8080
# open http://localhost:8080
```

(Opening `index.html` directly in a browser also works.)

## Adding real images

The design uses image slots that were never filled, so the site ships with
styled placeholders. To replace one, swap the placeholder `div` in
`index.html` for an `img` tag, e.g.:

```html
<div class="image-frame hero-portrait">
  <img src="assets/portrait.jpg" alt="Portrait of Hadeel Bahaa">
</div>
```

Slots: hero portrait (4:5), process photo (4:5), and four portfolio
samples (16:11). Put images in an `assets/` folder.

## Contact form

There is no backend. Currently the form opens the visitor's email client
addressed to hadeelbahaa172@gmail.com with the message pre-filled, then
shows the thank-you state. For real in-page submissions, sign up for a
form service (e.g. [Formspree](https://formspree.io)) and set the form's
`action` to the endpoint they give you, removing the mailto fallback in
`script.js`.

## Deploying

Any static host works: GitHub Pages, Netlify, Vercel, Cloudflare Pages —
just upload/point at this folder.
