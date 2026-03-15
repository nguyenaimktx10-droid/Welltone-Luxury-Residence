/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, MapPin, Phone, Mail, 
  Globe, Shield, Star, Award, Wind, Waves, 
  Layout, Home, Play, ArrowRight, Instagram, 
  Facebook, Twitter, Youtube, CheckCircle2,
  Navigation, Zap, Heart, Sparkles
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Tổng quan', href: '#about' },
    { name: 'Vị trí', href: '#location' },
    { name: 'Tiện ích', href: '#amenities' },
    { name: 'Mặt bằng', href: '#masterplan' },
    { name: 'Phân khu', href: '#subdivisions' },
    { name: 'Video', href: '#video' },
    { name: 'Hình ảnh', href: '#gallery' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-luxury-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://welltone.vn/wp-content/themes/theaston/assets/images/example/home-page-new/logo-w.svg" 
            alt="WELLTONE Logo" 
            className="h-8 w-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white/80 hover:text-gold text-xs uppercase tracking-widest transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-gold hover:bg-gold-light text-luxury-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
          >
            Đăng ký ngay
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-luxury-black border-t border-white/10 py-8 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-white text-lg font-serif"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gold text-luxury-black w-full py-4 rounded-xl font-bold uppercase tracking-widest text-center"
              >
                Đăng ký ngay
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://welltone.vn/wp-content/uploads/2026/01/BG-2-1536x864.png" 
          alt="WELLTONE LUXURY RESIDENCE" 
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/20 to-luxury-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            WELLTONE <br />
            <span className="italic font-normal text-gold-gradient">Luxury Residence</span>
          </h1>
          <p className="text-white/90 text-sm md:text-lg max-w-4xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] uppercase tracking-[0.3em] whitespace-nowrap">
            DÒNG CHẢY WELLNESS GIỮA MŨI VỊNH THƯỢNG LƯU
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Cuộn xuống</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

const Vision = () => {
  return (
    <section id="about" className="py-24 bg-luxury-cream text-luxury-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Tầm nhìn & Triết lý ESG++</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Không chỉ là nơi ở, <br />
              đó là <span className="italic text-emerald">Di Sản</span> của tương lai.
            </h2>
            <p className="text-luxury-black/70 text-lg mb-10 leading-relaxed">
              Welltone Luxury Residence là biểu tượng của sự kết hợp hoàn hảo giữa công nghệ thông minh và thiên nhiên sinh thái. Chúng tôi kiến tạo một hệ sinh thái sống ESG++ chuẩn quốc tế, nơi mỗi bước chân đều chạm vào sự thuần khiết.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="text-emerald" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Sở hữu thị trấn biển</h4>
                  <p className="text-sm text-luxury-black/60">Tọa lạc tại vịnh biển Cần Giờ, nơi giao thoa giữa rừng ngập mặn và biển cả.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="text-emerald" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Tiên phong ESG++</h4>
                  <p className="text-sm text-luxury-black/60">Mô hình phát triển bền vững, bảo vệ môi trường và trách nhiệm xã hội.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="text-emerald" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Kỷ quan kiến trúc</h4>
                  <p className="text-sm text-luxury-black/60">Thiết kế biểu tượng từ những đơn vị hàng đầu thế giới.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden shadow-2xl">
              <img 
                src="https://welltone.vn/wp-content/uploads/2026/01/AstonNhatrang_Building-cityview_bologo-1536x864.jpg" 
                alt="Vision" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold -z-10 hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const values = [
    {
      icon: <Wind className="text-emerald" size={32} />,
      title: "ENVIRONMENTAL",
      desc: "Môi trường sinh thái nguyên sơ, bảo tồn hệ sinh thái rừng ngập mặn Cần Giờ."
    },
    {
      icon: <Heart className="text-emerald" size={32} />,
      title: "SOCIAL",
      desc: "Cộng đồng nhân văn, gắn kết và phát triển bền vững cho thế hệ tương lai."
    },
    {
      icon: <Shield className="text-emerald" size={32} />,
      title: "GOVERNANCE",
      desc: "Vận hành minh bạch, chuyên nghiệp theo tiêu chuẩn quốc tế của Welltone."
    },
    {
      icon: <Sparkles className="text-emerald" size={32} />,
      title: "SUPER PLUS",
      desc: "Đặc quyền vượt trội, tiện ích siêu sang lần đầu tiên xuất hiện tại Việt Nam."
    }
  ];

  return (
    <section className="py-24 bg-forest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Giá trị cốt lõi</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">TRIẾT LÝ <span className="italic text-gold">ESG++</span> BỀN VỮNG</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 border border-white/10 hover:border-gold/50 transition-all group bg-luxury-black/20 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 text-white font-serif font-bold text-6xl">0{idx + 1}</div>
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">{val.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white group-hover:text-gold transition-colors relative z-10">{val.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed relative z-10">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 bg-white text-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Vị trí chiến lược</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase">Vị trí đắc địa</h2>
          <p className="text-luxury-black/60 mt-4 italic">"Bản nhạc giao hưởng giữa Rừng & Biển"</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="overflow-hidden shadow-2xl h-[500px] relative rounded-2xl">
              <img 
                src="https://welltone.vn/wp-content/uploads/2026/01/Map.png" 
                alt="Map" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1506670642711-af4f06215ef6?auto=format&fit=crop&w=1200&q=80";
                }}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 bg-luxury-cream p-8 rounded-2xl">
              <div>
                <h4 className="font-serif font-bold text-xl mb-6 flex items-center gap-2">
                  <Navigation className="text-emerald" size={20} />
                  Tứ cận tiếp giáp
                </h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between border-b border-black/5 pb-2">
                    <span className="font-bold">Phía Bắc:</span>
                    <span className="text-luxury-black/60">Giáp đường Xóm Cồn</span>
                  </li>
                  <li className="flex justify-between border-b border-black/5 pb-2">
                    <span className="font-bold">Phía Nam:</span>
                    <span className="text-luxury-black/60">Giáp đường Trần Phú</span>
                  </li>
                  <li className="flex justify-between border-b border-black/5 pb-2">
                    <span className="font-bold">Phía Đông:</span>
                    <span className="text-luxury-black/60">Giáp biển Nha Trang</span>
                  </li>
                  <li className="flex justify-between border-b border-black/5 pb-2">
                    <span className="font-bold">Phía Tây:</span>
                    <span className="text-luxury-black/60">Giáp khu dân cư hiện hữu</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl mb-6 flex items-center gap-2">
                  <Zap className="text-emerald" size={20} />
                  Kết nối nhanh chóng
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>Chợ Đầm</span>
                    <span className="text-emerald font-bold">2 Phút</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Tháp Bà Ponagar</span>
                    <span className="text-emerald font-bold">5 Phút</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Ga Nha Trang</span>
                    <span className="text-emerald font-bold">10 Phút</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Sân bay Cam Ranh</span>
                    <span className="text-emerald font-bold">40 Phút</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 sticky top-24">
            <div className="bg-forest text-white p-8 rounded-2xl shadow-xl">
              <h4 className="font-serif font-bold text-2xl mb-6">Đòn bẩy hạ tầng</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-gold" size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Cao tốc Buôn Ma Thuột - Nha Trang</h5>
                    <p className="text-xs text-white/60 mt-1">Kết nối Tây Nguyên và Duyên hải Nam Trung Bộ, thúc đẩy giao thương.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-gold" size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Cao tốc Vân Phong - Nha Trang</h5>
                    <p className="text-xs text-white/60 mt-1">Tuyến đường huyết mạch thúc đẩy kinh tế vùng trọng điểm.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-gold" size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Cầu Xóm Bóng mới</h5>
                    <p className="text-xs text-white/60 mt-1">Hoàn thiện hạ tầng giao thông nội đô, kết nối du lịch phía Bắc Nha Trang.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 border border-black/5 rounded-2xl">
              <h4 className="font-serif font-bold text-xl mb-4">Địa chỉ dự án</h4>
              <div className="flex gap-3">
                <MapPin className="text-emerald shrink-0" size={20} />
                <p className="text-sm text-luxury-black/60">Số 8-10 Đường Trần Phú, Phường Xương Huân, TP. Nha Trang, Tỉnh Khánh Hòa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Subdivisions = () => {
  const divisions = [
    { name: "The Haven Bay", desc: "Vịnh biển bình yên, nơi khởi đầu của những giấc mơ.", img: "https://welltone.vn/wp-content/uploads/bfi_thumb/AstonNhatrang_Cafe-ngoai-troi-tang-24_bologo-1-scaled-ri9gdnw489i9oxh63stgr6b3xnuymppn6m7ei2uy7g.jpg" },
    { name: "The Green Bay", desc: "Hệ sinh thái xanh mướt, giao thoa cùng rừng ngập mặn.", img: "https://welltone.vn/wp-content/uploads/bfi_thumb/CGI-du-an-Welltone13-ri0d9o6qnh28yerfmk9zvt095m839xua4va73f8n8s.png" },
    { name: "The Paradise", desc: "Thiên đường nghỉ dưỡng với những đặc quyền siêu sang.", img: "https://welltone.vn/wp-content/uploads/bfi_thumb/Tongthebosung_Bologo-1-scaled-rhymdcv351dwyzszmstwe7454eqqumo3hjw2h8k88c.jpg" },
    { name: "The Grand Island", desc: "Đảo thượng lưu, biểu tượng của sự giàu sang và quyền quý.", img: "https://welltone.vn/wp-content/uploads/2026/01/CGI-du-an-Welltone8-2048x1229.png" },
    { name: "Blue Lagoon", desc: "Hồ nước mặn nhân tạo quy mô lớn nhất khu vực.", img: "https://welltone.vn/wp-content/uploads/2026/01/WELLTONE6-2048x1160.jpg" },
  ];

  const [active, setActive] = useState(0);

  return (
    <section id="subdivisions" className="py-24 bg-white text-luxury-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Phân khu biểu tượng</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase">5 Phân khu biểu tượng</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {divisions.map((div, idx) => (
              <motion.div
                key={idx}
                onMouseEnter={() => setActive(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 border-l-4 ${active === idx ? 'bg-luxury-cream border-emerald shadow-lg' : 'bg-transparent border-transparent opacity-50'}`}
              >
                <h4 className="text-2xl font-serif font-bold mb-2">{div.name}</h4>
                <p className="text-sm text-luxury-black/60">{div.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                src={divisions[active].img}
                alt={divisions[active].name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <span className="text-white/70 text-xs uppercase tracking-widest">Phân khu</span>
              <h3 className="text-white text-3xl font-serif font-bold">{divisions[active].name}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoLibrary = () => {
  return (
    <section id="video" className="py-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Thư viện Video</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white uppercase">Video Dự Án</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer shadow-2xl">
            <img 
              src="https://welltone.vn/wp-content/uploads/2026/01/AstonNhatrang_Building-cityview_bologo-1536x864.jpg" 
              alt="Video 1" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-20 h-20 bg-gold text-forest rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <Play fill="currentColor" size={32} />
              </div>
            </div>
            <div className="absolute bottom-8 left-8">
              <h4 className="text-white text-xl font-serif font-bold">Phim giới thiệu dự án</h4>
            </div>
          </div>
          <div className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer shadow-2xl">
            <img 
              src="https://welltone.vn/wp-content/uploads/2026/01/BG-2-1536x864.png" 
              alt="Video 2" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-20 h-20 bg-white text-forest rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <Play fill="currentColor" size={32} />
              </div>
            </div>
            <div className="absolute bottom-8 left-8">
              <h4 className="text-white text-xl font-serif font-bold">Tiến độ thi công mới nhất</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Amenities = () => {
  const items = [
    { title: "Công viên sinh thái", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80" },
    { title: "Hồ bơi nước mặn", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80" },
    { title: "Vườn thiền Zen", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80" },
    { title: "Smart Clubhouse", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" },
    { title: "Khu thể thao xanh", img: "https://cdn2.tuoitre.vn/zoom/700_525/471584752817336320/2026/1/23/photo-1769144014148-1769144014224942506940-106-0-827-1378-crop-1769144289527121145443.jpg" },
    { title: "Trường học quốc tế", img: "https://welltone.vn/wp-content/uploads/2020/08/menu-banner-1.jpg" },
  ];

  return (
    <section id="amenities" className="py-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Đặc quyền sinh thái</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">TIỆN ÍCH <span className="italic text-gold">ESG++</span> THÔNG MINH</h2>
          </div>
          <p className="max-w-md text-white/50 text-sm">Với hơn 100 tiện ích Wellness và thông minh, Welltone Luxury Residence mang đến một cuộc sống cân bằng và bền vững.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6">
                <h4 className="text-white font-serif font-bold text-xl">{item.title}</h4>
                <div className="w-0 group-hover:w-full h-[2px] bg-gold transition-all duration-500 mt-2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GoldenValues = () => {
  const values = [
    { title: "VỊ TRÍ ĐỘC TÔN", desc: "Tâm điểm kết nối vùng kinh tế trọng điểm ven biển Cần Giờ." },
    { title: "CHUẨN SỐNG ESG++", desc: "Tiên phong trong phát triển bền vững và bảo vệ môi trường." },
    { title: "SIÊU TIỆN ÍCH", desc: "Hệ thống tiện ích siêu sang lần đầu tiên xuất hiện tại Việt Nam." },
    { title: "HỆ SINH THÁI XANH", desc: "Mật độ xây dựng thấp, ưu tiên không gian sinh thái rừng & biển." },
    { title: "CỘNG ĐỒNG TINH HOA", desc: "Nơi hội tụ của những chủ nhân xứng tầm và ưu tú." },
    { title: "DI SẢN TƯƠNG LAI", desc: "Giá trị gia tăng bền vững từ thương hiệu Welltone." },
  ];

  return (
    <section className="py-24 bg-luxury-cream text-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Tại sao chọn Welltone Luxury Residence</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase">6 GIÁ TRỊ VÀNG ĐỘC TÔN</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white shadow-sm border border-gold/10 hover:shadow-xl transition-all rounded-2xl"
            >
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center font-serif font-bold text-xl mb-6">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{val.title}</h3>
              <p className="text-luxury-black/60 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://welltone.vn/wp-content/uploads/2026/01/WELLTONE6-1536x870.jpg",
    "https://welltone.vn/wp-content/uploads/2022/08/phoi-canh-noi-that-1.jpg",
    "https://welltone.vn/wp-content/uploads/2022/08/phoi-canh-noi-that-3-768x384.jpg",
    "https://welltone.vn/wp-content/uploads/2022/08/phoi-canh-noi-that-4-768x384.jpg",
    "https://welltone.vn/wp-content/uploads/2022/08/phoi-canh-noi-that-5-1024x512.jpg",
    "https://welltone.vn/wp-content/uploads/2022/08/phoi-canh-noi-that-6-1024x476.jpg",
    "https://welltone.vn/wp-content/uploads/2022/08/phoi-canh-noi-that-7.jpg",
  ];

  return (
    <section id="gallery" className="py-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Kiến trúc & Văn hóa</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white uppercase">Hình ảnh <span className="italic text-gold">Thực Tế</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl">
            <img src={images[0]} alt="Gallery 0" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={images[1]} alt="Gallery 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={images[2]} alt="Gallery 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={images[3]} alt="Gallery 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={images[4]} alt="Gallery 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};

const MasterPlan = () => {
  const blocks = [
    { name: "BLOCK SOL", desc: "Biểu tượng của ánh dương rực rỡ", color: "from-orange-400/20" },
    { name: "BLOCK SEA", desc: "Hơi thở của đại dương bao la", color: "from-blue-400/20" },
    { name: "BLOCK SAND", desc: "Sự tinh khôi của bờ cát trắng", color: "from-yellow-400/20" },
  ];

  return (
    <section id="masterplan" className="py-24 bg-luxury-cream text-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Quy hoạch tổng thể</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">MẶT BẰNG TỔNG THỂ</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden shadow-2xl bg-white p-4">
            <img 
              src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1000&q=80" 
              alt="Master Plan" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6">
            {blocks.map((block, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className={`p-8 bg-white shadow-sm border-l-4 border-gold flex justify-between items-center cursor-pointer group`}
              >
                <div>
                  <h4 className="text-2xl font-serif font-bold mb-1">{block.name}</h4>
                  <p className="text-sm text-luxury-black/50">{block.desc}</p>
                </div>
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all">
                  <ChevronRight size={20} />
                </div>
              </motion.div>
            ))}
            
            <div className="mt-10 p-8 bg-luxury-black text-white">
              <h5 className="font-bold mb-4 flex items-center gap-2"><Sparkles className="text-gold" /> Thông số kỹ thuật</h5>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex justify-between"><span>Tổng diện tích:</span> <span className="text-white font-bold">11,115 m2</span></li>
                <li className="flex justify-between"><span>Số tầng:</span> <span className="text-white font-bold">24 - 27 Tầng</span></li>
                <li className="flex justify-between"><span>Số căn hộ:</span> <span className="text-white font-bold">1,341 Căn</span></li>
                <li className="flex justify-between"><span>Pháp lý:</span> <span className="text-white font-bold">Sở hữu lâu dài</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Liên hệ với chúng tôi</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">NHẬN TƯ VẤN <br /><span className="italic text-gold">CHUYÊN SÂU</span></h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Để lại thông tin để nhận bảng giá chi tiết, chính sách bán hàng mới nhất và tham quan nhà mẫu dự án Welltone Luxury Residence.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest">Hotline 24/7</p>
                  <p className="text-white font-bold">0903.719.779</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                  <Mail className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest">Email</p>
                  <p className="text-white font-bold">info@welltoneluxury.vn</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                  <Globe className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest">Website</p>
                  <p className="text-white font-bold">www.welltoneluxury.vn</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Họ và tên</label>
                  <input type="text" placeholder="Nguyễn Văn A" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Số điện thoại</label>
                  <input type="tel" placeholder="090x xxx xxx" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Email</label>
                <input type="email" placeholder="email@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Lời nhắn (Tùy chọn)</label>
                <textarea rows={4} placeholder="Tôi muốn nhận bảng giá..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-gold hover:bg-gold-light text-luxury-black font-bold py-4 rounded-xl uppercase tracking-widest transition-all shadow-lg shadow-gold/20">
                Gửi thông tin đăng ký
              </button>
              <p className="text-[10px] text-white/30 text-center">
                * Thông tin của bạn sẽ được bảo mật tuyệt đối.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-luxury-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <img 
              src="https://welltone.vn/wp-content/themes/theaston/assets/images/example/home-page-new/logo-w.svg" 
              alt="WELLTONE Logo" 
              className="h-8 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <p>© 2026 WELLTONE LUXURY RESIDENCE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="bg-luxury-black min-h-screen selection:bg-gold selection:text-luxury-black">
      <Navbar />
      <Hero />
      <Vision />
      <CoreValues />
      <Location />
      <Amenities />
      <Subdivisions />
      <GoldenValues />
      <MasterPlan />
      <VideoLibrary />
      <Gallery />
      <Contact />
      <Footer />

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-emerald text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald/30 border border-gold/30"
        >
          <Phone size={24} />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-forest text-white rounded-full flex items-center justify-center shadow-lg shadow-forest/30 border border-gold/30"
        >
          <Mail size={24} />
        </motion.button>
      </div>
    </div>
  );
}
