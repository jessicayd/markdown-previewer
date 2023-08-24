import React, { useState } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {
    const text = `# preview your markdown text!

## sub heading
### sub-sub heading

    
code goes between 2 backticks: \`<div></div>\` or
    
~~~
// this is multi-line code:

function catOrDog(cat, dog) {
  if (cat.cute > dog.cute) {
    return cat;
  }
  return dog;
}
~~~

options for text: **bold**, _italic_, **_both_**, ~~cross out~~

syntax for [links](https://github.com/jessicayd)
> block Quotes :)

tables:

month | day | year
------------ | ------------- | -------------
july | 14 | 2003
january | 1 | 2023

- here are some lists!
  - bullet lists
      - w/ different indentation levels
        - like this


1. also numbered lists too.
1. (you can just use 1's)

add images!

![cute cat](https://static.vecteezy.com/system/resources/thumbnails/009/665/315/small/group-of-cute-kitty-cat-family-greeting-cartoon-png.png)
`

    const [previewContent, setPreviewContent] = useState(text);

    return (
        <div>
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