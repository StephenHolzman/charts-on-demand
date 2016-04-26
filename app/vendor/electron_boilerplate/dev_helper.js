'use strict';

var app = require('electron').app
var Menu = require('menu');
var BrowserWindow = require('electron').BrowserWindow;
var dialog = require('electron').dialog;
var AWS = require('aws-sdk'); 
var jetpack = require('fs-jetpack');

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
                var filePath = dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory' ]});
                console.log(filePath)

                var uploadFile = jetpack.read(filePath[0]);
                console.log(uploadFile)
                
                  var s3 = new AWS.S3(); 

                   s3.createBucket({Bucket: 'randomBucket45670'}, function() {

                    var params = {Bucket: 'randomBucket45670', Key: 'myKey', Body: uploadFile};

                    s3.putObject(params, function(err, data) {

                        if (err)       

                            console.log(err)     

                        else       console.log("Successfully uploaded data to myBucket/myKey");   

                     });

                  });

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
