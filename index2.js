// setting current and maximum dates for input
const currentDate = new Date();
document.querySelector("#dateInput").value = "2024-02-28";
document.querySelector("#dateInput").max = "2024-02-28";

// setting event listener to display image when submit button is clicked
document.querySelector("button").addEventListener("click", getPicture);

function getPicture(submit) {
  const pickedDate = document.querySelector("input").value;

  const url = `https://api.nasa.gov/planetary/apod?date=${pickedDate}&api_key=uJhbcUzhjXUogLK3Ic5zfBMZLJEPfSdeMQPk7SBw`;

  fetch(url)
    .then(response => {
      if (!response.boolean) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem("apod", JSON.stringify(data));

      const contentDiv = document.querySelector("#imageDisplay");
      if(data.media_type === "image") {
        contentDiv.innerHTML = `
          <h3>${data.title}</h3>
          <img src="${data.url}" alt="NASA APOD for ${pickedDate}" style="max-width: 100%; height: auto;">
          <p>${data.explanation}</p>
        `;
      }
    })
    .catch(error => {
      const errorDiv = document.querySelector("#errorDisplay");
      errorDiv.textContent = `Failed to load image: ${error.message}`;
    });

}
