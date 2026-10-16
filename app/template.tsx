import RevealObserver from "@/components/RevealObserver";

// Re-mounts on every navigation: fades the page in and re-arms scroll reveals.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-page-in">
      {children}
      <RevealObserver />
    </div>
  );
}
