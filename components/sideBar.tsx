'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { TooltipProvider } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';

import { buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TSideNavItemsProps } from '@/types/common';
import { usePathname } from 'next/navigation';

type SideBarProps = {
  children: React.ReactNode;
  sideNavItems: TSideNavItemsProps;
};

const SideBar = ({ children, sideNavItems }: SideBarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const pathname = usePathname();

  const defaultLayout = [265, 440, 655];

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full min-h-[95vh] items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={4}
          collapsible={true}
          minSize={15}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`;
          }}
          onExpand={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`;
          }}
          className={cn(
            'max-w-[30%] lg:max-w-[16%]',
            isCollapsed &&
              'min-w-[50px] transition-all duration-300 ease-in-out',
          )}
        >
          <div
            data-collapsed={isCollapsed}
            className=" group justify-between flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
          >
            <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
              {sideNavItems?.map(item =>
                isCollapsed ? (
                  <Tooltip key={item.key} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.link}
                        className={cn(
                          buttonVariants({
                            variant: `${pathname === item.link ? 'default' : 'ghost'}`,
                            size: 'icon',
                          }),
                          'h-9 w-9',
                          item.variant === 'default' &&
                            'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        <span className="sr-only">{item.title}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="flex items-center gap-4"
                    >
                      {item.title}
                      {item.label && (
                        <span className="ml-auto text-muted-foreground">
                          {item.label}
                        </span>
                      )}
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <Link
                    key={item.key}
                    href={item.link}
                    className={cn(
                      buttonVariants({
                        variant: `${pathname === item.link ? 'default' : 'ghost'}`,
                        size: 'sm',
                      }),
                      item.variant === 'default' &&
                        'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                      'justify-start',
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                    {item.label && (
                      <span
                        className={cn(
                          'ml-auto',
                          item.variant === 'default' &&
                            'text-background dark:text-white',
                        )}
                      >
                        {item.label}
                      </span>
                    )}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={30}
          className="p-4"
        >
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};

export default SideBar;
