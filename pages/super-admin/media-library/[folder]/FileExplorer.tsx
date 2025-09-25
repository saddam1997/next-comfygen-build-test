"use client"


import React from 'react';
import { Folder, File } from 'lucide-react';


interface ValidFileExplorerType {
  _id: string;
  folder?: string;
  filepath?: string;
  filename?: string;
  dirName?: string;
}

interface FileExplorerProps {
  type: "FOLDER" | "IMAGE";
  items: ValidFileExplorerType[];
  handleClick: (folder: string, dirName?:string) => void;
  keyName?: string;
  selectedFile?: string;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ type, items, handleClick, keyName="_id", selectedFile="" }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
      {items && Array.isArray(items) && items?.map((item, index) => (
        <div 
          key={`${item.folder}-${index}`}
          className="flex flex-col items-center justify-center p-2 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div className="w-24 h-24 flex items-center justify-center" >
            {/* {item.type === 'folder' ? ( */}
            {type==="FOLDER" ? (
              <Folder className="w-16 h-16 text-blue-500" onClick={() => handleClick(item[keyName], item["dirName"])}/>
            ) : (
              item.filepath ? (
                // <a href={item.filepath} target="blank">
                <div onClick={() => handleClick(item?.filepath || "", "")} className={selectedFile===item?.filepath ? "bg-blue-500" : ""}>
                <img 
                  src={item.filepath} 
                  alt={item.filename}
                  className="w-24 h-24 object-cover rounded p-4"
                />
                </div>
                // </a>
              ) : (
                <File className="w-16 h-16 text-gray-500" />
              )
            )}
          </div>
          <span className="mt-2 text-sm text-center font-medium truncate w-full">
            { item?.filename || item?.folder || item?.dirName}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FileExplorer;