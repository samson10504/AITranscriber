const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { getAudioDuration } = require('get-audio-duration');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle('get-audio-duration', async (event, filePath) => {
  try {
    const duration = await getAudioDuration(filePath);
    return duration;
  } catch (error) {
    console.error('Error getting audio duration:', error);
    return null;
  }
});