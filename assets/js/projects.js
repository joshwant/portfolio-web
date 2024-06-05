var projectsData = [
  {
      "title": "Project 1",
      "description": "Description 1",
      "image": "assets/images/project1.jpg",
      "link": "https://example.com/project1",
      "technologies": ["HTML", "CSS", "JavaScript"],
      "tag": "Front End"
  },
  {
      "title": "Project 2",
      "description": "Description of project 2.",
      "image": "assets/images/project2.jpg",
      "link": "https://example.com/project2",
      "technologies": ["React", "Node.js", "MongoDB"],
      "tag": "Full Stack"
  }
];

// Get the projects container
const projectsContainer = document.getElementById("projects-container");

// Loop through each project
projectsData.forEach(function(project) {
  // Create elements for each project
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  const titleElement = document.createElement("h2");
  titleElement.textContent = project.title;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = project.description;

  const imageElement = document.createElement("img");
  imageElement.src = project.image;
  imageElement.alt = project.title;

  const linkElement = document.createElement("a");
  linkElement.href = project.link;
  linkElement.textContent = "View Project";
  linkElement.target = "_blank";

  const techElement = document.createElement("p");
  techElement.textContent = "Technologies: " + project.technologies.join(", ");

  // Append elements to the project container
  projectDiv.appendChild(titleElement);
  projectDiv.appendChild(descriptionElement);
  projectDiv.appendChild(imageElement);
  projectDiv.appendChild(linkElement);
  projectDiv.appendChild(techElement);

  // Append the project container to the projects container
  projectsContainer.appendChild(projectDiv);
});
