import React from "react";
import { adminDb } from "@/lib/firebase/admin";
import { listNews } from "@/lib/firebase/news";
import { requireAdmin } from "@/lib/firebase/session";
import { TrendingUp, Newspaper, Users, Eye } from "lucide-react";

export default async function AdminDashboard() {
  await requireAdmin();

  // Fetch real counts
  const [newsCountSnap, productCountSnap, recentNews] = await Promise.all([
    adminDb.collection("news").count().get(),
    adminDb.collection("products").count().get(),
    listNews(5),
  ]);
  const newsCount = newsCountSnap.data().count;
  const productCount = productCountSnap.data().count;

  const stats = [
    { name: "Toplam Haber", value: newsCount || "0", icon: Newspaper, color: "text-blue-600", bg: "bg-blue-100" },
    { name: "Sayfa Görüntüleme", value: "0", icon: Eye, color: "text-emerald-600", bg: "bg-emerald-100" },
    { name: "Ürünler", value: productCount || "0", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-100" },
    { name: "Sistem Durumu", value: "Online", icon: Users, color: "text-orange-600", bg: "bg-orange-100" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Hoş geldin! İşte sitenin gerçek zamanlı durumu.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Son Aktivite</h2>
          <div className="space-y-4">
            {recentNews?.map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <p className="text-sm text-gray-600">Yeni haber: "{item.title}"</p>
                <span className="text-[10px] text-gray-400 ml-auto">
                  {new Date(item.created_at).toLocaleDateString('tr-TR')}
                </span>
              </div>
            ))}
            {(!recentNews || recentNews.length === 0) && (
              <p className="text-sm text-gray-400 italic">Henüz bir aktivite yok.</p>
            )}
          </div>
        </div>

        <div className="bg-[#020817] p-8 rounded-3xl shadow-sm text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          <h2 className="text-xl font-bold mb-4">Hızlı Erişim</h2>
          <p className="text-gray-400 mb-8 font-light">Sistemi güncellemek için hızlıca yeni içerik ekleyebilirsiniz.</p>
          <a href="/admin/haberler" className="inline-block bg-white text-[#020817] px-6 py-3 rounded-xl font-bold hover:bg-blue-400 hover:text-white transition-all">
            Yeni Haber Ekle
          </a>
        </div>
      </div>
    </div>
  );
}
