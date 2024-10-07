import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo-dark.svg"
        width={100}
        height={100}
        priority
        alt="logo"
        className="absolute scale-0 dark:scale-100"
      />
      <Image
        src="/logo-light.svg"
        width={100}
        height={100}
        priority
        alt="logo"
        className="scale-100 dark:scale-0"
      />
    </Link>
  );
};

export default Logo;
