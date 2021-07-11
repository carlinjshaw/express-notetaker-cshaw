const router = require('express').Router();
const fs = require('fs');
const { runInNewContext } = require('vm');

const notes  = require('../../db/db.json');

const data = []


//take input from user (is that request?) 

//make user input JSON
//push user input to db JSON file

router.get('/notes', (req, res,) => {

   fs.readFile('../../express-note-taker/Develop/db/db.json', 'utf8', (err, data) => {
       if (err) {
           console.error(err)
           return
       }
       console.log (data)
       res.send(data)
   })
//    var options = {root: 'C:\Users\carli\Desktop\challenges\express-note-taker\Develop\db'}

//     res.sendFile('db.json', options, function (err) {
//         if (err) {
         
//           console.log(err)
//         } else {
//           console.log('Sent:', fileName)
//         }
//       })
// console.log(data)
//   res.send(data) 
})

// router.get('../../express-note-taker/Develop/db/db.json', (req, res) => {
//     res.send(data)
// })


router.post('/notes', (req, res) => {
    // console.log(req.body)
// res.send(req.body)
data.push(req.body)
// const jsonData = res.json(data)
data.forEach((item, i) => {
    item.id = i + 1;
})

const dataJson = JSON.stringify(data)

fs.writeFile("../../express-note-taker/Develop/db/db.json", dataJson, (err) => {
    if (err)
    console.log(err);
  else {
    console.log(data);
  }
})
res.send(dataJson)
})



  module.exports = router;