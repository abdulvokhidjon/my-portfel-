const projects = [
  {
    title: "AkademNashr",
    githubLink: "https://github.com/abdulvokhidjon/Akademnashr.git",
    vercelLink: "https://akademnashr-sigma.vercel.app/",
  },
  {
    title: "Ansormed",
    githubLink: "https://github.com/abdulvokhidjon/AnsorMed-Web-Site.git",
    vercelLink: "https://ansor-med-web-site.vercel.app/",
  },
  {
    title: "USA",
    githubLink: "https://github.com/abdulvokhidjon/USA.git",
    vercelLink: "https://usa-states-three.vercel.app/",
  },
  {
    title: "QR-code Workshop",
    githubLink: "https://github.com/abdulvokhidjon/qrcode-workshop.git",
    vercelLink: "https://qrcode-workshop.vercel.app/",
  },
  {
    title: "Introduce-card",
    githubLink: "https://github.com/abdulvokhidjon/introduce-card.git",
    vercelLink: "https://introduce-card.vercel.app",
  },
  {
    title: "PIXER for exam",
    githubLink: "https://github.com/abdulvokhidjon/PIXER-for-exam.git",
    vercelLink: "https://pixer-for-exam.vercel.app/",
  },
  {
    title: "Blog_card_",
    githubLink: "https://github.com/abdulvokhidjon/blog_card_.git",
    vercelLink: "https://blog-card-flame.vercel.app",
  },
  {
    title: "Remote-card",
    githubLink: "https://github.com/abdulvokhidjon/remote-card.git",
    vercelLink: "https://remote-card.vercel.app/",
  },
  {
    title: "Perfume",
    githubLink: "https://github.com/abdulvokhidjon/parfum-card.git",
    vercelLink: "https://parfum-card-theta.vercel.app/",
  },
  {
    title: "Tip Calculator",
    githubLink: "https://github.com/abdulvokhidjon/tip_calculator.git",
    vercelLink: "https://tip-calculatore.vercel.app/",
  },
  {
    title: "Workshop-BG-Video",
    githubLink: "https://github.com/abdulvokhidjon/Detective-films-Workshop-BG-Video.git",
    vercelLink: "https://detective-films-workshop-bg-video.vercel.app/",
  },
 
  {
    title: "Castaway-Project",
    githubLink: "https://github.com/abdulvokhidjon/Castaway-Project.git",
    vercelLink: "https://castaway-project.vercel.app/",
  },

  {
    title: "Create-X-Project",
    githubLink: "https://github.com/abdulvokhidjon/Create-X-project.git",
    vercelLink: "https://create-x-project.vercel.app",
  },

  {
    title: "",
    githubLink: "",
    vercelLink: "",
  },

  {
    title: "",
    githubLink: "",
    vercelLink: "",
  },




];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
