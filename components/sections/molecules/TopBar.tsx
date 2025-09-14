import Logo from '../../../components/ui/Logo';
import NotificationBell from '../../../components/icons/NotificationBell';
import Typography from '../../../components/ui/Typography';
import clsx from 'clsx';

interface TopBarProps {
  className?: string;
}

const TopBar = ({ className }: TopBarProps) => {
  return (
    <div className={clsx('flex items-center justify-between', className)}>
      <Logo data-testid="logo" />
      <div
        className="relative hover:cursor-pointer"
        data-testid="notification-bell"
      >
        <NotificationBell />
        <Typography
          variant="caption"
          className="absolute -top-1 -right-3 px-1.5 bg-[#776CEF] text-[#FFFFFF] rounded-[20px]"
          data-testid="notification-count"
        >
          2
        </Typography>
      </div>
    </div>
  );
};

export default TopBar;
