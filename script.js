const url =
  "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital";

const uploadData = async () => {
  const res = await fetch(url);
  const datas = await res.json();

  const unorderList = document.querySelector(".cards");
  for (const data of datas) {
    const list = document.createElement("li");
    list.classList.add("card");

    const image = document.createElement("img");
    image.src = data["flags"]["png"];

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about-data");

    const countryName = document.createElement("h1");
    countryName.innerText = data["name"]["common"];

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info-data");

    const populationPara = document.createElement("p");
    populationPara.innerHTML = `<b>Population: </b>${data[
      "population"
    ].toLocaleString()}`;

    const regionPara = document.createElement("p");
    regionPara.innerHTML = `<b>Region: </b>${data["region"]}`;

    const captialPara = document.createElement("p");
    captialPara.innerHTML = `<b>Capital: </b>${data["capital"]}`;

    infoDiv.append(populationPara);
    infoDiv.append(regionPara);
    infoDiv.append(captialPara);

    aboutDiv.append(countryName);
    aboutDiv.append(infoDiv);

    list.append(image);
    list.append(aboutDiv);

    unorderList.append(list);
  }
};

uploadData();

const themeBtn = document.querySelector(".changemode");

themeBtn.addEventListener("click", () => {
  const body = document.querySelector("body");

  if (body.style.backgroundColor == "var(--veryDarkBlue)") {
    body.style.backgroundColor = "var(--veryLightGrey)";
  } else {
    body.style.backgroundColor = "var(--veryDarkBlue)";
  }

  const whiteElements = document.querySelectorAll(
    "nav,.searchbar,.dropdown,input,.dropdown select,.card"
  );
  whiteElements.forEach((ele) => {
    ele.classList.toggle("darkBackground");
  });

  const allFonts = document.querySelectorAll(
    "nav h1, .changemode h2 , input[placeholder] , .region, .info-data p, .info-data p b, .about-data h1 "
  );

  allFonts.forEach((font) => {
    font.classList.toggle("fontColor");
  });

  const moonIcon = document.querySelector(".changemode i");
  moonIcon.classList.toggle("fa-regular");
  moonIcon.classList.toggle("fa-solid");
});

const searchBox = document.querySelector(".searchbar input");

searchBox.addEventListener("keyup", (event) => {
  const allCards = Array.from(document.querySelectorAll(".card"));
  const inputValue = event.target.value;

  allCards.forEach((card) => {
    const countryName = card.querySelector(".about-data h1").innerText;
    if(!countryName.toLowerCase().includes(inputValue.toLowerCase())){
      card.style.display = "none";
    } else{
      card.style.display = "block";
    }
  });
});
