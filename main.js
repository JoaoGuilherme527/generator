const {app, BrowserWindow, ipcMain} = require("electron")

const ipc = ipcMain

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minHeight: 420,
        minWidth: 720,
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
