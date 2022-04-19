"use strict";

const content = "Web Publisher."
const text = document.querySelector(".text")
let index = 0;

 function sleep(delay){ 
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    }

function typing(){
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
        sleep(3000);
    }
}
setInterval(typing, 200)




// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
 
        const scrollTo = document.querySelector('#contact');
        scrollTo.scrollIntoView({ behavior: 'smooth' });
     
});



// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  if (active != null) {
    active.classList.remove('selected');
  }
  e.target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});