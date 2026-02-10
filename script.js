function filterProject(category) {
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
    project.style.display =
      category === 'all' || project.classList.contains(category)
        ? 'block'
        : 'none';
  });

  document.querySelectorAll('.portfolio-filter button')
    .forEach(btn => btn.classList.remove('active'));

  event.target.classList.add('active');
}

window.addEventListener("scroll", () => {
  const heroText = document.querySelector(".hero .text");
  heroText.style.transform = `translateY(${window.scrollY * 0.2}px)`;
});

