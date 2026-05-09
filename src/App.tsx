import React, { useState, useEffect } from 'react';
import heroImg from './assets/hero.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <span className="gradient-text">DX</span>ENTERPRISE
        </div>
        <div className="nav-links">
          <a href="#services">Dịch vụ</a>
          <a href="#pricing">Bảng giá</a>
          <a href="#contact" className="phone-link">📞 0974.095.248</a>
          <a href="#contact" className="btn btn-primary btn-sm">Bắt đầu ngay</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="hero">
    <div className="container hero-content">
      <div className="hero-text animate-fade-up">
        <div className="badge glass">Demo chỉ với 500k</div>
        <h1>Thay Thế Excel Bằng <br /><span className="gradient-text">Quản Lý Thông Minh</span></h1>
        <p>Số hóa quy trình, tích hợp AI để tối ưu vận hành. Chỉ 500k để có ngay bản demo theo đúng yêu cầu của bạn.</p>
        <div className="hero-btns">
          <a href="#pricing" className="btn btn-primary">Xem bảng giá</a>
          <a href="#contact" className="btn btn-outline">Nhận tư vấn 24/7</a>
        </div>
      </div>
      <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="visual-wrapper">
          <img src={heroImg} alt="Software Management Demo" className="hero-img" />
          <div className="glow-effect"></div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: 'Thay Thế Excel', desc: 'Chuyển đổi các bảng tính Excel rời rạc sang hệ thống quản lý tập trung và tự động.', icon: '📈' },
    { title: 'Tích Hợp AI', desc: 'Ứng dụng trí tuệ nhân tạo để phân tích dữ liệu và dự báo xu hướng kinh doanh.', icon: '🧠' },
    { title: 'Support 24/24', desc: 'Đội ngũ IT chuyên nghiệp luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.', icon: '🛡️' },
    { title: 'Update Miễn Phí', desc: 'Liên tục cập nhật tính năng mới theo yêu cầu mà không tốn thêm chi phí.', icon: '🚀' }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">Tại Sao Chọn Chúng Tôi?</h2>
          <p>Giải pháp tối ưu giúp bạn số hóa quy trình với chi phí tiết kiệm nhất.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card glass animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="pricing-section">
    <div className="container">
      <div className="section-header">
        <h2 className="gradient-text">Chi Phí Linh Hoạt</h2>
        <p>Đầu tư thông minh cho sự phát triển bền vững của doanh nghiệp.</p>
      </div>
      <div className="pricing-grid">
        <div className="pricing-card glass animate-fade-up">
          <div className="pricing-header">
            <h3>Bản Demo</h3>
            <div className="price">500.000đ</div>
            <p>Trải nghiệm thực tế</p>
          </div>
          <ul className="pricing-features">
            <li>Giao diện theo yêu cầu</li>
            <li>Full tính năng cơ bản</li>
            <li>Dùng thử 30 ngày</li>
            <li>Hỗ trợ setup ban đầu</li>
          </ul>
          <a href="#contact" className="btn btn-outline">Đăng ký Demo</a>
        </div>
        <div className="pricing-card glass featured animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="badge-featured">Phổ biến nhất</div>
          <div className="pricing-header">
            <h3>Thuê Hàng Tháng</h3>
            <div className="price">1.000.000đ<span>/tháng</span></div>
            <p>Vận hành chuyên nghiệp</p>
          </div>
          <ul className="pricing-features">
            <li>Database riêng biệt</li>
            <li>Update theo yêu cầu FREE</li>
            <li>Hỗ trợ IT 24/24</li>
            <li>Bảo trì hệ thống định kỳ</li>
            <li>Không giới hạn người dùng</li>
          </ul>
          <a href="#contact" className="btn btn-primary">Bắt đầu ngay</a>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="stats-section glass">
    <div className="container stats-grid">
      <div className="stat-item">
        <h2 className="gradient-text">24/7</h2>
        <p>Hỗ trợ kỹ thuật</p>
      </div>
      <div className="stat-item">
        <h2 className="gradient-text">0đ</h2>
        <p>Phí cập nhật</p>
      </div>
      <div className="stat-item">
        <h2 className="gradient-text">100%</h2>
        <p>Dữ liệu riêng tư</p>
      </div>
      <div className="stat-item">
        <h2 className="gradient-text">1M</h2>
        <p>Phí duy trì cực thấp</p>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section id="contact" className="cta-section">
    <div className="container glass cta-inner">
      <h2 className="gradient-text">Khởi Đầu Chặng Đường Số Hóa?</h2>
      <p>Chỉ với 500k để có ngay bản demo theo đúng ý tưởng của bạn. <br />Liên hệ ngay Hotline/Zalo: <strong>0974.095.248</strong></p>
      <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Số điện thoại của bạn" className="glass" />
        <button className="btn btn-primary">Gửi yêu cầu ngay</button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">
      <div className="footer-info">
        <div className="logo"><span className="gradient-text">DX</span>ENTERPRISE</div>
        <p>Giải pháp phần mềm quản lý theo yêu cầu chuyên nghiệp, bảo mật và tiết kiệm.</p>
      </div>
      <div className="footer-links">
        <div>
          <h4>Liên kết</h4>
          <a href="#">Trang chủ</a>
          <a href="#services">Dịch vụ</a>
          <a href="#pricing">Bảng giá</a>
        </div>
        <div>
          <h4>Liên hệ</h4>
          <p>Hotline/Zalo: <strong>0974.095.248</strong></p>
          <p>Email: support@dxent.vn</p>
          <p>Hệ thống: Private Database</p>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2026 DX Enterprise. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
