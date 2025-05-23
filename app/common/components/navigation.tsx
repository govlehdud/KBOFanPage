import { Link } from "react-router";
import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "~/lib/utils";

const menus = [
  {
    name: "Projects",
    to: "/products",
    items: [
      {
        name: "Leaderboards",
        description: "See the top performers in your community",
        to: "/products/leaderboards",
      },
      {
        name: "Categories",
        description: "See the categories in your community",
        to: "/products/categories",
      },
      {
        name: "Search",
        description: "Search for a project in your community",
        to: "/products/search",
      },
      {
        name: "Submit a Product",
        description: "Submit a product to your community",
        to: "/products/submit",
      },
      {
        name: "Promote",
        description: "Promote your product to your community",
        to: "/products/promote",
      },
    ],
  },
  {
    name: "CLUB",
    to: "/jobs",
    items: [
      {
        name: "Remote Jobs",
        description: "See the jobs in your community",
        to: "/jobs?location=remote",
      },
      {
        name: "Full-Time Jobs",
        description: "Find a full-time job in your community",
        to: "/jobs?type=full-time",
      },
      {
        name: "Freelance Jobs",
        description: "Find a freelance job in your community",
        to: "/jobs?type=freelance",
      },
      {
        name: "Internships",
        description: "Find an internship in your community",
        to: "/jobs?type=internship",
      },
      {
        name: "Submit a Job",
        description: "Submit a job to your community",
        to: "/jobs/submit",
      },
    ],
  },
  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All Posts",
        description: "See all posts in your community",
        to: "/community",
      },
      {
        name: "Top Posts",
        description: "See the top posts in your community",
        to: "/community/sort=top",
      },
      {
        name: "New Posts",
        description: "See the new posts in your community",
        to: "/community/sort=new",
      },
      {
        name: "Create a Post",
        description: "Create a post in your community",
        to: "/community/create",
      },
    ],
  },
  {
    name: "Record",
    to: "/ideasgpt",
  },
  {
    name: "Payments",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        description: "See all teams in our community",
        to: "/teams",
      },
      {
        name: "Create a Team",
        description: "Create a team in our community",
        to: "/teams/create",
      },
    ],
  },
];

export default function Navigation() {
  return (
    <nav
      className="flex px-20 h-16 items-center justify-between backdrop-blur fixed
    top-0 left-0 right-0 z-50 bg-black/50"
    >
      <div className="flex items-center">
        <Link to="/" className="font-bold tracking-tighter text-lg">
          KBO FanPage
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] font-light gap-3 p-4 grid-cols-2">
                        {menu.items?.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn([
                              "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent",
                              item.to === "/products/promote" &&
                                "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                              item.to === "/jobs/submit" &&
                                "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                            ])}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                className="p-3 space-y-1 block leading-none no-underline outline-none"
                                to={item.to}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {item.name}
                                </span>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
