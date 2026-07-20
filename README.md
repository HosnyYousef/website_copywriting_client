# Hadeel Bahaa: Content Services Website

Static one-page portfolio site implemented from the Claude Design project
"Hadeel Bahaa Content Services" (`Hadeel Bahaa.dc.html`).

## Files

- `index.html`: page structure and content
- `styles.css`: all styling (design palette, responsive breakpoints)
- `assets/`: portrait, client logos, ICD post image

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

## Contact

The contact section lists Hadeel's email and phone as direct `mailto:` and
`tel:` links; no form, no backend, nothing to break.

The site previously had a form with no backend: it opened the visitor's
email client and then claimed "your message has been sent", which was not
true if the visitor had no mail client configured. It was replaced with
direct contact details. If a real form is wanted later, sign up for a form
service (e.g. [Formspree](https://formspree.io)) and point a form's
`action` at the endpoint they provide.

## Deploying

Any static host works: GitHub Pages, Netlify, Vercel, Cloudflare Pages.
just upload/point at this folder.
