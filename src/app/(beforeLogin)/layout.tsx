import { ReactNode } from "react";

type Props = { children: ReactNode, modal: ReactNode }

export default function Layout({ children, modal }: Props) {
  return (
    <>
      로그인 전 레이아웃
      {children}
      {modal}
    </>
  );
}