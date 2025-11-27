import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Always initialize theme based on system preference
  const [theme, setTheme] = useState(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // No localStorage - always use system preference on next visit
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', url: '#about' },
    { name: 'Skills & Expertise', url: '#skills-expertise' },
    { name: 'Experience', url: '#experience' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav container" role="navigation" aria-label="Main navigation">

          {/* Left Section: Navigation Links */}
          <div className="nav-left desktop-nav">
            <ol>
              {navLinks.map((link, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <a href={link.url}>{link.name}</a>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Center Section: Logo */}
          <div className="nav-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="logo"
            >
              <a href="#">~/dharmik-patel $</a>
            </motion.div>
          </div>

          {/* Right Section: Actions */}
          <div className="nav-right desktop-nav">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="theme-toggle-wrapper"
            >
              <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="resume-buttons"
            >
              <a
                href="/resume.pdf"
                className="btn-resume"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume in new tab"
              >
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download="Dharmikbhai_Patel_Resume.pdf"
                className="btn-resume btn-resume-download"
                aria-label="Download resume PDF"
              >
                Download
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="mobile-nav"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <ol>
                  {navLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.url} onClick={closeMobileMenu}>{link.name}</a>
                    </li>
                  ))}
                </ol>
                <div className="mobile-nav-actions">
                  <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                  </button>
                  <a
                    href="/resume.pdf"
                    className="btn-resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    aria-label="View resume in new tab"
                  >
                    View Resume
                  </a>
                  <a
                    href="/resume.pdf"
                    download="Dharmikbhai_Patel_Resume.pdf"
                    className="btn-resume btn-resume-download"
                    onClick={closeMobileMenu}
                    aria-label="Download resume PDF"
                  >
                    Download
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Header;
