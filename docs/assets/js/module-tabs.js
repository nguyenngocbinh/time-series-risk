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
})();
