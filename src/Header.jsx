// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 👈 इथे आपण 'bankName' प्रोप (Prop) म्हणून स्वीकारत आहोत
export default function Header({ bankName }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuData = [
    { title: "Home", path: "/" },
    {
      title: "About",
      items: [
        { label: "About Us", path: "#" },
        { label: "Board of Director", path: "#" },
        { label: "Board of Management", path: "#" },
        { label: "Branches", path: "#" }
      ]
    },
    {
      title: "Deposit",
      items: [
        { label: "Saving a/c", path: "#" },
        { label: "Current a/c", path: "#" },
        { label: "Recurring Deposit", path: "#" },
        { label: "Fixed Deposit", path: "#" },
        { label: "Scholarship Saving", path: "#" },
        { label: "Deposit Interest Rate", path: "#" }
      ]
    },
    {
      title: "Loans",
      items: [
        { label: "Loan Schemes", path: "#" },
        { label: "Home Loan", path: "#" },
        { label: "Gold Loan", path: "#" },
        { label: "Crop Loan", path: "#" },
        { label: "Vehicle Loan", path: "#" },
        { label: "Cash Credit", path: "#" },
        { label: "Term Loan Hypothecation", path: "#" },
        { label: "Term Loan Agri", path: "#" }
      ]
    },
    {
      title: "Service",
      items: [
        { label: "ATM Service", path: "#" },
        { label: "SMS Service", path: "#" },
        { label: "NEFT / RTGS / IMPS", path: "#" },
        { label: "UPI Facility", path: "#" },
        { label: "Whatsapp Banking", path: "#" },
        { label: "Net Banking", path: "#" }
      ]
    },
    { title: "Media", path: "#" },
    { title: "Contact Us", path: "#" },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.navContainer}>
        {/* 🏢 डाव्या बाजूला बँकेनुसार बदलणारा लोगो आणि नाव */}
        <div style={styles.logoSection}>
          <Link to="/" style={styles.logoLink}>
            {/* 👈 इथे लोगोचा बॅकग्राउंड रंग बँकेनुसार स्वयंचलित बदलेल */}
            <div style={{...styles.logoPlaceholder, backgroundColor: 'var(--primary-color)'}}>LOGO</div>
            {/* 👈 इथे 'माझी पतसंस्था' ऐवजी आपण डायनॅमिक नाव दाखवत आहोत */}
            <span style={styles.logoText}>{bankName || "माझी पतसंस्था"}</span>
          </Link>
        </div>

        {/* 🗺️ उजव्या बाजूला मेनू बार */}
        <nav style={styles.navLinks}>
          {menuData.map((menu, index) => (
            <div
              key={index}
              style={styles.menuWrapper}
              onMouseEnter={() => menu.items && setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {menu.items ? (
                <button style={styles.navItem}>
                  {menu.title} <span style={{ fontSize: '10px' }}>▼</span>
                </button>
              ) : (
                <Link to={menu.path} style={styles.navItemLink}>
                  {menu.title}
                </Link>
              )}

              {menu.items && activeDropdown === index && (
                <div style={styles.dropdownMenu}>
                  {menu.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      style={styles.dropdownItem}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <Link to="/admin" style={styles.adminLink}>⚙️ Admin</Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '15px 20px',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    gap: '10px',
  },
  logoPlaceholder: {
    width: '45px',
    height: '45px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '11px',
    transition: 'background-color 0.3s ease'
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  menuWrapper: {
    position: 'relative',
  },
  navItem: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#444',
    padding: '10px 15px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'all 0.2s',
  },
  navItemLink: {
    textDecoration: 'none',
    color: '#444',
    padding: '10px 15px',
    fontSize: '15px',
    fontWeight: '600',
    display: 'inline-block',
    borderRadius: '4px',
    transition: 'all 0.2s',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '35px',
    left: 0,
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
    borderRadius: '6px',
    padding: '8px 0',
    minWidth: '220px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #eee',
  },
  dropdownItem: {
    textDecoration: 'none',
    color: '#333',
    padding: '10px 20px',
    fontSize: '14px',
    textAlign: 'left',
    transition: 'background 0.2s',
    borderBottom: '1px solid #f9f9f9',
  },
  adminLink: {
    textDecoration: 'none',
    color: '#28a745',
    padding: '8px 12px',
    fontSize: '14px',
    fontWeight: 'bold',
    border: '1px solid #28a745',
    borderRadius: '4px',
    marginLeft: '15px',
  }
};
