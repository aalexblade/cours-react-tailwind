import { MenuItem } from "../types/menu";

export const coffeeMenu: MenuItem[] = [
  // --- Category: espresso ---
  {
    id: 1,
    name: "Kyiv Raf",
    description: "Our signature creamy coffee with a hint of lavender and local forest honey.",
    price: 95,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=400&h=300&fit=crop",
    category: "espresso",
  },
  {
    id: 3,
    name: "Flat White",
    description: "Double shot of espresso with silky micro-foam. A Kyiv favorite.",
    price: 85,
    image: "https://images.unsplash.com/photo-1536816579748-4fcb3f49a7f4?q=80&w=400&h=300&fit=crop",
    category: "espresso",
  },
  {
    id: 6,
    name: "Classic Cappuccino",
    description: "Perfect balance of espresso, steamed milk, and airy foam.",
    price: 80,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=400&h=300&fit=crop",
    category: "espresso",
  },

  // --- Category: slow ---
  {
    id: 2,
    name: "Filter Coffee",
    description: "Single-origin beans from Ethiopia, brewed with precision via V60.",
    price: 75,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400&h=300&fit=crop",
    category: "slow",
  },
  {
    id: 4,
    name: "Espresso Tonic",
    description: "Refreshing combination of double espresso, premium tonic, and a slice of grapefruit.",
    price: 110,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=400&h=300&fit=crop",
    category: "slow",
  },
  {
    id: 5,
    name: "Cold Brew",
    description: "Steeped for 18 hours for a smooth, low-acidity chocolatey finish.",
    price: 90,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=400&h=300&fit=crop",
    category: "slow",
  },

  // --- Category: desserts ---
  {
    id: 7,
    name: "Almond Croissant",
    description: "Traditional double-baked French croissant filled with rich almond frangipane.",
    price: 110,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400&h=300&fit=crop",
    category: "desserts",
  },
  {
    id: 8,
    name: "Basque Cheesecake",
    description: "Crustless baked cheesecake with a scorched exterior and an ultra-creamy center.",
    price: 130,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&h=300&fit=crop",
    category: "desserts",
  }
];

export const shopLocation = {
  address: "Volodymyrska St, 40, Kyiv, Ukraine, 01030",
  workingHours: [
    { days: "Mon - Fri", hours: "08:00 - 21:00" },
    { days: "Sat - Sun", hours: "09:00 - 22:00" },
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d2540.61334691765!2d30.51084227702834!3d50.44829398754166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5906806a6b%3A0x600b3951f25e796e!2sGolden%20Gate!5e0!3m2!1sen!2sua!4v1715494123456!5m2!1sen!2sua",
};