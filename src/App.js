import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'

function App() {
    const text = "# Welcome to my React Markdown Previewer! \n ## This is a sub-heading...\n" +
    "### And here's some other cool stuff:\n" +
    "Heres some code, `<div></div>`, between 2 backticks.\n" +
    "```\n" +
    "// this is multi-line code:\n" +
    "function anotherExample(firstLine, lastLine) {\n" +
    "  if (firstLine == '```' && lastLine == '```') {\n" +
    "    return multiLineCode;\n" +
    "  }\n" +
    "}\n" +
    "```\n" + 
    "You can also make text **bold**... whoa!\n" +
    "Or _italic_.\n" +
    "Or... wait for it... **_both!_**\n" +
    "And feel free to go crazy ~~crossing stuff out~~.\n" +    
    "There's also [links](https://www.freecodecamp.org), and\n" +
    "> Block Quotes!\n" +
    "And if you want to get really crazy, even tables:\n" +
    "Wild Header | Crazy Header | Another Header?\n" +
    "------------ | ------------- | -------------\n" +
    "Your content can | be here, and it | can be here....\n" +
    "And here. | Okay. | I think we get it.\n" +
    "- And of course there are lists.\n" +
    "  - Some are bulleted.\n" +
    "     - With different indentation levels.\n" +
    "        - That look like this.\n" +
    "1. And there are numbered lists too.\n" +
    "1. Use just 1s if you want!\n" +
    "1. And last but not least, let's not forget embedded images:\n" +
    "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"

    const [previewContent, setPreviewContent] = useState(text);

    return (
        <div>
            <textarea 
                id="editor" 
                value={previewContent}
                onChange = {e => setPreviewContent(e.target.value)}
            />
            <ReactMarkdown id="preview" children={previewContent}></ReactMarkdown>
        </div>
    );
}

export default App