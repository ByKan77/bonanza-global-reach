import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const nf = t.notFound;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center max-w-md">
        <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl font-bold">{nf.title}</h1>
        <p className="mb-4 text-base sm:text-xl text-muted-foreground">{nf.message}</p>
        <a href="/" className="text-primary underline hover:text-primary/90 text-sm sm:text-base">
          {nf.backHome}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
