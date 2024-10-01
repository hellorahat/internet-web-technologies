const panels = document.querySelectorAll(".panel");
let currentActivePanel = panels[0];

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        currentActivePanel.classList.remove("active")
        panel.classList.add("active");
        currentActivePanel = panel;
    })
})