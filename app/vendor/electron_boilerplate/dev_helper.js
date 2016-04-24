'use strict';

var app = require('electron').app
var Menu = require('menu');
var BrowserWindow = require('electron').BrowserWindow;
var dialog = require('electron').dialog;

module.exports.setDevMenu = function () {
    var devMenu = Menu.buildFromTemplate([{
        label: 'Development',
        submenu: [{
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click: function () {
                BrowserWindow.getFocusedWindow().reloadIgnoringCache();
            }
        },{
            label: 'Toggle DevTools',
            accelerator: 'Alt+CmdOrCtrl+I',
            click: function () {
                BrowserWindow.getFocusedWindow().toggleDevTools();
            }
        },{
            label: 'Quitz',
            accelerator: 'CmdOrCtrl+Q',
            click: function () {
                app.quit();
            }
        }]
    },
    {
        label: 'File',
        submenu: [{
            label: 'Open',
            click: function () {
                dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]})
            }
        },{
            label: 'Save',
            click: function () {
                app.quit();
            }

        }]
    },
    {
        label: 'Edit',
        submenu: [{
            label: 'Copy'
        }]
    },
    {
        label: 'Window',
        submenu: [{
            label: 'Close'
        }]
    }
    ]);
    Menu.setApplicationMenu(devMenu);
};
