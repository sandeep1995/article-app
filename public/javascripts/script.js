function select(elem) {
    return document.querySelector(elem);
}

var submitBtn = select("#submitBtn");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    var name = select("#name");
    var article = select("#article");
    // Simple error checking
    if (name.value == '' || article.value == '') {
        return;
    }

    // making our data ready
    var data = {
        name: name.value,
        article: article.value
    };
    data = JSON.stringify(data);

    // here we are using brand new in build fetch method to do a POST request
    // Forget XHR :)
    fetch("/save", {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (res) {
        return res.json();
    }).then(function (res) {
        console.log(res);
        if (!res.error) {
            name.value = '';
            article.value = '';
        }
        alert(res.message);
        window.location.reload();
    })
});

