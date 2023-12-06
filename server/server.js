const express = require('express');
const { exec } = require('child_process');
const multer = require('multer');

const app = express();
const port = 3000;

// Configure multer middleware
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Users/nana/Documents/TTSS/web/upload'); // Replace with the actual path to the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.json());

app.post('/execute-c', upload.single('file'), (req, res) => {
  const { file } = req;

  if (!file) {
    res.status(400).json({ error: 'No file provided' });
    return;
  }

  const filePath = file.path;

  // Replace 'path_to_your_c_file' with the actual path to your C file
  const cFilePath = '/Users/nana/Documents/TTSS/test.c';
  const runPath = '/Users/nana/Documents/TTSS/test.c';

  // Execute the C file with the selected file path as an argument
  exec(`gcc ${cFilePath} -o ${runPath} && ${runPath} ${filePath}`, (error, stdout, stderr) => {
    if (error) {
      // Handle compilation or execution errors
      res.status(500).json({ error: error.message });
      return;
    }

    // Send the output back to the frontend
    res.json({ output: stdout, error: stderr });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});