import Image from "next/image";

export default function CapybaraMullet({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/mullet.png"
      alt="Capybara with mullet"
      width={320}
      height={320}
      priority
      className={className}
    />
  );
}
