import React, { useState } from "react";

// ✅ ONE COMPONENT with CLICK POPUP (LIGHTBOX)
// Uses your exact H/V pattern

const Gallery = () => {
  const images = [
    { src: "/n1.jpeg", type: "h" },
    { src: "/n2.jpeg", type: "v" },
    { src: "/n3.jpeg", type: "h" },
    { src: "/n4.jpeg", type: "v" },
    { src: "/n5.jpeg", type: "h" },
    { src: "/n6.jpeg", type: "v" },
    { src: "/n7.jpeg", type: "h" },
    { src: "/n8.jpeg", type: "v" },
    { src: "/n9.jpeg", type: "v" },
  ];

  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-semibold">Gallery</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-6 auto-rows-[180px] md:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImage(img.src)}
              className={`cursor-pointer overflow-hidden rounded-2xl shadow-lg ${
                img.type === "v" ? "row-span-2" : "row-span-1"
              }`}
            >
              <img
                src={img.src}
                alt={`gallery-${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* POPUP / MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="popup"
            className="max-h-[90vh] max-w-[90vw] rounded-xl"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;

/*
✔ Click image → popup view
✔ Click outside → close
✔ Clean lightbox style
✔ Single component
✔ Tailwind only
*/