import Checkbox from '../../icons/Checkbox';
import Typography from '../../ui/Typography';

interface ListProps {
  items: string[];
}

const List = ({ items }: ListProps) => {
  return (
    <ul className="flex flex-col justify-between">
      {items.map((title) => (
        <li key={title} className="flex gap-2 mt-2">
          <Checkbox />
          <Typography
            as="h5"
            variant="paragraphMedium"
            className="font-medium text-[#4D5761]"
          >
            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export default List;
