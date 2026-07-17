import { PageHeader } from "@/components/PageHeader";

const contacts = [
  {
    label: "Email",
    value: "legendarium.edits@gmail.com",
    text: "Projects and inquiries",
    href: "mailto:legendarium.edits@gmail.com",
  },
  {
    label: "Instagram",
    value: "@why.lakshay",
    text: "Fastest social reach-out",
    href: "https://www.instagram.com/why.lakshay/",
  },
  {
    label: "Discord",
    value: "Direct chat",
    text: "Quick project conversations",
    href: "https://discord.com/users/748101825626112081",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        align="center"
        eyebrow="Contact"
        title="Start with the footage. End with something memorable."
        text="Reach out for reels, promos, event films, trailers, creator edits, and motion-led cuts."
      />

      <section className="contact-board">
        {contacts.map((contact, index) => (
          <a
            className="contact-tile"
            data-reveal
            href={contact.href}
            key={contact.label}
            rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            style={{ "--turn": `${(index - 1) * 5}deg` } as React.CSSProperties}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
          >
            <span>{contact.label}</span>
            <strong>{contact.value}</strong>
            <small>{contact.text}</small>
          </a>
        ))}
      </section>
    </>
  );
}
