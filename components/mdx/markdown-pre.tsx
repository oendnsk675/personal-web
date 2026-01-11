import CodeCopyButton from '@/components/mdx/code-copy-button';
import Preformatted from '@/components/mdx/Preformatted';
import { getLanguageFromClassName } from '@/lib/utils';
import React from 'react';

type CodeLikeProps = {
  children?: string | string[];
  className?: string;
};

function isCodeElement(el: unknown): el is React.ReactElement<CodeLikeProps> {
  return React.isValidElement(el);
}

const MarkdownPre = ({ children, ...props }: { children: React.ReactNode }) => {
  const childArray = React.Children.toArray(children);
  const codeElement = childArray[0];

  if (!isCodeElement(codeElement)) {
    return <Preformatted {...props}>{children}</Preformatted>;
  }

  const raw = codeElement.props.children;
  const className = codeElement.props.className;

  const codeText =
    typeof raw === 'string' ? raw : Array.isArray(raw) ? raw.join('') : '';

  const language = getLanguageFromClassName(className);

  return (
    <Preformatted {...props} className="relative group">
      <div
        className="absolute top-0 right-0 left-0
    flex items-center justify-end
    px-4 py-2
    text-xs font-mono
    text-zinc-400
    bg-inherit
    opacity-0
    group-hover:opacity-100
    transition-opacity"
      >
        <CodeCopyButton value={codeText.replace(/\n$/, '')} />
      </div>

      {children}
    </Preformatted>
  );
};

export default MarkdownPre;
