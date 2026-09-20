export default function Footer() {
  return (
    <footer className="border-t border-line mt-20">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 h-14 flex items-center justify-between text-xs text-muted">
        <span>© {new Date().getFullYear()}</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">
            linkedin
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            github
          </a>
          <a
            href="mailto:ankitamenon00@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
