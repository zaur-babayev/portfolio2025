import { useState, useEffect, useRef } from 'react';
import { Midi } from '@tonejs/midi';

export const useAudioPlayer = (midiUrl: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [midi, setMidi] = useState<Midi | null>(null);
  const toneRef = useRef<any>(null);
  const synthRef = useRef<any>(null);
  const notesRef = useRef<any[]>([]);

  useEffect(() => {
    const loadMidi = async () => {
      try {
        const response = await fetch(midiUrl);
        const arrayBuffer = await response.arrayBuffer();
        const parsedMidi = new Midi(arrayBuffer);
        setMidi(parsedMidi);
      } catch (error) {
        console.error('MIDI loading error:', error);
      }
    };

    loadMidi();
  }, [midiUrl]);

  const initializeTone = async () => {
    if (!isInitialized) {
      // Dynamically import Tone.js only when needed
      const Tone = await import('tone');
      toneRef.current = Tone;
      await Tone.start();
      
      // Create effects chain
      const chorus = new Tone.Chorus({
        frequency: 2.5,
        delayTime: 2.5,
        depth: 0.5,
        spread: 180,
        wet: 0.3
      }).toDestination();
      
      const reverb = new Tone.Reverb({
        decay: 2.5,
        preDelay: 0.1,
        wet: 0.35
      }).connect(chorus);

      const filter = new Tone.Filter({
        type: "lowpass",
        frequency: 5000,
        rolloff: -12,
        Q: 1
      }).connect(reverb);

      const comp = new Tone.Compressor({
        threshold: -24,
        ratio: 4,
        attack: 0.005,
        release: 0.1
      }).connect(filter);

      // Create electric piano-like synth
      synthRef.current = new Tone.PolySynth(Tone.Synth, {
        volume: -6,
        oscillator: {
          type: "triangle8",  // richer triangle wave
          width: 0.3,
          phase: 0
        },
        envelope: {
          attack: 0.005,
          decay: 0.2,
          sustain: 0.4,
          release: 1.2
        },
        filterEnvelope: {
          attack: 0.001,
          decay: 0.7,
          sustain: 0.1,
          release: 0.8,
          baseFrequency: 200,
          octaves: 4
        },
        portamento: 0.02
      }).connect(comp);
      
      setIsInitialized(true);
      return true;
    }
    return true;
  };

  const scheduleNotes = () => {
    if (!midi || !toneRef.current || !synthRef.current) return;
    
    const Tone = toneRef.current;
    const synth = synthRef.current;
    
    // Clear any previously scheduled notes
    notesRef.current.forEach(id => Tone.Transport.clear(id));
    notesRef.current = [];
    
    // Schedule new notes
    midi.tracks.forEach(track => {
      track.notes.forEach(note => {
        const id = Tone.Transport.schedule((time: number) => {
          synth.triggerAttackRelease(
            note.name,
            note.duration,
            time,
            note.velocity
          );
        }, note.time);
        notesRef.current.push(id);
      });
    });
  };

  const play = async () => {
    if (!midi) return;
    
    try {
      const initialized = await initializeTone();
      if (!initialized) return;

      const Tone = toneRef.current;
      
      if (!isPlaying) {
        // Only schedule notes if we're starting from the beginning
        if (Tone.Transport.seconds === 0) {
          scheduleNotes();
        }
        Tone.Transport.start();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Playback error:', error);
      setIsPlaying(false);
    }
  };

  const pause = () => {
    if (isInitialized && toneRef.current) {
      toneRef.current.Transport.pause();
      setIsPlaying(false);
    }
  };

  const stop = () => {
    if (isInitialized && toneRef.current) {
      const Tone = toneRef.current;
      Tone.Transport.stop();
      Tone.Transport.seconds = 0;
      setIsPlaying(false);
    }
  };

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      if (toneRef.current) {
        stop();
        notesRef.current.forEach(id => toneRef.current.Transport.clear(id));
      }
    };
  }, []);

  return {
    isPlaying,
    isInitialized,
    play,
    pause,
    stop,
    toggle: () => isPlaying ? pause() : play()
  };
};
