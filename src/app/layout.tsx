import {ReactNode} from 'react';
import './globals.css'
import '@ant-design/v5-patch-for-react-19';

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return children;
}
