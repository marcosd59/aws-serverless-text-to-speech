import { useState, useEffect, useRef } from "react";
import { STATES } from "../constants";

const API_BASE = import.meta.env.VITE_API_BASE;

export function useTextToSpeech() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentState, setCurrentState] = useState(STATES.IDLE);
  const [jobId, setJobId] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const pollingIntervalRef = useRef(null);

  // Limpiar polling al desmontar
  useEffect(() => {
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
    };
  }, []);

  const uploadFile = async (uploadUrl, fileText) => {
    const response = await fetch(uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": "text/plain" },
      body: fileText,
    });

    if (!response.ok) {
      throw new Error("Error al subir el archivo");
    }
  };

  const checkJobStatus = async (jobId) => {
    try {
      const response = await fetch(`${API_BASE}/download-url?jobId=${jobId}`);

      if (!response.ok) {
        throw new Error("Error al verificar el estado del trabajo");
      }

      const data = await response.json();

      if (data.status === "READY") {
        setCurrentState(STATES.READY);
        setDownloadUrl(data.downloadUrl);
        if (pollingIntervalRef.current) {
          clearInterval(pollingIntervalRef.current);
          pollingIntervalRef.current = null;
        }
      } else if (data.status === "PROCESSING") {
        setCurrentState(STATES.PROCESSING);
      } else {
        throw new Error("Estado desconocido del trabajo");
      }
    } catch (error) {
      setCurrentState(STATES.ERROR);
      setErrorMessage(error.message || "Error al verificar el estado");
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
    }
  };

  const startPolling = (jobId) => {
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
    }

    checkJobStatus(jobId);

    pollingIntervalRef.current = setInterval(() => {
      checkJobStatus(jobId);
    }, 2000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (!file.name.toLowerCase().endsWith(".txt")) {
      setErrorMessage("Por favor, selecciona un archivo .txt");
      setCurrentState(STATES.ERROR);
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
    setErrorMessage("");
    setCurrentState(STATES.IDLE);
    setDownloadUrl(null);
    setJobId(null);
  };

  const handleConvert = async () => {
    if (!selectedFile) {
      setErrorMessage("Por favor, selecciona un archivo primero");
      setCurrentState(STATES.ERROR);
      return;
    }

    try {
      setCurrentState(STATES.UPLOADING);
      setErrorMessage("");

      const uploadResponse = await fetch(`${API_BASE}/upload-url`, {
        method: "POST",
      });

      if (!uploadResponse.ok) {
        throw new Error("Error al obtener la URL de subida");
      }

      const uploadData = await uploadResponse.json();
      const { jobId: newJobId, uploadUrl } = uploadData;
      setJobId(newJobId);

      const fileContent = await selectedFile.text();
      await uploadFile(uploadUrl, fileContent);

      setCurrentState(STATES.PROCESSING);
      startPolling(newJobId);
    } catch (error) {
      setCurrentState(STATES.ERROR);
      setErrorMessage(error.message || "Error al procesar el archivo");
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
    }
  };

  const handleDownload = async () => {
    if (!downloadUrl) return;

    try {
      // Descargar el archivo directamente
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `audio-${jobId || Date.now()}.mp3`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      // Mostrar mensaje de éxito
      setDownloadSuccess(true);
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 5000);
    } catch (error) {
      setErrorMessage("Error al descargar el archivo");
      setCurrentState(STATES.ERROR);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setCurrentState(STATES.IDLE);
    setJobId(null);
    setDownloadUrl(null);
    setErrorMessage("");
    setDownloadSuccess(false);
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
      pollingIntervalRef.current = null;
    }
  };

  const getStateMessage = () => {
    switch (currentState) {
      case STATES.IDLE:
        return selectedFile
          ? "Listo para convertir"
          : "Selecciona un archivo .txt";
      case STATES.UPLOADING:
        return "Subiendo archivo...";
      case STATES.PROCESSING:
        return "Procesando audio...";
      case STATES.READY:
        return "¡Audio listo para descargar!";
      case STATES.ERROR:
        return errorMessage || "Ha ocurrido un error";
      default:
        return "";
    }
  };

  const getStateColor = () => {
    switch (currentState) {
      case STATES.IDLE:
        return "text-slate-300";
      case STATES.UPLOADING:
      case STATES.PROCESSING:
        return "text-blue-400";
      case STATES.READY:
        return "text-emerald-400";
      case STATES.ERROR:
        return "text-red-400";
      default:
        return "text-slate-300";
    }
  };

  return {
    selectedFile,
    currentState,
    downloadUrl,
    downloadSuccess,
    handleFileChange,
    handleConvert,
    handleDownload,
    handleReset,
    getStateMessage,
    getStateColor,
  };
}
