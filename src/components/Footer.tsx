const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-[10vw] font-display font-semibold leading-none tracking-tighter text-muted-foreground/30">
          RUBBERDUCK<span className="text-primary">.</span>
        </h2>

        <div className="mt-8 text-muted-foreground text-xs">
          © {currentYear} RUBBERDUCK LAB. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
