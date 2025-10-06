import React, { useState, useMemo } from "react";
import ServiceSidebar from "../components/Service/ServiceDetailPage/ServiceSidebar";
import PromoCard from "../components/Service/ServiceDetailPage/PromoCard";
import ServiceContent from "../components/Service/ServiceDetailPage/ServiceContent";
import { HashLink } from "react-router-hash-link"; // Import HashLink

// Sidebar items (left column)
const SERVICES = [
  { id: "muffled", label: "Muffled Hearing" },
  { id: "tinnitus", label: "Tinnitus" },
  { id: "Earache", label: "Earache" },
  { id: "Dizziness", label: "Dizziness" },
  { id: "Itchiness", label: "Itchiness" },
  { id: "DeviceIssues", label: "Device Issues" },
];

// Content for each service (right column)
const SERVICE_CONTENT = {
  muffled: {
    title: "Muffled Hearing",
    image: "/dental.png",
    intro: [
      "Blocked ears or reduced hearing clarity can be caused by a build-up of ear wax, which prevents sound from travelling effectively to the eardrum.",
      "Our micro suction treatment gently clears the wax to restore natural hearing and clarity..",
    ],
    benefitsTitle: "The benefits :",
    benefits: [
      "Noticeable improvement in hearing straight away",
      "Safe and comfortable removal without water",
      "Helps prevent further build-up and blockages",
      "Quick procedure with minimal downtime",
      "Protects delicate structures of the ear",
      "Performed by experienced audiology professionals",
    ]

  },
  tinnitus: {
    title: "Tinnitus",
    image: "/dental.png",
    intro: [
      "Ringing or buzzing sounds in the ears can sometimes be triggered or worsened by ear wax pressing on the eardrum.",
      "Gentle micro suction can relieve pressure and may help reduce tinnitus symptoms.",
    ],
    benefitsTitle: "The benefits :",
    benefits: [
      "May reduce ringing or buzzing sounds",
      "Relieves pressure in the ear canal",
      "Safe, gentle and non-invasive method",
      "Immediate results in many cases",
      "No messy drops or syringing required",
      "Carried out by trained specialists",
    ],
  },
  Earache: {
    title: "Earache",
    image: "/dental.png", // ← the large image like your screenshot
    intro: [
      "Pain or discomfort in the ear may be linked to impacted ear wax creating pressure or trapping bacteria.",
      "Micro suction quickly removes the blockage, helping to ease discomfort.",
    ],
    benefitsTitle: "The benefits :",
    benefits: [
      "Rapid relief from pressure-related pain",
      "Reduces risk of ear infections developing",
      "Comfortable and precise wax removal",
      "No risk of water entering the ear",
      "Promotes better ear canal health",
      "Professional and hygienic treatment environment",
    ]
    ,
  },
  Dizziness: {
    title: "Dizziness",
    image: "/dental.png",
    intro: [
      "Balance issues or feeling unsteady can occur if ear wax affects the inner ear or presses against the eardrum.",
      "Our team can remove the blockage to help restore balance and comfort.",
    ],
    benefitsTitle: "The benefits :",
    benefits: [
      "Can improve balance and reduce unsteadiness",
      "Restores normal ear canal function",
      "Safe, gentle technique with no water used",
      "Fast, targeted treatment",
      "Helps prevent recurrent wax build-up",
      "Performed by skilled audiology practitioners",
    ]
    ,
  },
  Itchiness: {
    title: "Itchiness",
    image: "/dental.png",
    intro: [
      "An uncomfortable itching sensation can occur if wax builds up and irritates the ear canal skin.",
      "Micro suction removes the irritant and leaves your ears feeling fresh and clear.",
    ],
    benefitsTitle: "The benefits :",
    benefits: [
      "Immediate relief from irritation and itching",
      "Clears out dry or flaky wax build-up",
      "Helps maintain healthy ear canal skin",
      "No need for pre-softening ear drops",
      "Non-invasive and pain-free",
      "Safe for sensitive ears",
    ]
    ,
  },
  DeviceIssues: {
    title: "Device Issues",
    image: "/dental.png",
    intro: [
      "Trouble using hearing aids or earphones can happen if wax blocks sound or causes feedback.",
      "Clearing the wax helps your devices work properly and comfortably again.",
    ],
    benefitsTitle: "The benefits :",
    benefits: [
      "Improves sound quality from hearing aids or earphones",
      "Prevents feedback or whistling noises",
      "Helps hearing tests produce accurate results",
      "Reduces the risk of ear infections from trapped moisture",
      "Simple and quick procedure",
      "Professional care tailored to your needs",
    ]
    ,
  },
};

export default function ServiceDetail() {
  const [activeId, setActiveId] = useState("muffled");

  const active = useMemo(() => {
    // Fallback to the first item if an unknown id is passed
    return SERVICE_CONTENT[activeId] ?? SERVICE_CONTENT[SERVICES[0].id];
  }, [activeId]);

  return (
    <main className="py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid gap-6 lg:grid-cols-[320px_1fr]">
        {/* Left column: sidebar + promo */}
        <div className="space-y-6">
          <ServiceSidebar
            items={SERVICES}
            activeId={activeId}
            onSelect={setActiveId}
          />

          <PromoCard
            tag="Online Appointment"
            title="Enhance Your Hearing with Professional Ear Cleaning"
            cta="Make Appointment"
            image="/images/promo-whitening.jpg"
            // The `onClick` function is replaced with HashLink
            onsetClick={() => {}}
          />
        </div>

        {/* Right column: service content */}
        <ServiceContent
          title={active.title}
          image={active.image}
          intro={active.intro}
          benefitsTitle={active.benefitsTitle}
          benefits={active.benefits}
        />
      </div>
    </main>
  );
}
