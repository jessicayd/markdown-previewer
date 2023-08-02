import React, { useState } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {
    const text = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

    
Heres some code, \`<div></div>\`, between 2 backticks.
    
~~~
// this is multi-line code:

function catOrDog(cat, dog) {
  if (cat.cute > dog.cute) {
    return cat;
  }
  return dog;
}
~~~

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

    const [previewContent, setPreviewContent] = useState(text);

    return (
        <div>
          <header>Markdown Previewer</header>
          <div id="wrapper">
              <textarea 
                  id="editor" 
                  value={previewContent}
                  onChange = {e => setPreviewContent(e.target.value)}
                  rows={40} 
              />
              <div id="preview"  dangerouslySetInnerHTML={{__html: marked(previewContent)}}/>
          </div>
        </div>
    );
}

export default App