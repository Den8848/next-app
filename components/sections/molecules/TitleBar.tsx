import DashboardIcon from '@/components/icons/DashboardIcon';
import Typography from '@/components/ui/Typography';

const TitleBar = () => {
  return (
    <div className="flex items-center gap-4 mt-6 px-3">
      <DashboardIcon />
      <Typography variant="paragraphExtraSmall" className="text-[#1F2A37]">
        Dashboard
      </Typography>
    </div>
  );
};

export default TitleBar;
