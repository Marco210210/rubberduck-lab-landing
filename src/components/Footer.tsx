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

// Add shimmer animation style
const style = document.createElement('style');
style.textContent = `
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
`;
if (!document.head.querySelector('style[data-shimmer]')) {
  style.setAttribute('data-shimmer', 'true');
  document.head.appendChild(style);
}
