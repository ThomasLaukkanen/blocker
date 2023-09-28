document.getElementById("save").addEventListener("click", function () {
  let sites = document
    .getElementById("sitesList")
    .value.split("\n")
    .filter(Boolean);
  chrome.storage.local.set({ blockedSites: sites });
  document.getElementById(
    "message"
  ).innerHTML = `${sites.length} websites are now blocked!`;
});

document.getElementById("sitesList").addEventListener("input", function () {
  let sites = document
    .getElementById("sitesList")
    .value.split("\n")
    .filter(Boolean);
  document.getElementById(
    "message"
  ).innerHTML = `Block ${sites.length} websites `;
});

async function getBlockedSites() {
  const { blockedSites } = await chrome.storage.local.get(["blockedSites"]);
  document.getElementById(
    "message"
  ).innerHTML = `You have blocked ${blockedSites.length} websites`;
  blockedSites.forEach((site) => {
    document.getElementById("sitesList").value += site + "\n";
  });
}
getBlockedSites();
