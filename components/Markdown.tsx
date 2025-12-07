import CodeBlock from '@/components/mdx/CodeBlock';
import Heading from '@/components/mdx/Heading';
import HrNode from '@/components/mdx/HrNode';
import ImageNode from '@/components/mdx/ImageNode';
import LinkNode from '@/components/mdx/LinkNode';
import ListItemNode from '@/components/mdx/ListItemNode';
import ListNode from '@/components/mdx/ListNode';
import Paragraph from '@/components/mdx/Paragraph';
import Preformatted from '@/components/mdx/Preformatted';
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderInlineCode = ({ children, ...props }: any) => {
  return (
    <code style={inlineCodeStyle} {...props}>
      {children}
    </code>
  );
};

const renderHeading = (level: number) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-emerald-300 pl-4" {...props}>
      {children}
    </blockquote>
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
