(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up static folder for frontend
app.use(express.static('public'));

// Set up file storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, 'uploadedCV.pdf');
  },
});

const upload = multer({ storage: storage });

// Handle file upload
app.post('/upload', upload.single('cv'), (req, res) => {
  res.send('File uploaded!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${3000}`);
});

