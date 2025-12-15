# Text to Speech - AWS Serverless

Una aplicación web moderna y elegante para convertir archivos de texto (.txt) a audio MP3 de alta calidad usando tecnología serverless de AWS. Construida con React, Vite y Tailwind CSS, con una interfaz intuitiva y responsive.

---

## Descripción

Text to Speech es una aplicación que permite convertir archivos de texto a audio MP3 utilizando la infraestructura serverless de AWS. La aplicación utiliza AWS Lambda, Amazon Polly, S3 y SNS para procesar los archivos de forma automática, escalable y segura.

## Características principales

- **Conversión rápida**: Procesamiento serverless que escala automáticamente según la demanda
- **Interfaz intuitiva**: Diseño moderno y fácil de usar con drag & drop
- **Arquitectura serverless**: Tecnología AWS para máxima eficiencia y escalabilidad
- **Diseño responsive**: Optimizado para dispositivos móviles y escritorio
- **Feedback en tiempo real**: Indicadores de estado claros durante el proceso
- **Descarga directa**: Los archivos MP3 se descargan directamente sin abrir nuevas ventanas

## Arquitectura

La aplicación utiliza una arquitectura serverless de AWS:

1. **S3 Input**: Almacenamiento del archivo de texto subido
2. **Lambda**: Procesamiento automático cuando se sube un archivo
3. **Polly**: Conversión de texto a voz de alta calidad
4. **SNS**: Notificaciones del estado del proceso
5. **S3 Output**: Almacenamiento del archivo MP3 generado

## Tecnologías utilizadas

- **React 19** - Biblioteca de interfaz de usuario [https://reactjs.org/](https://reactjs.org/)
- **Vite 7** - Herramienta de construcción rápida [https://vitejs.dev/](https://vitejs.dev/)
- **Tailwind CSS 3** - Framework de CSS utilitario [https://tailwindcss.com/](https://tailwindcss.com/)
- **AWS Lambda** - Computación serverless [https://aws.amazon.com/lambda/](https://aws.amazon.com/lambda/)
- **Amazon Polly** - Servicio de síntesis de voz [https://aws.amazon.com/polly/](https://aws.amazon.com/polly/)
- **Amazon S3** - Almacenamiento de objetos [https://aws.amazon.com/s3/](https://aws.amazon.com/s3/)
- **Amazon SNS** - Servicio de notificaciones [https://aws.amazon.com/sns/](https://aws.amazon.com/sns/)

## Herramientas utilizadas

- **ESLint** - Linter para código JavaScript
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Agregar prefijos de navegadores automáticamente
- **Git** - Control de versiones
- **pnpm** - Gestor de paquetes

---

## Instrucciones para iniciar el proyecto

### Prerrequisitos

- Node.js (versión 18 o superior)
- pnpm (o npm/yarn)
- Una API serverless de AWS configurada y funcionando

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_BASE=https://tu-api-endpoint.amazonaws.com
```

### Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/aws-serverless-text-to-speech.git
   cd aws-serverless-text-to-speech
   ```

2. **Instala las dependencias**

   ```bash
   pnpm install
   ```

   O si usas npm:

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**

   ```bash
   pnpm dev
   ```

   O con npm:

   ```bash
   npm run dev
   ```

4. **Abre tu navegador**

   ```text
   http://localhost:5173
   ```

### Estructura del proyecto

```text
aws-serverless-text-to-speech/
├── public/              # Archivos estáticos y favicon
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Architecture.jsx
│   │   ├── Features.jsx
│   │   ├── FileUpload.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HowItWorks.jsx
│   │   └── StatusIndicator.jsx
│   ├── pages/           # Páginas de la aplicación
│   │   ├── HomePage.jsx
│   │   └── Converter.jsx
│   ├── hooks/           # Hooks personalizados
│   │   └── useTextToSpeech.js
│   ├── assets/          # Imágenes y recursos
│   │   ├── amazon-polly.png
│   │   ├── amazon-s3-simple-storage-service.png
│   │   ├── 1200px-Amazon_Lambda_architectur.png
│   │   └── SNS.png
│   ├── constants.js     # Constantes compartidas
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── index.html           # HTML principal
├── tailwind.config.js   # Configuración de Tailwind
├── vite.config.js       # Configuración de Vite
└── README.md            # Documentación principal
```

### Scripts disponibles

```bash
pnpm dev      # Inicia el servidor de desarrollo
pnpm build    # Construye la aplicación para producción
pnpm preview  # Previsualiza la build de producción
pnpm lint     # Ejecuta el linter
```

### Solución de problemas comunes

1. **Error de puerto ocupado**

   - Vite buscará automáticamente un puerto disponible
   - O puedes especificar uno diferente: `pnpm dev -- --port 3000`

2. **Errores de dependencias**

   - Elimina node_modules: `rm -rf node_modules`
   - Reinstala: `pnpm install`

3. **Problemas de cache**

   - Limpia la cache de Vite: `pnpm dev -- --force`

4. **Error de API no configurada**

   - Asegúrate de tener la variable `VITE_API_BASE` en tu archivo `.env`
   - Verifica que la API esté funcionando correctamente

---

## Uso

1. **Página principal**: Explora la información sobre la aplicación y su arquitectura
2. **Seleccionar archivo**: Haz clic en "Empezar a convertir" y selecciona un archivo .txt
3. **Subir archivo**: Arrastra o selecciona tu archivo de texto
4. **Procesar**: Haz clic en "Convertir a audio" y espera el procesamiento
5. **Descargar**: Una vez listo, descarga tu archivo MP3

## Flujo de trabajo

1. El usuario sube un archivo .txt
2. La aplicación obtiene una URL de subida desde la API
3. El archivo se sube directamente a S3
4. Lambda se activa automáticamente
5. Polly convierte el texto a voz
6. SNS notifica el estado del proceso
7. El MP3 final se almacena en S3
8. El usuario descarga el archivo MP3

## Características de la interfaz

- **Diseño moderno**: Interfaz elegante con gradientes y efectos visuales
- **Responsive**: Adaptado para móviles, tablets y escritorio
- **Feedback visual**: Indicadores de estado claros durante todo el proceso
- **Animaciones suaves**: Transiciones y efectos hover para mejor UX
- **SEO optimizado**: Meta tags y estructura semántica

## Requisitos de la API

La API debe exponer dos endpoints:

### POST /upload-url

Obtiene una URL presignada para subir el archivo a S3.

**Respuesta:**

```json
{
  "jobId": "string",
  "uploadUrl": "string",
  "inputKey": "string",
  "outputKey": "string"
}
```

### GET /download-url?jobId={jobId}

Verifica el estado del trabajo y obtiene la URL de descarga cuando está listo.

**Respuesta (procesando):**

```json
{
  "status": "PROCESSING"
}
```

**Respuesta (listo):**

```json
{
  "status": "READY",
  "downloadUrl": "string"
}
```

## Autor

Marcos Pool

---

## Notas

Desarrollado con ❤️ usando React, Vite y AWS Serverless
