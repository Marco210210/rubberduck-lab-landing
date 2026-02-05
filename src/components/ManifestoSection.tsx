import { motion, AnimatePresence } from "framer-motion";
import { Zap, Workflow, Boxes, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ManifestoSection = () => {
  const text = "Meno operazioni manuali. Più controllo. Automazioni intelligenti progettate per crescere con il tuo business.";
  const words = text.split(" ");

  const [selectedAutomation, setSelectedAutomation] = useState<typeof automationServices[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (selectedAutomation) {
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
  }, [selectedAutomation]);

  const sliderRef = useRef<HTMLDivElement>(null);

  const automationServices = [
    {
      icon: Zap,
      title: "Ristoranti",
      description: "Un ecosistema digitale che trasforma la gestione operativa del ristorante, delegando all'intelligenza artificiale le attività ripetitive per restituire tempo alla qualità del servizio.",
      problem: "La gestione quotidiana di un ristorante è spesso ostacolata da processi manuali che drenano energie preziose: telefonate per prenotazioni che arrivano durante il servizio, fatture dei fornitori accumulate sulla scrivania, e l'incapacità di rispondere tempestivamente alle recensioni online. I principali pain point includono il caos amministrativo nel data entry contabile, la difficoltà nel formare rapidamente lo staff sulle policy interne e la perdita di potenziali clienti che non ricevono risposta immediata su canali come WhatsApp o Email.",
      solution: "La soluzione consiste nell'implementazione di agenti intelligenti e workflow automatizzati capaci di agire come un 'manager invisibile'. Integrando chatbot AI per il front-end e sistemi di analisi documentale per il back-office, il progetto permette di centralizzare ogni flusso informativo. L'intelligenza artificiale non si limita a rispondere, ma 'comprende' i documenti e i messaggi, eseguendo azioni concrete nei database aziendali e garantendo una gestione impeccabile senza l'intervento umano costante.",
      examples: [
        "Gestione prenotazioni e FAQ: Assistente virtuale su WhatsApp gestisce richieste in tempo reale, verifica disponibilità sui calendari e risponde autonomamente a domande su menu, allergie o orari",
        "Digitalizzazione fatture fornitori: Sistema analizza PDF ricevuti via email, estrae imponibile e scadenze IVA, inserisce dati in contabilità",
        "Monitoraggio reputazione: AI analizza nuove recensioni, rileva tono negativo e invia alert urgente al titolare con riassunto problema",
        "Assistente formazione staff: Dipendenti interrogano chat interna per procedure, benefit aziendali, riducendo tempo manager",
        "Analisi performance: Report settimanale automatico spiega andamento visite e conversioni web in modo semplificato"
      ]
    },
    {
      icon: Workflow,
      title: "Bar",
      description: "Ottimizzazione dei flussi operativi e dell'engagement dei clienti per bar e caffetterie tramite automazione asincrona e agenti AI.",
      problem: "L'operatività di un bar è caratterizzata da ritmi frenetici e un alto volume di micro-attività che sottraggono tempo al servizio al cliente. I principali pain point includono: saturazione delle comunicazioni con difficoltà nel gestire ordini d'asporto durante picchi di lavoro; disordine amministrativo con scontrini e bolle fornitore cartacei; marketing discontinuo senza presenza costante sui social; impossibilità di analizzare e rispondere tempestivamente ai feedback online; inefficienza nella comunicazione dei turni e delle procedure interne per il personale.",
      solution: "Implementazione di un'architettura di 'AI Operations' che centralizza messaggistica, contabilità e marketing strategico. Attraverso l'integrazione di modelli di linguaggio avanzati (LLM) e sistemi di visione artificiale (OCR), il progetto automatizza attività di back-office e customer care di primo livello. Questo permette di eliminare i colli di bottiglia informativi e di centralizzare i dati operativi in un unico hub digitale accessibile in tempo reale.",
      examples: [
        "Concierge Digitale WhatsApp: Assistente virtuale H24 gestisce ordini d'asporto, listini prezzi e prenotazioni eventi senza interruzioni per staff",
        "Archiviazione Documentale: Sistema OCR scansiona scontrini e fatture, estrae dati, rinomina secondo standard aziendali e archivia su cloud",
        "AI Social Media Manager: Generazione automatica script video e post Instagram/TikTok per promozioni giornaliere mantenendo canali attivi",
        "Sentiment Alert System: Monitoraggio recensioni con analisi tono, alert su Slack per feedback critici e gestione immediata crisi",
        "Playlist Branding: Algoritmi musicali generano playlist dinamiche adattate ai trend garantendo atmosfera coerente"
      ]
    },
    {
      icon: Boxes,
      title: "E-Commerce",
      description: "Un'architettura integrata che utilizza agenti intelligenti per ottimizzare il ciclo di vita del cliente, dalla qualificazione del lead alla gestione del post-vendita.",
      problem: "La gestione di un negozio online presenta sfide critiche legate alla saturazione dei canali di assistenza durante picchi stagionali come Black Friday. Frammentazione dati tra strumenti di marketing e vendita porta a perdita conversioni per carrelli abbandonati non gestiti. Sincronizzazione inventario imprecisa causa overselling. Creazione costante contenuti SEO e gestione manuale feedback negativi richiedono risorse umane non scalabili per realtà in crescita.",
      solution: "La soluzione implementa una rete di automazioni asincrone che connettono backend store (Shopify/WooCommerce) con motori AI e strumenti Customer Operations. Attraverso chatbot intelligenti e monitoraggio real-time, automatizza comunicazione cliente e gestione magazzino. Trasforma dati grezzi vendite in azioni marketing proattive, riducendo churn e ottimizzando margini eliminando task manuali ripetitivi.",
      examples: [
        "Supporto post-vendita autonomo: Agente AI autentica utente, consulta storico ordini, recupera dati spedizione corrieri per risposte istantanee",
        "Recupero carrelli abbandonati: Email dinamica cita prodotti specifici e offre coupon generato da AI per chiusura vendita",
        "Sincronizzazione inventario: Allineamento automatico livelli magazzino tra Shopify e Amazon eliminando rischio overselling",
        "Gestione pagamenti falliti: Monitoraggio Stripe con alert amministrativi e sequenze email recupero cliente",
        "Content Factory: Generazione automatica articoli blog e descrizioni prodotto SEO ottimizzate mantenendo brand voice"
      ]
    },
    {
      icon: Zap,
      title: "Palestre",
      description: "Soluzione intelligente per centralizzare l'assistenza ai soci, automatizzare il recupero dei pagamenti e ottimizzare la vendita di servizi di personal training.",
      problem: "Gestione centro sportivo rallentata da volume massiccio richieste ripetitive su WhatsApp/social riguardo orari, prezzi abbonamenti e disponibilità corsi. Churn involontario per pagamenti falliti o carte scadute che passano inosservati. Difficoltà a qualificare potenziali nuovi iscritti (lead) perdendo tempo con contatti poco interessati. Onere amministrativo gestione manuale fatture fornitori e necessità mantenere atmosfera musicale coerente senza interventi continui.",
      solution: "Il progetto introduce architettura automazione che integra assistenti virtuali intelligenti e workflow monitoraggio finanziario real-time. Grazie a AI, il centro risponde istantaneamente a dubbi soci e automatizza macchina amministrativa. La tecnologia libera staff da compiti burocratici permettendo ai coach di concentrarsi su allenamento e risultati clienti.",
      examples: [
        "Assistente WhatsApp soci: Chatbot AI H24 risponde su orari corsi, abbonamenti e regole riducendo 70% carico desk",
        "Recupero automatico abbonamenti: Sistema Stripe rileva pagamento fallito e invia notifica staff o email cortesia socio",
        "Qualificazione lead PT: Form dinamico AI filtra richieste, identifica clienti con obiettivi chiari e propone booking prima sessione",
        "Digitalizzazione spese: OCR analizza scontrini e fatture fornitori, estrae dati contabili e archivia su cloud",
        "Branding sonoro: Algoritmi aggiornano playlist centro in base trend ritmati eliminando gestione manuale"
      ]
    },
    {
      icon: Workflow,
      title: "Negozi e Magazzini",
      description: "Automazione progettata per sincronizzare vendite al dettaglio con gestione magazzino, eliminando errori di inventario e velocizzando la logistica documentale.",
      problem: "Settore commercio e logistica soffre discrepanza tra scorte reali e dichiarate sui sistemi digitali, causando rischio vendere prodotti esauriti o capitali immobilizzati in eccesso. Magazzini sommersi da documenti cartacei, bolle e fatture che richiedono ore inserimento manuale con alto tasso errore. Sicurezza accessi e monitoraggio mezzi trasporto gestiti in modo analogico, difficile tracciare entrate/uscite real-time. Mancanza comunicazione immediata cliente su disponibilità porta a perdita opportunità commerciali.",
      solution: "Soluzione implementa workflow sincronizzazione bidirezionale e sistemi visione artificiale per rendere magazzino e punto vendita 'parlanti'. Attraverso OCR avanzati e bot conversazionali intelligenti, automatizza passaggio dati da documento fisico a database gestionale. Approccio garantisce Source of Truth unificata dove ogni movimento merce, fattura e richiesta cliente vengono elaborati istantaneamente, migliorando precisione e riducendo tempi evasione ordini.",
      examples: [
        "Sincronizzazione Inventario Multi-Store: Vendita aggiorna automaticamente livelli magazzino su tutte piattaforme prevenendo overselling",
        "Digitalizzazione Bolle e Fatture: Analisi documentale legge PDF e foto documenti trasporto, estrae codici prodotto per caricamento ERP",
        "Monitoraggio Accessi Computer Vision: AI estrae numeri targa veicoli in entrata registrando orario senza intervento manuale",
        "Assistente Disponibilità Prodotti: Chatbot WhatsApp consente consultare in real-time se articolo è presente anche fuori orari",
        "Alert Meteo per Logistica: Monitoraggio condizioni meteo, notifiche squadre scarico per riprogrammare attività evitando danni merce"
      ]
    },
    {
      icon: Boxes,
      title: "Agenzie Marketing",
      description: "Ecosistema automazione per eliminare colli di bottiglia nel sales e produzione contenuti, scalando senza aumentare overhead operativo.",
      problem: "Agenzie marketing affrontano sfida bilanciare acquisizione nuovi clienti con erogazione servizi alta qualità. Processo vendita rallentato da ricerca manuale prospect e outreach generico con bassi tassi conversione. Sul fronte operativo, produzione costante contenuti social e blog genera burnout creativo richiedendo ore adattamento formati su piattaforme. Gestione amministrativa, fatturazione ricorrente e monitoraggio redditività progetti sottrae tempo strategia, difficile capire real-time se cliente è in profitto o perdita.",
      solution: "Soluzione implementa rete workflow intelligenti che automatizzano intero funnel: da Sales Intelligence per mappare potenziali clienti, all'attivazione campagne outreach iper-personalizzate via AI. Integrando motori generazione contenuti e sync tra CRM e project management, agenzia trasforma produzione creativa in catena montaggio digitale. Approccio permette centralizzare dati operativi e finanziari, garantendo ogni lead qualificato automaticamente e ogni ora lavorata tracciata e fatturata correttamente, massimizzando margini su account.",
      examples: [
        "Sales Intelligence Automatica: Sistema analizza domini potenziali clienti, estrae posizionamento e prezzi, popola CRM automaticamente",
        "Outreach LinkedIn: AI legge profili lead scrivendo messaggi personalizzati su bio e successi professionali aumentando accettazione",
        "Content Repurposing: Trasformazione automatica articolo blog in post ottimizzati per social con script video Reels/TikTok",
        "Qualificazione Lead: Form intelligenti AI analizzano necessità e budget proponendo call booking solo a chi è target",
        "Monitoraggio Redditività: Integrazione time-tracking e database finanziari per dashboard margine guadagno progetti real-time"
      ]
    },
    {
      icon: Zap,
      title: "Studi Legali",
      description: "Ecosistema AI per automatizzare ricerca normativa, estrazione dati contabili e gestione scadenze professionali con sistemi RAG.",
      problem: "Attività professionisti rallentata da task basso valore aggiunto ma alto rischio errore, come inserimento manuale dati fatture o ricerca paragrafi specifici in normative chilometriche. Studi sommersi da richieste email ripetitive su appuntamenti o info preliminari che frammentano giornata riducendo tempo consulenza strategica. Gestione pratiche inefficiente per dati sparsi tra email e database non comunicanti, causando potenziali dimenticanze su scadenze critiche o appuntamenti fissati.",
      solution: "Soluzione implementa architettura basata su sistemi RAG (Retrieval-Augmented Generation) e workflow automazione asincrona per centralizzare conoscenza studio. Integrando motori visione artificiale per parsing documenti e chatbot intelligenti per triage richieste, trasforma archivio studio in base conoscenza interrogabile in linguaggio naturale. Approccio elimina data-entry manuale garantendo ogni informazione, da fattura a riferimento legale, estratta, archiviata e disponibile istantaneamente per consulenza.",
      examples: [
        "Assistente Legale RAG: Sistema interroga migliaia pagine normative e contratti in linguaggio naturale fornendo citazioni esatte",
        "Estrazione dati contabili: Modelli analizzano fatture PDF eterogenei estraendo P.IVA, imponibile, aliquote per import gestionali",
        "Risponditore Email: Gestione automatizzata richieste comuni via bozze AI basate su Knowledge Base pronte per invio un click",
        "Centralizzazione Appuntamenti: Prenotazione online crea automaticamente pagina Notion con profilo, note preliminari e task follow-up",
        "Monitoraggio Scadenze: Automazione reportistica e alert pagamenti/scadenze certificati digitali evitando sanzioni"
      ]
    },
    {
      icon: Workflow,
      title: "Noleggio Auto",
      description: "Infrastruttura digitale per ottimizzare check-in/out veicoli, automatizzare contabilità ricambi e gestire comunicazioni clienti in tempo reale.",
      problem: "Agenzie noleggio e officine affrontano elevato carico burocratico legato a registrazione manuale veicoli, gestione targhe e verifica documenti identità. Flusso lavoro interrotto da continue richieste telefoniche/email su stato riparazioni o disponibilità mezzi. Gestione fatture fornitori ricambi e archiviazione ricevute spese manutenzione generano accumulo documenti cartacei rallentando contabilità e aumentando rischio errori sincronizzazione tra software gestionali.",
      solution: "Progetto introduce sistema automazione basato su Computer Vision e workflow asincroni che trasformano gestione analogica in processo digitale fluido. Attraverso modelli AI per OCR e chatbot intelligenti, automatizza cattura dati tecnici (targhe) e gestione back-office contabile. Ecosistema centralizza informazioni clienti e veicoli, garantendo ogni operazione da ingresso officina a fatturazione finale tracciata e aggiornata istantaneamente in CRM e database cloud.",
      examples: [
        "Riconoscimento targhe: Veicolo in entrata/uscita, sistema estrae targa da foto registrando evento su database senza input manuale",
        "Digitalizzazione ricambi: Motore analizza fatture passive e bolle estraendo codici articolo e importi per import contabilità",
        "Gestione richieste clienti: Assistente virtuale WhatsApp/email risponde istantaneamente su disponibilità noleggio o stato riparazione",
        "Archiviazione spese: Sistema monitora email in arrivo, individua ricevute, rinomina con standard aziendale e salva su cloud",
        "Sincronizzazione Lead: Nuovo contratto noleggio/scheda lavoro sincronizza dati tra sistemi eliminando inserimenti duplicati"
      ]
    },
    {
      icon: Boxes,
      title: "Hotel e B&B",
      description: "Ecosistema digitale per automatizzare accoglienza ospiti, gestire reputazione online e ottimizzare flussi amministrativi delle strutture ricettive.",
      problem: "Strutture ricettive affrontano sovraccarico richieste email/messaggi su disponibilità, preventivi e info logistiche richiedendo risposte rapide per non perdere prenotazione. Personale assorbito da task manuali come check-in documenti e archiviazione spese sottraendo tempo a ospitalità reale. Gestione reputazione è critico: monitorare costantemente feedback su portali è difficile, e risposta tardiva a commento negativo può danneggiare seriamente tasso occupazione futuro.",
      solution: "Soluzione implementa workflow automazione che connettono canali prenotazione con agent intelligenti e sistemi analisi documentale. Grazie a integrazione chatbot AI e motori OCR, struttura offre supporto H24 a ospiti e digitalizza istantaneamente documenti identità o fattura fornitore. Approccio centralizza gestione feedback e comunicazioni, trasformando dati operativi in report pronti per direzione e garantendo esperienza fluida per ospite e staff.",
      examples: [
        "Gestione preventivi email: Sistema monitora casella, genera bozze professionali risposta su disponibilità e sottopone a staff per invio rapido",
        "Concierge virtuale WhatsApp: Chatbot risponde istantaneamente su check-in, Wi-Fi o servizi extra riducendo code front-desk",
        "Digitalizzazione documenti OCR: AI estrae dati da documenti identità o bolle via foto registrando info su database in secondi",
        "Monitoraggio reputazione: Scansione automatica recensioni portali con sentiment analysis, alert Slack per feedback negativi",
        "Reportistica automatizzata: Estrazione settimanale dati traffico web analizzati da AI per report leggibile su andamento prenotazioni"
      ]
    },
  ];

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const slides = sliderRef.current.querySelectorAll('.automation-slide');
    if (slides[index]) {
      slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setCurrentIndex(index);
          }
        });
      },
      {
        root: slider,
        threshold: 0.5,
      }
    );

    const slides = slider.querySelectorAll('.automation-slide');
    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="automations" className="py-32 px-6 bg-background border-t border-border relative flex flex-col items-center justify-center min-h-screen">
      {/* <div className="section-label">[ 05. MANIFESTO ]</div> */}

      {/* Section Header */}
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
          Soluzioni di <span className="text-gradient">Automazione AI</span>
        </h3>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Automatizziamo i processi aziendali con workflow intelligenti basati sull’intelligenza artificiale.
        </p>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {automationServices.map((_, index) => (
          <div
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-1.5 h-1.5 rounded-full cursor-pointer hover:scale-125 transition-all ${
              currentIndex === index ? 'bg-white' : 'bg-white/20 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Horizontal Scroll Carousel - Gemini 3 Style */}
      <div
        ref={sliderRef}
        className="flex flex-row overflow-x-auto snap-x snap-mandatory hide-scrollbar w-full pb-6 px-6 md:px-10 gap-x-6 md:gap-x-12 scroll-smooth"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)'
        }}
      >
        {automationServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              data-index={index}
              onClick={() => setSelectedAutomation(service)}
              className="automation-slide flex-shrink-0 w-[85vw] md:w-[500px] aspect-[3/4] bg-[#0A0A0A] relative flex flex-col overflow-hidden border border-white/10 shadow-2xl snap-center cursor-pointer group rounded-xl md:rounded-2xl p-6 md:p-8"
            >
              {/* Flashlight hover effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.1), transparent 40%)`
                }}
              />

              {/* Header with icon */}
              <div className="flex mix-blend-screen mb-8 items-start justify-between relative z-10">
                <div className="flex text-white bg-white/5 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center border border-white/10">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 flex-grow relative z-10">
                {/* Skeleton title bar */}
                <div className="bg-neutral-800 w-20 h-3 rounded border border-white/5"></div>
                
                {/* Main content area with skeleton */}
                <div className="bg-neutral-800 w-full h-32 md:h-40 rounded-lg border border-white/5"></div>
              </div>

              {/* Footer with title and description */}
              <div className="mt-auto space-y-2 pt-6 relative z-10">
                <h4 className="text-xl md:text-2xl font-display font-semibold text-white">
                  {service.title}
                </h4>
                <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-geist line-clamp-3">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => scrollToSlide(Math.max(0, currentIndex - 1))}
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-white/20 transition-all duration-200 shadow-lg group disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={currentIndex === 0}
          aria-label="Previous automation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-0.5 transition-transform">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
        </button>
        <button
          onClick={() => scrollToSlide(Math.min(automationServices.length - 1, currentIndex + 1))}
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-white/20 transition-all duration-200 shadow-lg group disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={currentIndex === automationServices.length - 1}
          aria-label="Next automation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {/* Animated Headline Text - Bottom with Gradient Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8 max-w-5xl mx-auto"
      >
        <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-relaxed">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className={`inline-block mr-2 md:mr-3 ${
                ["Smart.", "Scalable.", "Significant."].includes(word)
                  ? "text-gradient font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </p>
      </motion.div>

      {/* Automation Detail Modal */}
      <AnimatePresence>
        {selectedAutomation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAutomation(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto hide-scrollbar bg-background border border-border rounded-2xl shadow-2xl"
            >

              {/* Close button */}
              <button
                onClick={() => setSelectedAutomation(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12">
                {/* Icon and Title */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex text-primary bg-primary/10 w-16 h-16 rounded-full items-center justify-center border border-primary/20 flex-shrink-0">
                    <selectedAutomation.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
                      {selectedAutomation.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {selectedAutomation.description}
                    </p>
                  </div>
                </div>

                {/* Problem Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                    Problema
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedAutomation.problem}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                    Soluzione
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedAutomation.solution}
                  </p>
                </div>

                {/* Examples Section */}
                <div>
                  <h3 className="text-xl font-display font-semibold mb-4 text-primary">
                    Esempi Verificati
                  </h3>
                  <ul className="space-y-3">
                    {selectedAutomation.examples.map((example, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary flex-shrink-0 mt-1">✓</span>
                        <span className="text-muted-foreground leading-relaxed">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .text-gradient {
          background: linear-gradient(
            90deg,
            hsl(var(--primary)),
            hsl(var(--primary) / 0.8),
            #fff,
            hsl(var(--primary) / 0.8),
            hsl(var(--primary))
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
};

export default ManifestoSection;
