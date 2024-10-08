interface MenuBlockProps {
  children: React.ReactNode;
  title: string;
}

export const MenuBlock: React.FC<MenuBlockProps> = ({ children, title }) => {
  return (
    <div className="">
      <h3 className="text-white text-4xl font-bold capitalize mb-9">{title}</h3>
      {children}
    </div>
  );
};
