const tabs = {
    "cpf-tab": {tab: document.getElementById("cpf-tab"), wrapper: document.getElementById("cpf_generator")},
    "pass-tab": {tab: document.getElementById("pass-tab"), wrapper: document.getElementById("pass_generator")},
}

const classCrrTab = "cursor-pointer text-white flex-1 text-center bg-gray-600 border-b-2 border-white"
const classTab = "cursor-pointer text-white flex-1 text-center"

function loadClasses() {
    Object.values(tabs).forEach(({tab, wrapper}) => {
        tab.classList.remove(...classCrrTab.split(" "))
        tab.classList.add(...classTab.split(" "))
        wrapper.classList.add("hidden")
    })
}

function loadContent(tabName) {
    loadClasses()
    const {tab, wrapper} = tabs[tabName]
    tab.classList.remove(...classTab.split(" "))
    tab.classList.add(...classCrrTab.split(" "))
    wrapper.classList.remove("hidden")
}

window.addEventListener("load", () => loadContent("pass-tab"))

Object.keys(tabs).forEach((tabName) => {
    tabs[tabName].tab.addEventListener("click", () => loadContent(tabName))
})
