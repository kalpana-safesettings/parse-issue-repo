const inputData = {
    "repository-name": {
      "title": "Repository name",
      "content": ["first-repo"],
      "text": "first-repo"
    },
    "enable-wiki": {
      "title": "Enable Wiki?",
      "content": [],
      "text": "*   [x] Enable Wiki",
      "list": [{"checked": true, "text": "Enable Wiki"}]
    },
    "enable-projects": {
      "title": "Enable Projects?",
      "content": [],
      "text": "*   [x] Enable Projects",
      "list": [{"checked": true, "text": "Enable Projects"}]
    },
    "enable-issues": {
      "title": "Enable Issues?",
      "content": [],
      "text": "*   [x] Enable Issues",
      "list": [{"checked": false, "text": "Enable Issues"}]
    }
  };
  
  const extractedData = {
    "repository-name": inputData["repository-name"]["text"],
    "enable-wiki": inputData["enable-wiki"]["list"][0]["checked"],
    "enable-projects": inputData["enable-projects"]["list"][0]["checked"],
    "enable-issues": inputData["enable-issues"]["list"][0]["checked"]
  };
  
  console.log(extractedData);
  