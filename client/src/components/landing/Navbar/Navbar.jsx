import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

import Button from "../../ui/Button";
import Container from "../../ui/Container";

import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#hero",
  },
  {
    label: "Workflow",
    href: "#workflow",
  },
  {
    label: "Departments",
    href: "#departments",
  },
  {
    label: "Architecture",
    href: "#architecture",
  },
  {
    label: "Analytics",
    href: "#analytics",
  },
];

export default function Navbar({
  onGrantAccess,
}) {
  const [isScrolled, setIsScrolled] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("hero");

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileOpen(false);
  };

  const handleNavigation = (
    e,
    href
  ) => {
    e.preventDefault();

    const target =
      document.querySelector(href);

    if (!target) return;

    closeMenu();

    const navbarHeight = 90;

    const top =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const isActive = (href) =>
    activeSection === href.replace("#", "");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(
              entry.target.id
            );
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin:
          "-80px 0px -45% 0px",
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className={`${styles.navbar} ${
          isScrolled
            ? styles.navbarScrolled
            : ""
        }`}
      >
        <Container size="xl">

          <div className={styles.inner}>

            <a
              href="#hero"
              className={styles.logo}
              onClick={(e) =>
                handleNavigation(e, "#hero")
              }
            >
              <div
                className={
                  styles.logoIcon
                }
              >
                <ShieldCheck
                  size={22}
                />
              </div>

              <div
                className={
                  styles.logoContent
                }
              >
                <span
                  className={
                    styles.logoTitle
                  }
                >
                  Enterprise AI
                </span>

                <span
                  className={
                    styles.logoSubtitle
                  }
                >
                  Knowledge Hub
                </span>
              </div>
            </a>

            <nav
              className={
                styles.desktopNav
              }
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) =>
                    handleNavigation(
                      e,
                      item.href
                    )
                  }
                  className={`
                    ${styles.navLink}
                    ${
                      isActive(item.href)
                        ? styles.active
                        : ""
                    }
                  `}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div
              className={
                styles.actions
              }
            >
              <Button
  variant="primary"
  onClick={() => onGrantAccess?.()}
>
  Grant Access
  <ChevronRight size={18} />
</Button>

              <button
                onClick={
                  toggleMenu
                }
                className={
                  styles.mobileButton
                }
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
              >
                {mobileOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>

          </div>

        </Container>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.25,
              }}
              onClick={closeMenu}
            />

            <motion.aside
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              className={styles.mobileDrawer}
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
              }}
            >
              <div className={styles.drawerHeader}>

                <div className={styles.drawerLogo}>

                  <div className={styles.logoIcon}>
                    <ShieldCheck size={20} />
                  </div>

                  <div className={styles.logoContent}>
                    <span className={styles.logoTitle}>
                      Enterprise AI
                    </span>

                    <span className={styles.logoSubtitle}>
                      Knowledge Hub
                    </span>
                  </div>

                </div>

                <button
                  className={styles.closeButton}
                  onClick={closeMenu}
                >
                  <X size={24} />
                </button>

              </div>

              <nav className={styles.mobileNav}>

                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={(e) =>
                      handleNavigation(
                        e,
                        item.href
                      )
                    }
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <span>
                      {item.label}
                    </span>

                    <ChevronRight
                      size={18}
                    />
                  </motion.a>
                ))}

              </nav>

              <div className={styles.drawerFooter}>

                <Button
                  fullWidth
                  variant="primary"
                  onClick={() => {
                    closeMenu();

                    onGrantAccess?.();
                  }}
                >
                  Grant Access
                </Button>

              </div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
