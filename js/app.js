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
    githubLink: "https://github.com/abdulvokhidjon/Create-X-Project..git",
    vercelLink: "https://create-x-project-updated.vercel.app/",
  },

  {
    title: "CSS Animation",
    githubLink: "https://github.com/abdulvokhidjon/CSS-Animation.git",
    vercelLink: "https://css-animation-alpha.vercel.app/",
  },

  {
    title: "Crowfunding Project",
    githubLink: "https://github.com/abdulvokhidjon/Crowfunding-Project.git",
    vercelLink: "https://crowfunding-project-inky.vercel.app/",
  },

  {
    title: "My Team Project",
    githubLink: "https://github.com/abdulvokhidjon/My-Team-Project.git",
    vercelLink: "https://my-team-project-ten.vercel.app/",
  },

  {
    title: "Designo Project: 2^nd workshop :)",
    githubLink: "https://github.com/abdulvokhidjon/Designo-Project..git",
    vercelLink: "https://designo-project-exam.vercel.app/",
  },

  {
    title: "First practice in Javascript",
    githubLink: "https://github.com/abdulvokhidjon/First-practice-in-Javascript....git",
    vercelLink: "https://first-practice-in-javascript.vercel.app//",
  },

  {
    title: "If,Boolean,For",
    githubLink: "https://github.com/abdulvokhidjon/IF-BOOLEAN-FOR.git",
    vercelLink: "https://if-boolean-for.vercel.app/",
  },

  {
    title: "For | 4-dars",
    githubLink: "https://github.com/abdulvokhidjon/FOR-4-dars.git",
    vercelLink: "https://for-4-dars-1soz.vercel.app/",
  },

  {
    title: "FUNCTIONS | 5-dars",
    githubLink: "https://github.com/abdulvokhidjon/Function-5-Dars.git",
    vercelLink: "https://function-5-dars.vercel.app/",
  },

  {
    title: "Design-Portfolio Project",
    githubLink: "https://github.com/abdulvokhidjon/Design-Portfolio.git",
    vercelLink: "https://design-portfolio-iota-nine.vercel.app/",
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
