import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { commands } from '@uiw/react-md-editor';

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {ssr: false});

function RichEditor() {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div>
      <MDEditor 
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default RichEditor;
