import React from 'react';
import styles from './TableNode.module.css';

export interface TableNodeProps {
  children: React.ReactNode;
}

export const TableNode: React.FC<TableNodeProps> = ({ children }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};

export const TableHead: React.FC<TableNodeProps> = ({ children }) => {
  return <thead>{children}</thead>;
};

export const TableBody: React.FC<TableNodeProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableRow: React.FC<TableNodeProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

export const TableHeaderCell: React.FC<TableNodeProps> = ({ children }) => {
  return <th>{children}</th>;
};

export const TableDataCell: React.FC<TableNodeProps> = ({ children }) => {
  return <td>{children}</td>;
};
