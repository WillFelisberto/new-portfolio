export type CMSIconProps = {
  icon: string;
  name?: string;
};

const CMSIcon = ({ icon, name = 'Icon SVG' }: CMSIconProps) => {
  return (
    <div
      role="img"
      aria-label={name}
      data-testid="cms-icon"
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  );
};

export default CMSIcon;
