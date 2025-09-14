import Billing from '../../../components/icons/navigation/Billing';
import Help from '../../../components/icons/navigation/Help';
import RightArrow from '../../../components/icons/RightArrow';
import Typography from '../../../components/ui/Typography';

interface ActionPanelProps {
  closeBurgerMenu?: () => void;
}

const ActionPanel = ({ closeBurgerMenu }: ActionPanelProps) => {
  return (
    <div className="flex flex-col gap-1 mt-4">
      <div
        className="flex items-center py-1 pl-3 pr-2 hover:cursor-pointer"
        onClick={closeBurgerMenu}
      >
        <Billing />
        <Typography
          variant="paragraphExtraSmall"
          className="text-[#1F2A37] ml-4"
        >
          Billing
        </Typography>
        <RightArrow className="ml-auto" />
      </div>

      <div
        className="flex items-center py-1 pl-3 pr-2 hover:cursor-pointer"
        onClick={closeBurgerMenu}
      >
        <Help />
        <Typography
          variant="paragraphExtraSmall"
          className="text-[#1F2A37] ml-4"
        >
          Help
        </Typography>
        <RightArrow className="ml-auto" />
      </div>
    </div>
  );
};

export default ActionPanel;
