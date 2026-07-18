const form = document.getElementById('contact-form');
const success = document.getElementById('contact-success');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // No backend is wired up yet — see README.md for connecting a form
  // service (e.g. Formspree/FormSubmit). Until then, fall back to the
  // visitor's email client with the message pre-filled.
  const data = new FormData(form);
  const subject = encodeURIComponent(`Website inquiry from ${data.get('name')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\n` +
    `Email: ${data.get('email')}\n` +
    `Organization: ${data.get('org') || '—'}\n\n` +
    `${data.get('message')}`
  );
  window.location.href = `mailto:hadeelbahaa172@gmail.com?subject=${subject}&body=${body}`;
  form.hidden = true;
  success.hidden = false;
});
