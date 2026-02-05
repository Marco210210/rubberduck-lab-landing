import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

const projects = [
  {
    title: "Medical AI",
    category: "Healthcare Technology",
    description:
      "Applicazione desktop moderna e accessibile per facilitare il dialogo sicuro e trasparente tra personale sanitario e un agente AI addestrato su dati medici.",
    detailedDescription:
      "Applicazione desktop moderna e accessibile progettata per facilitare il dialogo sicuro e trasparente tra personale sanitario e un agente AI addestrato su dati medici.",
    problem:
      "Nel dominio medico, l'adozione di strumenti basati su intelligenza artificiale si scontra spesso con la mancanza di trasparenza (il fenomeno della 'black box') e la complessità di gestione di dati eterogenei come referti PDF e immagini diagnostiche. Tecnicamente, le sfide principali riguardavano la gestione della concorrenza in chat multiple, la latenza nell'indicizzazione dei documenti caricati e la necessità di mantenere la persistenza delle citazioni scientifiche tra diverse sessioni utente, evitando stati incoerenti dell'interfaccia (race conditions) durante l'elaborazione dei dati.",
    solution:
      "Il progetto risolve queste criticità attraverso un'architettura a componenti riutilizzabili che integra un sistema di 'Revealer' per la verifica immediata delle fonti (link e snippet di testo) a supporto delle risposte dell'AI. La stabilità del sistema è stata garantita tramite una gestione dello stato localizzata: l'uso di un registro di task asincroni (_pending_tasks) permette di isolare i caricamenti sulla singola conversazione, evitando blocchi globali dell'interfaccia. La soluzione è stata verificata attraverso test sui percorsi d'uso principali (upload, login, messaggistica), stress test di rete per la gestione degli errori 504 e verifiche di persistenza dei dati post-logout.",
    features: [
      "Framework Front-end: Sviluppato con rio.dev, utilizzando una logica a componenti per garantire manutenibilità e un flusso dati fluido",
      "Integrazione Backend: Dialogo con Django/DRF per autenticazione e persistenza; gestione asincrona delle chiamate tramite httpx",
      "Gestione Documentale: Sistema di upload per immagini e PDF con gestione di UUID e delay controllati per permettere l'indicizzazione lato retriever",
      "UX/UI Specialistica: Layout a 'bolle' con scrolling sticky-bottom, spinner localizzati per chat e popup di conferma per azioni irreversibili",
      "Trasparenza e Citazioni: Modellazione dei dati per salvare i riferimenti (sources) direttamente nel messaggio, garantendo che restino visibili permanentemente",
      "Accessibilità: Palette cromatica parametrizzata via variabili d'ambiente per garantire contrasto e leggibilità a norma in contesti clinici"
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format",
  },
  {
    title: "Super Mario Bros AI",
    category: "Intelligenza Artificiale Applicata",
    description:
      "Un agente di intelligenza artificiale capace di imparare a giocare autonomamente a Super Mario Bros, combinando Reinforcement Learning e Computer Vision per prendere decisioni in tempo reale.",
    detailedDescription:
      "Progetto di intelligenza artificiale che mostra come un agente possa imparare a giocare autonomamente a Super Mario Bros osservando esclusivamente lo schermo e apprendendo dall’esperienza. Il sistema trasforma immagini di gioco in azioni concrete grazie a tecniche avanzate di Reinforcement Learning e Computer Vision, sviluppando una strategia di gioco senza regole predefinite.",
    problem:
      "Insegnare a un’intelligenza artificiale a giocare a Super Mario Bros è una sfida estremamente complessa. Il gioco richiede tempismo preciso, decisioni istantanee e comprensione visiva dell’ambiente: piattaforme, nemici, ostacoli e salti devono essere interpretati in tempo reale. Si tratta di un contesto dinamico e imprevedibile, dove ogni errore ha conseguenze immediate.",
    solution:
      "Il progetto affronta questa sfida sviluppando un agente AI capace di apprendere direttamente dall’esperienza, migliorando progressivamente il proprio comportamento partita dopo partita. Attraverso diversi approcci di Reinforcement Learning, l’agente impara quando correre, saltare o fermarsi. In una fase avanzata, l’integrazione della Computer Vision tramite YOLOv5 consente all’AI di riconoscere visivamente nemici e ostacoli sullo schermo, costruendo autonomamente una strategia efficace senza regole hardcoded.",
    features: [
      "Agente AI che apprende osservando direttamente lo schermo di gioco",
      "Decisioni autonome e adattive basate su Reinforcement Learning",
      "Riconoscimento visivo di nemici e ostacoli tramite Computer Vision (YOLOv5)",
      "Sistema di apprendimento progressivo basato su tentativi ed errori",
      "Analisi delle performance dell’agente durante le fasi di training",
      "Video demo e simulazioni reali delle partite giocate dall’intelligenza artificiale"
    ],
    video: "/Mario_Bros_Video_Generation.mp4",
    poster: "/mario-poster.png",
    image: "/mario-poster.png",
  },
  {
    title: "SportTech Platform",
    category: "Data Architecture & Automation",
    description:
      "Un’infrastruttura dati progettata per far funzionare competizioni sportive complesse senza errori, incongruenze o interventi manuali.",
    detailedDescription:
      "SportTech Platform è un sistema backend progettato per gestire in modo rigoroso e automatizzato tutti gli elementi di una competizione sportiva: squadre, partite, risultati, punteggi e classifiche. L’obiettivo non è analizzare i dati, ma farli funzionare correttamente in ogni scenario operativo, garantendo coerenza totale anche in presenza di regole complesse e aggiornamenti continui.",
    problem:
      "Nei sistemi sportivi reali, ogni evento ha conseguenze a cascata: una partita aggiorna una classifica, che influisce su ranking, premi o qualificazioni. Quando queste logiche sono gestite manualmente o in modo superficiale, gli errori sono inevitabili. Il vero problema non è memorizzare i dati, ma applicare correttamente le regole del gioco in ogni momento, senza ambiguità o stati incoerenti.",
    solution:
      "La soluzione è stata costruire una struttura dati che incorpora le regole direttamente nel sistema. Attraverso vincoli, trigger e logiche automatiche a livello di database, ogni aggiornamento viene validato, propagato e sincronizzato in tempo reale. Il sistema diventa così una fonte unica e affidabile, capace di gestire classifiche e punteggi senza bisogno di controlli manuali o correzioni a posteriori.",
    features: [
      "Sistema dati progettato per applicare automaticamente le regole delle competizioni",
      "Aggiornamento istantaneo di punteggi e classifiche a ogni evento",
      "Eliminazione degli errori manuali tramite logiche automatiche",
      "Struttura rigorosa pensata per scenari reali e casi limite",
      "Query strutturate per consultazione e report operativi",
      "Base solida e scalabile per estensioni future e nuovi regolamenti"
    ],
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format",
  },

  {
    title: "City Intelligence Engine",
    category: "Urban Data & Decision Making",
    description:
      "Un sistema di analisi avanzata che trasforma dati urbani complessi in insight strategici per comprendere, confrontare e pianificare lo sviluppo delle città.",
    detailedDescription:
      "City Intelligence Engine è una piattaforma di analisi dei dati urbani progettata per leggere e interpretare le dinamiche economiche, sociali e ambientali delle città. Attraverso l’elaborazione di indicatori internazionali, il sistema consente di confrontare aree urbane diverse, individuare pattern nascosti e supportare decisioni strategiche basate su dati reali e comparabili.",
    problem:
      "Le città producono enormi quantità di dati, ma spesso queste informazioni rimangono frammentate, difficili da confrontare e poco utilizzabili per decisioni concrete. Indicatori economici, occupazionali e ambientali sono distribuiti su dataset eterogenei, con scale e metriche diverse. Senza un sistema di analisi strutturato, è quasi impossibile capire come una città stia davvero performando rispetto alle altre o quali fattori influenzino il suo sviluppo.",
    solution:
      "Il progetto affronta il problema costruendo una pipeline di analisi completa che trasforma dati grezzi in conoscenza utilizzabile. Attraverso normalizzazione, analisi statistica multivariata e tecniche di clustering, il sistema individua correlazioni, trend temporali e gruppi di città con caratteristiche simili. Il risultato è una visione chiara e comparabile delle performance urbane, pronta per supportare strategie di sviluppo, sostenibilità e pianificazione.",
    features: [
      "Analisi comparativa tra città basata su indicatori economici, sociali e ambientali",
      "Identificazione di pattern e correlazioni nascosti nei dati urbani",
      "Clustering delle città per individuare modelli di sviluppo simili",
      "Analisi temporale per monitorare evoluzioni e trend nel tempo",
      "Visualizzazioni chiare e immediate per supportare decisioni strategiche",
      "Pipeline riproducibile e scalabile per analisi future e nuovi dataset"
    ],
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&auto=format",
  },
  {
    title: "LLM as Judge",
    category: "AI Evaluation & Quality Control",
    description:
      "Un sistema di valutazione automatica in cui l’intelligenza artificiale analizza, confronta e giudica le risposte di altre AI.",
    detailedDescription:
      "LLM as Judge è un framework che ribalta il paradigma classico della valutazione: invece di affidarsi a metriche rigide o giudizi umani, utilizza modelli linguistici avanzati come veri e propri giudici. Il sistema analizza dialoghi tra esseri umani e chatbot e produce valutazioni strutturate sulla qualità delle risposte, simulando un processo di giudizio critico simile a quello umano, ma scalabile e riproducibile.",
    problem:
      "Valutare la qualità di un chatbot è uno dei problemi più complessi dell’AI moderna. Le risposte possono essere corrette ma inutili, fluenti ma fuorvianti, educate ma incoerenti. Le metriche automatiche tradizionali non colgono queste sfumature, mentre la valutazione umana è lenta, costosa e impossibile da scalare. Senza un sistema affidabile di giudizio, migliorare o confrontare modelli conversazionali diventa una scommessa.",
    solution:
      "Il progetto introduce un approccio radicale: usare l’AI stessa come strumento di valutazione. Modelli linguistici avanzati vengono impiegati come giudici critici, capaci di confrontare risposte, analizzare coerenza, pertinenza e qualità del dialogo. Il framework supporta valutazioni multi-dimensionali e confronti tra modelli diversi, offrendo una misura più realistica e consistente della qualità conversazionale rispetto alle metriche tradizionali.",
    features: [
      "AI che valuta altre AI in modo automatico e riproducibile",
      "Analisi qualitativa delle risposte conversazionali, non solo numerica",
      "Confronto diretto tra modelli linguistici diversi",
      "Riduzione drastica della dipendenza da valutazioni umane manuali",
      "Sistema scalabile per test su grandi volumi di conversazioni",
      "Output strutturati per guidare decisioni su modelli e strategie AI"
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format",
  },
  {
    title: "Statistical Intelligence",
    category: "Data Analysis & Decision Support",
    description:
      "Un progetto di analisi statistica avanzata che trasforma dati complessi in insight affidabili per comprendere e prevedere fenomeni reali.",
    detailedDescription:
      "Statistical Intelligence è un progetto di analisi quantitativa progettato per estrarre significato da dati complessi e multidimensionali. Attraverso modelli statistici rigorosi e visualizzazioni chiare, il sistema consente di individuare relazioni, trend e segnali nascosti all’interno di dataset socio-economici e ambientali, fornendo una base solida per interpretazioni corrette e decisioni informate.",
    problem:
      "Quando i dati aumentano di volume e complessità, il rischio principale non è la mancanza di informazioni, ma l’interpretazione sbagliata. Correlazioni apparenti, variabili confondenti e modelli mal calibrati possono portare a conclusioni fuorvianti. Senza un approccio statistico rigoroso, i numeri raccontano storie convincenti… ma spesso sbagliate.",
    solution:
      "Il progetto affronta il problema applicando un processo strutturato di analisi statistica: dalla pulizia e normalizzazione dei dati, all’esplorazione visiva, fino alla costruzione e validazione di modelli inferenziali. Ogni risultato viene verificato attraverso metriche statistiche consolidate, riducendo il rischio di bias e garantendo che le conclusioni siano supportate dai dati e non da intuizioni arbitrarie.",
    features: [
      "Analisi statistica rigorosa per evitare interpretazioni fuorvianti",
      "Modelli inferenziali per identificare relazioni reali tra le variabili",
      "Valutazione dell’affidabilità dei risultati tramite metriche statistiche",
      "Visualizzazioni chiare per rendere comprensibili fenomeni complessi",
      "Gestione strutturata di dati eterogenei e multivariati",
      "Pipeline riproducibile per analisi consistenti nel tempo"
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
  },
  {
    title: "AedesTravel",
    category: "SaaS Platform",
    description:
      "Piattaforma SaaS progettata per automatizzare e centralizzare la gestione di affitti brevi, riducendo operazioni manuali e migliorando l’esperienza di host e ospiti.",
    detailedDescription:
      "AedesTravel è una piattaforma SaaS end-to-end pensata per property manager e proprietari di case vacanza che gestiscono più immobili. Il sistema centralizza prenotazioni, comunicazioni, check-in/check-out e analisi operative in un’unica interfaccia, integrando automazioni intelligenti per semplificare i flussi quotidiani e ridurre il carico operativo.",
    problem:
      "La gestione di affitti brevi su più canali comporta un’elevata complessità operativa: prenotazioni distribuite su OTA diverse, comunicazioni frammentate con gli ospiti, check-in manuali, monitoraggio delle recensioni e aggiornamento continuo delle tariffe. L’utilizzo di strumenti separati porta a inefficienze, errori e perdita di tempo, rendendo difficile scalare il numero di immobili mantenendo qualità e controllo.",
    solution:
      "AedesTravel affronta queste criticità con una piattaforma integrata che automatizza i processi chiave della gestione immobiliare. Il sistema coordina check-in e check-out tramite dispositivi smart, centralizza la comunicazione con gli ospiti tramite chatbot AI e fornisce dashboard analitiche in tempo reale per monitorare performance, occupazione e ricavi. L’architettura è progettata per scalare su più immobili mantenendo sicurezza, affidabilità e controllo operativo.",
    features: [
      "Piattaforma SaaS web e mobile con interfaccia unificata per la gestione di più immobili",
      "Automazione check-in/check-out tramite dispositivi smart e integrazioni IoT",
      "Chatbot AI per comunicazione centralizzata con gli ospiti e supporto operativo",
      "Dashboard analitiche in tempo reale su prenotazioni, ricavi e tasso di occupazione",
      "Integrazione con OTA e canali diretti per la gestione centralizzata delle tariffe",
      "Architettura scalabile e sicura, progettata per property manager multi-immobile"
    ],
    image: "/aedes-travel-logo.png",
  },

  {
    title: "CityWander – Interactive City Experience",
    category: "Smart Tourism & Mobile Experience",
    description:
      "Un’app mobile che trasforma una città in un’esperienza interattiva, combinando percorsi personalizzati, gamification e tecnologie smart basate sulla posizione.",
    detailedDescription:
      "CityWander è una piattaforma mobile progettata per trasformare il modo in cui le persone esplorano una città. L’app guida l’utente attraverso percorsi dinamici e personalizzati, arricchendo l’esperienza di visita con contenuti contestuali, sfide interattive e meccaniche di gioco. La città non è più una mappa statica, ma un ambiente vivo che reagisce alla presenza dell’utente.",
    problem:
      "Visitare una città spesso significa muoversi tra mappe generiche, guide frammentate e informazioni scollegate tra loro. L’esperienza risulta passiva, poco coinvolgente e spesso distante dal contesto reale in cui ci si trova. Il problema non è la mancanza di informazioni, ma l’assenza di un sistema che le renda rilevanti, tempestive e coinvolgenti nel momento giusto.",
    solution:
      "CityWander risolve questo limite trasformando lo spazio urbano in un’esperienza interattiva guidata dalla tecnologia. Grazie al geofencing, l’app attiva contenuti in base alla posizione reale dell’utente, mentre la gamification stimola l’esplorazione attraverso obiettivi, ricompense e progressi. L’integrazione di moduli di riconoscimento visivo consente inoltre di arricchire l’esperienza con informazioni contestuali, rendendo ogni visita unica, immersiva e memorabile.",
    features: [
      "Esperienze di visita personalizzate e dinamiche",
      "Gamification per incentivare l’esplorazione urbana",
      "Geofencing per contenuti attivati in tempo reale in base alla posizione",
      "Riconoscimento visivo per arricchire l’esperienza sul campo",
      "Architettura mobile scalabile e multipiattaforma",
      "Sistema pensato per valorizzare territori, attività e punti di interesse"
    ],
    image:
      "/citywander.webp",
  },
  {
    title: "Classify – Smart Space Recognition",
    category: "Computer Vision & Augmented Reality",
    description:
      "Un’app mobile che riconosce ambienti fisici in tempo reale e li trasforma in informazioni digitali accessibili con una semplice scansione.",
    detailedDescription:
      "Classify è un’app mobile progettata per collegare il mondo fisico ai dati digitali. Attraverso la fotocamera dello smartphone, l’app riconosce aule, laboratori e uffici, restituendo in tempo reale informazioni contestuali come disponibilità degli spazi, lezioni in corso e orari dei docenti. L’obiettivo è rendere gli ambienti intelligenti, informativi e immediatamente comprensibili per chi li vive.",
    problem:
      "Negli ambienti complessi come campus, edifici pubblici o strutture condivise, le informazioni sono spesso frammentate: orari, disponibilità degli spazi e attività in corso non sono immediatamente visibili o aggiornate. Questo genera confusione, perdita di tempo e continui passaggi tra app, siti o bacheche fisiche. Il problema non è la mancanza di dati, ma l’assenza di un accesso rapido e contestuale a quelle informazioni.",
    solution:
      "Classify risolve il problema trasformando lo spazio fisico in un’interfaccia interattiva. Grazie alla Computer Vision e all’OCR, l’app riconosce targhe, cartelli e ambienti reali, mentre l’integrazione con sistemi informativi consente di recuperare dati aggiornati in tempo reale. L’uso della realtà aumentata rende l’esperienza immediata e intuitiva: basta inquadrare uno spazio per sapere cosa sta succedendo lì, ora.",
    features: [
      "Riconoscimento visivo di ambienti e spazi tramite fotocamera",
      "OCR per l’estrazione intelligente di informazioni da targhe e segnali fisici",
      "Accesso in tempo reale a orari, disponibilità e attività in corso",
      "Integrazione con sistemi informativi tramite API",
      "Esperienza interattiva basata su realtà aumentata",
      "Architettura mobile multipiattaforma pronta per ambienti complessi"
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format",
  },
  {
    title: "AI Trading System",
    category: "AI & Financial Automation",
    description:
      "Un sistema di trading automatizzato che combina intelligenza artificiale e logiche finanziarie avanzate per prendere decisioni operative in tempo reale sui mercati.",
    detailedDescription:
      "AI Trading System è un motore di trading intelligente progettato per operare in modo completamente automatico sui mercati finanziari. Il sistema analizza continuamente il comportamento dei prezzi, individua pattern rilevanti e decide autonomamente quando entrare o uscire dal mercato. L’obiettivo non è eseguire semplici regole statiche, ma costruire una strategia adattiva che unisca disciplina operativa e capacità predittiva.",
    problem:
      "Il trading sui mercati finanziari richiede velocità, precisione e controllo emotivo. Le decisioni manuali sono lente, soggette a bias umani e difficili da replicare con coerenza nel tempo. Inoltre, i mercati sono rumorosi e imprevedibili: basarsi esclusivamente su regole rigide o su intuizioni personali espone a rischi elevati e risultati incoerenti.",
    solution:
      "Il sistema affronta questa complessità integrando intelligenza artificiale e automazione operativa in un’unica architettura. Le decisioni di trading vengono prese combinando analisi tecnica e modelli predittivi AI, che stimano la probabilità di movimenti di prezzo a breve termine. L’intelligenza artificiale non sostituisce la strategia, ma la rafforza: il sistema modula l’esposizione al rischio in base al livello di confidenza delle previsioni, mantenendo un controllo rigoroso sulle operazioni.",
    features: [
      "Sistema di trading completamente automatizzato, operativo in tempo reale",
      "Integrazione di modelli di intelligenza artificiale per supportare le decisioni",
      "Gestione dinamica del rischio basata sul livello di confidenza del sistema",
      "Architettura ibrida che combina regole finanziarie e modelli predittivi",
      "Backtesting avanzato per la validazione delle strategie su dati storici",
      "Struttura modulare pronta per estensioni e nuovi modelli AI"
    ],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format",
  },
];

const ProjectCard = ({ 
  project, 
  index,
  onClick
}: { 
  project: typeof projects[0]; 
  index: number;
  onClick: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Detect if device is mobile based on screen width only
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = () => {
    // Only play video on desktop hover
    if (!isMobile && videoRef.current && project.video) {
      videoRef.current.play().catch(() => {
        // Silently fail if autoplay is blocked
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && project.video) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // On mobile, play video on touch
    if (isMobile && videoRef.current && project.video) {
      e.stopPropagation(); // Prevent immediate modal opening
      videoRef.current.play().catch(() => {
        // Silently fail if autoplay is blocked
      });
      
      // Auto-pause after 3 seconds as a preview
      touchTimeoutRef.current = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }, 3000);
    }
  };

  const handleTouchEnd = () => {
    // Clear timeout and stop video when touch ends
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
    }
    if (videoRef.current && project.video) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={`project-card group cursor-pointer hoverable aspect-[3/4] ${
        index % 3 === 1 ? "md:mt-12" : ""
      }`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Show poster on mobile, video on desktop */}
      {project.video && !isMobile ? (
        <video
          ref={videoRef}
          src={project.video}
          poster={project.poster}
          preload="metadata"
          loop
          muted
          playsInline
          aria-label={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute bottom-6 left-6 right-6 z-30">
        <span className="text-xs text-primary font-medium tracking-wider uppercase mb-2 block">
          {project.category}
        </span>
        <h3 className="text-xl font-display font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: typeof projects[0] | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto hide-scrollbar bg-card border border-border rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-primary hover:border-primary hover:text-background transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Header - Always use poster/image for cleaner modal */}
              <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-t-2xl">
                <img
                  src={project.poster || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
                  {project.category}
                </span>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {project.title}
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="border-t border-border pt-6 space-y-6">
                  {project.detailedDescription && (
                    <div>
                      <h3 className="text-xl font-display font-semibold text-primary mb-3">
                        Panoramica
                      </h3>
                      <p className="text-base text-foreground/80 leading-relaxed">
                        {project.detailedDescription}
                      </p>
                    </div>
                  )}

                  {project.problem && (
                    <div>
                      <h3 className="text-xl font-display font-semibold text-primary mb-3">
                        Problema
                      </h3>
                      <p className="text-base text-foreground/80 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  )}

                  {project.solution && (
                    <div>
                      <h3 className="text-xl font-display font-semibold text-primary mb-3">
                        Soluzione verificata
                      </h3>
                      <p className="text-base text-foreground/80 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}

                  {project.features && project.features.length > 0 && (
                    <div>
                      <h3 className="text-xl font-display font-semibold text-primary mb-3">
                        Features tecniche
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-base text-foreground/80 leading-relaxed flex items-start">
                            <span className="text-primary mr-2 mt-1.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const WorkSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isModalOpen]);



  const handleCardClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      id="work"
      className="py-32 px-6 md:px-12 bg-background border-t border-border relative"
    >
      {/* <div className="section-label">[ 01. SELECTED WORKS ]</div> */}

      {/* Section Header */}
      <div className="text-center mb-12 mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:whitespace-nowrap">
          Soluzioni <span className="text-gradient">reali</span>, risultati{" "}
          <span className="text-gradient">concreti</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Progetti sviluppati per affrontare problemi complessi con approcci data-driven.
        </p>
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>

  );
};

export default WorkSection;
