import React, { createContext, useContext, ReactNode } from 'react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

interface AudioContextType {
  isPlaying: boolean;
  isInitialized: boolean;
  toggle: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioPlayer = useAudioPlayer('/music/your-track.mid');

  return (
    <AudioContext.Provider value={audioPlayer}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
