const {ipcRenderer, ipcMain} = require("electron")

const ipc = ipcRenderer

const maximizeBtn = document.getElementById("maximizeBtn")
const svgMaximize = document.getElementById("svgMaximize")

function changeMaximizeBtnIcon(isMaximizedApp) {
    if (isMaximizedApp) {
        maximizeBtn.title = "Maximize"
        svgMaximize.innerHTML =
            "<path fill-rule='evenodd' d='M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z' clip-rule='evenodd' />"
    } else {
        maximizeBtn.title = "Restore"
        svgMaximize.innerHTML =
            "<path fill-rule='evenodd' d='M6.22 5.28a.75.75 0 0 1 1.06-1.06L10 6.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L10.53 8.47a.75.75 0 0 1-1.06 0L6.22 5.28ZM6.22 14.72a.75.75 0 0 0 1.06 1.06L10 13.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25a.75.75 0 0 0-1.06 0l-3.25 3.25Z' clip-rule='evenodd' />"
    }
}

closeBtn.addEventListener("click", () => {
    ipc.send("closeApp")
})

minimizeBtn.addEventListener("click", () => {
    ipc.send("minimizeApp")
})

maximizeBtn.addEventListener("click", () => {
    ipc.send("maximizeApp")
})

document.addEventListener("keypress", (e)=>{
    console.log(e.key);
    // ipc.send("devTools", e)
})

ipc.on("isMaximized", (event, isMaximized) => {
    changeMaximizeBtnIcon(isMaximized)
})
