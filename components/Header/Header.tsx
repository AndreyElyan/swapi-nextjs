import classNames from "classnames";

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  children,
  ...props
}) => {
  const headerClassnames = classNames(
    "flex items-center bg-yellow-500 justify-center relative h-28 w-full",
    className
  );

  return (
    <header className={headerClassnames} {...props}>
      <div className="flex flex-row justify-around w-full">
        {children}
      </div>
    </header>
  );
};
