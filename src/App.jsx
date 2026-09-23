// App.jsx
import React, { useEffect, useState } from 'react';
import Header from './Header'; // 👈 १. इथे तुमचा Header कम्पोनंट इम्पोर्ट केला आहे

function App() {
  const [bankData, setBankData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tenant = urlParams.get('tenant'); 

    if (!tenant) {
      setError("कृपया URL मध्ये योग्य बँकेचा आयडी टाका. उदा. ?tenant=janata");
      setLoading(false);
      return;
    }

    async function fetchBank() {
      try {
        // डेटाबेसमधून येणारा तात्पुरता डेटा
        if (tenant === 'janata') {
          setBankData({ 
            bank_name: "जनता सहकारी बँक", 
            primary_color: "#f68b1e", // भगवा/नारंगी रंग
            secondary_color: "#003366" 
          });
        } else if (tenant === 'maharashtra') {
          setBankData({ 
            bank_name: "बँक ऑफ महाराष्ट्र", 
            primary_color: "#003366", // गडद निळा रंग
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

  // 👈 २. हा नवीन ब्लॉक बँकेचा रंग संपूर्ण सिस्टीमला (CSS ला) अप्लाय करेल
  useEffect(() => {
    if (bankData?.primary_color) {
      document.documentElement.style.setProperty('--primary-color', bankData.primary_color);
    }
  }, [bankData]);

  if (loading) return <div style={{ padding: '20px', textAlign: 'center' }}>बँकेची वेबसाईट लोड होत आहे...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>त्रुटी: {error}</div>;

  return (
    <div style={{ backgroundColor: '#f4f5f7', minHeight: '100vh' }}>
      
      {/* App.jsx मधील ओळ क्रमांक ६४ च्या आसपास असा बदल करा */}
      <Header bankName={bankData?.bank_name} />

      {/* 📊 बँकेचा मुख्य बॅनर (Hero Section) */}
      <div style={{ 
        backgroundColor: 'var(--primary-color)', // 👈 डेटाबेसचा रंग इथे अप्लाय होईल
        padding: '80px 20px', 
        color: '#ffffff',
        textAlign: 'center',
        transition: 'background-color 0.3s ease' // रंग बदलताना स्मूथ दिसेल
      }}>
        <h1 style={{ color: '#ffffff', fontSize: '40px', margin: 0 }}>{bankData?.bank_name}</h1>
        <p style={{ fontSize: '18px', marginTop: '10px' }}>तुमचे डिजिटल बँकिंग पोर्टलवर स्वागत आहे.</p>
      </div>

      {/* 💡 इथे खाली तुम्ही तुमचे पुढील कॅल्क्युलेटर किंवा इतर डिझाईन बनवू शकता */}
      <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px' }}>
        <h3>मुख्य सेवा आणि सुविधा</h3>
        <p>डेटाबेसमधील फिचर फ्लॅग्ज (Feature Flags) नुसार इथे माहिती दाखवली जाईल.</p>
      </div>

    </div>
  );
}

export default App;
