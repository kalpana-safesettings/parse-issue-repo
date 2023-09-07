// const inputData = {
//     "repository-name": {
//       "title": "Repository name",
//       "content": ["first-repo"],
//       "text": "first-repo"
//     },
//     "enable-wiki": {
//       "title": "Enable Wiki?",
//       "content": [],
//       "text": "*   [x] Enable Wiki",
//       "list": [{"checked": true, "text": "Enable Wiki"}]
//     },
//     "enable-projects": {
//       "title": "Enable Projects?",
//       "content": [],
//       "text": "*   [x] Enable Projects",
//       "list": [{"checked": true, "text": "Enable Projects"}]
//     },
//     "enable-issues": {
//       "title": "Enable Issues?",
//       "content": [],
//       "text": "*   [x] Enable Issues",
//       "list": [{"checked": false, "text": "Enable Issues"}]
//     }
//   };
const fs = require('fs');
const inputData = require('./issue.json');

  const extractedData = {
    "repository":{
        "name": inputData["repository-name"]["text"],
        "has_wiki": inputData["enable-wiki"]["list"][0]["checked"],
        "has_projects": inputData["enable-projects"]["list"][0]["checked"],
        "has_issues": inputData["enable-issues"]["list"][0]["checked"]
  }
};
// Write the extracted data to a JSON file
fs.writeFileSync('extracted-data.json', JSON.stringify(extractedData, null, 2));
  