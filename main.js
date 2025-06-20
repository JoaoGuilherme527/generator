const {app, BrowserWindow, ipcMain} = require("electron")

const ipc = ipcMain

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 850,
        height: 600,
        minWidth: 850,
        minHeight: 550,
        roundedCorners: true,
        frame: false,
        transparent: true,
        backgroundColor: "#00FFFFFF",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
        },
        titleBarStyle: "hidden",
    })

    mainWindow.loadFile("./src/index.html")

    ipc.on("closeApp", () => {
        mainWindow.close()
    })

    ipc.on("minimizeApp", () => {
        mainWindow.minimize()
    })

    ipc.on("maximizeApp", () => {
        let isMaximized = mainWindow.isMaximized()
        if (isMaximized) mainWindow.restore()
        else mainWindow.maximize()
        mainWindow.webContents.send("isMaximized", isMaximized)
    })

    ipc.on("devTools", (e, message)=>{
        console.log(e.sender.ipc);
        mainWindow.webContents.toggleDevTools()
    })
}

app.whenReady().then(() => {
    createWindow()

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})
