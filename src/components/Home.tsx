// import React, { useMemo, useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { CalendarDays, HomeIcon, Video, Newspaper, Ticket, Users, Archive, BookOpen, FileText, Search, ShoppingCart, X, CheckCircle2 } from "lucide-react";

// // ---------- \n// Tiny data layer (mock) — replace with API calls later
// // ----------
// const TEAMS = [
//   { id: "ken", name: "Kenya", flag: "🇰🇪", group: "A" },
//   { id: "uga", name: "Uganda", flag: "🇺🇬", group: "A" },
//   { id: "tan", name: "Tanzania", flag: "🇹🇿", group: "B" },
//   { id: "eth", name: "Ethiopia", flag: "🇪🇹", group: "B" },
// ];

// const MATCHES = [
//   { id: "m1", homeTeam: "Kenya", awayTeam: "Uganda", venue: "Nyayo Stadium", city: "Nairobi", kickoff: new Date(Date.now() + 3*24*3600*1000).toISOString(), score: null },
//   { id: "m2", homeTeam: "Tanzania", awayTeam: "Ethiopia", venue: "Benjamin Mkapa", city: "Dar es Salaam", kickoff: new Date(Date.now() + 5*24*3600*1000).toISOString(), score: null },
//   { id: "m3", homeTeam: "Uganda", awayTeam: "Tanzania", venue: "Mandela National", city: "Kampala", kickoff: new Date(Date.now() - 2*24*3600*1000).toISOString(), score: { home: 1, away: 1 } },
// ];

// const TICKET_TYPES = {
//   Regular: 200, // KSh
//   VIP: 500,
//   VVIP: 1000,
// };

// const NEWS = [
//   { id: "n1", title: "Opening Match Preparations", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop", published: new Date().toISOString(), excerpt: "Teams arrive in Nairobi for the opener.", body: "Full article content here…" },
//   { id: "n2", title: "Referees Announced", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop", published: new Date().toISOString(), excerpt: "CAF releases list of match officials.", body: "Full article content here…" },
// ];

// const VIDEOS = [
//   { id: "v1", title: "Tournament Trailer", youtubeId: "dQw4w9WgXcQ" },
//   { id: "v2", title: "Best Goals", youtubeId: "ysz5S6PUM-U" },
// ];

// const ARCHIVE = [
//   { year: 2022, host: "Algeria", winner: "Senegal" },
//   { year: 2020, host: "Cameroon", winner: "Morocco" },
// ];

// // ---------- \n// Styles & helpers
// // ----------
// const linkBase = "inline-flex items-center gap-2 px-3 py-2 rounded-xl transition hover:bg-black/5";
// const linkActive = ({ isActive }) =>
//   isActive ? `${linkBase} bg-black text-white` : `${linkBase} text-black`;

// const Page = ({ title, icon: Icon, children }) => (
//   <div className="max-w-6xl mx-auto p-4 md:p-6">
//     <div className="flex items-center gap-3 mb-6">
//       <div className="p-2 rounded-2xl bg-black text-white"><Icon size={20} /></div>
//       <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
//     </div>
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={title}
//         initial={{ opacity: 0, y: 8 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -8 }}
//         transition={{ duration: 0.2 }}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   </div>
// );

// // ---------- \n// Navbar
// // ----------
// const Navbar = ({ cartCount }) => {
//   return (
//     <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
//       <div className="max-w-6xl mx-auto flex items-center justify-between p-3 md:p-4">
//         <NavLink to="/" className="flex items-center gap-2 font-extrabold text-lg md:text-xl">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/CAF_%28logo%29.png" alt="CAF" className="h-7 w-7"/>
//           CAF Online (Clone)
//         </NavLink>
//         <nav className="hidden md:flex items-center gap-1">
//           <NavLink to="/" className={linkActive}><HomeIcon size={16}/> Home</NavLink>
//           <NavLink to="/news" className={linkActive}><Newspaper size={16}/> News</NavLink>
//           <NavLink to="/videos" className={linkActive}><Video size={16}/> Videos</NavLink>
//           <NavLink to="/schedule" className={linkActive}><CalendarDays size={16}/> Schedule & Results</NavLink>
//           <NavLink to="/teams" className={linkActive}><Users size={16}/> Teams</NavLink>
//           <NavLink to="/event-guide" className={linkActive}><BookOpen size={16}/> Event Guide</NavLink>
//           <NavLink to="/media-guide" className={linkActive}><FileText size={16}/> Media Guide</NavLink>
//           <NavLink to="/archive" className={linkActive}><Archive size={16}/> Archive</NavLink>
//           <NavLink to="/tickets" className={({isActive})=> isActive? `${linkBase} bg-emerald-600 text-white` : `${linkBase} text-emerald-700 border border-emerald-600` }><Ticket size={16}/> Tickets</NavLink>
//         </nav>
//         <NavLink to="/tickets" className="md:hidden relative">
//           <ShoppingCart />
//           {cartCount>0 && (
//             <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 grid place-items-center">{cartCount}</span>
//           )}
//         </NavLink>
//       </div>
//       <div className="md:hidden border-t">
//         <div className="flex overflow-x-auto no-scrollbar p-2 gap-2">
//           {[
//             {to:"/", label:"Home", Icon:HomeIcon},
//             {to:"/news", label:"News", Icon:Newspaper},
//             {to:"/videos", label:"Videos", Icon:Video},
//             {to:"/schedule", label:"Schedule", Icon:CalendarDays},
//             {to:"/teams", label:"Teams", Icon:Users},
//             {to:"/event-guide", label:"Event", Icon:BookOpen},
//             {to:"/media-guide", label:"Media", Icon:FileText},
//             {to:"/archive", label:"Archive", Icon:Archive},
//             {to:"/tickets", label:"Tickets", Icon:Ticket},
//           ].map(i=> (
//             <NavLink key={i.to} to={i.to} className={({isActive})=> isActive? "px-3 py-2 rounded-xl bg-black text-white flex items-center gap-2" : "px-3 py-2 rounded-xl bg-black/5 flex items-center gap-2"}>
//               <i.Icon size={16}/> {i.label}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ---------- \n// Home Page
// // ----------
// const Home = () => {
//   return (
//     <Page title="Home" icon={HomeIcon}>
//       <div className="grid md:grid-cols-2 gap-6 items-stretch">
//         <div className="rounded-3xl p-6 md:p-10 bg-gradient-to-br from-emerald-600 to-black text-white shadow-lg">
//           <h2 className="text-3xl md:text-4xl font-extrabold mb-3">TotalEnergies CHAN — East Africa</h2>
//           <p className="text-white/90 mb-6">Follow news, fixtures, teams and buy tickets — all in one clean interface.</p>
//           <NavLink to="/tickets" className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-2xl font-semibold">
//             <Ticket size={18}/> Get Tickets
//           </NavLink>
//         </div>
//         <div className="grid gap-4">
//           {NEWS.map(n => (
//             <article key={n.id} className="rounded-2xl overflow-hidden border bg-white shadow-sm">
//               <img src={n.image} alt={n.title} className="h-40 w-full object-cover"/>
//               <div className="p-4">
//                 <h3 className="font-bold text-lg">{n.title}</h3>
//                 <p className="text-sm text-gray-600">{new Date(n.published).toLocaleString()}</p>
//                 <p className="mt-2 text-gray-800">{n.excerpt}</p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </Page>
//   );
// };

// // ---------- \n// News Page
// // ----------
// const NewsPage = () => {
//   const [q, setQ] = useState("");
//   const filtered = useMemo(() => NEWS.filter(n => n.title.toLowerCase().includes(q.toLowerCase())), [q]);
//   return (
//     <Page title="News" icon={Newspaper}>
//       <div className="mb-4 flex items-center gap-2">
//         <div className="relative w-full md:w-96">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16}/>
//           <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search news…" className="w-full pl-9 pr-3 py-2 rounded-xl border"/>
//         </div>
//       </div>
//       <div className="grid md:grid-cols-3 gap-4">
//         {filtered.map(n => (
//           <article key={n.id} className="rounded-2xl overflow-hidden border bg-white shadow-sm">
//             <img src={n.image} alt="" className="h-36 w-full object-cover"/>
//             <div className="p-4">
//               <h3 className="font-semibold">{n.title}</h3>
//               <p className="text-xs text-gray-600">{new Date(n.published).toLocaleDateString()}</p>
//               <p className="mt-2 text-sm text-gray-700">{n.excerpt}</p>
//             </div>
//           </article>
//         ))}
//       </div>
//     </Page>
//   );
// };

// // ---------- \n// Videos Page
// // ----------
// const VideosPage = () => (
//   <Page title="Videos" icon={Video}>
//     <div className="grid md:grid-cols-2 gap-6">
//       {VIDEOS.map(v => (
//         <div key={v.id} className="rounded-2xl overflow-hidden border bg-white shadow-sm">
//           <div className="aspect-video">
//             <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${v.youtubeId}`} title={v.title} allowFullScreen />
//           </div>
//           <div className="p-4 font-semibold">{v.title}</div>
//         </div>
//       ))}
//     </div>
//   </Page>
// );

// // ---------- \n// Schedule & Results
// // ----------
// const SchedulePage = () => (
//   <Page title="Schedule & Results" icon={CalendarDays}>
//     <div className="overflow-x-auto rounded-2xl border">
//       <table className="min-w-full text-sm">
//         <thead className="bg-black text-white">
//           <tr>
//             <th className="text-left p-3">Match</th>
//             <th className="text-left p-3">Kickoff</th>
//             <th className="text-left p-3">Venue</th>
//             <th className="text-left p-3">Result</th>
//           </tr>
//         </thead>
//         <tbody>
//           {MATCHES.map(m => (
//             <tr key={m.id} className="border-b">
//               <td className="p-3 font-semibold">{m.homeTeam} vs {m.awayTeam}</td>
//               <td className="p-3">{new Date(m.kickoff).toLocaleString()}</td>
//               <td className="p-3">{m.venue} — {m.city}</td>
//               <td className="p-3">{m.score ? `${m.score.home} - ${m.score.away}` : "—"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </Page>
// );

// // ---------- \n// Teams
// // ----------
// const TeamsPage = () => (
//   <Page title="Teams" icon={Users}>
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//       {TEAMS.map(t => (
//         <div key={t.id} className="rounded-2xl border p-4 flex items-center gap-3 bg-white shadow-sm">
//           <span className="text-2xl" aria-hidden>{t.flag}</span>
//           <div>
//             <div className="font-semibold">{t.name}</div>
//             <div className="text-xs text-gray-600">Group {t.group}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </Page>
// );

// // ---------- \n// Event Guide (static)
// // ----------
// const EventGuidePage = () => (
//   <Page title="Event Guide" icon={BookOpen}>
//     <div className="prose max-w-none">
//       <h3>Getting Around</h3>
//       <p>Plan to arrive at the stadium at least one hour before kickoff for security checks. Use official fan entry gates.</p>
//       <h3>What You Can Bring</h3>
//       <ul>
//         <li>Printed or digital ticket (QR).</li>
//         <li>Valid ID or passport.</li>
//       </ul>
//       <h3>Stadium Etiquette</h3>
//       <p>Supporters are encouraged to celebrate responsibly and respect officials and fellow fans.</p>
//     </div>
//   </Page>
// );

// // ---------- \n// Media Guide (docs)
// // ----------
// const MediaGuidePage = () => (
//   <Page title="Media Guide" icon={FileText}>
//     <div className="grid md:grid-cols-3 gap-4">
//       {[1,2,3].map(i => (
//         <a key={i} href="#" className="rounded-2xl border p-4 bg-white shadow-sm hover:shadow-md transition">
//           <div className="font-semibold">Media Handbook {i}</div>
//           <div className="text-sm text-gray-600">PDF • 2.1 MB</div>
//         </a>
//       ))}
//     </div>
//   </Page>
// );

// // ---------- \n// Archive
// // ----------
// const ArchivePage = () => (
//   <Page title="Archive" icon={Archive}>
//     <div className="grid md:grid-cols-2 gap-4">
//       {ARCHIVE.map(a => (
//         <div key={a.year} className="rounded-2xl border p-4 bg-white shadow-sm">
//           <div className="font-semibold text-lg">{a.year}</div>
//           <div className="text-sm text-gray-700">Host: {a.host}</div>
//           <div className="text-sm text-gray-700">Winner: {a.winner}</div>
//         </div>
//       ))}
//     </div>
//   </Page>
// );

// // ---------- \n// Tickets (Core UX)
// // ----------
// const TicketsPage = ({ cart, setCart }) => {
//   const [selectedMatch, setSelectedMatch] = useState(MATCHES[0].id);
//   const [type, setType] = useState("Regular");
//   const [qty, setQty] = useState(1);
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const match = useMemo(() => MATCHES.find(m => m.id === selectedMatch), [selectedMatch]);
//   const unit = TICKET_TYPES[type];
//   const total = unit * qty;

//   const addToCart = () => {
//     const item = { id: crypto.randomUUID(), matchId: selectedMatch, type, qty, unit, total };
//     setCart(prev => [...prev, item]);
//   };

//   const removeItem = (id) => setCart(prev => prev.filter(i => i.id !== id));

//   const checkout = () => {
//     if (!email) return alert("Enter email to proceed");
//     setShowCheckout(false);
//     setSuccess(true);
//     // In real app: create order -> call payment -> wait webhook -> email QR
//   };

//   return (
//     <Page title="Tickets" icon={Ticket}>
//       <div className="grid lg:grid-cols-3 gap-6 items-start">
//         {/* Builder */}
//         <div className="lg:col-span-2 rounded-2xl border bg-white shadow-sm p-4">
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-sm font-semibold">Match</label>
//               <select value={selectedMatch} onChange={e=>setSelectedMatch(e.target.value)} className="mt-1 w-full border rounded-xl p-2">
//                 {MATCHES.map(m => (
//                   <option key={m.id} value={m.id}>{m.homeTeam} vs {m.awayTeam} — {new Date(m.kickoff).toLocaleString()}</option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="text-sm font-semibold">Category</label>
//               <div className="mt-1 grid grid-cols-3 gap-2">
//                 {Object.entries(TICKET_TYPES).map(([k, v]) => (
//                   <button key={k} onClick={()=>setType(k)} className={k===type? "px-3 py-2 rounded-xl bg-black text-white" : "px-3 py-2 rounded-xl border"}>
//                     {k}<div className="text-xs">KSh {v}</div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <label className="text-sm font-semibold">Quantity</label>
//               <input type="number" min={1} value={qty} onChange={e=>setQty(Math.max(1, parseInt(e.target.value||"1",10)))} className="mt-1 w-32 border rounded-xl p-2"/>
//             </div>
//             <div className="self-end">
//               <button onClick={addToCart} className="w-full md:w-auto px-4 py-2 rounded-xl bg-emerald-600 text-white">Add to cart</button>
//             </div>
//           </div>

//           {match && (
//             <div className="mt-6 rounded-xl border bg-gray-50 p-4">
//               <div className="font-semibold">Selected: {match.homeTeam} vs {match.awayTeam}</div>
//               <div className="text-sm text-gray-700">{match.venue} — {match.city} • {new Date(match.kickoff).toLocaleString()}</div>
//               <div className="mt-2 text-sm">Current selection: <span className="font-semibold">{type}</span> × <span className="font-semibold">{qty}</span> • <span className="font-semibold">KSh {total}</span></div>
//             </div>
//           )}
//         </div>

//         {/* Cart */}
//         <div className="rounded-2xl border bg-white shadow-sm p-4">
//           <div className="flex items-center justify-between mb-2">
//             <div className="font-bold">Cart</div>
//             <div className="text-xs bg-black text-white rounded-full px-2 py-0.5">{cart.length}</div>
//           </div>
//           <div className="grid gap-3">
//             {cart.length === 0 && <div className="text-sm text-gray-600">No items yet.</div>}
//             {cart.map(i => {
//               const m = MATCHES.find(mm => mm.id === i.matchId);
//               return (
//                 <div key={i.id} className="rounded-xl border p-3">
//                   <div className="flex justify-between gap-2">
//                     <div>
//                       <div className="font-semibold text-sm">{m?.homeTeam} vs {m?.awayTeam}</div>
//                       <div className="text-xs text-gray-600">{i.type} × {i.qty}</div>
//                     </div>
//                     <div className="font-semibold">KSh {i.total}</div>
//                   </div>
//                   <button onClick={()=>removeItem(i.id)} className="mt-2 text-xs inline-flex items-center gap-1 text-red-600"><X size={14}/> remove</button>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="mt-4 border-t pt-3 text-sm">
//             <div className="flex justify-between"><span>Subtotal</span><span>KSh {cart.reduce((s,i)=>s+i.total,0)}</span></div>
//           </div>

//           <button disabled={cart.length===0} onClick={()=>setShowCheckout(true)} className="mt-4 w-full px-4 py-2 rounded-xl bg-black text-white disabled:opacity-50">Proceed to Checkout</button>
//         </div>
//       </div>

//       {/* Checkout modal */}
//       {showCheckout && (
//         <div className="fixed inset-0 bg-black/40 grid place-items-center p-4 z-50">
//           <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
//             <div className="flex justify-between items-center mb-3">
//               <div className="font-bold">Checkout</div>
//               <button onClick={()=>setShowCheckout(false)}><X/></button>
//             </div>
//             <div className="grid gap-3">
//               <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="border rounded-xl p-2"/>
//               <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone (for M-Pesa)" className="border rounded-xl p-2"/>
//               <button onClick={checkout} className="mt-2 w-full px-4 py-2 rounded-xl bg-emerald-600 text-white">Pay (Mock)</button>
//               <p className="text-xs text-gray-600">This is a frontend-only demo. Replace with Stripe/M‑Pesa payment calls.</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Success toast */}
//       {success && (
//         <div className="fixed bottom-4 right-4 bg-black text-white rounded-2xl px-4 py-3 flex items-center gap-2 shadow-lg">
//           <CheckCircle2 /> Payment successful — e‑tickets sent to {email}
//           <button className="ml-2" onClick={()=>setSuccess(false)}><X size={16}/></button>
//         </div>
//       )}
//     </Page>
//   );
// };

// // ---------- \n// Footer
// // ----------
// const Footer = () => (
//   <footer className="mt-12 border-t">
//     <div className="max-w-6xl mx-auto p-6 text-sm text-gray-600">
//       Built for learning • React + Tailwind • Replace mock data with your API.
//     </div>
//   </footer>
// );

// // ---------- \n// Root App
// // ----------
// function Shell() {
//   const [cart, setCart] = useState([]);
//   return (
//     <>
//       <Navbar cartCount={cart.length} />
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/news" element={<NewsPage/>} />
//         <Route path="/videos" element={<VideosPage/>} />
//         <Route path="/schedule" element={<SchedulePage/>} />
//         <Route path="/teams" element={<TeamsPage/>} />
//         <Route path="/event-guide" element={<EventGuidePage/>} />
//         <Route path="/media-guide" element={<MediaGuidePage/>} />
//         <Route path="/archive" element={<ArchivePage/>} />
//         <Route path="/tickets" element={<TicketsPage cart={cart} setCart={setCart} />} />
//       </Routes>
//       <Footer/>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Shell/>
//     </BrowserRouter>
//   );
// }

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>KENYA – Book Your CHAN 2024 Tickets</h1>
      <p>
        Don't miss the chance to experience the intensity of African football live at the
        <strong> CHAN 2024</strong>! For matches in Nairobi, book your tickets now here.
      </p>
      <Link to="/tickets">
        <button>Book Now</button>
      </Link>

      <hr style={{ margin: "30px 0" }} />

      <h1>TANZANIA – Book Your CHAN 2024 Tickets</h1>
      <p>
        Don't miss the chance to experience the intensity of African football live at the
        <strong> CHAN 2024</strong>! For matches in Dar es Salaam & Zanzibar, book your
        tickets now here.
      </p>
      <Link to="/tickets">
        <button>Book Now</button>
      </Link>

      <hr style={{ margin: "30px 0" }} />

      <h1>UGANDA – Book Your CHAN 2024 Tickets</h1>
      <p>
        Don't miss the chance to experience the intensity of African football live at the
        <strong> CHAN 2024</strong>! For matches in Kampala, book your tickets now here.
      </p>
      <Link to="/tickets">
        <button>Book Now</button>
      </Link>

      <hr style={{ margin: "40px 0" }} />

      <h2>Title Sponsor</h2>
      <p>Total Energies</p>

      <h2>Official CAF Partner</h2>
      <ul>
        <li>1xBET</li>
        <li>Puma</li>
      </ul>
    </div>
  );
}
