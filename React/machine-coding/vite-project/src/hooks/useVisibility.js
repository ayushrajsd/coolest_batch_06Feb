/**
 * custom hooks -
 * 1. sometime we want to reuse a logic in multiple components
 * convention is to name the custom hooks with 'use'
 * 3. custom hooks can call other hooks
 *
 * Features:
 * 1. initial visible state
 * 2. toggle visibility
 * a. show and hide methods
 * 3. return me the current visibility state
 */
import {useCallback, useState} from 'react'
function useVisibility(initialVisibility = false) {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  const show = useCallback(() => setIsVisible(true),[]);

  const hide = () => setIsVisible(false);

  const toggle = () => setIsVisible((prev) => !prev);

  return {
    isVisible,
    show,
    hide,
    toggle,
  };
}

export default useVisibility;
