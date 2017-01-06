const express = require('express');
const router = express.Router();
const pythonShell = require('python-shell');
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    var result = 'Api works.'
    var pythonFolder = path.resolve(__dirname, "../../python/");

    // if (fs.existsSync(pythonFile))
    //     result += " File exists";
    // else
    //     result += " File not exist";

    var options = {
        mode: 'text',
        pythonPath: 'C:/Users/Pham Hong Phuong/AppData/Local/Programs/Python/Python36/python.exe',
        pythonOptions: ['-u'],
        scriptPath: pythonFolder        
    };

    pythonShell.run('hello.py',options, function (err, results) {
        if (err) res.status(500).send(err);

        result += " " + results;
        res.send(result);
    })
});

module.exports = router;