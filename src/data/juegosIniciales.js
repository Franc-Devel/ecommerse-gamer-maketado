export const juegosIniciales = [
  {
    id: "game-1",
    nombre: "Cyberpunk 2077: Phantom Liberty",
    precio: 35000,
    descuento: 25,
    categoria: "RPG",
    imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Un thriller de espionaje y aventura de rol en el futuro distópico de Night City.",
    descripcion_amplia: "Phantom Liberty es una expansión de suspenso y espionaje para el RPG de acción de mundo abierto Cyberpunk 2077. Como V, mercenario con mejoras cibernéticas, únete al agente secreto Solomon Reed para desentrañar una red de lealtades rotas y siniestras maquinaciones políticas en el distrito más letal de la ciudad: Dogtown.",
    desarrollador: "CD PROJEKT RED",
    editor: "CD PROJEKT RED",
    fechaLanzamiento: "26 Sep 2023",
    destacado: true,
    requisitos: {
      minimos: {
        so: "Windows 10 64-bit",
        procesador: "Core i7-6700 o Ryzen 5 1600",
        memoria: "12 GB RAM",
        graficos: "GeForce GTX 1060 6GB o Radeon RX 580 8GB",
        almacenamiento: "70 GB SSD"
      },
      recomendados: {
        so: "Windows 11 64-bit",
        procesador: "Core i7-12700 o Ryzen 7 7800X3D",
        memoria: "16 GB RAM",
        graficos: "GeForce RTX 3080 o Radeon RX 7900 XT",
        almacenamiento: "70 GB SSD NVMe"
      }
    },
    resenas: [
      { id: "r1", usuario: "NeoGamer", fecha: "2024-01-15", esPositiva: true, comentario: "La mejor redención de la historia de los videojuegos. La historia de Dogtown es increíble." },
      { id: "r2", usuario: "SilverhandFan", fecha: "2024-02-10", esPositiva: true, comentario: "Gráficos brutales con Ray Tracing e Idris Elba actúa fenomenal." },
      { id: "r3", usuario: "GamerCrítico", fecha: "2024-03-01", esPositiva: false, comentario: "Sigue exigiendo un equipo de gama muy alta para mantener 60 FPS estables." }
    ]
  },
  {
    id: "game-2",
    nombre: "Elden Ring: Shadow of the Erdtree",
    precio: 42000,
    descuento: 15,
    categoria: "RPG",
    imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "El aclamado RPG de acción de mundo abierto creado por Hidetaka Miyazaki y George R.R. Martin.",
    descripcion_amplia: "Levántate, Sinluz, y déjate guiar por la gracia para esgrimir el poder del Círculo de Elden y convertirte en el Señor del Círculo en las Tierras Intermedias. Explora un vasto mundo lleno de secretos, mazmorras colosales y enemigos despiadados.",
    desarrollador: "FromSoftware Inc.",
    editor: "Bandai Namco Entertainment",
    fechaLanzamiento: "21 Jun 2024",
    destacado: true,
    requisitos: {
      minimos: {
        so: "Windows 10 64-bit",
        procesador: "INTEL CORE I5-8400 o AMD RYZEN 3 3300X",
        memoria: "12 GB RAM",
        graficos: "NVIDIA GEFORCE GTX 1060 3 GB o AMD RADEON RX 580 4 GB",
        almacenamiento: "60 GB disponibles"
      },
      recomendados: {
        so: "Windows 11 64-bit",
        procesador: "INTEL CORE I7-8700K o AMD RYZEN 5 3600X",
        memoria: "16 GB RAM",
        graficos: "NVIDIA GEFORCE GTX 1070 8 GB o AMD RADEON RX VEGA 56 8 GB",
        almacenamiento: "60 GB SSD"
      }
    },
    resenas: [
      { id: "r4", usuario: "TarnishedOne", fecha: "2024-06-25", esPositiva: true, comentario: "Obra maestra absoluta. El diseño del mapa es inalcanzable." },
      { id: "r5", usuario: "MaleniaHunter", fecha: "2024-07-02", esPositiva: true, comentario: "Dificultad desafiante y jefes épicos. 10/10." }
    ]
  },
  {
    id: "game-3",
    nombre: "Baldur's Gate 3",
    precio: 38500,
    descuento: 20,
    categoria: "RPG",
    imagen: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Juego de rol de última generación ambientado en el universo de Dungeons & Dragons.",
    descripcion_amplia: "Reúne a tu grupo y regresa a los Reinos Olvidados en una historia de compañerismo, traición, sacrificio y supervivencia. Despiertan misteriosas habilidades dentro de ti provocadas por un parásito azotamentes implantado en tu cerebro.",
    desarrollador: "Larian Studios",
    editor: "Larian Studios",
    fechaLanzamiento: "3 Ago 2023",
    destacado: true,
    requisitos: {
      minimos: {
        so: "Windows 10 64-bit",
        procesador: "Intel I5 4690 / AMD FX 8350",
        memoria: "8 GB RAM",
        graficos: "Nvidia GTX 970 / RX 480 (4GB+ de VRAM)",
        almacenamiento: "150 GB disponibles en SSD"
      },
      recomendados: {
        so: "Windows 10 / 11 64-bit",
        procesador: "Intel i7 8700K / AMD r5 3600",
        memoria: "16 GB RAM",
        graficos: "Nvidia 2060 Super / RX 5700 XT (8GB+ de VRAM)",
        almacenamiento: "150 GB disponibles en SSD"
      }
    },
    resenas: [
      { id: "r6", usuario: "AstarionFan", fecha: "2023-09-10", esPositiva: true, comentario: "El GOTY definitivo. La libertad de elección no tiene precedentes." },
      { id: "r7", usuario: "DiceMaster", fecha: "2023-10-18", esPositiva: true, comentario: "Cada partida es completamente diferente. Larian es el rey del RPG." }
    ]
  },
  {
    id: "game-4",
    nombre: "Red Dead Redemption 2",
    precio: 29900,
    descuento: 60,
    categoria: "Aventura",
    imagen: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "La épica historia de Arthur Morgan y la banda de Van der Linde en el ocaso del salvaje oeste.",
    descripcion_amplia: "América, 1899. El ocaso del Salvaje Oeste ha comenzado y las fuerzas de la ley persiguen a las últimas bandas de forajidos. Arthur Morgan y la banda de forajidos liderada por Dutch van der Linde se ven obligados a huir a través del implacable corazón de Estados Unidos.",
    desarrollador: "Rockstar Games",
    editor: "Rockstar Games",
    fechaLanzamiento: "5 Dic 2019",
    destacado: true,
    requisitos: {
      minimos: {
        so: "Windows 10 - Actualización de abril de 2018",
        procesador: "Intel Core i5-2500K / AMD FX-6300",
        memoria: "8 GB RAM",
        graficos: "Nvidia GeForce GTX 770 2 GB / AMD Radeon R9 280 3 GB",
        almacenamiento: "150 GB de espacio disponible"
      },
      recomendados: {
        so: "Windows 10 / 11 64-bit",
        procesador: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
        memoria: "12 GB RAM",
        graficos: "Nvidia GeForce GTX 1060 6 GB / AMD Radeon RX 480 4 GB",
        almacenamiento: "150 GB de espacio disponible"
      }
    },
    resenas: [
      { id: "r8", usuario: "ArthurFanatic", fecha: "2024-01-20", esPositiva: true, comentario: "La historia más emotiva jamás escrita para un videojuego." },
      { id: "r9", usuario: "OutlawCowboy", fecha: "2024-02-14", esPositiva: true, comentario: "Detalles que ningún otro estudio ha logrado replicar." }
    ]
  },
  {
    id: "game-5",
    nombre: "The Witcher 3: Wild Hunt - Complete Edition",
    precio: 14500,
    descuento: 70,
    categoria: "RPG",
    imagen: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Conviértete en Geralt de Rivia, cazador de monstruos a sueldo en un mundo de fantasía devastado por la guerra.",
    descripcion_amplia: "Eres Geralt de Rivia, cazador de monstruos. Te encuentras en un continente asolado por la guerra e infestado de monstruos que puedes explorar a tu antojo. ¿Tu contrato actual? Rastrear a Ciri, la niña de la profecía.",
    desarrollador: "CD PROJEKT RED",
    editor: "CD PROJEKT RED",
    fechaLanzamiento: "18 May 2015",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows 10 64-bit",
        procesador: "Intel Core i5-2500K 3.3GHz / AMD Phenom II X4 940",
        memoria: "6 GB RAM",
        graficos: "Nvidia GeForce GTX 660 / AMD Radeon HD 7870",
        almacenamiento: "50 GB disponibles"
      },
      recomendados: {
        so: "Windows 10 / 11 64-bit",
        procesador: "Intel Core i7-3770 3.4 GHz / AMD FX-8350 4 GHz",
        memoria: "16 GB RAM",
        graficos: "Nvidia GeForce RTX 3070 / AMD Radeon RX 6700 XT",
        almacenamiento: "50 GB SSD"
      }
    },
    resenas: [
      { id: "r10", usuario: "GeraltTucumano", fecha: "2024-03-12", esPositiva: true, comentario: "Las expansiones Hearts of Stone y Blood and Wine son legendarias." }
    ]
  },
  {
    id: "game-6",
    nombre: "Grand Theft Auto V: Premium Edition",
    precio: 16800,
    descuento: 50,
    categoria: "Acción",
    imagen: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Explora la deslumbrante metrópolis de Los Santos y el condado de Blaine en el rey de los mundos abiertos.",
    descripcion_amplia: "Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor del submundo criminal, el gobierno de EE. UU. y la industria del espectáculo, deberán realizar una serie de peligrosos golpes para sobrevivir.",
    desarrollador: "Rockstar North",
    editor: "Rockstar Games",
    fechaLanzamiento: "14 Abr 2015",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows 10 64-bit",
        procesador: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz / AMD Phenom 9850 Quad-Core",
        memoria: "4 GB RAM",
        graficos: "NVIDIA 9800 GT 1GB / AMD HD 4870 1GB",
        almacenamiento: "110 GB disponibles"
      },
      recomendados: {
        so: "Windows 10 64-bit",
        procesador: "Intel Core i5 3470 @ 3.2GHz / AMD X8 FX-8350 @ 4GHz",
        memoria: "8 GB RAM",
        graficos: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
        almacenamiento: "110 GB disponibles"
      }
    },
    resenas: [
      { id: "r11", usuario: "FranklinGamer", fecha: "2024-02-18", esPositiva: true, comentario: "Infinitas horas de diversión en solitario y en GTA Online con amigos." }
    ]
  },
  {
    id: "game-7",
    nombre: "Hogwarts Legacy",
    precio: 32000,
    descuento: 40,
    categoria: "Aventura",
    imagen: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Vive lo no escrito en un fascinante juego de rol en primera persona ambientado en el Hogwarts del siglo XIX.",
    descripcion_amplia: "Hogwarts Legacy es un RPG inmersivo en mundo abierto inspirado en los libros de Harry Potter. Embárcate en un viaje que te llevará por lugares nuevos y conocidos mientras descubres bestias mágicas, personalizas tu personaje y elaboras pociones.",
    desarrollador: "Avalanche Software",
    editor: "Warner Bros. Games",
    fechaLanzamiento: "10 Feb 2023",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows 10 64-bit",
        procesador: "Intel Core i5-6600 o AMD Ryzen 5 1400",
        memoria: "16 GB RAM",
        graficos: "NVIDIA GeForce GTX 960 4GB o AMD Radeon RX 470 4GB",
        almacenamiento: "85 GB disponibles"
      },
      recomendados: {
        so: "Windows 10 / 11 64-bit",
        procesador: "Intel Core i7-8700 o AMD Ryzen 5 3600",
        memoria: "16 GB RAM",
        graficos: "NVIDIA GeForce 1080 Ti o AMD Radeon RX 5700 XT",
        almacenamiento: "85 GB SSD"
      }
    },
    resenas: [
      { id: "r12", usuario: "PotterHead23", fecha: "2024-01-05", esPositiva: true, comentario: "El castillo está recreado con un mimo y nivel de detalle alucinante." }
    ]
  },
  {
    id: "game-8",
    nombre: "God of War Ragnarök",
    precio: 46000,
    descuento: 0,
    categoria: "Acción",
    imagen: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Kratos y Atreus deben viajar a cada uno de los Nueve Reinos en busca de respuestas.",
    descripcion_amplia: "De Santa Monica Studio llega la secuela del aclamado God of War (2018). El Fimbulvetr ya está en marcha. Kratos y Atreus deben viajar a cada uno de los Nueve Reinos en busca de respuestas mientras las fuerzas asgardianas se preparan para la batalla profetizada que pondrá fin al mundo.",
    desarrollador: "Santa Monica Studio",
    editor: "PlayStation Publishing LLC",
    fechaLanzamiento: "19 Sep 2024",
    destacado: true,
    requisitos: {
      minimos: {
        so: "Windows 10 64-bit",
        procesador: "Intel i5-4670k o AMD Ryzen 3 1200",
        memoria: "8 GB RAM",
        graficos: "NVIDIA GTX 1060 (6GB) o AMD RX 5500 XT (8GB)",
        almacenamiento: "190 GB SSD"
      },
      recomendados: {
        so: "Windows 11 64-bit",
        procesador: "Intel i5-8600 o AMD Ryzen 5 3600",
        memoria: "16 GB RAM",
        graficos: "NVIDIA RTX 2060 Super o AMD RX 5700",
        almacenamiento: "190 GB SSD"
      }
    },
    resenas: [
      { id: "r13", usuario: "SpartanGhost", fecha: "2024-09-22", esPositiva: true, comentario: "Combate brutal, gráficos de infarto y una historia digna de los dioses nórdicos." }
    ]
  },
  {
    id: "game-9",
    nombre: "Resident Evil 4 Remake",
    precio: 28000,
    descuento: 35,
    categoria: "Terror",
    imagen: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "La supervivencia es solo el comienzo. Una pesadilla modernizada para el clásico indiscutible.",
    descripcion_amplia: "Han pasado seis años desde el desastre biológico en Raccoon City. El agente Leon S. Kennedy, uno de los supervivientes del incidente, ha sido enviado a rescatar a la hija secuestrada del presidente en un apartado pueblo europeo donde los aldeanos ocultan algo aterrador.",
    desarrollador: "CAPCOM Co., Ltd.",
    editor: "CAPCOM Co., Ltd.",
    fechaLanzamiento: "24 Mar 2023",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows 10 (64 bit)",
        procesador: "AMD Ryzen 3 1200 / Intel Core i5-7500",
        memoria: "8 GB RAM",
        graficos: "AMD Radeon RX 560 with 4GB VRAM / NVIDIA GeForce GTX 1050 Ti with 4GB VRAM",
        almacenamiento: "67 GB de espacio disponible"
      },
      recomendados: {
        so: "Windows 10 (64 bit) / Windows 11 (64 bit)",
        procesador: "AMD Ryzen 5 3600 / Intel Core i7 8700",
        memoria: "16 GB RAM",
        graficos: "AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070",
        almacenamiento: "67 GB SSD"
      }
    },
    resenas: [
      { id: "r14", usuario: "LeonKennedy", fecha: "2023-04-10", esPositiva: true, comentario: "Remake perfecto. Mantiene la esencia y mejora cada mecánica de disparos." }
    ]
  },
  {
    id: "game-10",
    nombre: "Hollow Knight",
    precio: 7500,
    descuento: 50,
    categoria: "Indie",
    imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Forja tu propio camino en un reino subterráneo en ruinas lleno de insectos y héroes.",
    descripcion_amplia: "Desciende al oscuro y fascinante mundo de Hallownest en este galardonado juego de acción y plataformas en 2D. Explora cavernas serpenteantes, antiguas ciudades y páramos mortales mientras combates contra criaturas corrompidas y descubres antiguos misterios.",
    desarrollador: "Team Cherry",
    editor: "Team Cherry",
    fechaLanzamiento: "24 Feb 2017",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows 7 (64bit)",
        procesador: "Intel Core 2 Duo E5200",
        memoria: "4 GB RAM",
        graficos: "GeForce 9800GTX+ (1GB)",
        almacenamiento: "9 GB de espacio disponible"
      },
      recomendados: {
        so: "Windows 10 (64bit)",
        procesador: "Intel Core i5",
        memoria: "8 GB RAM",
        graficos: "GeForce GTX 560",
        almacenamiento: "9 GB de espacio disponible"
      }
    },
    resenas: [
      { id: "r15", usuario: "VesselKnight", fecha: "2023-08-11", esPositiva: true, comentario: "La banda sonora de Christopher Larkin y la jugabilidad son insuperables." }
    ]
  },
  {
    id: "game-11",
    nombre: "EA SPORTS FC 25",
    precio: 48000,
    descuento: 10,
    categoria: "Deportes",
    imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Siente el fútbol mundial con las tácticas renovadas por FC IQ y el modo Rush 5 contra 5.",
    descripcion_amplia: "EA SPORTS FC 25 te da más formas de ganar para el club. Forma equipo en Rush 5 contra 5, una nueva forma de jugar con amistades en Football Ultimate Team, Clubes y Carrera. Con FC IQ tendrás un control táctico sin precedentes y movimientos colectivos más realistas.",
    desarrollador: "EA Canada & EA Romania",
    editor: "Electronic Arts",
    fechaLanzamiento: "27 Sep 2024",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows 10 - 64-Bit",
        procesador: "AMD Ryzen 5 1600 o Intel Core i5 6600k",
        memoria: "8 GB RAM",
        graficos: "AMD Radeon RX 570 o Nvidia GeForce GTX 1050 Ti",
        almacenamiento: "100 GB disponibles"
      },
      recomendados: {
        so: "Windows 10 / 11 - 64-Bit",
        procesador: "AMD Ryzen 7 2700X o Intel Core i7 6700",
        memoria: "12 GB RAM",
        graficos: "AMD Radeon RX 5600 XT o Nvidia GeForce GTX 1660",
        almacenamiento: "100 GB SSD"
      }
    },
    resenas: [
      { id: "r16", usuario: "FifaKing", fecha: "2024-10-01", esPositiva: true, comentario: "El modo Rush es súper divertido y dinámico." },
      { id: "r17", usuario: "FutMaster", fecha: "2024-10-05", esPositiva: false, comentario: "Ultimate Team sigue requiriendo demasiado grindeo." }
    ]
  },
  {
    id: "game-12",
    nombre: "Forza Horizon 5",
    precio: 31000,
    descuento: 50,
    categoria: "Simulación",
    imagen: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Tu aventura Horizon definitiva te espera. Conduce por los vibrantes paisajes de México en cientos de autos increíbles.",
    descripcion_amplia: "¡Tu aventura definitiva en Horizon te espera! Explora los vibrantes paisajes en constante evolución de México en un mundo abierto con una acción de conducción ilimitada y divertida en cientos de los mejores coches del mundo.",
    desarrollador: "Playground Games",
    editor: "Xbox Game Studios",
    fechaLanzamiento: "9 Nov 2021",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows 10 versión 15063.0 o superior",
        procesador: "Intel i5-4460 o AMD Ryzen 3 1200",
        memoria: "8 GB RAM",
        graficos: "NVidia GTX 970 O AMD RX 470",
        almacenamiento: "110 GB de espacio disponible"
      },
      recomendados: {
        so: "Windows 10 versión 15063.0 o superior",
        procesador: "Intel i7-10700K o AMD Ryzen 7 3800XT",
        memoria: "16 GB RAM",
        graficos: "NVidia RTX 2070 O AMD RX 5700 XT",
        almacenamiento: "110 GB SSD"
      }
    },
    resenas: [
      { id: "r18", usuario: "SpeedRacer", fecha: "2024-02-28", esPositiva: true, comentario: "El rey indiscutible de las carreras arcade. Gráficos fotorrealistas." }
    ]
  },
  {
    id: "game-13",
    nombre: "DOOM Eternal",
    precio: 18500,
    descuento: 75,
    categoria: "Acción",
    imagen: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Los ejércitos del infierno han invadido la Tierra. Conviértete en el Slayer para detener la destrucción de la humanidad.",
    descripcion_amplia: "Experimenta la combinación definitiva de velocidad y potencia con el siguiente salto en combate en primera persona con armas avanzadas. Con un lanzallamas montado al hombro, una cuchilla retráctil en la muñeca y armas mejoradas, eres más rápido y letal que nunca.",
    desarrollador: "id Software",
    editor: "Bethesda Softworks",
    fechaLanzamiento: "20 Mar 2020",
    destacado: false,
    requisitos: {
      minimos: {
        so: "64-bit Windows 10",
        procesador: "Intel Core i5 @ 3.3 GHz o AMD Ryzen 3 @ 3.1 GHz",
        memoria: "8 GB RAM",
        graficos: "NVIDIA GeForce GTX 1050Ti (4GB) o AMD Radeon R9 280 (3GB)",
        almacenamiento: "80 GB disponibles"
      },
      recomendados: {
        so: "64-bit Windows 10 / 11",
        procesador: "Intel Core i7-6700K o AMD Ryzen 7 1800X",
        memoria: "16 GB RAM",
        graficos: "NVIDIA GeForce GTX 1080 (8GB) o AMD Radeon RX Vega56 (8GB)",
        almacenamiento: "80 GB SSD"
      }
    },
    resenas: [
      { id: "r19", usuario: "Slayer666", fecha: "2023-11-19", esPositiva: true, comentario: "Adrenalina pura, música de Mick Gordon insana y optimización perfecta." }
    ]
  },
  {
    id: "game-14",
    nombre: "Hades II",
    precio: 21000,
    descuento: 0,
    categoria: "Indie",
    imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Lucha más allá del Inframundo utilizando magia negra para enfrentarte al Titán del Tiempo.",
    descripcion_amplia: "Como Melinoë, la princesa inmortal del Inframundo, explorarás un mundo mítico más grande y profundo, doblegando las fuerzas del tiempo con todo el poder del Olimpo a tus espaldas en una historia cautivadora que se expande tras cada intento.",
    desarrollador: "Supergiant Games",
    editor: "Supergiant Games",
    fechaLanzamiento: "6 May 2024",
    destacado: true,
    requisitos: {
      minimos: {
        so: "Windows 10 64-bit",
        procesador: "Dual Core 2.4 GHz",
        memoria: "8 GB RAM",
        graficos: "GeForce GTX 950, Radeon R7 360 o Intel HD Graphics 630",
        almacenamiento: "10 GB de espacio disponible"
      },
      recomendados: {
        so: "Windows 11 64-bit",
        procesador: "Quad Core 3.0 GHz+",
        memoria: "16 GB RAM",
        graficos: "GeForce RTX 2060 o AMD Radeon RX 5600 XT",
        almacenamiento: "10 GB SSD"
      }
    },
    resenas: [
      { id: "r20", usuario: "MelinoeFan", fecha: "2024-05-15", esPositiva: true, comentario: "Supergiant lo volvió a hacer: arte bellísimo, música cautivadora y mecánicas impecables." }
    ]
  },
  {
    id: "game-15",
    nombre: "Minecraft: Master Collection",
    precio: 15000,
    descuento: 20,
    categoria: "Simulación",
    imagen: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Construye, explora y sobrevive en mundos infinitos generados procedimentalmente.",
    descripcion_amplia: "Minecraft es un juego sobre colocar bloques y salir de aventuras. Explora mundos generados aleatoriamente y construye cosas asombrosas, desde la más humilde de las casas hasta el más majestuoso de los castillos en modo creativo o sobrevive a las criaturas hostiles.",
    desarrollador: "Mojang Studios",
    editor: "Xbox Game Studios",
    fechaLanzamiento: "18 Nov 2011",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows 10 / 11",
        procesador: "Intel Core i3-3210 3.2 GHz / AMD A8-7600 APU 3.1 GHz",
        memoria: "4 GB RAM",
        graficos: "Intel HD Graphics 4000 o AMD Radeon R5 series",
        almacenamiento: "4 GB de espacio disponible"
      },
      recomendados: {
        so: "Windows 10 / 11",
        procesador: "Intel Core i5-4690 3.5GHz / AMD A10-7800 APU 3.5 GHz",
        memoria: "8 GB RAM",
        graficos: "GeForce 700 Series o AMD Radeon Rx 200 Series",
        almacenamiento: "16 GB SSD"
      }
    },
    resenas: [
      { id: "r21", usuario: "SteveCrafter", fecha: "2023-12-01", esPositiva: true, comentario: "El juego con mayor rejugabilidad de la historia. Insuperable." }
    ]
  },
  {
    id: "game-16",
    nombre: "Final Fantasy VII Rebirth",
    precio: 49000,
    descuento: 0,
    categoria: "RPG",
    imagen: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "El viaje hacia lo desconocido continúa. Cloud, Barret, Tifa, Aerith y Red XIII escapan de Midgar.",
    descripcion_amplia: "Final Fantasy VII Rebirth es la muy anticipada nueva historia del proyecto de remake de FINAL FANTASY VII, una reinvención del icónico juego original convertida en tres títulos independientes por sus creadores originales.",
    desarrollador: "Square Enix",
    editor: "Square Enix",
    fechaLanzamiento: "29 Feb 2024",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows 10 64-bit",
        procesador: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memoria: "12 GB RAM",
        graficos: "Nvidia GeForce GTX 1070 / AMD Radeon RX 5700",
        almacenamiento: "150 GB SSD"
      },
      recomendados: {
        so: "Windows 11 64-bit",
        procesador: "Intel Core i7-10700 / AMD Ryzen 7 3700X",
        memoria: "16 GB RAM",
        graficos: "Nvidia GeForce RTX 3070 / AMD Radeon RX 6800",
        almacenamiento: "150 GB SSD NVMe"
      }
    },
    resenas: [
      { id: "r22", usuario: "CloudStrife", fecha: "2024-03-10", esPositiva: true, comentario: "Un homenaje glorioso al clásico con mini juegos incontables y banda sonora sublime." }
    ]
  },
  {
    id: "game-17",
    nombre: "Marvel's Spider-Man Remastered",
    precio: 34000,
    descuento: 40,
    categoria: "Acción",
    imagen: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Balancéate por las calles de Nueva York como un experimentado Peter Parker.",
    descripcion_amplia: "En Marvel's Spider-Man Remastered, los mundos de Peter Parker y Spider-Man chocan en una historia original repleta de acción. Juega como un experimentado Peter Parker que lucha contra el crimen organizado y villanos icónicos en la Nueva York de Marvel.",
    desarrollador: "Insomniac Games",
    editor: "PlayStation Publishing LLC",
    fechaLanzamiento: "12 Ago 2022",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows 10 64-bit",
        procesador: "Intel Core i3-4160, 3.6 GHz o equivalente AMD",
        memoria: "8 GB RAM",
        graficos: "NVIDIA GTX 950 o AMD Radeon RX 470",
        almacenamiento: "75 GB de espacio disponible"
      },
      recomendados: {
        so: "Windows 10 64-bit",
        procesador: "Intel Core i5-4670, 3.4 Ghz o AMD Ryzen 5 1600, 3.2 Ghz",
        memoria: "16 GB RAM",
        graficos: "NVIDIA GTX 1060 6GB o AMD Radeon RX 580 8GB",
        almacenamiento: "75 GB SSD"
      }
    },
    resenas: [
      { id: "r23", usuario: "SpideyFan99", fecha: "2023-07-29", esPositiva: true, comentario: "La sensación de balanceo con telarañas es la más satisfactoria del gaming." }
    ]
  },
  {
    id: "game-18",
    nombre: "Helldivers 2",
    precio: 26500,
    descuento: 0,
    categoria: "Acción",
    imagen: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Únete a los Helldivers y lucha por la libertad con amigos a través de una galaxia hostil.",
    descripcion_amplia: "¿Crees en la libertad? ¿En la paz? ¿En la democracia gestionada? Únete a los Helldivers y lucha por la libertad en una galaxia hostil en un shooter en tercera persona cooperativo lleno de frenetismo, ataques orbitales y caos masivo.",
    desarrollador: "Arrowhead Game Studios",
    editor: "PlayStation Publishing LLC",
    fechaLanzamiento: "8 Feb 2024",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows 10 64-bit",
        procesador: "Intel Core i7-4790K o AMD Ryzen 5 1500X",
        memoria: "8 GB RAM",
        graficos: "NVIDIA GeForce GTX 1050 Ti o AMD Radeon RX 470",
        almacenamiento: "100 GB de espacio disponible"
      },
      recomendados: {
        so: "Windows 10 / 11 64-bit",
        procesador: "Intel Core i7-9700K o AMD Ryzen 7 3700X",
        memoria: "16 GB RAM",
        graficos: "NVIDIA GeForce RTX 2060 o AMD Radeon RX 6600XT",
        almacenamiento: "100 GB SSD"
      }
    },
    resenas: [
      { id: "r24", usuario: "DemocracyDefender", fecha: "2024-03-14", esPositiva: true, comentario: "¡Por la Supertierra! La mejor experiencia cooperativa de los últimos años." }
    ]
  },
  {
    id: "game-19",
    nombre: "Alan Wake 2",
    precio: 36000,
    descuento: 20,
    categoria: "Terror",
    imagen: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Un thriller psicológico de terror y supervivencia protagonizado por Saga Anderson y Alan Wake.",
    descripcion_amplia: "Una serie de asesinatos rituales amenaza a Bright Falls, una pequeña comunidad rodeada de naturaleza en el noroeste del Pacífico. Saga Anderson, una consumada agente del FBI famosa por resolver casos imposibles, llega para investigar los crímenes.",
    desarrollador: "Remedy Entertainment",
    editor: "Epic Games Publishing",
    fechaLanzamiento: "27 Oct 2023",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows 10/11 64-bit",
        procesador: "Intel i5-7600K o equivalente AMD",
        memoria: "16 GB RAM",
        graficos: "GeForce RTX 2060 o Radeon RX 6600",
        almacenamiento: "90 GB SSD"
      },
      recomendados: {
        so: "Windows 10/11 64-bit",
        procesador: "Ryzen 7 3700X o equivalente Intel",
        memoria: "16 GB RAM",
        graficos: "GeForce RTX 3070 o Radeon RX 6700 XT",
        almacenamiento: "90 GB SSD"
      }
    },
    resenas: [
      { id: "r25", usuario: "BrightFallsSheriff", fecha: "2023-11-05", esPositiva: true, comentario: "Una obra de arte cinematográfica. Los capítulos musicales son una locura." }
    ]
  },
  {
    id: "game-20",
    nombre: "Sekiro: Shadows Die Twice - GOTY Edition",
    precio: 25000,
    descuento: 50,
    categoria: "Acción",
    imagen: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Talla tu propio camino hacia la venganza en esta galardonada aventura de ninjas de FromSoftware.",
    descripcion_amplia: "En Sekiro: Shadows Die Twice eres el 'lobo de un solo brazo', un guerrero desfigurado y caído en desgracia rescatado al borde de la muerte. Destinado a proteger a un joven señor descendiente de un antiguo linaje, te conviertes en el objetivo de muchos enemigos despiadados.",
    desarrollador: "FromSoftware Inc.",
    editor: "Activision",
    fechaLanzamiento: "22 Mar 2019",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit",
        procesador: "Intel Core i3-2100 | AMD FX-6300",
        memoria: "4 GB RAM",
        graficos: "NVIDIA GeForce GTX 760 | AMD Radeon HD 7950",
        almacenamiento: "25 GB de espacio disponible"
      },
      recomendados: {
        so: "Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit",
        procesador: "Intel Core i5-6600K | AMD Ryzen 5 1600",
        memoria: "8 GB RAM",
        graficos: "NVIDIA GeForce GTX 970 | AMD Radeon RX 570",
        almacenamiento: "25 GB de espacio disponible"
      }
    },
    resenas: [
      { id: "r26", usuario: "WolfShinobi", fecha: "2024-01-14", esPositiva: true, comentario: "El sistema de combate con parry más satisfactorio jamás diseñado." }
    ]
  },
  {
    id: "game-21",
    nombre: "Stardew Valley",
    precio: 4200,
    descuento: 20,
    categoria: "Simulación",
    imagen: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "Heredaste la vieja granja de tu abuelo en Stardew Valley. ¡Aprende a vivir de la tierra!",
    descripcion_amplia: "Armado con herramientas de segunda mano y unas pocas monedas, te dispones a comenzar tu nueva vida. ¿Puedes aprender a vivir de la tierra y convertir estos campos descuidados en un hogar próspero? Cultiva, cría animales, pesca y haz amistades en Pelican Town.",
    desarrollador: "ConcernedApe",
    editor: "ConcernedApe",
    fechaLanzamiento: "26 Feb 2016",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Windows Vista o superior",
        procesador: "2 GHz",
        memoria: "2 GB RAM",
        graficos: "256 mb video memory, shader model 3.0+",
        almacenamiento: "500 MB disponibles"
      },
      recomendados: {
        so: "Windows 10 / 11",
        procesador: "2.5 GHz+",
        memoria: "4 GB RAM",
        graficos: "512 mb video memory",
        almacenamiento: "1 GB disponible"
      }
    },
    resenas: [
      { id: "r27", usuario: "PelicanFarmer", fecha: "2024-04-18", esPositiva: true, comentario: "Paz mental en formato videojuego. La actualización 1.6 agregó muchísimo contenido." }
    ]
  },
  {
    id: "game-22",
    nombre: "Dead Space Remake",
    precio: 29500,
    descuento: 65,
    categoria: "Terror",
    imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    descripcion_breve: "El clásico de terror de supervivencia y ciencia ficción regresa completamente reconstruido desde cero.",
    descripcion_amplia: "Isaac Clarke es un ingeniero cualquiera en una misión para reparar la USG Ishimura, una gigantesca nave minera espacial, solo para descubrir que algo ha salido horriblemente mal. La tripulación ha sido masacrada y la amada pareja de Isaac, Nicole, se ha perdido en algún lugar a bordo.",
    desarrollador: "Motive Studio",
    editor: "Electronic Arts",
    fechaLanzamiento: "27 Ene 2023",
    destacado: false,
    requisitos: {
      minimos: {
        so: "Window 10 64-bit +",
        procesador: "Ryzen 5 2600x, Core i5 8600",
        memoria: "16 GB RAM",
        graficos: "AMD RX 5700, GTX 1070",
        almacenamiento: "50 GB disponibles"
      },
      recomendados: {
        so: "Window 10 64-bit +",
        procesador: "Ryzen 5 5600X,Core i5 11600K",
        memoria: "16 GB RAM",
        graficos: "Radeon RX 6700 XT, Geforce RTX 2070",
        almacenamiento: "50 GB SSD"
      }
    },
    resenas: [
      { id: "r28", usuario: "IsaacPlasmaCutter", fecha: "2023-03-25", esPositiva: true, comentario: "Terror en estado puro. La ambientación sonora de la Ishimura te pone los pelos de punta." }
    ]
  }
];

export default juegosIniciales;
