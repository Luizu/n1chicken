import { ActiveLink } from '../Header/ActiveLink';

import { Text } from './styles';

interface MobileNavItemProps {
  children: string;
  href: string;
}

function MobileNavItem({ children, href }: MobileNavItemProps): JSX.Element {
  return (
    <ActiveLink href={href} passHref>
      <Text isActive={false}>{children}</Text>
    </ActiveLink>
  );
}

export default MobileNavItem;
