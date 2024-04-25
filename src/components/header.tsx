"use client";

import { MenuIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const { data, status } = useSession();

  const handleLoginClick = () => signIn();
  const handleLogoutClick = () => signOut();

  return (
    <header className="container mx-auto flex h-24 items-center justify-between px-5">
      <Link href="/" className="relative h-8 w-48">
        <Image
          src="/logo.svg"
          alt="Logo saúde animal"
          fill
          priority
          sizes="100vw"
        />
      </Link>

      {status === "unauthenticated" && (
        <Button
          variant="link"
          className="text-sm font-semibold text-primary hover:text-secondary"
          onClick={handleLoginClick}
        >
          Login
        </Button>
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 rounded-full border border-gray-400 p-1.5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <MenuIcon
                size={18}
                className="cursor-pointer hover:text-primary"
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="ml-10 mt-2.5">
              <DropdownMenuItem
                className="cursor-pointer text-sm font-semibold text-primary"
                onClick={handleLogoutClick}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Avatar className="shadow-md">
            <AvatarImage src={data.user.image!} alt={data.user.name!} />
            <AvatarFallback className="uppercase">
              {data.user.name!.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>
      )}
    </header>
  );
};

export default Header;
