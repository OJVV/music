import party1 from "../assets/flyerjpg/flyer.jpg";
import party2 from "../assets/flyerjpg/flyer1.jpg";
import party3 from "../assets/flyerjpg/sakro.jpg";
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  price: string;
  lineup: string[];
  flyer?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "PULSAR NIGHTS VOL. 12",
    date: "24 Junio, 2024 - 22:00",
    location: "Club Elektra, San Pedro Sula",
    description: "Regresa PULSAR NIGHTS con su volumen 12, presentando los mejores DJs de la escena local y nacional. Una noche de techno, house y música electrónica para los verdaderos amantes del género.",
    image: party1,
    price: "L.300",
    lineup: ["DJ Elektra", "Marcos López", "Sofia Reyes", "Techno Collective"],
    flyer: "https://img.heroui.chat/image/ai?w=800&h=1200&u=techno-party-flyer-1"
  },
  {
    id: "2",
    title: "DEEP HOUSE SESSIONS",
    date: "15 Julio, 2024 - 21:00",
    location: "Terraza Urbana, San Pedro Sula",
    description: "Una noche dedicada al deep house con los mejores exponentes del género. Disfruta de buena música, cócteles y una vista increíble de la ciudad.",
    image:  party2,
    price: "L.250",
    lineup: ["Carlos Mendoza", "House Brothers", "DJ Luna", "Deep Collective"]
  },
  {
    id: "3",
    title: "TECHNO UNDERGROUND",
    date: "5 Agosto, 2024 - 23:00",
    location: "Warehouse 33, San Pedro Sula",
    description: "El evento más underground de la ciudad. Techno puro y duro en un espacio industrial único. Solo para verdaderos amantes del género.",
    image:  party3,
    price: "L.350",
    lineup: ["Techno Collective", "Dark Matter", "Pulse Machine", "Analog System"]
  },
  {
    id: "4",
    title: "SUNSET SESSIONS",
    date: "20 Agosto, 2024 - 17:00",
    location: "Playa Omoa, San Pedro Sula",
    description: "Disfruta de la mejor música electrónica con una puesta de sol espectacular. House, chill out y buenas vibras frente al mar.",
    image: "https://img.heroui.chat/image/ai?w=800&h=1200&u=beach-party-flyer",
    price: "L.400",
    lineup: ["Sunset Collective", "Beach House Project", "Chill Brothers", "DJ Marina"]
  },
  {
    id: "5",
    title: "DRUM & BASS NIGHT",
    date: "10 Septiembre, 2024 - 22:00",
    location: "Club Elektra, San Pedro Sula",
    description: "Una noche dedicada al drum & bass con los mejores exponentes del género. Prepárate para una noche llena de energía y ritmos acelerados.",
    image: "https://img.heroui.chat/image/ai?w=800&h=1200&u=drum-bass-flyer",
    price: "L.300",
    lineup: ["Bass Collective", "Jungle Brothers", "DJ Storm", "Rhythm System"]
  },
  {
    id: "6",
    title: "MINIMAL TECHNO EXPERIENCE",
    date: "25 Septiembre, 2024 - 22:00",
    location: "Terraza Urbana, San Pedro Sula",
    description: "Una noche dedicada al minimal techno con los mejores exponentes del género. Disfruta de buena música, cócteles y una vista increíble de la ciudad.",
    image: "https://img.heroui.chat/image/ai?w=800&h=1200&u=minimal-techno-flyer",
    price: "L.250",
    lineup: ["Minimal Collective", "Techno Project", "DJ Minimal", "Electronic System"]
  }
];
