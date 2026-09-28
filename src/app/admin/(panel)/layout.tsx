import React from "react";
import Link from "next/link";
import { LayoutDashboard, Newspaper, Factory, Package, Layers, FileText, Inbox } from "lucide-react";
import { countUnreadMessages } from "@/lib/firebase/messages";
import { requireAdmin } from "@/lib/firebase/session";
import LogoutButton from "./LogoutButton";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();
  const unreadMessages = await countUnreadMessages();

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Mesajlar", href: "/admin/mesajlar", icon: Inbox, badge: unreadMessages },
    { name: "Sayfa İçerikleri", href: "/admin/icerik", icon: FileText },
    { name: "Ürünler", href: "/admin/urunler", icon: Package },
    { name: "Çözümler", href: "/admin/cozumler", icon: Layers },
    { name: "Haberler", href: "/admin/haberler", icon: Newspaper },
    { name: "Markalar", href: "/admin/markalar", icon: Factory },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#020817] text-white flex flex-col fixed h-full">
        <div className="p-8">
          <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-blue-400 transition-colors">
            Newstag<span className="text-blue-500">.</span>
          </Link>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Admin Panel</p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all group"
            >
              <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">{item.name}</span>
              {"badge" in item && item.badge ? (
                <span className="ml-auto rounded-full bg-blue-500 px-2 py-0.5 text-[10px] font-bold text-white">{item.badge}</span>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
