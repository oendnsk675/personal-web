import CodeBlock from '@/lib/markdownRenderers/CodeBlock';
import Heading from '@/lib/markdownRenderers/Heading';
import HrNode from '@/lib/markdownRenderers/HrNode';
import ImageNode from '@/lib/markdownRenderers/ImageNode';
import LinkNode from '@/lib/markdownRenderers/LinkNode';
import ListItemNode from '@/lib/markdownRenderers/ListItemNode';
import ListNode from '@/lib/markdownRenderers/ListNode';
import Paragraph from '@/lib/markdownRenderers/Paragraph';
import Preformatted from '@/lib/markdownRenderers/Preformatted';
import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  children: string;
}

const inlineCodeStyle = {
  backgroundColor: '#f0f0f0',
  padding: '2px 4px',
  borderRadius: '4px',
  fontFamily: 'monospace',
  fontSize: '0.875rem',
};

const renderInlineCode = ({ children, ...props }: any) => {
  return (
    <code style={inlineCodeStyle} {...props}>
      {children}
    </code>
  );
};

const renderHeading = (level: number) => {
  const Component = ({ children, ...props }: any) => {
    const id = props?.node?.children[0]?.value
      ?.toString()
      ?.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    console.log();

    return (
      <Heading id={id} level={level} {...props}>
        {children}
      </Heading>
    );
  };
  Component.displayName = `HeadingLevel${level}`;
  return Component;
};

const renderers: Components = {
  a: ({ children, ...props }) => <LinkNode {...props}>{children}</LinkNode>,
  code: ({ className, children, ...props }) =>
    className ? (
      <CodeBlock className={className}>{children}</CodeBlock>
    ) : (
      renderInlineCode({ children, ...props })
    ),
  h1: renderHeading(1),
  h2: renderHeading(2),
  h3: renderHeading(3),
  h4: renderHeading(4),
  h5: renderHeading(5),
  h6: renderHeading(6),
  hr: () => <HrNode />,
  img: ({ alt, src, ...props }) => {
    const resolvedAlt = alt ? alt : '';
    const resolvedSrc = src ? src : '';
    return (
      <ImageNode alt={resolvedAlt} src={resolvedSrc as string} {...props} />
    );
  },
  li: ({ children, ...props }) => (
    <ListItemNode {...props}>{children}</ListItemNode>
  ),
  ol: ({ children, ...props }) => (
    <ListNode ordered={true} {...props}>
      {children}
    </ListNode>
  ),
  ul: ({ children, ...props }) => (
    <ListNode ordered={false} {...props}>
      {children}
    </ListNode>
  ),
  p: ({ children, ...props }) => <Paragraph {...props}>{children}</Paragraph>,
  pre: ({ children, ...props }) => (
    <Preformatted {...props}>{children}</Preformatted>
  ),
};

const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return (
    <ReactMarkdown
      components={renderers}
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
