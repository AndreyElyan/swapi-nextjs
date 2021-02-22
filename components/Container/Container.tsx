import classNames from 'classnames';
import { Content, ContentProps } from '../Content';

export interface ContainerProps {
  className?: string;
}

export interface ContainerComposition {
  Content: React.FC<ContentProps>;
}

export const Container: React.FC<ContainerProps> & ContainerComposition = ({
  className,
  children,
  ...props
}) => {
  return (
    <main
      className={classNames(
        'flex flex-col justify-between min-h-screen p-10 relative space-y-8 lg:items-center lg:justify-center',
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
};

Container.Content = Content;
