import { Button } from '@/components/ui/Button';

interface BurgerMenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const defaultBurgerBtnStyles =
  'w-4 h-[2px] bg-[#384250] transition-all duration-300 ease-in-out';

const BurgerMenuButton = ({ isOpen, toggleMenu }: BurgerMenuButtonProps) => {
  return (
    <Button
      onClick={toggleMenu}
      aria-label="Toggle menu"
      className={`
                ${isOpen ? 'open' : ''} 
                flex md:hidden 
                flex-col gap-1 
                bg-transparent border-none 
                cursor-pointer shadow-none
                z-[101] ml-6 p-0
                hover:bg-transparent
                focus:bg-transparent
                active:bg-transparent
              `}
    >
      <span
        className={`${defaultBurgerBtnStyles} ${isOpen ? 'rotate-45 translate-x-[4px] translate-y-[6px]' : ''}`}
      ></span>
      <span
        className={`${defaultBurgerBtnStyles} ${isOpen ? 'opacity-0' : ''}`}
      ></span>
      <span
        className={`${defaultBurgerBtnStyles} ${isOpen ? '-rotate-45 translate-x-[4px] -translate-y-[6px]' : ''}`}
      ></span>
    </Button>
  );
};

export default BurgerMenuButton;
