
var loading = document.querySelector("#loading");


document.getElementById("getOne").addEventListener("click", getOne);

document.getElementById("getAll").addEventListener("click", getAll);

document.getElementById("postData").addEventListener("click", postData);

function getOne() {

    loading.style.display = "block";
    setTimeout(() => {
        var id = document.getElementById("postid").value
        var url = "https://jsonplaceholder.typicode.com/posts/" + id;
        var xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);

        xhr.onload = function () {

            loading.style.display = "none";

            if (this.status === 200) {
                var post = JSON.parse(this.responseText);
            }

            var html = "";

            html +=
                `
                <div class="card my-3">
                <div class="card-header">
                    ${post.id}-)  ${post.title}
                </div>
                <div class="card-body">
                    <blockquote class="blockquote">
                        <p>${post.body}</p>
                    </blockquote>
                </div>
            </div>  
            `;
            document.querySelector("#results").innerHTML = html;
        }

        xhr.send();
    }, 1100);


}


function getAll() {

    loading.style.display = "block";

    setTimeout(() => {
        var url = "https://jsonplaceholder.typicode.com/posts";
        var xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);

        xhr.onload = function () {

            loading.style.display = "none";

            if (this.status === 200) {
                var posts = JSON.parse(this.responseText);
            }

            var html = "";

            posts.forEach(element => {

                html +=
                    `
                <div class="card my-3">
                <div class="card-header">
                    ${element.title}
                </div>
                <div class="card-body">
                    <blockquote class="blockquote">
                        <p>${element.body}</p>
                    </blockquote>
                </div>
            </div>  
            `;

            });
            document.querySelector("#results").innerHTML = html;
        }

        xhr.send();
    }, 2500);


}


function postData() {

    const data = {
        userId: 1,
        title: 'new title',
        body: 'new body'
    }

    var json = JSON.stringify(data);
    var url = "https://jsonplaceholder.typicode.com/posts";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json", "Charset=utf-8");

    xhr.onload = function () {
        if (xhr.status === 201 && xhr.readyState === 4) {
            var post = xhr.responseText;
            console.log(post);
        }
    }

    xhr.send(json);

}