import Link from 'next/link';
import Typography from './Typography';

const Logo = () => {
  return (
    <Link href="/">
      <Typography as="h4" variant="heading4">
        Logo
      </Typography>
    </Link>
  );
};

export default Logo;
