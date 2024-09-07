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
import { BellElectric, LogInIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from './ui/button';

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
        <Link
          href={'/'}
          className="flex items-center gap-2 py-2 px-4 shadow-xl rounded-full bg-white me-12"
        >
          <BellElectric className="text-blue-400" />
          <p className="font-bold italic text-blue-400">E-Dining</p>
        </Link>
        <NavigationMenuList>
          {navLinks?.map((navLink) => (
            <NavigationMenuItem key={navLink.href}>
              <NavigationMenuLink
                href={navLink.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  'rounded-full capitalize text-white text-base font-bold'
                )}
              >
                {navLink.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="ms-12" variant="outline" size="icon">
                <LogInIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Login</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </NavigationMenu>
    </div>
  );
}
