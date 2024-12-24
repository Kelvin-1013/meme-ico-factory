import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "./ui/sidebar";
import { Home, LineChart, Rocket, Coins, BookOpen, LayoutDashboard } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { ChatButton } from "./ChatButton";

const Layout = () => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <SidebarProvider>
        <div className="min-h-screen flex flex-col w-full">
          <div className="flex flex-1">
            <Sidebar variant="floating" collapsible="icon">
              <SidebarHeader className="flex items-center justify-center py-6">
                <h2 className="text-xl font-bold">Meme ICO</h2>
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Home">
                      <Link to="/">
                        <Home className="h-4 w-4" />
                        <span>Home</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Launchpad">
                      <Link to="/launchpad">
                        <Rocket className="h-4 w-4" />
                        <span>Launchpad</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Staking">
                      <Link to="/staking">
                        <Coins className="h-4 w-4" />
                        <span>Staking</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Assets">
                      <Link to="/assets">
                        <LineChart className="h-4 w-4" />
                        <span>Assets</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Dashboard">
                      <Link to="/dashboard">
                        <LayoutDashboard className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Docs">
                      <Link to="/docs">
                        <BookOpen className="h-4 w-4" />
                        <span>Docs</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
            <div className="flex-1 flex flex-col">
              <Navbar />
              <main className="container mx-auto py-6 flex-1">
                <Outlet />
              </main>
              <Footer />
            </div>
          </div>
          <ChatButton />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Layout;