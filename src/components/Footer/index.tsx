import { IoMdHeart } from 'react-icons/io';

type FooterProps = {
  textFooterMade: string;
  textFooterBy: string;
};

const Footer = ({ textFooterMade, textFooterBy }: FooterProps) => {
  return (
    <footer className="flex h-16 w-full items-center justify-center border-t border-line bg-well">
      <span className="label-mono flex items-center gap-1.5 text-dim">
        {textFooterMade}
        <IoMdHeart
          aria-label="Heart icon"
          size={13}
          className="text-coral-hot"
        />
        {textFooterBy}
        <strong className="font-semibold text-ink">Willian Souza</strong>
      </span>
    </footer>
  );
};

export default Footer;
