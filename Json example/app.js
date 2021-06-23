document.getElementById("getEmployees").addEventListener("click", loadEmployee);

function loadEmployee() {

    var loadImage = document.querySelector("#loading");
    loadImage.style.display = "block";

    setTimeout(() => {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", "json.json", true);

        xhr.onload = function () {

            loadImage.style.display = "none";

            if (this.status === 200) {
                let employees = JSON.parse(this.responseText);

                let html = "";

                employees.forEach(element => {

                    html +=
                        `
                <tr>
                    <td>${element.firstName}</td>
                    <td>${element.lastName}</td>
                    <td>${element.age}</td>
                    <td>${element.retired}</td>
                </tr>  
            `;
                    document.querySelector("#employees").innerHTML = html;
                });

            }
        }

        xhr.send();
    }, 1500);

}