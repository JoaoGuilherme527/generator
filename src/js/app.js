const root = document.getElementById("root")
const cpfGeneratorWrapper = document.getElementById("cpf_generator")
const passGeneratorWrapper = document.getElementById("pass_generator")
const cpfTab = document.getElementById("cpf-tab")
const passTab = document.getElementById("pass-tab")

const classCrrTab = "cursor-pointer text-white flex-1 text-center bg-gray-600 border-b-2 border-white"
const classTab = "cursor-pointer text-white flex-1 text-center"

const tabs = [
    {"cpf-tab": {tab: cpfTab, wrapper: cpfGeneratorWrapper}, name: "cpf-tab"},
    {"pass-tab": {tab: passTab, wrapper: passGeneratorWrapper}, name: "pass-tab"},
]

function loadClasses() {
    for (const item of tabs) {
        item[item.name].tab.className = classTab
        item[item.name].wrapper.classList.add("hidden")
    }
}

function loadContent(tab) {
    loadClasses()
    for (const item of tabs) {
        if (item.name == tab) {
            item[item.name].tab.className = classCrrTab
            item[item.name].wrapper.classList.remove("hidden")
        }
    }
}

window.addEventListener("load", () => {
    loadContent("cpf-tab")
})

for (const item of tabs) {
    item[item.name].tab.addEventListener("click", () => {
        loadContent(item[item.name].tab.id)
    })
}
