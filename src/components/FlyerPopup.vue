<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import flyer from "../assets/fall-build-challenge/flyer.webp";

// 官方报名表单：HackWashU AI Build Challenge 2026 Registration
const RSVP_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSchGkPDYyQ9BUmkwRkz_gxDGl-cCWSH4SkZkbktQNwuZGX4AA/viewform";

// 活动结束后弹窗自动下线，不用回来改代码
const EVENT_ENDS_AT = "2026-09-27T23:59:59";

// false = 每次打开首页都弹（当前设定）
// true  = 每位访客只弹一次，记在 localStorage
const SHOW_ONCE = false;

const STORAGE_KEY = "hw-flyer-seen:fall-build-challenge-2026";
const OPEN_DELAY_MS = 700; // 等首屏画出来再弹，不然像页面坏了

const open = ref(false);
const closeButton = ref<HTMLButtonElement | null>(null);
const dialog = ref<HTMLElement | null>(null);

let timer: number | undefined;
let previouslyFocused: HTMLElement | null = null;

function alreadySeen() {
  if (!SHOW_ONCE) return false;
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false; // 隐私模式读不到，就当没看过
  }
}

function markSeen() {
  if (!SHOW_ONCE) return;
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // 隐私模式下写不进去，忽略
  }
}

function close() {
  open.value = false;
  document.body.style.overflow = "";
  previouslyFocused?.focus?.();
}

function onKeydown(e: KeyboardEvent) {
  if (!open.value) return;
  if (e.key === "Escape") {
    close();
    return;
  }
  // 焦点锁在弹窗内，避免 Tab 跑到背后的页面上
  if (e.key !== "Tab" || !dialog.value) return;
  const focusables = dialog.value.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
  if (Date.now() > new Date(EVENT_ENDS_AT).getTime() || alreadySeen()) return;

  timer = window.setTimeout(async () => {
    previouslyFocused = document.activeElement as HTMLElement;
    open.value = true;
    markSeen();
    document.body.style.overflow = "hidden";
    await nextTick();
    closeButton.value?.focus();
  }, OPEN_DELAY_MS);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  clearTimeout(timer);
  document.body.style.overflow = "";
});
</script>

<template>
  <Teleport to="body">
    <Transition name="pop">
      <div v-if="open" class="flyer-backdrop" @click.self="close">
        <div
          ref="dialog"
          class="flyer-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="2026 HackWashU Fall Build Challenge — September 25 to 27, Lopata Hall"
        >
          <button ref="closeButton" class="flyer-close" type="button" aria-label="Close" @click="close">
            <span aria-hidden="true">×</span>
          </button>

          <a class="flyer-image" :href="RSVP_URL" target="_blank" rel="noopener" @click="close">
            <img
              :src="flyer"
              alt="2026 HackWashU Fall Build Challenge. September 25 to 27 at Lopata Hall. A 48-hour hackathon with prizes, industry professionals, and open to all majors and experience levels."
            />
          </a>

          <div class="flyer-actions">
            <a class="flyer-cta" :href="RSVP_URL" target="_blank" rel="noopener" @click="close">
              RSVP now <span aria-hidden="true">→</span>
            </a>
            <button class="flyer-dismiss" type="button" @click="close">Maybe later</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.flyer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(0.75rem, 3vw, 2rem);
  background: rgba(4, 7, 16, 0.82);
  backdrop-filter: blur(8px);
}

.flyer-dialog {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  /* 竖版海报很高，整体高度必须被视口卡住 */
  max-height: 100%;
  min-height: 0;
  /* 收缩到海报的实际宽度，否则关闭按钮会被推到屏幕最右边 */
  width: fit-content;
  max-width: 100%;
  font-family: spartan, Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

/* reset.css 用元素选择器给 a/span/button 等硬设了 color:#000，
   深色弹窗上会变成黑字看不见，这里把颜色交还给继承 */
.flyer-dialog :where(*) { color: inherit; }

.flyer-image {
  display: block;
  min-height: 0;
  border-radius: 12px;
  overflow: hidden;
  line-height: 0;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.55);
}

.flyer-image img {
  display: block;
  max-width: min(92vw, 620px);
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.flyer-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: none;
}

.flyer-cta {
  padding: 0.8rem 1.8rem;
  border-radius: 999px;
  background: #f5e63d;
  color: #0b1020;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  white-space: nowrap;
}

.flyer-cta:hover { background: #fff06b; }

.flyer-dismiss {
  padding: 0.8rem 1.25rem;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: rgba(244, 246, 251, 0.65);
  font: inherit;
  font-size: 0.9rem;
  cursor: pointer;
  white-space: nowrap;
}

.flyer-dismiss:hover { color: #fff; }

.flyer-close {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  z-index: 1;
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 50%;
  background: rgba(11, 16, 32, 0.9);
  color: #fff;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
}

.flyer-close:hover { background: rgba(40, 48, 74, 0.95); }

.pop-enter-active, .pop-leave-active { transition: opacity 0.25s ease; }
.pop-enter-active .flyer-dialog { transition: transform 0.28s cubic-bezier(0.2, 0.9, 0.3, 1.2); }
.pop-enter-from, .pop-leave-to { opacity: 0; }
.pop-enter-from .flyer-dialog { transform: scale(0.94) translateY(10px); }

@media (max-width: 560px) {
  .flyer-close { top: -0.25rem; right: -0.25rem; width: 34px; height: 34px; }
  .flyer-cta { padding: 0.75rem 1.4rem; font-size: 0.95rem; }
}

@media (prefers-reduced-motion: reduce) {
  .pop-enter-active, .pop-leave-active,
  .pop-enter-active .flyer-dialog { transition: none; }
}
</style>
