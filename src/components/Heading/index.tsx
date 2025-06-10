import type {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from 'react';
import styles from './index.module.css';

export function Heading(props: {
  children:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<
        | string
        | number
        | bigint
        | boolean
        | ReactPortal
        | ReactElement<unknown, string | JSXElementConstructor<unknown>>
        | Iterable<ReactNode>
        | null
        | undefined
      >
    | null
    | undefined;
}) {
  return <h1 className={styles.title}>{props.children}</h1>;
}
