import party4 from "../assets/kenee.jpg";
import party5 from "../assets/nahum.jpg";
import party6 from "../assets/galeria1.jpg";
export interface GalleryItem {
  id: string;
  image: string;
  caption?: string;
  event?: string;
  date?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    image: party6,
    caption: "PULSAR NIGHTS VOL. 11",
    event: "PULSAR NIGHTS",
    date: "Marzo 2024"
  },
  {
    id: "2",
    image: party5,
    caption: "DJ Set en Club Elektra",
    event: "TECHNO UNDERGROUND",
    date: "Febrero 2024"
  },
  {
    id: "3",
    image:party4,
    caption: "Público disfrutando en DEEP HOUSE SESSIONS",
    event: "DEEP HOUSE SESSIONS",
    date: "Enero 2024"
  },
  {
    id: "4",
    image: "https://img.heroui.chat/image/ai?w=800&h=800&u=techno-party-4",
    caption: "SUNSET SESSIONS en Playa Omoa",
    event: "SUNSET SESSIONS",
    date: "Diciembre 2023"
  },
  {
    id: "5",
    image: "https://img.heroui.chat/image/ai?w=800&h=800&u=techno-party-5",
    caption: "DJ Carlos Mendoza en PULSAR NIGHTS",
    event: "PULSAR NIGHTS",
    date: "Noviembre 2023"
  },
  {
    id: "6",
    image: "https://img.heroui.chat/image/ai?w=800&h=800&u=techno-party-6",
    caption: "Ambiente en TECHNO UNDERGROUND",
    event: "TECHNO UNDERGROUND",
    date: "Octubre 2023"
  },
  {
    id: "7",
    image: "https://img.heroui.chat/image/ai?w=800&h=800&u=techno-party-7",
    caption: "DRUM & BASS NIGHT",
    event: "DRUM & BASS NIGHT",
    date: "Septiembre 2023"
  },
  {
    id: "8",
    image: "https://img.heroui.chat/image/ai?w=800&h=800&u=techno-party-8",
    caption: "Público en MINIMAL TECHNO EXPERIENCE",
    event: "MINIMAL TECHNO EXPERIENCE",
    date: "Agosto 2023"
  },
  {
    id: "9",
    image: "https://img.heroui.chat/image/ai?w=800&h=800&u=techno-party-9",
    caption: "DJ Set en DEEP HOUSE SESSIONS",
    event: "DEEP HOUSE SESSIONS",
    date: "Julio 2023"
  },
  {
    id: "10",
    image: "https://img.heroui.chat/image/ai?w=800&h=800&u=techno-party-10",
    caption: "Ambiente en PULSAR NIGHTS VOL. 10",
    event: "PULSAR NIGHTS",
    date: "Junio 2023"
  },
  {
    id: "11",
    image: "https://img.heroui.chat/image/ai?w=800&h=800&u=techno-party-11",
    caption: "DJ Set en TECHNO UNDERGROUND",
    event: "TECHNO UNDERGROUND",
    date: "Mayo 2023"
  },
  {
    id: "12",
    image: "https://img.heroui.chat/image/ai?w=800&h=800&u=techno-party-12",
    caption: "SUNSET SESSIONS en Playa Omoa",
    event: "SUNSET SESSIONS",
    date: "Abril 2023"
  }
];
