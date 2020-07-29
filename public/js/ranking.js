var idx = 0;
var idxs;
var data = { page: 1, pageSize: 10 };
var topp = document.querySelector(".top");
var contt = document.querySelector(".cont");

function rank(data) {
  ajax("/api/book", data, "get").then((res) => {
    console.log(res.data);
    idxs=0;
    for (let i = 0; i < res.data.length; i++) {
      if (idx < 3) {
        crOne(res.data);
      } else {
        crTwo(res.data);
      }
      idx++;
      idxs++;
    }
  });
}

function crOne(res) {
  let a = document.createElement("a");
  a.innerHTML = `
    <div class="top${idx+1}">
    <img src="./img/top${idx+1}.png" alt="" />
    <img src="./img/yao.jpg" alt="" />
    <img src="./img/yao.jpg" alt="" />
    <p>${res[idxs].title}</p>
    <span>更新至280话</span>
    </div>
`;
  topp.appendChild(a);
}

function crTwo(res) {
  let span = "";
  for (let i = 0; i < res[idxs].tag.length; i++) {
    span += `<span> ${res[idxs].tag[i]} </span>`;
  }
  let a = document.createElement("a");
  a.innerHTML = `
  <div class="card">
  <img src="./img/yao.jpg" alt="" />
  <div>
    <p>${res[idxs].title}</p>
    <span>更新至 <span>280</span>话</span>
    <div class="clin">
      ${span}
    </div>
    <p class="intr">
      ${res[idxs].desc}
    </p>
    <p>${idx+1}</p>
  </div>
</div>
`;
  contt.appendChild(a);
}


rank(data);
data.page=2;
rank(data);
data.page=3;
rank(data);
data.page=4;
rank(data);
data.page=5;
rank(data);