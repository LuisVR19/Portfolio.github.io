var skillsContainer;
var webButton;
var programmingButton;
var toolsButton;

const webData = [
  { name: "HTML", percentage: 85, color: "#FFFF66" },
  { name: "JS", percentage: 65, color: "#1eeb07" },
  { name: "CSS", percentage: 45, color: "#2bdefa" },
  { name: "PHP", percentage: 75, color: "#b64ef2" },
  { name: ".NET", percentage: 70, color: "#fa485d" },
  { name: "Angular", percentage: 25, color: "#fc4d3d" }
];

const programmingData = [
  { name: "Java", percentage: 65, color: "#fa485d" },
  { name: "C#", percentage: 55, color: "#1eeb07" },
  { name: "Python", percentage: 5, color: "#2bdefa" }
];

const toolsData = [
  { name: "GITHUB", percentage: 75, color: "#0ce6f5" }
];

function generateSkills(data) {
  skillsContainer.innerHTML = '';

  data.forEach((skillData) => {
    const skill = document.createElement('div');
    skill.innerHTML = `
      <div class="card">
        <div class="percent" style="--clr:${skillData.color}; --num:${skillData.percentage};">
          <div class="dot"></div>
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
          <div class="number">
            <h2>${skillData.percentage}<span>%</span></h2>
            <svg class="svg_skill" width="46" height="46" fill="#e34c26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m3 1.5 1.638 18.9 7.351 2.1 7.37-2.102L21 1.5H3Zm14.438 6.188H8.813L9 10.078h8.25l-.633 7.096L12 18.491 7.374 17.18l-.317-3.632h2.262l.16 1.842 2.521.69 2.504-.699.262-3.007H6.937l-.59-7.012h11.287l-.197 2.324Z"></path>
            </svg>
            <p>${skillData.name}</p>
          </div>
        </div>
      </div>
    `;
    skillsContainer.appendChild(skill);
  });
}

function setActiveButton(activeButton) {
  // Resetea las clases de todos los botones
  webButton.classList.remove('skill-button-active');
  programmingButton.classList.remove('skill-button-active');
  toolsButton.classList.remove('skill-button-active');

  activeButton.classList.add('skill-button-active');
  [webButton, programmingButton, toolsButton].forEach((button) => {
    if (button !== activeButton) {
      // button.classList.add('btn-secondary');
    }
  });
}

function showWebSkills() {
  setActiveButton(webButton);
  generateSkills(webData);
}

function showProgramingSkills() {
  setActiveButton(programmingButton);
  generateSkills(programmingData);
}

function showToolsSkills() {
  setActiveButton(toolsButton);
  generateSkills(toolsData);
}


// NO VA AQUI
document.addEventListener("DOMContentLoaded", function () {
  skillsContainer = document.getElementById('skillsContainer');
  webButton = document.getElementById('webButton');
  programmingButton = document.getElementById('programmingButton');
  toolsButton = document.getElementById('toolsButton');
  studiesContainer = document.getElementById("studiesContainer");
  generateSkills(webData);
  setActiveButton(webButton);

  // generateStudies(studiesData);
});


function downloadCV() {
  const url = './assets/documentos/CV.pdf';

  fetch(url).then(response => response.blob()).then(blob => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Curriculum.pdf';
    link.click();
  });
}
