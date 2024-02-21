'use client';

import { ReactNode } from 'react';
import style from './post.module.css';
import { useRouter } from 'next/navigation';

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

/* 라우터로 이동시켜주기 위해 클라이언트 컴포넌트인 부모컴포넌트를 만들어서
감싸주면 서버컴포넌트인 자식요소들에 영향을 주지 않고 구현 가능! */
export default function PostArticle({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}
