// === BACKEND (Node.js + Express) ===
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Simulate Git command execution with visualization and image
app.post('/execute', (req, res) => {
  const { command } = req.body;

  let visualization;
  let imageUrl;

  switch (command) {
    case 'git init':
      visualization = 'Repository initialized: A new Git repository is created.';
      imageUrl = 'https://example.com/images/git-init.png'; // Replace with your image URL
      break;
    case 'git add .':
      visualization = 'Files staged: All changes are now staged for commit.';
      imageUrl = 'https://example.com/images/git-add.png'; // Replace with your image URL
      break;
    case 'git commit -m "Initial commit"':
      visualization = 'Commit created: A new snapshot of changes is recorded with message "Initial commit".';
      imageUrl = 'https://example.com/images/git-commit.png'; // Replace with your image URL
      break;
    case 'git branch new-branch':
      visualization = 'Branch created: A new branch named "new-branch" is created.';
      imageUrl = 'https://example.com/images/git-branch.png'; // Replace with your image URL
      break;
    case 'git merge new-branch':
      visualization = 'Branches merged: The changes from "new-branch" are now merged into the current branch.';
      imageUrl = 'https://example.com/images/git-merge.png'; // Replace with your image URL
      break;
    default:
      visualization = 'Unknown command: Please enter a valid Git command.';
      imageUrl = null;
  }

  res.json({ visualization, imageUrl });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
