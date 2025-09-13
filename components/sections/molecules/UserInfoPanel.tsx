import Dots from '@/components/icons/Dots';
import Typography from '@/components/ui/Typography';

const UserInfoPanel = () => {
  return (
    <div className="flex items-center justify-between py-3 mt-auto">
      <div>
        <Typography variant="paragraphExtraSmall" className="text-[#1F2A37]">
          Henry Smith
        </Typography>
        <Typography variant="paragraphMedium" className="text-[#4D5761]">
          henry.smith@gmail.com
        </Typography>
      </div>
      <Dots className="hover:cursor-pointer" />
    </div>
  );
};

export default UserInfoPanel;
