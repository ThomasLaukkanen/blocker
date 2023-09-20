document.getElementById("save").addEventListener("click", function () {
  let sites = document
    .getElementById("sitesList")
    .value.split("\n")
    .filter(Boolean);
  chrome.storage.local.set({ blockedSites: sites });
  document.getElementById(
    "message"
  ).innerHTML = `${sites.length} sites are now blocked!`;
});

document.getElementById("sitesList").addEventListener("input", function () {
  let sites = document
    .getElementById("sitesList")
    .value.split("\n")
    .filter(Boolean);
  document.getElementById("message").innerHTML = `Block ${sites.length} sites `;
});

async function getBlockedSites() {
  const { blockedSites } = await chrome.storage.local.get(["blockedSites"]);
  document.getElementById(
    "message"
  ).innerHTML = `You have blocked ${blockedSites.length} sites`;
  blockedSites.forEach((site) => {
    document.getElementById("sitesList").value += site + "\n";
  });
}
getBlockedSites();
