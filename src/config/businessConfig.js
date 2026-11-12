export const BUSINESS_CONFIG = {
  name: "HYPERGLOSS CUSTOM",
  tagline: "CLEANER. SHINER. LONGER.",
  subTagline: "Premium Car Wash, Precision Detailing & Automotive Customization Studio",
  established: "2021",
  rating: "4.9",
  reviewCount: "385+",
  vehiclesDetailed: "2,500+",
  experienceYears: "5+",
  guarantee: "100% Satisfaction & Paint Warranty",
  
  contact: {
    phone: "+91 98765 43210",
    altPhone: "+91 11 4567 8900",
    whatsapp: "919876543210",
    email: "booking@hyperglosscustom.com",
    address: "Plot 42, Auto Hub Avenue, Sector 62, Detailing District, NCR - 201301",
    googleMapsUrl: "https://maps.google.com/?q=Sector+62+Detailing+District",
    hours: "Monday - Sunday: 8:30 AM - 8:30 PM",
  },

  socials: {
    instagram: "https://instagram.com/hyperglosscustom",
    youtube: "https://youtube.com/@hyperglosscustom",
    facebook: "https://facebook.com/hyperglosscustom",
    whatsapp: "https://wa.me/919876543210?text=Hi%20HYPERGLOSS%20CUSTOM,%20I%20would%20like%20to%20inquire%20about%20a%20detailing%20service."
  },

  stats: [
    { value: "2,500+", label: "Vehicles Transformed", description: "From SUVs to sports sedans" },
    { value: "5+ Years", label: "Studio Mastery", description: "Certified master detailers" },
    { value: "100%", label: "Imported German Care", description: "Gtechniq, CarPro & Koch Chemie" },
    { value: "4.9 / 5", label: "Client Satisfaction", description: "Over 380+ 5-star Google reviews" }
  ],

  vehicleCategories: [
    { id: "hatchback", name: "Hatchback", examples: "Tata Altroz, i20, Swift", priceMultiplier: 1.0 },
    { id: "sedan", name: "Sedan", examples: "Honda City, Hyundai Verna, Virtus", priceMultiplier: 1.15 },
    { id: "compact_suv", name: "Compact SUV", examples: "Tata Nexon, Hyundai Creta, Kia Seltos", priceMultiplier: 1.25 },
    { id: "mid_suv", name: "Mid SUV & 4x4", examples: "Tata Harrier, Mahindra Thar, Scorpio-N", priceMultiplier: 1.4 },
    { id: "full_suv", name: "Full-Size Luxury SUV", examples: "Toyota Fortuner, Mahindra XUV700, Safari", priceMultiplier: 1.6 }
  ],

  services: [
    {
      id: "exterior-wash",
      title: "Exterior Snow Wash & Decon",
      category: "Wash",
      shortDesc: "pH-neutral foam wash, iron decontamination, clay bar treatment, wheel barrel scrub & tire dressing.",
      fullDesc: "Our signature multi-stage hand wash engineered to safely dissolve road grime, brake dust, and tar without stripping existing paint protection. Includes hydrophobic gloss rinse.",
      image: "/images/wash.jpg",
      basePrice: 1499,
      duration: "2 - 3 Hours",
      features: [
        "High-pressure snow foam soak",
        "Two-bucket grit-guard hand wash",
        "Chemical iron & tar spot removal",
        "Ceramic infused hydro-shine rinse",
        "Air blower & microfiber dry",
        "Deep tire & wheel arch restoration"
      ]
    },
    {
      id: "interior-detail",
      title: "Bespoke Interior Detailing",
      category: "Interior",
      shortDesc: "Hot-water extraction vacuuming, steam sanitation, leather conditioning & UV trim protection.",
      fullDesc: "Complete deep-cleaning of cabin surfaces. Eliminates 99.9% of bacteria, stain spots, and odors while feeding leather hide and dressing dash trims.",
      image: "/images/interior.jpg",
      basePrice: 3499,
      duration: "4 - 5 Hours",
      features: [
        "Deep carpet & upholstery steam extract",
        "Italian leather clean & pH conditioning",
        "Dashboard, vents & console brush detail",
        "Ozone antibacterial cabin treatment",
        "Streak-free anti-glare glass polishing",
        "Mat washing & stain guard shield"
      ]
    },
    {
      id: "paint-correction",
      title: "Multi-Stage Paint Correction",
      category: "Paint Correction",
      shortDesc: "Heavy compound & jewel polishing to remove 90%+ of swirl marks, scratches & hologram trails.",
      fullDesc: "Restores depth, clarity and mirror shine. Using dual-action rotaries and German Menzerna pads under 360° LED inspection lamps to erase micro-scratches.",
      image: "/images/correction.jpg",
      basePrice: 6999,
      duration: "1 - 2 Days",
      features: [
        "360° LED surface scratch audit",
        "Heavy cut compound phase for deep scratches",
        "Refinement polish for optical clarity",
        "Hologram & swirl mark removal",
        "Paint depth gauge verification",
        "Prep wipe for surface bond readiness"
      ]
    },
    {
      id: "ceramic-coating",
      title: "9H Nano Ceramic Coating",
      category: "Ceramic Shield",
      shortDesc: "Ultra-hydrophobic ceramic glass layer providing 3 to 5 years of gloss, UV defense & scratch resistance.",
      fullDesc: "Gtechniq Crystal Serum & CarPro CQuartz nano-ceramic bond forming a crystal clear 9H ceramic glass shell over vehicle clear coat. Extreme water beading and mirror depth.",
      image: "/images/ceramic.jpg",
      basePrice: 14999,
      duration: "2 Days",
      features: [
        "Dual layer 9H Nano Ceramic coat",
        "Extreme hydrophobic water bead angle (>110°)",
        "UV ray fading & acid rain protection",
        "3-Year to 5-Year written warranty",
        "Alloy rim face & caliper ceramic coat",
        "Hydrophobic glass rain repellent"
      ]
    },
    {
      id: "full-detail",
      title: "Full Signature Hypergloss Suite",
      category: "Full Detail",
      shortDesc: "Complete interior + exterior overhaul, 2-stage paint correction, engine bay dress & 1-year sealant.",
      fullDesc: "The total transformation package. Restores interior showroom aroma, engine compartment, and exterior glass clarity into a head-turning gloss statement.",
      image: "/images/hero.jpg",
      basePrice: 9999,
      duration: "1 Day",
      features: [
        "Complete snow foam wash & clay bar",
        "2-stage paint refinement polish",
        "Complete cabin steam clean & leather nourish",
        "Engine bay steam clean & plastic dressing",
        "Synthetic ceramic polymer gloss sealant",
        "Underbody flush & rim detailing"
      ]
    },
    {
      id: "customization",
      title: "Bespoke Automotive Customization",
      category: "Customization",
      shortDesc: "De-chroming, custom alloy wheels, ambient RGB lighting, body styling, wraps & PPF fitment.",
      fullDesc: "Turn your standard ride into a stance beast. From stealth piano-black de-chroming on Tata Harriers & Fortuners to custom offset alloy wheels and ambient light pods.",
      image: "/images/customization.jpg",
      basePrice: 8499,
      duration: "Custom Timeframe",
      features: [
        "Gloss/Matte Piano Black De-chroming",
        "Custom forged alloy wheel fitment",
        "Smoked matrix LED light upgrades",
        "Bespoke Italian leather seats & blue stitching",
        "Self-healing TPU Paint Protection Film (PPF)",
        "Underbody neon glow & ambient interior lighting"
      ]
    }
  ],

  packages: [
    {
      id: "essential",
      name: "ESSENTIAL GLOSS",
      tagline: "Fresh Showroom Shine & Maintenance",
      popular: false,
      basePrice: 2499,
      warranty: "1 Month Gloss Guarantee",
      features: [
        "pH-Neutral Snow Foam Hand Wash",
        "Alloy Rim Barrel & Tire Scrub",
        "Interior Vacuuming & Dust Wipe",
        "Synthetic Hydrophobic Spray Sealant",
        "Door Jambs Cleaned",
        "Glass Polish & Tire Dressing"
      ]
    },
    {
      id: "premium",
      name: "PREMIUM SHINE",
      tagline: "Deep Clean + Paint Enhancement",
      popular: true,
      basePrice: 7999,
      warranty: "6 Months Paint Defense",
      features: [
        "Complete Snow Wash & Clay Bar Treatment",
        "Single-Stage Gloss Enhancement Polish",
        "Complete Cabin Steam Sanitation & Extraction",
        "Leather Dressing & Plastic UV Shield",
        "Engine Bay Steam Wash & Dress",
        "6-Month Ceramic Spray Sealant"
      ]
    },
    {
      id: "ultimate",
      name: "ULTIMATE HYPERGLOSS",
      tagline: "Full Paint Correction + 9H Ceramic Shield",
      popular: false,
      basePrice: 17999,
      warranty: "3-Year Written Warranty",
      features: [
        "Multi-Stage Paint Correction (Swirl Free)",
        "9H Double Layer Nano Ceramic Coating",
        "Complete Interior Leather Ceramic Protection",
        "Wheel Rims & Brake Calipers Ceramic Coated",
        "Hydrophobic Rain Repellent on All Glass",
        "Annual Inspection & Complimentary Top-Up"
      ]
    },
    {
      id: "custom",
      name: "BESPOKE STANCE & PPF",
      tagline: "Total Stealth Customization & Protection",
      popular: false,
      basePrice: 34999,
      warranty: "5 to 10 Year TPU Warranty",
      features: [
        "Self-Healing TPU Paint Protection Film (PPF)",
        "Full Gloss / Satin Piano Black De-Chroming",
        "Custom Alloy Rims & Electric Blue Calipers",
        "Ambient RGB Interior & Underbody Lighting",
        "Custom Leather Seats & Headliner Upgrade",
        "Full Hypergloss Detailing Included"
      ]
    }
  ],

  customizationModules: [
    {
      id: "wheels",
      title: "Forged Alloy Wheels & Stance",
      desc: "Custom offset rims, wheel spacer fitment, gloss black powder coating & electric blue calipers.",
      icon: "CircleDot",
      image: "/images/customization.jpg"
    },
    {
      id: "dechrome",
      title: "Stealth Piano Black De-Chroming",
      desc: "Eliminate bright chrome trims on Tata Harrier, Fortuner, Safari or Creta into aggressive gloss black.",
      icon: "ShieldAlert",
      image: "/images/hero.jpg"
    },
    {
      id: "lighting",
      title: "Matrix LED & Ambient RGB",
      desc: "App-controlled interior ambient lighting lines, smoked taillights, and dynamic DRL halo rings.",
      icon: "Zap",
      image: "/images/wash.jpg"
    },
    {
      id: "interior_custom",
      title: "Bespoke Leather & Blue Stitching",
      desc: "Handcrafted Nappa leather seat upgrades, carbon fiber steering wheel trims, and starhead lights.",
      icon: "Sparkles",
      image: "/images/interior.jpg"
    },
    {
      id: "ppf",
      title: "Self-Healing TPU Film (PPF)",
      desc: "Instant stone-chip defense, self-healing scratches with heat, and optical clear gloss protection.",
      icon: "ShieldCheck",
      image: "/images/ceramic.jpg"
    },
    {
      id: "paint_corr",
      title: "Hyper Mirror Paint Correction",
      desc: "Eliminate 95%+ scratches under inspection lights to reveal true obsidian black depth.",
      icon: "Eye",
      image: "/images/correction.jpg"
    }
  ],

  gallery: [
    {
      id: 1,
      title: "Tata Harrier Dark Edition",
      category: "Ceramic Shield",
      service: "9H Nano Ceramic Coating & De-Chroming",
      image: "/images/hero.jpg",
      vehicle: "Tata Harrier Dark Edition SUV"
    },
    {
      id: 2,
      title: "Mahindra Thar 4x4 Offroader",
      category: "Exterior Wash",
      service: "High Pressure Snow Foam & Ceramic Seal",
      image: "/images/wash.jpg",
      vehicle: "Mahindra Thar LX 4x4"
    },
    {
      id: 3,
      title: "Tata Safari Starlight",
      category: "Interior",
      service: "Bespoke Interior Steam Sanitation & Leather Feed",
      image: "/images/interior.jpg",
      vehicle: "Tata Safari Accomplished"
    },
    {
      id: 4,
      title: "Mahindra XUV700 AX7 L",
      category: "Paint Correction",
      service: "3-Stage Paint Correction under LED Inspection",
      image: "/images/correction.jpg",
      vehicle: "Mahindra XUV700 Midnight Black"
    },
    {
      id: 5,
      title: "Toyota Fortuner Legender",
      category: "Ceramic Shield",
      service: "Hydrophobic Glass Shield & Bead Technology",
      image: "/images/ceramic.jpg",
      vehicle: "Toyota Fortuner Legender 4x4"
    },
    {
      id: 6,
      title: "Customized Tata Harrier Stance",
      category: "Customization",
      service: "Piano Black De-chroming & Electric Blue Underglow",
      image: "/images/customization.jpg",
      vehicle: "Tata Harrier Stance Edition"
    }
  ],

  whyUs: [
    {
      title: "Imported German & US Formulations",
      desc: "We exclusively utilize world-class chemical systems from Gtechniq (UK), CarPro, Menzerna (Germany) and Koch Chemie for chemical safety.",
      icon: "ShieldCheck"
    },
    {
      title: "Certified Master Detailers",
      desc: "Our detailing team undergoes strict IDA-aligned paint correction certification and ceramic application training.",
      icon: "Award"
    },
    {
      title: "360° LED Inspection Protocol",
      desc: "Every inch of your paint is inspected under multi-spectrum high CRI inspection light tunnels to verify defect removal.",
      icon: "Search"
    },
    {
      title: "Deep Mirror Finish Guarantee",
      desc: "We measure paint clarity before and after using optical gloss meters to guarantee noticeable depth enhancement.",
      icon: "Sparkles"
    },
    {
      title: "VIP Lounge & Live Cam Access",
      desc: "Relax in our air-conditioned studio lounge with Wi-Fi, freshly brewed coffee, and live HD camera streaming of your vehicle.",
      icon: "Coffee"
    },
    {
      title: "Bespoke Tailored Solutions",
      desc: "Whether it's a daily driver Tata Nexon or a weekend Mahindra Thar, we tailor correction compounds to paint hardness.",
      icon: "Wrench"
    }
  ],

  processSteps: [
    {
      step: "01",
      title: "Select & Book",
      desc: "Choose your detailing package or custom upgrades online, select vehicle model, and pick your preferred time slot."
    },
    {
      step: "02",
      title: "Drop Off or Flatbed Pickup",
      desc: "Bring your car to our studio lounge or request our enclosed flatbed pickup service direct from your residence."
    },
    {
      step: "03",
      title: "Precision Detailing",
      desc: "Master detailers perform snow wash, clay decon, multi-stage paint correction & ceramic curing in dust-free bays."
    },
    {
      step: "04",
      title: "Drive Away Shiner",
      desc: "Final audit under inspection lights, digital warranty card issued, and handover in showroom gloss condition."
    }
  ],

  reviews: [
    {
      id: 1,
      name: "Rajesh Kumar",
      vehicle: "Mahindra XUV700 AX7 L (Midnight Black)",
      rating: 5,
      date: "August 2026",
      comment: "Brought my new XUV700 for 9H Ceramic Coating. The depth of gloss is unreal! Water just slides right off. The electric blue lighting ambient in their studio showed every swirl mark was eliminated.",
      avatar: "RK",
      verified: true
    },
    {
      id: 2,
      name: "Ananya Sharma",
      vehicle: "Tata Harrier Dark Edition",
      rating: 5,
      date: "September 2026",
      comment: "HYPERGLOSS CUSTOM did a complete piano black de-chroming and ceramic coating on my Harrier. It looks like an absolute stealth fighter now. Highly professional team!",
      avatar: "AS",
      verified: true
    },
    {
      id: 3,
      name: "Vikramaditya Singh",
      vehicle: "Toyota Fortuner Legender 4x4",
      rating: 5,
      date: "July 2026",
      comment: "Hands down the best detailing studio in the region. The interior steam extraction made my Fortuner smell and feel cleaner than delivery day. Worth every rupee!",
      avatar: "VS",
      verified: true
    },
    {
      id: 4,
      name: "Karan Malhotra",
      vehicle: "Mahindra Thar LX 4x4",
      rating: 5,
      date: "August 2026",
      comment: "After an off-road trip, my Thar paint was heavily scratched by bushes. HYPERGLOSS performed multi-stage paint correction and saved the paint completely! Pure magic.",
      avatar: "KM",
      verified: true
    }
  ]
};
