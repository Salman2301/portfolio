// https://github.com/vnphanquang/svelte-put/tree/main/packages/actions/dragscroll 
import type { Action } from "@sveltejs/kit";
import type { ActionReturn } from "svelte/action";

/**
 * instruction for how `use:dragscroll` will behave
 * @public
 */
export interface DragScrollConfig {
  /** whether to run this action */
  enabled: boolean;
  /** scrolling axis */
  axis: 'x' | 'y' | 'both';
  /** `MouseEvent` or `PointerEvent` (`down`, `up`, `leave`, `move`) */
  event: 'mouse' | 'pointer';
  /** automatically change cursor to `grab` on hover and `grabbing` on mousedown */
  cursor: boolean;
}

/**
 * parameter received from action input
 * @public
 */
export type DragScrollParameter = Partial<DragScrollConfig> | undefined;

/** @public */
export type DragScrollAction = Action<any, DragScrollParameter>;

/** @public */
export type DragScrollActionReturn = ActionReturn<DragScrollParameter>;

/**
 * @internal
 * @param {DragScrollParameter} param
 */
export function resolveConfig(param = {}) {
  const { cursor = true, enabled = true, axis = 'x', event = 'pointer' } = param as any;
  return {
    enabled,
    axes: {
      x: axis === 'x' || axis === 'both',
      y: axis === 'y' || axis === 'both',
    },
    events: {
      down:
        event === 'pointer'
          ? /** @type {const} */ ('pointerdown')
          : /** @type {const} */ ('mousedown'),
      up:
        event === 'pointer' ? /** @type {const} */ ('pointerup') : /** @type {const} */ ('mouseup'),
      move:
        event === 'pointer'
          ? /** @type {const} */ ('pointermove')
          : /** @type {const} */ ('mousemove'),
      leave:
        event === 'pointer'
          ? /** @type {const} */ ('pointerleave')
          : /** @type {const} */ ('mouseleave'),
    },
    cursor,
  };
}


/**
 * svelte action `use:dragscroll` for adding 'drag-to-scroll' behavior
 * @public
 *
 * @param {HTMLElement} node - node to apply the action
 * @param {DragScrollParameter} param - instructions for customizing action behavior
 * @returns {DragScrollActionReturn}
 */
export function dragscroll(node: any, param = {}) {
  let isDown = false;
  let startX:number;
  let startY:number;
  let scrollLeft:number;
  let scrollTop:number;
  let { enabled, axes, events, cursor } = resolveConfig(param);

  function handlePointerDown(e: PointerEvent | MouseEvent) {
    changeCursor(true);
    isDown = true;
    startX = e.pageX - node.offsetLeft;
    scrollLeft = node.scrollLeft;
    startY = e.pageY - node.offsetTop;
    scrollTop = node.scrollTop;
  }

  function handlePointerUpAndLeave() {
    changeCursor();
    isDown = false;
  }

  function handlePointerMove(e: MouseEvent | PointerEvent) {
    if (!isDown) return;
    e.preventDefault();
    if (axes.x) {
      const x = e.pageX - node.offsetLeft;
      const walkX = x - startX;
      node.scrollLeft = scrollLeft - walkX;
    }
    if (axes.y) {
      const y = e.pageY - node.offsetTop;
      const walkY = y - startY;
      node.scrollTop = scrollTop - walkY;
    }
  }

  function addEvents() {
    if (!node) return;
    node.addEventListener(events.down, handlePointerDown);
    node.addEventListener(events.leave, handlePointerUpAndLeave);
    node.addEventListener(events.up, handlePointerUpAndLeave);
    node.addEventListener(events.move, handlePointerMove);
  }

  function removeEvents() {
    if (!node) return;
    node.removeEventListener(events.down, handlePointerDown);
    node.removeEventListener(events.leave, handlePointerUpAndLeave);
    node.removeEventListener(events.up, handlePointerUpAndLeave);
    node.removeEventListener(events.move, handlePointerMove);
  }

  function changeCursor(active = false) {
    if (!node) return;
    if (cursor) {
      node.style.cursor = active ? 'grabbing' : 'grab';
    } else {
      node.style.removeProperty('cursor');
    }
  }

  if (enabled) {
    changeCursor();
    addEvents();
  }

  return {
    update(update = {}) {
      removeEvents();
      ({ enabled, axes, events, cursor } = resolveConfig(update));
      changeCursor();
      addEvents();
    },
    destroy() {
      removeEvents();
    },
  };
}
