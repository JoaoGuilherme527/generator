const cpfToValid = document.getElementById("cpfToValid")
const btnValidate = document.getElementById("btnValidate")
const cpfGenerated = document.getElementById("cpfGenerated")
const btnGenerate = document.getElementById("btnGenerate")

function generateCpf(cpf) {
    digits = ""

    if (!cpf) {
        for (let i = 0; i < 9; i++) {
            digits += Math.round(Math.random() * 9)
        }
        list_a = calcList(digits, 10)
        d1 = createDigit(list_a)

        list_b = calcList(digits + d1, 11)
        d2 = createDigit(list_b)

        newCpf = digits + d1 + d2

        cpfGenerated.value = `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${d1}${d2}`
    } else if (cpf.length == 11) {
        digits = cpf.slice(0, 9)
        list_a = calcList(digits, 10)
        d1 = createDigit(list_a)

        list_b = calcList(digits + d1, 11)
        d2 = createDigit(list_b)

        validate = validateDigits(cpf, d1, d2)

        cpfToValid.style = validate
            ? "border: 1px solid var(--color-green-600); color:var(--color-green-600);"
            : "border: 1px solid var(--color-red-500); color:var(--color-red-500);"
    }
}

function calcList(digits, length) {
    list = createList(length)
    list_s = []
    for (let i = 0; i < digits.length; i++) {
        let v = Number(digits[i]) * list[i]
        list_s.push(v)
    }
    return list_s
}

function createDigit(list) {
    sum = list.reduce((acc, crr) => Number(acc) + Number(crr), 0)

    multiply = sum * 10

    digit = multiply % 11

    digit = digit >= 10 ? 0 : digit

    return digit
}

function createList(length) {
    list = []
    for (let i = 1; i <= length; i++) {
        list.push(i)
    }
    return list.reverse()
}

function validateDigits(cpf, d1, d2) {
    return d1.toString() === cpf[9] && d2.toString() === cpf[10]
}

btnGenerate.onclick = () => generateCpf()
btnValidate.onclick = () => {
    let cpf = cpfToValid.value.replace(/\D/g, "")
    if (cpf !== "") generateCpf(cpf)
}

cpfToValid.addEventListener("input", (e) => {
    cpfToValid.style = "border: 1px solid var(--color-gray-700); color: white;"
    let value = e.target.value.replace(/\D/g, "")
    if (value.length > 11) {
        value = value.slice(0, 11)
    }

    if (value.length > 10) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    } else if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4")
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3")
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{1,3})/, "$1.$2")
    }

    e.target.value = value
})

cpfGenerated.addEventListener("click",()=>{
    let value = cpfGenerated.value;

    if (value !== "") {
        navigator.clipboard.writeText(value).then(() => {
            alert("CPF copiado para a área de transferência!");
        }).catch(err => {
            console.error("Erro ao copiar:", err);
        });
    } else {
        alert("O campo está vazio!");
    }
})
