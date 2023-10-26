let datas = null;
const API = "http://localhost:3002/words";

const wordsList = document.getElementById("wordsList");
const fetchData = async () => {
  try {
    const res = await fetch(API);
    datas = await res.json();
    console.log(datas);

    datas.forEach((item) => {
      const wordItem = document.createElement("div");
      wordItem.classList.add("row");
      wordItem.innerHTML = `
          <span class="col">${item}</span>
          <span class="col t-center">
            <button onclick="deleteWord()" type="button" class="btn btn-danger">
              Delete
            </button>
            <button onclick="deleteWord()" type="button" class="btn btn-warning">
              Update
            </button>
          </span>
      `;
      wordsList.appendChild(wordItem);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData();

export default datas;
