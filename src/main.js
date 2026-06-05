const SCREENS = {
  home: {
    id: 'home',
    label: 'Начало',
    group: 'main',
    tab: 'home',
    icon: 'home',
    path: '/stitch_helt.ty/dashboard_1/code.html',
  },
  activity: {
    id: 'activity',
    label: 'Активност',
    group: 'main',
    tab: 'activity',
    icon: 'insights',
    path: '/stitch_helt.ty/activity/code.html',
  },
  nutrition: {
    id: 'nutrition',
    label: 'Хранене',
    group: 'main',
    tab: 'nutrition',
    icon: 'restaurant',
    path: '/stitch_helt.ty/nutrition/code.html',
  },
  profile: {
    id: 'profile',
    label: 'Профил',
    group: 'main',
    tab: 'profile',
    icon: 'person',
    path: '/stitch_helt.ty/profile_1/code.html',
  },
  hydration: {
    id: 'hydration',
    label: 'Вода',
    group: 'detail',
    parent: 'home',
    icon: 'water_drop',
    path: '/stitch_helt.ty/hydration/code.html',
  },
  addFood: {
    id: 'addFood',
    label: 'Добави храна',
    group: 'detail',
    parent: 'nutrition',
    icon: 'add_circle',
    path: '/stitch_helt.ty/add_food/code.html',
  },
  workout: {
    id: 'workout',
    label: 'Тренировка',
    group: 'detail',
    parent: 'activity',
    icon: 'fitness_center',
    path: '/stitch_helt.ty/workout_details/code.html',
  },
  healthInsights: {
    id: 'healthInsights',
    label: 'Здравни данни',
    group: 'detail',
    parent: 'home',
    icon: 'monitoring',
    path: '/stitch_helt.ty/health_insights/code.html',
  },
  dashboard2: {
    id: 'dashboard2',
    label: 'Начало (вариант 2)',
    group: 'alt',
    parent: 'home',
    icon: 'dashboard',
    path: '/stitch_helt.ty/dashboard_2/code.html',
  },
  profile2: {
    id: 'profile2',
    label: 'Профил (вариант 2)',
    group: 'alt',
    parent: 'profile',
    icon: 'account_circle',
    path: '/stitch_helt.ty/profile_2/code.html',
  },
};

const TABS = ['home', 'activity', 'nutrition', 'profile'];

const frame = document.getElementById('screen-frame');
const tabBar = document.getElementById('tab-bar');
const screenList = document.getElementById('screen-list');
const toolbar = document.getElementById('device-toolbar');
const backBtn = document.getElementById('back-btn');
const screenTitle = document.getElementById('screen-title');
const statusTime = document.getElementById('status-time');

let currentScreenId = 'home';
let historyStack = [];

const iframeStyle = `
  nav.fixed.bottom-0,
  nav[class*="bottom-0"][class*="fixed"],
  nav.md\\:hidden.fixed.bottom-0 {
    display: none !important;
  }
  body {
    padding-bottom: 24px !important;
  }
`;

function updateClock() {
  const now = new Date();
  statusTime.textContent = now.toLocaleTimeString('bg-BG', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function getScreen(id) {
  return SCREENS[id];
}

function isDetailScreen(screen) {
  return screen.group === 'detail' || screen.group === 'alt';
}

function navigateTo(id, { pushHistory = true } = {}) {
  const screen = getScreen(id);
  if (!screen) return;

  if (pushHistory && currentScreenId !== id) {
    historyStack.push(currentScreenId);
  }

  currentScreenId = id;
  frame.src = screen.path;
  syncUI();
  updateUrl(id);
}

function goBack() {
  const screen = getScreen(currentScreenId);
  const fallback = screen?.parent ?? 'home';
  const previous = historyStack.pop();

  if (previous) {
    currentScreenId = previous;
    frame.src = getScreen(previous).path;
  } else {
    currentScreenId = fallback;
    frame.src = getScreen(fallback).path;
  }

  syncUI();
  updateUrl(currentScreenId);
}

function syncUI() {
  const screen = getScreen(currentScreenId);
  const showToolbar = isDetailScreen(screen);

  toolbar.hidden = !showToolbar;
  screenTitle.textContent = screen.label;

  tabBar.querySelectorAll('[data-tab]').forEach((btn) => {
    const active = screen.tab === btn.dataset.tab;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-current', active ? 'page' : 'false');
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.style.fontVariationSettings = active ? "'FILL' 1" : "'FILL' 0";
    }
  });

  screenList.querySelectorAll('[data-screen]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.screen === currentScreenId);
  });
}

function updateUrl(id) {
  const url = new URL(window.location.href);
  url.searchParams.set('screen', id);
  window.history.replaceState({ screen: id }, '', url);
}

function readInitialScreen() {
  const fromUrl = new URLSearchParams(window.location.search).get('screen');
  if (fromUrl && SCREENS[fromUrl]) return fromUrl;
  return 'home';
}

function buildTabBar() {
  tabBar.innerHTML = TABS.map((tabId) => {
    const screen = getScreen(tabId);
    return `
      <button class="device__tab" type="button" data-tab="${screen.tab}" aria-label="${screen.label}">
        <span class="material-symbols-outlined">${screen.icon}</span>
        <span class="device__tab-label">${screen.label}</span>
      </button>
    `;
  }).join('');

  tabBar.addEventListener('click', (event) => {
    const button = event.target.closest('[data-tab]');
    if (!button) return;
    historyStack = [];
    navigateTo(button.dataset.tab, { pushHistory: false });
  });
}

function buildScreenList() {
  const groups = [
    { key: 'main', title: 'Основни табове' },
    { key: 'detail', title: 'Детайлни екрани' },
    { key: 'alt', title: 'Алтернативни варианти' },
  ];

  screenList.innerHTML = groups
    .map((group) => {
      const items = Object.values(SCREENS)
        .filter((s) => s.group === group.key)
        .map(
          (s) => `
          <button class="screen-panel__item" type="button" data-screen="${s.id}">
            <span class="material-symbols-outlined">${s.icon}</span>
            <span>${s.label}</span>
          </button>
        `,
        )
        .join('');

      return `
        <section class="screen-panel__group">
          <h2>${group.title}</h2>
          ${items}
        </section>
      `;
    })
    .join('');

  screenList.addEventListener('click', (event) => {
    const button = event.target.closest('[data-screen]');
    if (!button) return;
    navigateTo(button.dataset.screen);
  });
}

frame.addEventListener('load', () => {
  try {
    const doc = frame.contentDocument;
    if (!doc) return;

    const style = doc.createElement('style');
    style.textContent = iframeStyle;
    doc.head.appendChild(style);
  } catch {
    // Cross-origin fallback — stitch files are same-origin in dev
  }
});

backBtn.addEventListener('click', goBack);

window.addEventListener('popstate', (event) => {
  const id = event.state?.screen ?? readInitialScreen();
  currentScreenId = id;
  frame.src = getScreen(id).path;
  syncUI();
});

buildTabBar();
buildScreenList();
updateClock();
setInterval(updateClock, 30_000);

currentScreenId = readInitialScreen();
frame.src = getScreen(currentScreenId).path;
syncUI();
window.history.replaceState({ screen: currentScreenId }, '', window.location.href);
