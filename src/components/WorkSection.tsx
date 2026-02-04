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
    category: "Reinforcement Learning",
    description:
      "DDQN/PPO agent playing Super Mario using YOLOv5 for real-time obstacle recognition.",
    detailedDescription:
      "Progetto avanzato di intelligenza artificiale applicata al gaming, che combina Reinforcement Learning (con algoritmi DDQN e PPO) e Computer Vision (YOLOv5) per addestrare un agente capace di completare un livello del gioco Super Mario Bros automatizzando decisioni basate sia sulla percezione visiva sia sull'apprendimento dall'ambiente.",
    problem:
      "Nel campo del reinforcement learning applicato ai videogiochi, addestrare un agente che completa autonomamente un livello di Super Mario Bros è un compito complesso per tre motivi principali: 1) Alto spazio di stati e azioni: lo stato dell'agente è composto da immagini di gioco ad alta dimensionalità e la combinazione di movimenti possibili è vasta. 2) Apprendimento sequenziale: l'agente deve imparare una policy ottimale che massimizzi la ricompensa accumulata attraverso una sequenza temporale di decisioni. 3) Percezione del contesto: usare solo dati grezzi dallo screen non cattura direttamente strutture semantiche utili (es. ostacoli, nemici o gap).",
    solution:
      "Il progetto implementa e confronta tre approcci principali: DDQN (Double Deep Q-Network) che estende Q-learning riducendo l'overestimation del valore delle azioni; PPO (Proximal Policy Optimization), algoritmo policy gradient robusto che bilancia esplorazione ed exploitation; e PPO + YOLOv5 che integra il modello di object detection per fornire feature visive semantiche. La combinazione delle tecniche ha permesso di addestrare agenti che raggiungono completamenti di livello (circa 54 vittorie dopo 10M passi di training con PPO).",
    features: [
      "Linguaggi e framework: Python, Jupyter Notebook, PyTorch per deep learning e Stable-Baselines3 per PPO",
      "Algoritmi RL: DDQN implementazione custom con replay buffer e target network; PPO con configurazioni batch size variabili",
      "Computer Vision: YOLOv5 per object detection con metriche ~94% precision, 100% recall",
      "Ambiente: gym-super-mario-bros con wrapper per frame stacking e preprocessing",
      "Valutazione: metriche quantitative su vittorie/episodi, reward cumulativo, perdita di policy/Q-values",
      "Output multimediale: video demo e grafici evolutivi di training"
    ],
    video: "/Mario_Bros_Video_Generation.mp4",
    poster: "/mario-poster.png",
    image: "/mario-poster.png",
  },
  {
    title: "SportTech DB",
    category: "Database Design",
    description:
      "Complex PostgreSQL database for sports competitions with automated scoring and reporting.",
    detailedDescription:
      "Progettazione e implementazione di un database relazionale completo per la gestione di competizioni sportive, squadre e classifiche, garantendo integrità dei dati e automazione di regole di business.",
    problem:
      "Le competizioni sportive generano un alto volume di dati strutturati: partite, squadre, giocatori, punteggi, classifiche e regole di assegnazione punti. Senza un modello relazionale solido, le informazioni rischiano di essere incoerenti, ridondanti o difficili da interrogare. La sfida tecnica consiste nel progettare una base dati normalizzata che supporti query complesse, regole di business automatizzate e reporting affidabile.",
    solution:
      "SportTech-Database-Project affronta il problema progettando un database relazionale completo con: modello concettuale (ER) chiaro per tutte le entità principali; modello logico e fisico implementato in PostgreSQL con normalizzazione fino alla 3NF; regole e vincoli di integrità tramite constraint, trigger e stored procedure per automatizzare calcolo punti; query di reportistica automatica. Il progetto è stato testato con dataset simulati dimostrando coerenza dei dati e robustezza del modello.",
    features: [
      "Database: PostgreSQL relazionale con gestione ACID e supporto a query complesse",
      "Progettazione ER: tabelle normalizzate, relazioni uno-a-molti e molti-a-molti",
      "Trigger e stored procedure: calcolo automatico punti partita, aggiornamento classifiche, gestione eventi speciali",
      "Query avanzate: report su performance squadre, statistiche individuali, filtraggio per campionato o stagione",
      "Script modulari: file SQL per setup rapido e aggiornamenti futuri",
      "Scalabilità: struttura pronta per nuovi sport, tornei o campionati senza modifiche sostanziali"
    ],
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format",
  },
  {
    title: "City Statistics",
    category: "Data Analysis",
    description:
      "Statistical pipeline in R analyzing OECD urban indicators with clustering for policy insights.",
    detailedDescription:
      "Analisi avanzata di indicatori socio-economici, demografici e ambientali delle aree urbane funzionali (FUA) dei Paesi OCSE, finalizzata a supportare decisioni di policy basate su dati comparabili.",
    problem:
      "Le decisioni urbanistiche, di sviluppo economico e ambientale richiedono una comprensione approfondita delle differenze tra aree urbane a livello internazionale. Tuttavia, i dataset delle FUA (Functional Urban Areas) dell'OCSE sono spesso complessi, non normalizzati e non immediatamente confrontabili. La sfida tecnica consiste nell'aggregare, normalizzare e analizzare dati multivariati per evidenziare pattern significativi e supportare politiche di pianificazione urbana e sviluppo sostenibile.",
    solution:
      "City-Statistics-OECD-FUA-Analysis costruisce una pipeline completa: acquisizione dei dataset OCSE su indicatori economici, demografici e ambientali; pulizia e normalizzazione per garantire consistenza tra paesi; analisi statistica multivariata per correlazioni, trend e outlier; visualizzazione e reportistica per confrontare le FUA rendendo i dati immediatamente interpretabili. Il progetto è stato testato su più FUA verificando coerenza dei dati e robustezza delle analisi statistiche.",
    features: [
      "Linguaggi: R per data cleaning, analisi statistica e visualizzazione (ggplot2, dplyr, tidyr, corrplot)",
      "Analisi statistica: correlazioni, regressioni multivariate, clustering di FUA, test di significatività",
      "Gestione dataset complessi: importazione, pulizia, normalizzazione e integrazione multivariata",
      "Visualizzazione: grafici comparativi tra FUA, mappe tematiche, heatmap per indicatori",
      "Reportistica: output strutturati per report accademici o policy brief con tabelle e grafici automatizzati",
      "Reproducibilità: script modulari per pipeline di analisi consentendo facili aggiornamenti"
    ],
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&auto=format",
  },
  {
    title: "LLM as Judge",
    category: "AI Evaluation",
    description:
      "Python framework using GPT-4 and Claude to evaluate chatbot quality with multi-metric analysis.",
    detailedDescription:
      "Framework Python per l'analisi automatica multi-metrica della qualità dei dialoghi tra umani e agenti conversazionali, basato su LLM di nuova generazione (Claude, GPT-4o) e su dataset multipli.",
    problem:
      "Nel campo dell'elaborazione del linguaggio naturale e dei chatbot, una delle sfide principali è valutare in modo affidabile e riproducibile la qualità delle conversazioni generate dagli agenti rispetto a quella umana. Le tecniche tradizionali si basano su metriche quantitative limitate o annotazioni manuali costose e non scalabili. Il problema tecnico consiste nel creare una metodologia di valutazione automatica e multi-metrica in grado di confrontare le risposte dei modelli conversazionali sfruttando i moderni modelli linguistici come giudici critici.",
    solution:
      "LLM-Eval-Analysis propone un framework di valutazione in due fasi: Fase 1 confronta modelli (Claude 3, Claude 3.5, GPT-4o, GPT-4o-mini) su dataset ConvAI2 per misurare la capacità dei LLM giudici di replicare valutazioni umane; Fase 2 analizza l'effetto della struttura del dataset (FED, PC, TC, DSTC9). La valutazione utilizza metriche come accuracy, Cohen's Kappa, Pearson, Spearman e Kendall-Tau. La soluzione dimostra come i LLM configurati come giudici offrano valutazioni meno soggettive e più scalabili.",
    features: [
      "Ambiente: Python 3 con gestione dipendenze tramite venv e configurazione API via .env",
      "LLM giudici: integrazione API OpenAI (GPT-4o, GPT-4o-mini) e Anthropic (Claude 3, 3.5)",
      "Datasets: ConvAI2 e benchmark strutturati (FED, PC, TC, DSTC9) per scenari differenti",
      "Metriche statistiche: Pearson, Spearman, Kendall-Tau, Cohen's Kappa per quantificare qualità",
      "Analisi comparativa: confronto performance di valutazione su modelli e dataset diversi",
      "Report quantitativi: output per supportare decisioni su modelli LLM e dataset ottimali"
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format",
  },
  {
    title: "Applied Statistics",
    category: "Statistical Modeling",
    description:
      "Complex dataset analysis with inferential modeling, regressions and advanced R visualization.",
    detailedDescription:
      "Studio statistico completo per identificare pattern, correlazioni e trend significativi in dataset complessi di natura socio-economica e ambientale, con validazione di ipotesi tramite tecniche quantitative avanzate.",
    problem:
      "I dataset socio-economici e ambientali spesso presentano grande complessità e variabilità: variabili continue e categoriche, dati mancanti, scale differenti e relazioni non lineari. Il problema tecnico principale consiste nell'estrarre insight significativi preservando la validità statistica, evitando errori di interpretazione e garantendo riproducibilità delle analisi.",
    solution:
      "Il progetto applica metodologie statistiche avanzate per: pulizia e normalizzazione dei dati per garantire coerenza; analisi esplorativa per individuare pattern preliminari e anomalie; applicazione di modelli statistici inferenziali e multivariati per testare ipotesi; validazione dei risultati con tecniche standard di significatività statistica. La soluzione è stata verificata su dataset reali e simulati, dimostrando accuratezza, robustezza e replicabilità dei risultati.",
    features: [
      "Linguaggio: R per data cleaning, modellazione statistica e visualizzazione",
      "Data preprocessing: gestione dati mancanti, scaling, codifica variabili categoriche",
      "Analisi esplorativa: statistiche descrittive, distribuzioni, outlier detection, scatterplot e boxplot",
      "Modelli statistici: regressione lineare/multipla, ANOVA, correlazione (Pearson, Spearman), clustering, PCA",
      "Visualizzazione: grafici comparativi, heatmap di correlazione, diagrammi multivariati",
      "Reproducibilità: script modulari per pipeline completa consentendo aggiornamenti rapidi"
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
  },
  {
    title: "AedesTravel",
    category: "SaaS Platform",
    description:
      "Piattaforma SaaS end-to-end per property manager che automatizza gestione, check-in/out e comunicazione con ospiti, integrata con Chatbot AI.",
    detailedDescription:
      "Piattaforma SaaS end-to-end per property manager e proprietari di case vacanza, che automatizza gestione, check-in/out e comunicazione con ospiti, integrando strumenti di marketing, analytics e servizi turistici e molto altro ancora, integrata con Chatbot AI, una rivoluzione nel settore.",
    problem:
      "I proprietari di immobili e i property manager di affitti brevi affrontano una complessità operativa elevata: coordinamento delle prenotazioni, gestione check-in/out, comunicazione con ospiti, ottimizzazione delle tariffe, monitoraggio recensioni e manutenzione. Gli strumenti tradizionali sono spesso frammentati (OTA separati, fogli Excel, app multiple), richiedono intervento manuale continuo e generano inefficienze. La sfida tecnica consiste nel centralizzare tutte le operazioni di gestione di più immobili in un'unica piattaforma scalabile, mantenendo controllo, sicurezza dei dati e automazioni avanzate.",
    solution:
      "AEDES Travel affronta questo problema con una piattaforma SaaS integrata, che permette: gestione automatizzata dei check-in e check-out tramite dispositivi smart compatibili con Alexa e altre tecnologie IoT; comunicazione con ospiti tramite chatbot AI e messaggistica centralizzata; dashboard per proprietari e property manager con analytics in tempo reale su prenotazioni, ricavi e performance degli immobili; creazione di itinerari personalizzati per turisti, promozione di pacchetti viaggio e sconti con partner locali; gestione della reputazione e monitoraggio recensioni. La soluzione è stata validata in scenari reali di gestione di immobili in diverse città italiane, dimostrando riduzione dei tempi operativi, maggiore soddisfazione degli ospiti e maggiore rendimento per i proprietari.",
    features: [
      "Piattaforma SaaS: accessibile da web e mobile con interfaccia intuitiva e responsive",
      "Automazioni IoT: check-in/out automatici, controllo dispositivi smart, gestione accessi e notifiche in tempo reale",
      "Intelligenza artificiale: chatbot per assistenza turisti, generazione di itinerari personalizzati, analisi recensioni",
      "Dashboard proprietari: analytics dettagliati su prenotazioni, ricavi, occupazione e performance degli immobili",
      "Gestione OTA e canali diretti: integrazione con portali di affitti brevi e gestione centralizzata delle tariffe",
      "Community e servizi aggiuntivi: promozione di pacchetti viaggio, sconti e partnership locali",
      "Sicurezza e scalabilità: gestione dati separata per ogni immobile, crittografia e estensione multi-proprietà"
    ],
    image:
      "/aedes-travel-logo.png",
  },
  {
    title: "CityWander",
    category: "Mobile Tourism",
    description:
      "Applicazione turistica mobile che combina percorsi personalizzati, gamification, geofencing e riconoscimento immagini per arricchire l'esperienza di visita.",
    detailedDescription:
      "Applicazione turistica mobile che combina percorsi personalizzati, gamification, geofencing e riconoscimento immagini per arricchire l'esperienza di visita in città.",
    problem:
      "I visitatori e i turisti spesso trovano difficile scoprire in modo efficace e coinvolgente i luoghi di interesse di una città: le soluzioni tradizionali richiedono ricerche manuali, mappe disgiunte e multiple app. Dal punto di vista tecnico, il problema consiste nel fornire percorsi di visita dinamici e personalizzati che integrino informazioni geografiche, punti di interesse locali e coinvolgimento attivo dell'utente, senza dipendere da soluzioni statiche e poco interattive.",
    solution:
      "CityWander affronta questo problema con una app mobile progettata per il turismo urbano, focalizzata sulla città di Salerno, che offre funzioni di tour personalizzati, meccaniche di gamification per incentivare l'esplorazione, utilizzo di geofencing per attivare contenuti in base alla posizione e moduli di riconoscimento immagini per arricchire il profilo del luogo visitato. In questo modo l'esperienza turistica diventa più immersiva, interattiva e contestuale, aumentando la visibilità delle attrazioni locali e la partecipazione degli utenti alla scoperta di luoghi e attività.",
    features: [
      "Architettura mobile full-stack: frontend mobile (Flutter/Dart multiplatform) e backend REST API (Spring Boot)",
      "Gamification: percorsi interattivi, punti esperienza, badge e progressi visitatore per stimolare esplorazione continua",
      "Geofencing: rilevamento posizione per attivare contenuti turistici in base alla prossimità di attrazioni e POI",
      "Riconoscimento immagini: riconoscimento elementi visivi del contesto urbano per informazioni arricchite e contestuali",
      "Database: PostgreSQL per memorizzare tour, punti d'interesse, profili utente e dati di engagement",
      "CI/CD: pipeline GitLab CI/CD per automazione di build e rilascio continuo"
    ],
    image:
      "/citywander.webp",
  },
  {
    title: "Classify",
    category: "OCR Technology",
    description:
      "App mobile per la scansione intelligente di documenti accademici con riconoscimento ottico del testo.",
    detailedDescription:
      "App mobile per la scansione intelligente di documenti accademici con riconoscimento ottico del testo.",
    problem:
      "In molti contesti universitari e accademici gli studenti e i docenti si trovano a gestire grandi quantità di materiale cartaceo: dispense, appunti, schede esercizi e riferimenti bibliografici. La digitalizzazione di questi documenti è spesso macchinosa o richiede strumenti esterni poco intuitivi. Il problema tecnico principale è implementare una pipeline di scansione robusta che acquisisca immagini da fotocamera, applichi OCR di alta qualità e restituisca testo leggibile, indicizzabile e pronto per essere ricercato o archiviato.",
    solution:
      "Classify affronta questo problema attraverso un'applicazione mobile che integra funzionalità di acquisizione immagine, pre-elaborazione dei documenti e OCR, permettendo all'utente di scansionare velocemente qualsiasi pagina e ottenere testo digitale con layout preservato. La soluzione è stata verificata tramite l'utilizzo su più dataset di immagini documentali e test di accuratezza OCR in scenari reali (fotocamere smartphone, condizioni di luce variabili). Il fork migliora e adatta il progetto originale puntando su usabilità per studenti e ricercatori.",
    features: [
      "Piattaforma: Applicazione mobile (React Native / Flutter / Android nativo)",
      "OCR integrato: Libreria Tesseract OCR per riconoscimento automatico caratteri da immagini acquisite",
      "Preprocessing immagini: binarizzazione, rilevamento contorni, ritaglio automatico e correzione prospettica",
      "Interfaccia utente: schermate per acquisizione multipagina, visualizzazione anteprima, salvataggio/esportazione",
      "Flusso ottimizzato: dalla foto alla conversione testo con semplice tapping e ritocco manuale risultato"
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format",
  },
  {
    title: "AI Trading Bot",
    category: "Financial Technology",
    description:
      "Expert Advisor ibrido per MetaTrader 5 che integra segnali tecnici tradizionali e predizioni AI per trading ad alta frequenza nel Forex.",
    detailedDescription:
      "Expert Advisor ibrido per MetaTrader 5 che integra segnali tecnici tradizionali e predizioni AI, ottimizzato per strategie di trading ad alta frequenza nel mercato Forex.",
    problem:
      "Le strategie di trading ad alta frequenza (HFT) nel Forex richiedono decisioni rapide basate su pattern di mercato spesso complessi e rumorosi. La sfida tecnica consiste nel: 1) Generare segnali affidabili in tempo reale. 2) Integrare previsioni AI per anticipare movimenti di prezzo. 3) Automatizzare l'esecuzione di trade minimizzando slippage e rischi, senza intervento umano costante. L'approccio classico basato solo su indicatori tecnici può non essere sufficiente per sfruttare micro-opportunità di mercato, mentre le predizioni AI permettono di anticipare trend nascosti nei dati storici.",
    solution:
      "AI-Enhanced-HFT combina strategie classiche e machine learning per creare un Expert Advisor ibrido: utilizzo di indicatori tecnici come EMA e ADX per segnali di ingresso/uscita; modelli di previsione AI (XGBoost, Random Forest, LSTM) per stimare il movimento dei prezzi su finestre temporali brevi; integrazione dei segnali in un EA MetaTrader 5, testato in backtest e demo trading per verificare efficacia e stabilità. I test mostrano che l'EA riesce a generare trade coerenti con le previsioni dei modelli, migliorando il rapporto rischio/rendimento rispetto a strategie basate solo su indicatori tecnici.",
    features: [
      "Piattaforma: MetaTrader 5 per gestione ordini, esecuzione automatica e backtesting",
      "Linguaggi: MQL5 per EA; Python per modelli AI e calcolo predizioni",
      "Modelli AI: XGBoost/Random Forest per previsioni breve termine; LSTM per analisi sequenziale e trend detection",
      "Integrazione realtime: socket o API per collegare predizioni Python con EA MQL5",
      "Backtesting: simulazioni su dati storici con metriche (drawdown, profit factor, win rate)",
      "Parametrizzazione: modifica periodi EMA/ADX, soglie di segnale e parametri AI senza ricompilare"
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl"
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
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

const WorkSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className="section-label">[ 01. SELECTED WORKS ]</div>

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
