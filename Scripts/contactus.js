const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  try {
    const res = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (result.success) {
      alert('✅ Message sent! We’ll get back to you soon.');
      form.reset();
    } else {
      alert('❌ Something went wrong. Please try again later.');
    }
  } catch (err) {
    alert('❌ Failed to send message.');
  }
});
