function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
document.querySelectorAll('#navMenu a').forEach(a =>
  a.addEventListener('click', () => {
    document.getElementById('navMenu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
  })
);
const io = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 70);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const ctaForm = document.getElementById('ctaForm');
if (ctaForm) {
  ctaForm.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('cf-name').value.trim();
    const company = document.getElementById('cf-company').value.trim();
    const phone   = document.getElementById('cf-phone').value.trim();
    const msg     = document.getElementById('cf-msg').value.trim();
    if (!name || !phone) {
      alert('Por favor, preencha pelo menos nome e telefone.');
      return;
    }
    const lines = [
      'Olá, Santos Clean!',
      `Nome: ${name}`,
      company ? `Empresa: ${company}` : '',
      `Telefone: ${phone}`,
      msg ? `\nMensagem: ${msg}` : '',
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/5513996162280?text=${encodeURIComponent(lines)}`, '_blank');
  });
}