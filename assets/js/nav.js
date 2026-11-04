/* KARTEIKASTEN v6: Navigation ohne Header — Kasten links, Dock unten */
(function () {
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (page === "" ) page = "index.html";
  var items = [
    ["index.html", "layout-dashboard", "Start"],
    ["subnet.html", "network", "Subnetz"],
    ["sql.html", "database", "SQL"],
    ["skripte.html", "terminal", "Skripte"],
    ["glossar.html", "book-open", "Glossar"],
    ["help.html", "help-circle", "Hilfe"],
    ["updates.html", "history", "Updates"],
    ["bildungseinrichtungen.html", "graduation-cap", "Schulen"],
  ];
  function links(list) {
    return list.map(function (it) {
      var active = page === it[0] ? ' class="active" aria-current="page"' : "";
      return '<a href="' + it[0] + '"' + active + '><i data-lucide="' + it[1] + '" class="w-4 h-4"></i><span>' + it[2] + "</span></a>";
    }).join("");
  }
  var rail = document.createElement("aside");
  rail.className = "app-rail";
  rail.setAttribute("aria-label", "Hauptnavigation");
  rail.innerHTML =
    '<a class="brand" href="index.html">AP2 FISI<small>Abschlussprüfung Teil 2</small></a>' +
    "<nav>" + links(items) + "</nav>" +
    '<div class="rail-foot"><div class="exam">Prüfung am<span>25.11.2026</span></div>' +
    '<div>Version <strong>v6.0.0</strong> · offline</div>' +
    '<div style="margin-top:6px">Daten bleiben auf diesem Gerät.</div></div>';
  var dockItems = [items[0], items[1], items[3], items[4], items[5]];
  var dock = document.createElement("nav");
  dock.className = "app-dock";
  dock.setAttribute("aria-label", "Schnellnavigation");
  dock.innerHTML = links(dockItems);
  // Aktionen, wo die Seite sie anbietet (Backup/Support gab es frueher im Header)
  var foot = rail.querySelector(".rail-foot");
  var actions = [];
  if (document.getElementById("backupModal")) actions.push('<button type="button" id="railBackup" style="display:block;background:none;border:0;color:var(--box-muted);font:inherit;font-weight:600;cursor:pointer;padding:4px 0">Backup sichern</button>');
  if (typeof window.openSupportModal === "function") actions.push('<button type="button" id="railSupport" style="display:block;background:none;border:0;color:var(--box-muted);font:inherit;font-weight:600;cursor:pointer;padding:4px 0">Projekt unterstützen</button>');
  if (actions.length) foot.insertAdjacentHTML("beforeend", '<div style="margin-top:10px">' + actions.join("") + "</div>");
  var b = document.getElementById("railBackup");
  if (b) b.addEventListener("click", function () { document.getElementById("backupModal").classList.remove("hidden"); });
  var sp = document.getElementById("railSupport");
  if (sp) sp.addEventListener("click", function () { window.openSupportModal(); });
  document.body.prepend(dock);
  document.body.prepend(rail);
  if (window.lucide) window.lucide.createIcons();
})();
