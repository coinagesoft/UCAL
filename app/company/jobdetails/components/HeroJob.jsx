export default function HeroJob() {
  return (
    <section
      style={{
         padding: "80px clamp(20px, 6vw, 80px) 0", // ✅ SAME as JD
        background: "#f8f9fb",
      }}
    >
      <div
        style={{
          maxWidth: "1280px", // ✅ SAME as JD container
          margin: "0 auto",
         borderRadius: "12px 12px 0 0",
          overflow: "hidden", // ✅ keeps rounded corners clean
        }}
      >
        <img
          src="/media/img32.png"
          alt="Security Banner"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}