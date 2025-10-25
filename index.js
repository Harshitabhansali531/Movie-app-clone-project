
const faqBoxes = document.querySelectorAll(".ques");

faqBoxes.forEach((box) => {
  box.addEventListener("click", () => {
  
    if (box.classList.contains("active")) {
      box.classList.remove("active");
      const answer = box.querySelector(".answer");
      if (answer) answer.remove();
     
    } else {
      


      faqBoxes.forEach((b) => {
        b.classList.remove("active");
        const ans = b.querySelector(".answer");
        if (ans) ans.remove();
       
      });

  
      box.classList.add("active");
      const answer = document.createElement("div");
      answer.classList.add("answer");
      answer.style.color = "white";
      answer.style.marginTop = "1rem";
      answer.style.fontSize = "1.2rem";
      answer.textContent = getAnswerText(
        box.querySelector(".in-ques").textContent.trim()
      );
      box.appendChild(answer);
     
    }
  });
});


function getAnswerText(question) {
  switch (question) {
    case "What is NetFlix":
      return "Netflix is a streaming service offering a wide variety of award-winning TV shows, movies, anime, and more on thousands of devices.";
    case "How much does Netflix cost?":
      return "Plans start at just ₹149 per month. Watch on your phone, tablet, laptop, or TV without ads.";
    case "What can I watch on Netflix?":
      return "You can watch thousands of movies, web series, documentaries, and Netflix Originals in every genre.";
    case "Where can I watch?":
      return "You can watch anywhere—on your phone, tablet, laptop, or TV. Download shows to watch offline anytime.";
    default:
      return "More information coming soon.";
  }
}


const emailInput = document.querySelector(".input1");
const getStartedBtn = document.querySelector(".button-in");

getStartedBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  if (email === "") {
    alert("Please enter your email address.");
  } else if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
  } else {
    alert(`Welcome! We'll send Netflix info to ${email}.`);
    emailInput.value = "";
  }
});


function setTheme(theme) {
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
}

function applySystemTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) setTheme(savedTheme);
else applySystemTheme();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (!localStorage.getItem("theme")) applySystemTheme();
  });

const dropdown = document.querySelector("#dropdown");
dropdown.addEventListener("change", (e) => {
  alert(`You selected language: ${e.target.value}`);
});
