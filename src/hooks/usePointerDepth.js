import { useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

// Pointer-only depth: touch scrolling and reduced-motion users stay still.
export default function usePointerDepth(strength = 5) {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 110, damping: 22 });
  const rotateY = useSpring(y, { stiffness: 110, damping: 22 });
  const reset = () => { x.set(0); y.set(0); };

  const onPointerMove = (event) => {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientY - rect.top) / rect.height - 0.5) * -strength);
    y.set(((event.clientX - rect.left) / rect.width - 0.5) * strength);
  };

  return {
    style: { rotateX: reducedMotion ? 0 : rotateX, rotateY: reducedMotion ? 0 : rotateY, transformPerspective: 1200 },
    onPointerMove,
    onPointerLeave: reset,
    onPointerCancel: reset,
    reducedMotion,
  };
}
