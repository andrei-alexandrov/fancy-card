class ViewController {
    constructor() {

    }

    renderCards = () => {
        let cardsContainer = document.querySelector("#niceCard .container");
        cardsContainer.innerHTML = "";

        let card = document.createElement("div");
        card.classList.add("card");

        let lines = document.createElement("div");
        lines.classList.add("lines");

        let imgBx = document.createElement("div");
        imgBx.classList.add("imgBx");

        let img = document.createElement("img");
        img.src = "./assets/pics/r.jpg";

        let content = document.createElement("div");
        content.classList.add("content");

        let details = document.createElement("div")
        details.classList.add("details");

        let titleContent = document.createElement("h2");
        titleContent.classList.add("title");
        titleContent.innerText = "Nice to meet you";

        let textContent = document.createElement("p");
        textContent.classList.add("textContent");
        textContent.innerText = "Hover me";
        textContent.style.color = "white";

        card.addEventListener("mouseover", () => {
            textContent.innerText = "";
        });

        card.addEventListener("mouseout", () => {
            textContent.innerText = "Hover me";
        });

        imgBx.appendChild(img);
        details.append(titleContent, textContent);
        content.appendChild(details);
        card.append(lines, imgBx, content);
        cardsContainer.appendChild(card);
    }
}

let viewController = new ViewController();
viewController.renderCards();
