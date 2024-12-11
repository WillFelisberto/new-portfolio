export type CMSIconProps = {
  icon: string;
};

const CMSIcon = ({ icon }: CMSIconProps) => {
  return (
    <div
      data-testid="cms-icon"
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  );
};

export default CMSIcon;
