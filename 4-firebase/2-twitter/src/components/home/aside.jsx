import { FiSearch } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const trends = [
  { category: "Gündem · Türkiye", title: "#Galatasaray", posts: "125 B gönderi" },
  { category: "Teknoloji · Trend", title: "React 19", posts: "48,2 B gönderi" },
  { category: "Spor · Trend", title: "Fenerbahçe", posts: "92,1 B gönderi" },
  { category: "Gündem · Trend", title: "JavaScript", posts: "21,4 B gönderi" },
  { category: "Eğlence · Trend", title: "Netflix", posts: "15,7 B gönderi" },
];

const suggestions = [
  { name: "Elon Musk", username: "@elonmusk", avatar: "https://i.pravatar.cc/100?img=12" },
  { name: "React", username: "@reactjs", avatar: "https://i.pravatar.cc/100?img=33" },
  { name: "Vercel", username: "@vercel", avatar: "https://i.pravatar.cc/100?img=15" },
];

const Aside = () => {
  return (
    <aside className="max-xl:hidden px-6 py-2 sticky top-0 h-screen overflow-y-auto">
      {/* Arama */}
      <div className="sticky top-0 bg-primary py-2 z-10">
        <div className="flex items-center gap-3 bg-tw-gray/60 rounded-full px-4 py-2.5 focus-within:ring-1 focus-within:ring-tw-blue">
          <FiSearch className="text-zinc-400" />
          <input
            type="text"
            placeholder="Ara"
            className="bg-transparent outline-none w-full text-sm placeholder:text-zinc-400"
          />
        </div>
      </div>

      {/* Premium */}
      <div className="border border-tw-gray rounded-2xl p-4 mt-3">
        <h2 className="text-xl font-extrabold mb-1">Premium'a abone ol</h2>
        <p className="text-sm mb-3">
          Abone ol; yeni özelliklerin kilidini aç ve uygun olman halinde gelir payı kazan.
        </p>
        <button className="bg-tw-blue text-white font-bold rounded-full px-4 py-1.5 text-sm">
          Abone ol
        </button>
      </div>

      {/* Neler oluyor */}
      <div className="bg-tw-gray/20 rounded-2xl mt-4 overflow-hidden">
        <h2 className="text-xl font-extrabold px-4 py-3">Neler oluyor</h2>
        {trends.map((t, i) => (
          <div
            key={i}
            className="flex justify-between items-start px-4 py-3 hover:bg-tw-gray/40 cursor-pointer"
          >
            <div>
              <p className="text-xs text-zinc-400">{t.category}</p>
              <p className="font-bold text-sm">{t.title}</p>
              <p className="text-xs text-zinc-400">{t.posts}</p>
            </div>
            <BsThreeDots className="text-zinc-400 hover:text-tw-blue" />
          </div>
        ))}
        <button className="text-tw-blue text-sm px-4 py-3 hover:bg-tw-gray/40 w-full text-left">
          Daha fazla göster
        </button>
      </div>

      {/* Kimi takip etmeli */}
      <div className="bg-tw-gray/20 rounded-2xl mt-4 overflow-hidden">
        <h2 className="text-xl font-extrabold px-4 py-3">Kimi takip etmeli</h2>
        {suggestions.map((u, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-4 py-3 hover:bg-tw-gray/40 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <img src={u.avatar} alt={u.name} className="size-10 rounded-full" />
              <div>
                <p className="font-bold text-sm">{u.name}</p>
                <p className="text-xs text-zinc-400">{u.username}</p>
              </div>
            </div>
            <button className="bg-secondary text-primary font-bold rounded-full px-4 py-1.5 text-sm">
              Takip et
            </button>
          </div>
        ))}
        <button className="text-tw-blue text-sm px-4 py-3 hover:bg-tw-gray/40 w-full text-left">
          Daha fazla göster
        </button>
      </div>

      {/* Footer */}
      <div className="text-xs text-zinc-500 mt-4 flex flex-wrap gap-x-3 gap-y-1 px-2 pb-6">
        <a href="#" className="hover:underline">Hizmet Şartları</a>
        <a href="#" className="hover:underline">Gizlilik Politikası</a>
        <a href="#" className="hover:underline">Çerez Politikası</a>
        <a href="#" className="hover:underline">Erişilebilirlik</a>
        <a href="#" className="hover:underline">Reklam bilgileri</a>
        <span>© 2026 X Corp.</span>
      </div>
    </aside>
  );
};

export default Aside;
