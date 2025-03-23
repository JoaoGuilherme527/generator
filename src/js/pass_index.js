const charSets = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    special: "!@#$%^&*()_+-=[]{}|;:'\",.<>?/",
}

const elements = {
    passGenerated: document.getElementById("passGenerated"),
    copyPass: document.getElementById("copyPass"),
    copyIcon: document.getElementById("copyIcon"),
    copyIconCheck: document.getElementById("copyIconCheck"),
    btnGeneratePass: document.getElementById("btnGeneratePass"),
    passLength: document.getElementById("passLength"),
    passRange: document.getElementById("passRange"),
    checkboxes: {
        lower: document.querySelector("#chkLower input"),
        upper: document.querySelector("#chkUpper input"),
        numbers: document.querySelector("#chkNumber input"),
        special: document.querySelector("#chkSpecial input"),
    },
}

const getRandomChar = (str) => str.charAt(Math.floor(Math.random() * str.length))

function generatePass() {
    const length = Math.min(50, Math.max(1, Number(elements.passLength.value) || 12))

    let selectedChars = Object.entries(elements.checkboxes)
        .filter(([_, checkbox]) => checkbox.checked)
        .map(([key]) => charSets[key])
        .join("")

    if (!selectedChars) {
        elements.passGenerated.value = ""
        return
    }

    let pass = Array.from({length}, () => getRandomChar(selectedChars)).join("")
    elements.passGenerated.value = pass
}

function syncInputs() {
    elements.passLength.value = elements.passRange.value
    generatePass()
}

function copyToClipboard() {
    const value = elements.passGenerated.value
    if (!value || value === "") return

    navigator.clipboard
        .writeText(value)
        .then(() => {
            elements.copyIcon.classList.toggle("hidden")
            elements.copyIconCheck.classList.toggle("hidden")
            setTimeout(() => {
                elements.copyIcon.classList.toggle("hidden")
                elements.copyIconCheck.classList.toggle("hidden")
            }, 500)
        })
        .catch((err) => console.error("Erro ao copiar:", err))
}

elements.btnGeneratePass.addEventListener("click", generatePass)
elements.passRange.addEventListener("input", syncInputs)
elements.passRange.addEventListener("change", syncInputs)
elements.passLength.addEventListener("change", syncInputs)
elements.copyPass.addEventListener("click", copyToClipboard)

Object.values(elements.checkboxes).forEach((checkbox) => checkbox.addEventListener("change", generatePass))

window.addEventListener("load", generatePass)

document.querySelectorAll(".wrapper").forEach((wrapper) => {
    const checkbox = wrapper.querySelector("input[type='checkbox']")

    function toggleClass() {
        wrapper.classList.toggle("bg-blue-800", checkbox.checked)
        wrapper.classList.toggle("bg-opacity-45", checkbox.checked)
        wrapper.classList.toggle("border-blue-900", checkbox.checked)
        wrapper.classList.toggle("bg-gray-800", !checkbox.checked)
        wrapper.classList.toggle("border-gray-700", !checkbox.checked)
    }

    toggleClass()
    checkbox.addEventListener("change", toggleClass)
})
