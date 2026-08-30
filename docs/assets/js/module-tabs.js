(() => {
  const moduleTabs = [
    { label: "⌂ Home", href: "../" },
    { label: "Foundations", href: "../foundations/" },
    { label: "Mean Models", href: "../mean-models/" },
    { label: "Volatility", href: "../volatility-models/" },
    { label: "Multivariate", href: "../multivariate/" },
    { label: "Risk Measures", href: "../risk-measures/" }
  ];
  const currentModule = location.pathname.replace(/\/+$/, "").split("/").pop();
  const nav = document.createElement("nav");
  nav.className = "module-tabs";
  nav.setAttribute("aria-label", "Điều hướng các module");

  for (const tab of moduleTabs) {
    const link = document.createElement("a");
    const moduleName = tab.href.replace(/\.\.\//g, "").replace(/\//g, "");
    link.href = tab.href;
    link.textContent = tab.label;
    if (moduleName === currentModule || (tab.label === "⌂ Home" && currentModule === "time-series-risk")) {
      link.className = "active";
      link.setAttribute("aria-current", "page");
    }
    nav.append(link);
  }

  const topbar = document.querySelector(".topbar");
  if (topbar) {
    topbar.insertAdjacentElement("afterend", nav);
  }

  const moduleIndex = moduleTabs.findIndex(tab => {
    const moduleName = tab.href.replace(/\.\.\//g, "").replace(/\//g, "");
    return moduleName === currentModule;
  });
  const footer = document.querySelector(".footer");
  if (moduleIndex > 0 && footer) {
    const previous = moduleTabs[moduleIndex - 1];
    const next = moduleTabs[moduleIndex + 1] || moduleTabs[0];
    const pagination = document.createElement("nav");
    pagination.className = "lesson-pagination";
    pagination.setAttribute("aria-label", "Bài học trước và tiếp theo");
    pagination.innerHTML =
      `<a href="${previous.href}"><small>← Previous</small><strong>${previous.label}</strong></a>` +
      `<a href="${next.href}"><small>Next →</small><strong>${next.label}</strong></a>`;
    footer.insertAdjacentElement("beforebegin", pagination);
  }
})();
