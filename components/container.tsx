import { FC, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return <section className="mx-auto max-w-[1444px]">{children}</section>;
};

export default Container;
