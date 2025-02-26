const { app, BrowserWindow,ipcMain } = require( 'electron');
const path = require( 'node:path');
const started = require( 'electron-squirrel-startup');
const axios = require('axios');

if (started) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.webContents.openDevTools();
};
  const createVentanaPokemons = (height, width) => {
    ventanaPokemons = new BrowserWindow({
    height: height,
    width: width,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  ventanaPokemons.loadFile("src/mostrarPokes.html")
  }

app.whenReady().then(() => {
  createWindow();


  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

ipcMain.on("navigate-to-inicio", () => {
  createWindow()
})
ipcMain.on("navigate-to-listado", () => {
  createVentanaPokemons()
})

function goListado(){
  ipcRenderer.send("navigate-to-listado")
}


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

