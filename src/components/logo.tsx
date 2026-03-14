import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.webp"
        width={3884}
        height={2616}
        priority
        alt="logo"
        className="h-16 w-auto"
      />
    </Link>
  );
};

export default Logo;
