// مثال بسيط لإضافة تأثير التمرير السلس عند التنقل بين الأقسام
// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });











document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav li a');

    // Highlight active section and nav item
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`#nav li a[href="#${id}"]`);

            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => observer.observe(section));

    // Smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(href);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

