const root = document.getElementById("root")
const cpfTab = document.getElementById("cpf-tab")
const passTab = document.getElementById("pass-tab")

const classCrrTab = "cursor-pointer text-white flex-1 text-center bg-gray-600 border-b-2 border-white"
const classTab = "cursor-pointer text-white flex-1 text-center"

const routes = {
    "cpf-tab": "./cpf_generator.html",
    "pass-tab": "./pass_generator.html",
}

const tabs = [cpfTab, passTab]

function loadClasses(arr) {
    for (const tab of arr) {
        tab.className = classTab
    }
}

for (const tab of tabs) {
    tab.className = classTab
    tab.addEventListener("click", () => {
        loadClasses(tabs)
        tab.className = classCrrTab
        loadContent(routes[tab.id])
    })
}

async function loadContent(url) {
    const response = await fetch(url)
    if (response.ok) root.innerHTML = await response.text()
}

window.addEventListener("load", () => {
    loadContent(routes["cpf-tab"])
    cpfTab.className = classCrrTab
})

cpfTab.addEventListener("click", () => loadContent(routes["cpf-tab"]))
