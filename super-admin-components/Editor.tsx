import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import React from "react";

// ✅ Properly type the dynamic ReactQuill import
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
}) as unknown as React.FC<{
  theme: string;
  value: string;
  onChange: (value: string) => void;
  modules?: any;
  formats?: string[];
  style?: React.CSSProperties;
}>;

// ✅ Default toolbar and formats
const quillModulesDefault = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ align: [] }],
    ["link"],
    ["clean"],
  ],
};

const quillFormatsDefault = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "indent",
  "align",
  "link",
];

// ✅ Type-safe props interface
interface EditorProps {
  value: string;
  index: number;
  onChange: (index: number, key: string, value: string) => void;
  quillModules?: any;
  quillFormats?: string[];
}

const Editor: React.FC<EditorProps> = ({
  value,
  index,
  onChange,
  quillModules = quillModulesDefault,
  quillFormats = quillFormatsDefault,
}) => {
  const handleChange = (newValue: string) => {
    if (newValue !== value) {
      onChange(index, "value", newValue);
    }
  };

  return (
    <ReactQuill
      theme="snow"
      value={value || ""}
      onChange={(val) => handleChange(val)}
      modules={quillModules}
      formats={quillFormats}
      style={{ height: "150px" }}
    />
  );
};

export default Editor;
