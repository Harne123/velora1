(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const cfg = window.VELORA_SITE || {};
  const versionLabel = document.getElementById('versionLabel');
  if (versionLabel && cfg.version) {
    versionLabel.textContent = `v${cfg.version}`;
  }

  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn && cfg.downloadUrl) {
    downloadBtn.setAttribute('href', cfg.downloadUrl);
  }

  const portable = document.querySelector('a.btn-ghost');
  if (portable && cfg.portableUrl) {
    portable.setAttribute('href', cfg.portableUrl);
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
