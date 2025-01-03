"use client";

import React, { useState, useRef } from "react";

const FloatingButtons: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);
  const webViewRef = useRef<HTMLIFrameElement | null>(null);

  const buttons = [
    { id: "uyap", name: "UYAP", link: "https://www.uyap.gov.tr" },
    { id: "resmi-gazete", name: "Resmi Gazete", link: "https://www.resmigazete.gov.tr" },
    { id: "tbb", name: "TBB", link: "https://www.barobirlik.org.tr" },
    { id: "yargitay", name: "Yargıtay", link: "https://www.yargitay.gov.tr" },
    { id: "danistay", name: "Danıştay", link: "https://www.danistay.gov.tr" },
    { id: "anayasa", name: "Anayasa Mahkemesi", link: "https://www.anayasa.gov.tr" },
    { id: "adalet", name: "Adalet Bakanlığı", link: "https://www.adalet.gov.tr" },
    { id: "tnb", name: "TNB", link: "https://www.tnb.org.tr" },
    { id: "gib", name: "GİB", link: "https://www.gib.gov.tr" },
    { id: "edevlet", name: "e-Devlet", link: "https://www.turkiye.gov.tr" },
    { id: "hsk", name: "HSK", link: "https://www.hsk.gov.tr" },
    { id: "meb", name: "MEB Mevzuat", link: "https://www.meb.gov.tr" },
    { id: "cevre", name: "Çevre Bakanlığı", link: "https://www.csb.gov.tr" },
    { id: "ticaret", name: "Ticaret Sicil Gazetesi", link: "https://www.ticaretsicil.gov.tr" },
    { id: "patent", name: "Patent", link: "https://www.turkpatent.gov.tr" },
    { id: "kvkk", name: "KVKK", link: "https://www.kvkk.gov.tr" },
    { id: "sgk", name: "SGK", link: "https://www.sgk.gov.tr" },
    { id: "tuik", name: "TÜİK", link: "https://www.tuik.gov.tr" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 1000,
      }}
    >
      {/* Ana Buton */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "all 0.3s ease",
        }}
      >
        {isOpen ? "×" : "+"}
      </button>

      {/* Liste */}
      {isOpen && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            maxHeight: "400px",
            overflowY: "auto",
            position: "relative",
          }}
        >
          {/* Kapatma Butonu */}
          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute",
              top: "-30px",
              right: "10px",
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              color: "black",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            ×
          </button>

          {buttons.map((button) => (
            <div
              key={button.id}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                height: "100px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                cursor: "pointer",
                textAlign: "center",
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.9)",
                transition: "all 0.3s ease",
              }}
            >
              <a
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {button.name}
              </a>
            </div>
          ))}

          {/* Yargıtay Karar Arama Webview Butonu */}
          <button
            onClick={() => setIsWebViewVisible(!isWebViewVisible)}
            style={{
              padding: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {isWebViewVisible ? "WebView Gizle" : "Karar Arama"}
          </button>
        </div>
      )}

      {/* WebView */}
      <div style={{ display: isWebViewVisible ? "block" : "none" }}>
        <iframe
          ref={webViewRef}
          src="https://karararama.yargitay.gov.tr"
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            width: "400px",
            height: "600px",
            border: "2px solid rgba(0, 0, 0, 0.7)",
            borderRadius: "10px",
            zIndex: 1000,
            backgroundColor: "white",
          }}
        />
      </div>
    </div>
  );
};

export default FloatingButtons;
