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
import { BellElectric, LogInIcon, MenuIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
  const [resize, setResize] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (window.innerWidth < 769) setResize(true);
    window.addEventListener('resize', () => {
      window.innerWidth < 769 ? setResize(true) : setResize(false);
    });
  }, []);

  return (
    <>
      {resize ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button className="m-6" variant="outline" size={'icon'}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-blue-400 text-white" side={'left'}>
            <NavigationMenu className="flex-col flex">
              <Link
                href={'/'}
                className="flex items-center gap-2 py-2 px-2 xl:px-4 shadow-xl rounded-full bg-white me-12"
              >
                <BellElectric className="text-blue-400" />
                <p className="font-bold italic text-sm xl:text-base text-blue-400">Dining</p>
              </Link>
              <NavigationMenuList className="flex flex-col">
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
          </SheetContent>
        </Sheet>
      ) : (
        <div className="max-w-3xl fixed top-5 left-1/2 -translate-x-1/2 mx-auto grid place-items-center shadow-xl bg-blue-400 px-10 py-4 rounded-full">
          <NavigationMenu>
            <Link
              href={'/'}
              className="flex items-center gap-2 py-2 px-2 xl:px-4 shadow-xl rounded-full bg-white me-6 xl:me-12"
            >
              <BellElectric className="text-blue-400" />
              <p className="font-bold text-sm xl:text-base italic text-blue-400">Dining</p>
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
                  <Button className="ms-6 xl:ms-12" variant="outline" size="icon">
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
      )}
    </>
  );
}
