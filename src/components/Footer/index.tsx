import { IoMdHeart } from 'react-icons/io';

type FooterProps = {
  textFooterMade: string;
  textFooterBy: string;
};

const Footer = ({ textFooterMade, textFooterBy }: FooterProps) => {
  return (
    <footer className="flex h-14 w-full items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 font-mono text-xs text-gray-400 sm:text-sm">
        {textFooterMade}
        <IoMdHeart aria-label="Heart icon" size={13} className="text-sky-500" />
        {textFooterBy}
        <strong className="font-medium">Willian Souza</strong>
      </span>
    </footer>
  );
};

export default Footer;
