export interface FooterProps {}

export function Footer(_props: FooterProps): React.JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="page-shell pb-10 pt-8 text-center">
      <p className="text-[13px] text-muted">Abhishek · {year} · Built with Next.js</p>
    </footer>
  );
}
