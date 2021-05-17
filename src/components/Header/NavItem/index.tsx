import { ActiveLink } from '../ActiveLink';
import { Text } from './styles';

interface NavLinkProps {
  children: string;
  href: string;
}

export function NavItem({
  children,
  href,
  ...rest
}: NavLinkProps): JSX.Element {
  return (
    <ActiveLink href={href} passHref>
      <Text isActive={false}>{children}</Text>
    </ActiveLink>
  );
}
