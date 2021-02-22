import classNames from 'classnames';

export interface ContentProps {
  className?: string;
}

export const Content: React.FC<ContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={classNames(
        'flex-1 flex flex-col justify-between container w-full space-y-8',
        'lg:flex-row lg:items-center lg:space-y-0',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
