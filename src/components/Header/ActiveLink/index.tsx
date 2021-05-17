import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps): JSX.Element {
  const { asPath } = useRouter();

  const isActive = asPath === rest.href;

  return (
    <Link {...rest}>
      {cloneElement(children, {
        isActive,
      })}
    </Link>
  );
}
