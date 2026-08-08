const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        })

        contents.forEach(content => {
            content.classList.remove("active");
        })

        tab.classList.add("active");

        const tabId = tab.dataset.tab;

        document.getElementById(tabId).classList.add("active");
    });
});