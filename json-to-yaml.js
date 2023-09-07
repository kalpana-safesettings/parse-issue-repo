const yaml = require('js-yaml');
const fs = require('fs');


const jsonData = {
  "name": "first-repo",
  "has_wiki": true,
  "has_projects": true,
  "has_issues": false
};

const yamlData = yaml.dump(jsonData);

// Write the extracted data to a yaml file
fs.writeFileSync('yaml-data.yml', yamlData);
