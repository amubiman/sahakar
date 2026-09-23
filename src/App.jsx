import React, { useEffect, useState } from 'react';
import Header from './Header'; // बँकेचा जुना हेडर [4]

function App() {
  const [bankData, setBankData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tenantName, setTenantName] = useState(null); // 🟢 टेनंटचे नाव स्टोर करण्यासाठी

  useEffect(() => {
    // 🟢 URL मधून हॅशच्या आधी किंवा नंतर असलेला 'tenant' शोधणारा अचूक कोड [4]
    const fullSearch = window.location.search || window.location.hash.split('?')[1] || '';
    const urlParams = new URLSearchParams(fullSearch);
    const tenant = urlParams.get('tenant'); 

    // 🟢 जर टेनंट नसेल, तर लोड स्क्रीन बंद करा आणि मुख्य लँडिंग पेज दाखवा [4]
    if (!tenant) {
      setTenantName(null);
      setLoading(false);
      return;
    }

    setTenantName(tenant);
  
    async function fetchBank() {
      try {
        // डेटाबेसमधून येणारा तात्पुरता डेटा [4]
        if (tenant === 'janata') {
          setBankData({ 
            bank_name: "जनता सहकारी बँक", 
            primary_color: "#f68b1e", // भगवा/नारंगी रंग [4]
            secondary_color: "#003366" 
          });
        } else if (tenant === 'maharashtra') {
          setBankData({ 
            bank_name: "बँक ऑफ操作 महाराष्ट्र", 
            primary_color: "#003366", // गडद निळा रंग [4]
            secondary_color: "#ffcc00" 
          });
        } else {
          setError("या नावाचा टेनंट (बँक) उपलब्ध नाही.");
        }
      } catch (err) {
        setError("डेटा लोड करताना त्रुटी आली.");
      } finally {
        setLoading(false);
      }
    }

    fetchBank();
  }, []);

  // 🟢 बँकेचा रंग संपूर्ण सिस्टीमला अप्लाय करण्याचा ब्लॉक [4]
  useEffect(() => {
    if (bankData?.primary_color) {
      document.documentElement.style.setProperty('--primary-color', bankData.primary_color);
    } else {
      // मुख्य डोमेनसाठी कॉर्पोरेट निळा रंग
      document.documentElement.style.setProperty('--primary-color', '#0f172a');
    }
  }, [bankData]);

  if (loading) return <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>पोर्टल लोड होत आहे...</div>;

  // 🔴 ==========================================
  // १. मुख्य डोमेनचे लँडिंग पेज डिझाईन (Without Tenant) [4]
  // ==========================================
  if (!tenantName) {
    return (
      <div style={{ fontFamily: 'sans-serif', color: '#334155', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
        {/* मुख्य नॅव्हिबार */}
        <nav style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', padding: '20px 40px', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ fontWeight: 'bold', fontSize: '24px', color: '#0f172a' }}>🏛️ सहकार</div>
          <div style={{ marginLeft: 'auto' }}>
            <a href="#features" style={{ margin: '0 15px', color: '#475569', textDecoration: 'none' }}>वैशिष्ट्ये</a>
            <a href="#pricing" style={{ margin: '0 15px', color: '#475569', textDecoration: 'none' }}>प्लॅन्स</a>
            <button style={{ marginLeft: '15px', padding: '10px 20px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>बँक रजिस्टर करा</button>
          </div>
        </nav>

        {/* मुख्य बॅनर (Hero Section) */}
        <header style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: '#0f172a', color: '#ffffff' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: '80px' }}>सहकारी बँकांसाठी सर्वसमावेशक डिजिटल प्लॅटफॉर्म</h1>
          <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '800px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
            तुमच्या बँकेला काही मिनिटांत ऑनलाईन आणा. ५००+ फीचर्स, सुरक्षित कोअर बँकिंग आणि अत्याधुनिक डॅशबोर्डसह तुमचे सबडोमेन थेट सुरू करा.
          </p>
          <div>
            <a href="#/?tenant=janata" style={{ display: 'inline-block', margin: '10px', padding: '12px 24px', backgroundColor: '#f68b1e', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>Demo: जनता बँक</a>
            <a href="#/?tenant=maharashtra" style={{ display: 'inline-block', margin: '10px', padding: '12px 24px', backgroundColor: '#003366', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>Demo: महाराष्ट्र बँक</a>
          </div>
        </header>

        {/* फीचर्स सेक्शन */}
        <section style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '50px' }}>प्लॅटफॉर्मची प्रमुख वैशिष्ट्ये</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', color: '#2563eb', marginTop: 0 }}>⚡ झटपट सबडोमेन</h3>
              <p style={{ lineHeight: '1.5' }}>तुमच्या बँकेच्या नावाने स्वतंत्र सबडोमेन (उदा. ://sahakar.com) अवघ्या काही सेकंदांत सुरू करा.</p>
            </div>
            <div style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', color: '#2563eb', marginTop: 0 }}>🎨 कस्टमाईझ थीम</h3>
              <p style={{ lineHeight: '1.5' }}>मास्टर ॲडमीन पॅनलवरून तुमच्या बँकेचे अधिकृत लोगो, ब्रँड कलर्स आणि नाव मॅन्युअल कोड न बदलता सेट करा.</p>
            </div>
            <div style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', color: '#2563eb', marginTop: 0 }}>📊 ॲडमीन कंट्रोल</h3>
              <p style={{ lineHeight: '1.5' }}>प्रत्येक बँकेला स्वतःचा स्वतंत्र ॲडमीन पॅनल मिळेल, जिथून व्याजदर, योजना आणि युझर्स मॅनेज करता येतील.</p>
            </div>
          </div>
        </section>

        {/* फुटर */}
        <footer style={{ backgroundColor: '#1e293b', color: '#94a3b8', padding: '40px 20px', textAlign: 'center', marginTop: 'auto' }}>
          <p>© 2026 सहकार डिजिटल बँकिंग SaaS प्लॅटफॉर्म. सर्व हक्क सुरक्षित.</p>
        </footer>
      </div>
    );
  }

  // 🔴 ==========================================
  // २. टेनंट पोर्टल डिझाईन (बँक चालू झाल्यावर - With Tenant) [4]
  // ==========================================
  if (error) return <div style={{ padding: '20px', color: 'red', textAlign: 'center', fontFamily: 'sans-serif' }}>त्रुटी: {error}</div>; [4]

  return (
    <div style={{ backgroundColor: '#f4f5f7', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* बँकेचा हेडर [4] */}
      <Header bankName={bankData?.bank_name} />

      {/* 📊 बँकेचा मुख्य बॅनर (Hero Section) [4] */}
      <div style={{ 
        backgroundColor: 'var(--primary-color)', // डेटाबेसचा रंग इथे अप्लाय होईल [4]
        padding: '80px 20px', 
        color: '#ffffff',
        textAlign: 'center',
        transition: 'background-color 0.3s ease'
      }}>
        <h1 style={{ color: '#ffffff', fontSize: '40px', margin: 0 }}>{bankData?.bank_name}</h1> [4]
        <p style={{ fontSize: '18px', marginTop: '10px' }}>तुमचे डिजिटल बँकिंग पोर्टलवर स्वागत आहे.</p> [4]
      </div>

      {/* बँकेच्या इतर सेवा [4] */}
      <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px' }}>
        <h3>मुख्य सेवा आणि सुविधा</h3> [4]
        <p>डेटाबेसमधील फिचर फ्लॅग्ज (Feature Flags) नुसार इथे माहिती दाखवली जाईल.</p> [4]
      </div>

    </div>
  );
}

export default App;
