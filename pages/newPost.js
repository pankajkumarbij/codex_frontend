import dynamic from "next/dynamic";

export default function NewPost() {
  const Editor = dynamic(() => import("../components/richEditor/editor"), { ssr: false });
  return (
    <div className="p-8">
      <Editor/>
    </div>
  );  
}
    