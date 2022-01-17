fetch("style_links.json")
  .then((response) => response.json())
  .then((data) => {
    let links = data;

    for (let i = 0; i < links.length; i++) {
      console.log(links.length);
      let StyleBoxDiv = document.createElement("div");
      StyleBoxDiv.innerHTML = `<div class="stylebox">
            <div class="image">
                 <img src="/assets/images/branches/${links[i].name}.png" alt="">
             </div>
            <p>${links[i].name}</p>
            
            <div class="btn-group">
            <a  href="${links[i].link}">View</a>
            </div>

            </div>`;
      document.getElementById("styles").appendChild(StyleBoxDiv);
    }
  });
