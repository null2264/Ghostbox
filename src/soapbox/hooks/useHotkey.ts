import { install, uninstall } from '@github/hotkey';
import { useEffect, useState } from 'react';

interface HotkeyOptions {
  event?: (e: EventTarget | null) => any
  initialEl: HTMLElement | null
}

const useHotkey = (
  keymap?: string,
  options: HotkeyOptions = {
    initialEl: null,
  },
) => {
  const [el, setEl] = useState<HTMLElement | null>(options.initialEl);

  useEffect(() => {
    if (!el || !keymap) return () => {};

    install(el, keymap);
    if (options.event)
      el.addEventListener('hotkey-fire', e => {
        e.preventDefault();
        (options.event as (e: EventTarget | null) => any)(e.target);
      });

    return () => {
      uninstall(el);
    };
  }, [el]);

  return setEl;
};

export { useHotkey };