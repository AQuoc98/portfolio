import Socials from "./socials";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          <Socials />
          <p className="text-muted-foreground">
            Copyright &copy; Ken. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
