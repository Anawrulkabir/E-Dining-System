'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const navLinks: { name: string; href: string }[] = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'service',
    href: '/service',
  },
  {
    name: 'about us',
    href: '/about-us',
  },
  {
    name: 'contact',
    href: '/contact',
  },
];

export function Navbar() {
  return (
    <div className="max-w-3xl fixed top-5 left-1/2 -translate-x-1/2 mx-auto grid place-items-center shadow-xl bg-blue-400 px-10 py-4 rounded-full">
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks?.map((navLink) => (
            <NavigationMenuItem key={navLink.href}>
              <Link href={navLink.href}>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'rounded-full capitalize text-white text-base font-bold'
                  )}
                >
                  {navLink.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
