const tabButtons = document.querySelectorAll('[data-tab-target]');
const tabPanels = document.querySelectorAll('[data-tab-panel]');

if (tabButtons.length && tabPanels.length) {
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.tabTarget;
      tabButtons.forEach(btn => btn.classList.toggle('active', btn === button));
      tabPanels.forEach(panel => panel.classList.toggle('active', panel.dataset.tabPanel === target));
    });
  });
}
