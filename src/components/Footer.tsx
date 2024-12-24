import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t mt-auto py-6">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground">
          {t('footer.inspired')}{" "}
          <a href="https://pinksale.finance" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            PinkSale
          </a>
          {", "}
          <a href="https://dx.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            DxSale
          </a>
          {" & "}
          <a href="https://www.unicrypt.network" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            Unicrypt
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;