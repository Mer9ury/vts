const express = require('express');
const router = express.Router();
const { Music } = require("../models/Music");
const { Video } = require("../models/Video");

const { auth } = require("../middleware/auth");
const multer = require("multer");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'client/public/video')
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

// router.post("/uploadmusics", (req, res) => {
//     const music = new Music({artist: "IU", title: "Lilac", link:"www.youtube.com2", path:"uploads/I2U.jpg"});
//     music.save();
// })
router.post("/uploadmusics", (req, res) => {

    const music = new Music(req.body)

    music.save((err, music) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true 
        })
    })

});
router.post("/uploadVideo", (req, res) => {

    const video = new Video(req.body)

    video.save((err, doc) => {
        console.log(doc)
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true 
        })
    })

});

router.post("/uploadfiles", (req, res) => {

    // const music = new Music({artist: "IU", title: "Lilac", link:"www.youtube.com2", path:"uploads/I2U.jpg"});

    // music.save();


    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })

});

router.get("/getMusic", (req, res) => {

    let result = {};
    Music.find({}, function(err, musics) {
        if (!err) { 
            return res.json({music:musics, start:['00:12','04:24'], end:['01:35','06:01']})
        }
        else {
            throw err;
        }
    });

});
router.get("/getVideos", (req, res) => {

    Video.find()
        .populate('writer')
        .exec((err, videos) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, videos })
        })

});
router.post("/getVideoDetail", (req, res) => {
    console.log(req.body)
    Video.findOne({ "_id" : req.body.videoId })
    .populate('writer')
    .exec((err, videoDetail) => {
        console.log(videoDetail)
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, videoDetail })
    })
});

module.exports = router;
