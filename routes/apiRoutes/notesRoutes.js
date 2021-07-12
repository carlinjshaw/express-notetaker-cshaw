const router = require('express').Router();
const fs = require('fs');
const path = require('path')
//sets data as empty array
const data = []


router.get("/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "../../db/db.json"), "utf8",
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

  fs.writeFile(path.join(__dirname, "../../db/db.json"),
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