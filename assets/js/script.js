// function to toggle navbar
const toggleNavbar = () => {
  document.querySelector(".navbar").classList.toggle("show");
};

// modal pop up Template
const modal = (work) => {
  return `<div class="modal">
  <div class="modal-blur"></div>
  <div class="modal-body container">
      <div class="works card">
          <div class="content-box">
              <div class="heading">
                  <h2 class="item-title">${work.name}</h2>
                  <ul class="close">
                      <li class="bar-item"></li>
                      <li class="bar-item"></li>
                  </ul>
              </div>
              <div class="details">
                  <h4>CANOPY</h4>
                  <ul>
                      <li>${work.stack}</li>
                      <li>${work.year}</li>
                  </ul>
              </div>
              <div class="modal-image">
                  <img class="img" src="${work.image}" alt="Snapshoot Portfolio">
              </div>
              <div class="descriptions">
                  <div class="w-70">
                      <p>${work.description}</p>
                  </div>
                  <div class="tools-data w-30">
                      <ul class="categories">
                          ${toolsTemplate(work.tools)}
                      </ul>
                      <div class="clear"></div>
                      <div class="btn-group modal-footer">
                          <a href="${work.live_link}" class="btn">See Live <img src="assets/images/Icon.svg" alt=""></a>
                          <a href="${work.sourse_link}" class="btn">See Source <img src="assets/images/github-in-button.svg" alt=""></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
  </div>
</div>`
}

// Tools template
const toolsTemplate = (toolsData) => {
  let tools = "";
  toolsData.forEach(function (tool) {
    tools += `
    <li class="badge floating">${tool}</li>
    `;
  });
  return tools
}

// portfolio template
const portfolioTemplate = (portfolioData) => {
  let content = "";
  portfolioData.forEach(function (data) {
    
    
    content += `
    <div class="item card">
      <div class="item-image">
          <img class="img" src="${data.image}" alt="Snapshoot Portfolio">
      </div>
      <div class="content-box">
          <h2 class="item-title">${data.name}</h2>
          <div class="details">
              <h4>CANOPY</h4>
              <ul>
                <li>${data.stack}</li>
                <li>${data.year}</li>
              </ul>
          </div>
          <p>${data.excerpt}</p>
          <ul class="categories">${toolsTemplate(data.tools)}
          </ul>
          <div class="clear"></div>
          <button class="btn see-project" data-id="${data.id}">See Project</button>
      </div>
    </div>`;
  });
  return content;
};

// WINDOWS ON LOAD
window.addEventListener("load", () => {
  const workData = [
    {
      id: 1,
      name: "Tonic",
      image: "assets/images/Snapshoot Portfolio.png",
      stack: "Back End Dev",
      year: "2015",
      excerpt: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      tools: ["html", "CSS", "JavaScript"],
      live_link: "#",
      sourse_link: "#",
    },
    {
      id: 2,
      name: "Multi-Post Stories",
      image: "assets/images/Snapshoot Portfolio2.png",
      stack: "Full Stack Dev",
      year: "2015",
      excerpt:
        "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the print",
      tools: ["html", "Ruby on Rails", "CSS", "JavaScript"],
      live_link: "#",
      sourse_link: "#",
    },
    {
      id: 3,
      name: "FACEBOOK 360",
      image: "assets/images/Snapshoot Portfolio3.png",
      stack: "Full Stack Dev",
      year: "2015",
      excerpt:
        "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      tools: ["html", "Ruby on Rails", "CSS", "JavaScript"],
      live_link: "#",
      sourse_link: "#",
    },
    {
      id: 4,
      name: "Uber Navigation",
      image: "assets/images/Snapshoot Portfolio1.png",
      stack: "Lead Developer",
      year: "2018",
      excerpt:
        "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      tools: ["html", "Ruby on Rails", "CSS", "JavaScript"],
      live_link: "#",
      sourse_link: "#",
    },
  ];

  // toggle navbar on mobile
  document.querySelector(".bars").addEventListener("click", () => {
    toggleNavbar();
  });

  const menuButton = document.querySelectorAll(".nav-link a");
  Array.from(menuButton).forEach((element) => {
    element.addEventListener("click", () => {
      toggleNavbar();
    });
  });

  // load portfolio section
  loadPortfolio(() => {
    const portfolioButton = document.querySelectorAll(".see-project");
    Array.from(portfolioButton).forEach((element) => {
      element.addEventListener("click",function(e){
        e.preventDefault();
        const id = this.getAttribute("data-id");
        const filter = workData.filter(function(data){
          return data.id == id;
        })

        // show modal
        showModal(filter[0],closeModal)
      })
    })
  });
  
  // function to load portfolio sections dynamically when page loads
  function loadPortfolio (callBack = () => null) {
    const workSectionElemnt = document.querySelector("#work-section");
    workSectionElemnt.innerHTML = portfolioTemplate(workData);
    return callBack();
  }

  // function to show modal when portfolio see more button is clicked
  function showModal (modalData,callBack = () => null) {
    document.querySelector("#modal-section").innerHTML = modal(modalData)
    return callBack()
  }

  // function to close modal when close button is clicked
  function closeModal () {
    document.querySelector(".close").addEventListener("click", () => {
      document.querySelector("#modal-section").innerHTML = ""
    });
  }
});
