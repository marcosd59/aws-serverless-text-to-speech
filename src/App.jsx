import { useState } from "react";
import HomePage from "./pages/HomePage";
import Converter from "./pages/Converter";

export default function App() {
  const [showConverter, setShowConverter] = useState(false);

  if (!showConverter) {
    return <HomePage onStartClick={() => setShowConverter(true)} />;
  }

  return <Converter onBack={() => setShowConverter(false)} />;
}
