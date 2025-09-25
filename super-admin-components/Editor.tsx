import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const quillModulesDefault = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['link'],
      ['clean']
    ],
  };

  const quillFormatsDefault = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent',
    'align',
    'link'
  ];

const Editor = ({ value, index, onChange, quillModules=quillModulesDefault, quillFormats =quillFormatsDefault }) => {
    const handleChange = (newValue) => {
        if (newValue !== value) { 
          onChange(index, "value", newValue);
        }
      };
  return (
    <ReactQuill
      theme="snow"
      value={value || ""}
      onChange={(value) => handleChange(value)}
      modules={quillModules}
      formats={quillFormats}
      style={{ height: "150px" }}
    />
  );
};

export default Editor;
