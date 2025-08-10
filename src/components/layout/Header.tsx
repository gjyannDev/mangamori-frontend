import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

export default function Header() {
  return (
    <header className="bg-base-black flex items-center justify-between text-base-white py-5 container-custom font-inter">
      <div className="">
        <p className="text-3xl font-playfair font-bold text-base-white">
          Manga<span className="text-primary">Mori</span>
        </p>
      </div>
      <div className="">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="">Discover</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="">MangaTrack</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-4">
        <p className="whitespace-nowrap">Sign in</p>
        <div className="flex items-center relative w-[180px]">
          <Input
            type="text"
            className="pr-9 bg-base-white rounded-2xl focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
          />

          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
      </div>
    </header>
  );
}
