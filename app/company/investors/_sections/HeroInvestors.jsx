"use client";

import React from 'react';

export default function HeroInvestors() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "560px",
        paddingTop: "120px",
        display: "flex",
        // alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#282270", 
        fontFamily: "'Urbanist', sans-serif",
        marginTop: "-20px", // Ensure no top margin
        // paddingBottom: "190px", // navbar offset
    
      }}
    >
      {/* Background Image - Positioned to the right to match the businessman's placement */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/media/img52.png')", 
          backgroundSize: "cover",
          backgroundPosition: "bottom right",
          // Ensure no top margin 
          zIndex: 1
        }}
      />

      {/* The Blend: This matches the specific blue-to-transparent fade in your screenshot */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, #282270 0%, #282270 35%, rgba(40, 34, 112, 0.6) 60%, rgba(40, 34, 112, 0) 100%)",
          zIndex: 2
        }}
      />

      {/* CONTENT BLOCK */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          paddingLeft: "20px", // Increased padding for that exact look
          paddingRight: "60px",
        }}
      >
        <div
          style={{
            width: "650px", // Tightened width to match the line breaks in your image
            display: "flex",
            flexDirection: "column",
            gap: "28px", 
          }}
        >
          {/* TITLE */}
          <h1
            style={{
              fontSize: "52px", 
              fontWeight: "600",
              lineHeight: "1.1",
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: "-0.01em"
            }}
          >
            Transparent.Accountable.<br />
            Built for the Long Term.
          </h1>

          {/* DESCRIPTION */}
          <p
            style={{
              fontSize: "17px",
              lineHeight: "26px",
              color: "#FFFFFF",
              opacity: 0.85,
              margin: 0,
              maxWidth: "520px",
            }}
          >
            UCAL is a publicly listed automotive component manufacturer 
            committed to governance that matches the quality standards we 
            hold in our plants — rigorous, documented, and consistently 
            delivered.
          </p>

          {/* BUTTON */}
          <div style={{ marginTop: "10px" }}>
            <button
              style={{
            //     backgroundColor: "#79B933", 
            //     color: "#FFFFFF",
            //     padding: "12px 28px",
            //     borderRadius: "999px",
            //     border: "none",
                fontSize: "16px",
                fontWeight: "400",
            //     cursor: "pointer",
            //     transition: "background 0.3s ease",
              }}
            className='custom-btn'
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6aa32d")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#79B933")}
            >
              Request For Quote
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          div[style*="paddingLeft: 110px"] {
            padding-left: 40px !important;
            padding-right: 40px !important;
          }
          div[style*="width: 650px"] {
            width: 100% !important;
          }
        }
        @media (max-width: 768px) {
          section {
            height: auto !important;
            min-height: 480px;
            padding: 50px 0;
          }
          h1 {
            font-size: 34px !important;
          }
        }
      `}</style>
    </section>
  );
}