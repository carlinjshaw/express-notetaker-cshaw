const router = require('express').Router();
const fs = require('fs');

//sets data as empty array
const data = []


router.get("/notes", (req, res) => {
  fs.readFile(
    "../../express-note-taker/Develop/db/db.json",
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
      res.send(data);
    }
  );
});

router.post("/notes", (req, res) => {
  data.push(req.body);
  data.forEach((item, i) => {
    item.id = i + 1;
  });

  const dataJson = JSON.stringify(data);

  fs.writeFile(
    "../../express-note-taker/Develop/db/db.json",
    dataJson,
    (err) => {
      if (err) console.log(err);
      else {
        console.log(data);
      }
    }
  );
  res.send(dataJson);
});

module.exports = router;