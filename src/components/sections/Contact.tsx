import { ContactLinks } from "@/components/sections/ContactLinks";

export interface ContactProps {}

export function Contact(_props: ContactProps): React.JSX.Element {
  return (
    <section id="contact" className="section-space texture texture-rings pb-10">
      <div className="page-shell">
        <ContactLinks includeFormLink />
      </div>
    </section>
  );
}
