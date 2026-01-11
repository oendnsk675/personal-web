import { Copy, CopyCheck } from 'lucide-react';
import React from 'react';

interface CodeCopyButtonProps {
  value: string;
}

export default function CodeCopyButton({ value }: CodeCopyButtonProps) {
  const [copyOk, setCopyOk] = React.useState(false);

  const handleClick = async () => {
    await navigator.clipboard.writeText(value);
    setCopyOk(true);
    setTimeout(() => setCopyOk(false), 800);
  };

  return (
    <button
      className="hover:opacity-75 transition-all duration-150 cursor-custom"
      onClick={handleClick}
      aria-label="Copy code"
    >
      {copyOk ? (
        <div className="flex gap-2 items-center">
          <CopyCheck className="size-4" />
          <span className="text-xs">Copied</span>
          <span className="sr-only">Copied</span>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <Copy className="size-4" />
          <span className="text-xs">Copy</span>
          <span className="sr-only">Copy</span>
        </div>
      )}
    </button>
  );
}
