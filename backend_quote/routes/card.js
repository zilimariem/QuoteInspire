const express = require('express')



const router = express.Router();

const Card = require('../models/card');

const multer = require('multer')


myFileName = '';

const myStorage = multer.diskStorage({
    destination: './imgs',
    filename:  (req , file, redirect)=>{
        myFileName = Date.now() + '.' + file.mimetype.split('/')[1];

        redirect(null , myFileName);
    } 
})
const upload = multer({ storage: myStorage});

// router.post('/addC' , upload.single('image') , (req , res )=>{
//     data = req.body;
//     card = new Card(data);

//     card.image = myFileName;

//     card.save()
    
//     .then(
//         (su)=>{
//             res.send(su)
//         }
//     )
//     .catch(
//         (err)=>{
//             res.send(err)
//         }
//     )
    
// });




router.post('/addC', upload.single('image'), (req, res) => {
    const data = req.body;
    const card = new Card(data);

    // If an image was uploaded, use the file path. Otherwise, use the provided image URL.
    if (req.file) {
        card.image = `${req.protocol}://${req.get('host')}/getimage/${req.file.filename}`;
    } else if (data.image) {
        card.image = data.image; // Use the provided URL if no file was uploaded.
    }

    card.save()
        .then((success) => {
            res.send(success);
        })
        .catch((err) => {
            res.send(err);
        });
});



router.get('/getC' , (req, res)=>{
    
    Card.find()
    .then(
        (su)=>{
            res.send(su)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
    
})


router.get('/getbyId/:id', (req, res) => {
    let myId = req.params.id;
    Card.findById({_id: myId})
    .then((su) => {
        res.send(su);
    })
    .catch((err) => {
        res.send(err);
    });
});


// router.put('/update/:id' , (req , res)=>{
//     myid = req.params.id ;
//     newData = req.body;

//     Card.findByIdAndUpdate({_id: myid} , newData)
//         .then(
//             (success)=>{
//                 res.send(success)
//             }
//         )
//         .catch(
//             (erreur)=>{
//                 res.send(erreur)
//             }
//         )
// })

router.put('/update/:id', upload.single('image'), (req, res) => {
    const myid = req.params.id;
    const newData = req.body;

    // If a new file was uploaded, update the image field
    if (req.file) {
        // newData.image = req.file.filename;
        newData.image = myFileName;

    }

    Card.findByIdAndUpdate({ _id: myid }, newData, { new: true })
        .then((success) => {
            res.send(success);
        })
        .catch((error) => {
            res.send(error);
        });
});


router.delete('/deleteC/:id' , (req , res)=>{
    

    myid = req.params.id

    Card.findOneAndDelete({_id: myid})
        .then(
            (del)=>{
                res.send(del)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
});



module.exports = router;