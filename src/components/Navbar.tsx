import { ConnectWalletButton } from "./ConnectWalletButton";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { SettingsButton } from "./SettingsButton";

const Navbar = () => {
  return (
    <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] grid-cols-2">
                  <li className="row-span-3">
                    <Link
                      to="/"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Meme Coin ICO
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Launch your meme coin with our secure platform
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/assets"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Assets</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Track top crypto assets
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Dashboard</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Manage your ICO projects
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-2">
          <SettingsButton />
          <ConnectWalletButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;