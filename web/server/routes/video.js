const express = require('express');
const router = express.Router();
const { Music } = require("../models/Music");

const { auth } = require("../middleware/auth");
const multer = require("multer");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.mp4') {
            return cb(res.status(400).end('only mp4 is allowed'), false);
        }
        cb(null, true)
    }
})

const upload = multer({ storage: storage }).single("file");

//=================================
//             Video
//=================================


router.post("/uploadfiles", (req, res) => {

    // const music = new Music({artist: "IU", title: "Lilac", link:"www.youtube.com2", path:"uploads/I2U.jpg"});

    // music.save();


    upload(req, res, err => {
        console.log(res)
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename })
    })

});

router.get("/getMusic", (req, res) => {

    let result = {};
    Music.find({}, function(err, musics) {
        if (!err) { 
            return res.json({music:musics})
        }
        else {
            throw err;
        }
    });

});

module.exports = router;
