import { cn } from '@/lib/utils';
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './CodeBlock.module.css';

// Register languages you will use to avoid missing highlight support (optional but recommended)
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('ts', ts);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('py', python);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomSyntaxHighlighter = SyntaxHighlighter as unknown as React.FC<any>;

export interface CodeBlockProps {
  className?: string;
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ className, children }) => {
  const language = className?.replace('language-', '') || '';

  const codeString = React.Children.toArray(children)
    .map((child) => {
      if (typeof child === 'string') {
        return child;
      }

      if (React.isValidElement(child)) {
        const element = child as React.ReactElement<{
          children?: React.ReactNode;
        }>;
        return String(element.props.children ?? '');
      }

      return '';
    })
    .join('');

  return (
    <div className={cn(styles.customCode)}>
      <CustomSyntaxHighlighter language={language} style={oneDark} PreTag="div">
        {codeString}
      </CustomSyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
