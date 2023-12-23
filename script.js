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
    populationPara.innerHTML=`<b>Population: </b>${(data["population"]).toLocaleString()}`;

    const regionPara = document.createElement("p");
    regionPara.innerHTML = `<b>Region: </b>${data["region"]}`;

    const captialPara = document.createElement("p");
    captialPara.innerHTML = `<b>Capital: </b>${data["capital"]}`

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