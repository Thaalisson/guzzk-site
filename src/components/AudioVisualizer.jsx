"use client";
import { useEffect, useRef } from "react";

export default function AudioVisualizer({ audioElement, isPlaying }) {
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyzerRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!audioElement) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      analyzerRef.current = audioContextRef.current.createAnalyser();
      analyzerRef.current.fftSize = 128;

      const source = audioContextRef.current.createMediaElementSource(audioElement);
      source.connect(analyzerRef.current);
      analyzerRef.current.connect(audioContextRef.current.destination);
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const analyzer = analyzerRef.current;
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function animate() {
      if (!isPlaying) return;
      analyzer.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 2;
        ctx.fillStyle = `rgba(255, 255, 255, ${barHeight / 255})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 2;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    if (isPlaying) {
      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }
      animate();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, audioElement]);

  return (
    <canvas
      ref={canvasRef}
      width="300"
      height="100"
      className="mt-4 w-full rounded-lg border border-white/10 bg-white/5"
    />
  );
}
