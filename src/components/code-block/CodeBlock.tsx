"use client";
import { ClipboardCopyIcon } from "lucide-react";
import { useState } from "react";

const CodeBlock = ( { code, language = "bash" }: { code: string, language?: string; } ) => {
  const [ copied, setCopied ] = useState( false );

  const handleCopy = async () => {
    try {
      console.log( "he" )
      await navigator.clipboard.writeText( code );
      setCopied( true );
      setTimeout( () => setCopied( false ), 2000 );
    } catch ( err ) {
      console.error( "Failed to copy:", err );
    }
  };
  return (
    <pre className="bg-gray-200 text-black text-sm rounded-sm mt-4 overflow-x-auto dark:bg-gray-800 dark:text-gray-100">
      <div className="flex justify-between items-center mb-2 bg-gray-300 px-3 py-1 text-xs font-mono dark:bg-gray-700">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-sm" aria-hidden="true" />
          <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-sm" aria-hidden="true" />
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-sm" aria-hidden="true" />
        </div>

        <p>{ language }</p>
        <button className="flex items-center cursor-pointer hover:bg-gray-400 p-1" type="button" onClick={ handleCopy } ><ClipboardCopyIcon className="w-4 mr-1" />  { copied ? "Copied!" : "Copy" }</button>
      </div>
      <div className="p-4 font-mono whitespace-pre-wrap">
        <code className={ `language-${language}` }>{ code }</code>
      </div>
    </pre>
  );
}
export default CodeBlock;