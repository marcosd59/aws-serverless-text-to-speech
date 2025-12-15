import s3Logo from "../assets/amazon-s3-simple-storage-service.png";
import lambdaLogo from "../assets/1200px-Amazon_Lambda_architectur.png";
import pollyLogo from "../assets/amazon-polly.png";
import snsLogo from "../assets/SNS.png";

export default function Architecture() {
  const ServiceCard = ({
    logo,
    alt,
    title,
    description,
    size = "w-20 h-20",
  }) => (
    <div className="text-center">
      <div
        className={`${size} md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-lg p-2`}
      >
        <img src={logo} alt={alt} className="w-full h-full object-contain" />
      </div>
      <p className="text-xs md:text-sm font-semibold text-emerald-400">
        {title}
      </p>
      <p className="text-xs text-slate-400 mt-1">{description}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto mb-8 md:mb-16 px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-6 md:mb-8 text-center">
        Arquitectura Serverless
      </h2>
      <div className="bg-slate-800 rounded-lg p-4 md:p-8">
        {/* Vista móvil: vertical */}
        <div className="block md:hidden space-y-6">
          <ServiceCard
            logo={s3Logo}
            alt="AWS S3"
            title="S3 Input"
            description="Almacenamiento"
          />
          <div className="text-emerald-400 text-2xl text-center">↓</div>
          <ServiceCard
            logo={lambdaLogo}
            alt="AWS Lambda"
            title="Lambda"
            description="Procesamiento"
          />
          <div className="text-emerald-400 text-2xl text-center">↓</div>
          <div className="space-y-4">
            <ServiceCard
              logo={pollyLogo}
              alt="AWS Polly"
              title="Polly"
              description="Text-to-Speech"
            />
            <ServiceCard
              logo={snsLogo}
              alt="AWS SNS"
              title="SNS"
              description="Notificaciones"
            />
          </div>
          <div className="text-emerald-400 text-2xl text-center">↓</div>
          <ServiceCard
            logo={s3Logo}
            alt="AWS S3"
            title="S3 Output"
            description="MP3 Listo"
          />
        </div>

        {/* Vista desktop: horizontal */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-6 lg:gap-8 mb-6">
          <ServiceCard
            logo={s3Logo}
            alt="AWS S3"
            title="S3 Input"
            description="Almacenamiento"
            size="w-24 h-24"
          />
          <div className="text-emerald-400 text-2xl lg:text-3xl">→</div>
          <ServiceCard
            logo={lambdaLogo}
            alt="AWS Lambda"
            title="Lambda"
            description="Procesamiento"
            size="w-24 h-24"
          />
          <div className="text-emerald-400 text-2xl lg:text-3xl">→</div>
          <div className="flex flex-col gap-4">
            <ServiceCard
              logo={pollyLogo}
              alt="AWS Polly"
              title="Polly"
              description="Text-to-Speech"
              size="w-24 h-24"
            />
            <ServiceCard
              logo={snsLogo}
              alt="AWS SNS"
              title="SNS"
              description="Notificaciones"
              size="w-24 h-24"
            />
          </div>
          <div className="text-emerald-400 text-2xl lg:text-3xl">→</div>
          <ServiceCard
            logo={s3Logo}
            alt="AWS S3"
            title="S3 Output"
            description="MP3 Listo"
            size="w-24 h-24"
          />
        </div>

        <div className="mt-6 md:mt-8 p-3 md:p-4 bg-slate-700 rounded-lg">
          <p className="text-xs md:text-sm text-slate-300 text-center">
            <strong className="text-emerald-400">Flujo completo:</strong> El
            archivo se sube a S3, Lambda se activa automáticamente, Polly
            convierte el texto a voz, SNS notifica el estado, y el MP3 final se
            almacena en S3 para su descarga.
          </p>
        </div>
      </div>
    </div>
  );
}
