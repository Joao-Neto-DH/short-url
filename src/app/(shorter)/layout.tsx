"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Link as LinkIcon,
  LucideFilePieChart,
  // Inbox,
  // Calendar,
  // Search,
  // Settings,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import FormGenerateShort from "./short/form-generate-short";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/short",
    icon: LucideFilePieChart,
  },
  {
    title: "URL",
    url: "/short/links",
    icon: LinkIcon,
  },
  // {
  //   title: "Calendar",
  //   url: "#",
  //   icon: Calendar,
  // },
  // {
  //   title: "Search",
  //   url: "#",
  //   icon: Search,
  // },
  // {
  //   title: "Settings",
  //   url: "#",
  //   icon: Settings,
  // },
];

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="w-full">
        {/* header */}
        <div className="py-3 px-6 border-b">
          <div className="flex flex-row items-center">
            <SidebarTrigger />
            <div className="ml-auto">
              <FormGenerateShort />
            </div>
          </div>
        </div>
        {/* body */}
        <div className="max-w-5xl mx-auto p-6">{children}</div>
      </div>
    </SidebarProvider>
  );
}

export default Layout;
