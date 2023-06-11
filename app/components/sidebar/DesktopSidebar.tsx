"use client";

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./DesktopItem";
import { SafeUser } from "@/app/types";
import Avatar from "./Avatar";
import SettingsModal from "./SettingsModal";
import { User } from "@prisma/client";

interface DesktopSidebarProps {
  currentUser: User | null | SafeUser;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      {/* lg: bg-white */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
        <nav
          className="
          mt-4
          flex
          flex-col
          justify-between
        "
        >
          <ul
            role="list"
            className="
            flex
            flex-col 
            items-center
            space-y-1
          "
          >
            {routes.map((route) => (
              <DesktopItem
                key={route.label}
                href={route.href}
                label={route.label}
                icon={route.icon}
                active={route.active}
                onClick={route.onClick}
              />
            ))}
          </ul>
        </nav>
        <nav
          className="
            mt-4
            flex
            flex-col
            items-center
            justify-between
      "
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="
            cursor-pointer
            hover:opacity-75
            transition
          "
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
