document.addEventListener('DOMContentLoaded', (event) => {
    const resButton = document.getElementById("resButton");
    resButton.addEventListener("click", () => {
        var containerApp = document.getElementById("container-app");

        let v = parseInt(document.getElementById("speed").value);
        let s = parseInt(document.getElementById("distance").value);

        if (v) {
            let time = s/v;
            containerApp.setHTML("Result:" + time);
        }
        else {
            containerApp.setHTML("Error by devined by zero");
        }
    });
});
