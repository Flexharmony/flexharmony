/* Flex Harmony website settings. Update these before publishing. */
window.FLEX_HARMONY = {
  whatsappNumber: '', // Add country code + number, digits only, e.g. 919876543210
  email: 'flexharmony1018@gmail.com', // Enquiry destination
  phone: '',           // Add the studio's public phone number
  location: 'Jaipur, Rajasthan, India'
};

const currentFile = location.pathname.split('/').pop() || 'index.html';
const navItems = [
  ['Home','index.html'],['About','about.html'],['Services','services.html'],['Pilates','pilates.html'],
  ['Physiotherapy','physiotherapy.html'],['Weight Loss','weight-loss.html'],['Classes','classes.html'],['Wellness Journal','wellness-journal.html'],['Contact','contact.html']
];
const header = document.querySelector('[data-site-header]');
if (header) {
  header.innerHTML = `<a class="brand" href="index.html" aria-label="Flex Harmony home"><img src="assets/images/flex-harmony-logo.png" alt="Flex Harmony logo"><span>Flex <b>Harmony</b><small>Your space. Your strength. Your harmony.</small></span></a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false"><i></i><i></i><i></i></button><nav class="main-nav" aria-label="Main navigation">${navItems.map(([label,url])=>`<a href="${url}" ${currentFile===url?'aria-current="page"':''}>${label}</a>`).join('')}<a class="nav-cta" href="contact.html#enquiry">Book a Session <span>↗</span></a></nav>`;
}
const footer = document.querySelector('[data-site-footer]');
if (footer) footer.innerHTML = `<div class="footer-main"><a class="brand footer-brand" href="index.html"><img src="assets/images/flex-harmony-logo.png" alt=""><span>Flex <b>Harmony</b><small>Move better. Feel stronger. Live in harmony.</small></span></a><p>A women-centered wellness studio in Jaipur bringing movement, rehabilitation and mindful fitness together.</p><div class="footer-links">${navItems.filter(x=>!['Home'].includes(x[0])).map(([n,u])=>`<a href="${u}">${n}</a>`).join('')}</div><a class="button button-light" href="contact.html#enquiry">Let's talk about your goals <span>↗</span></a></div><div class="footer-bottom"><span>© <span id="year"></span> Flex Harmony. All rights reserved.</span><span>Made for stronger, healthier living.</span></div>`;
document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
const menuToggle=document.querySelector('.menu-toggle');
menuToggle?.addEventListener('click',()=>{const nav=document.querySelector('.main-nav');const open=nav.classList.toggle('is-open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
document.querySelectorAll('[data-whatsapp]').forEach(el=>el.addEventListener('click',e=>{const number=window.FLEX_HARMONY?.whatsappNumber;if(!number){e.preventDefault();document.querySelector('#enquiry')?.scrollIntoView({behavior:'smooth'});const note=document.querySelector('[data-contact-note]');if(note)note.textContent='To enable WhatsApp booking, add the studio number in assets/js/site.js. You can still send an enquiry using this form.';return;}el.href=`https://wa.me/${number}?text=${encodeURIComponent('Hello Flex Harmony, I would like to enquire about your services.')}`}));
// The contact form submits securely through FormSubmit.co to flexharmony1018@gmail.com.
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
