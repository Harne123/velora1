(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const cfg = window.VELORA_SITE || {};
  const versionLabel = document.getElementById('versionLabel');
  if (versionLabel && cfg.version) versionLabel.textContent = `v${cfg.version}`;

  const downloadBtn = document.getElementById('downloadBtn');
  const portableBtn = document.getElementById('portableBtn');

  if (downloadBtn) {
    downloadBtn.setAttribute('href', cfg.downloadUrl || './download/Velora-Setup.exe');
  }
  if (portableBtn) {
    portableBtn.setAttribute('href', cfg.portableUrl || './download/Velora-Portable.exe');
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();
