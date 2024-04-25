import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col items-center justify-center gap-2 bg-accent p-5">
      <Image
        src="/logo.svg"
        alt="Logo saúde animal"
        width={133}
        height={23}
        sizes="100vw"
      />
      <p className="text-sm text-stone-600">Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
