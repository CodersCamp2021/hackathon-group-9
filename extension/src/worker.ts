// required when isolated modules is turned on
export {};

chrome.runtime.onInstalled.addListener(() => {
  console.log("[SW] chrome.runtime.onInstalled");
});

//chrome.webNavigation.onCompleted.addRules([{conditions:[{}]}])

chrome.webNavigation.onCompleted.addListener(async (details) => {
  //const url = new URL(details.url)
  console.log("[SW] chrome.webNavigation.onCompleted", details.url);
  const data = await fetchAPI(details.url);
  console.log("[SW] chrome.webNavigation.onCompleted", data);
  

  if (data !== null && typeof data === "object" ) {
    chrome.scripting.executeScript({
      target: {
        tabId: details.tabId,
      },
      func: injectRedToast
    })
  }
});

async function fetchAPI(pageUrl: string) {
  console.log(pageUrl)
  const encodedUrl = encodeURIComponent(pageUrl[pageUrl.length-1] === '/' ? [...pageUrl].splice(0, pageUrl.length-1).join('') : pageUrl);
  const url = `https://earnest-palmier-0fac39.netlify.app/api/pages/${encodedUrl}`;
  const response = await fetch(url);
  
  if (response.ok) {
    return await response.json()
  }

  return null
}

function injectRedToast() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = `
      <h3>WARNING! FAKE NEWS!</h3>
      <span class="circle">&#10071</span>
      <p>This site contains false information and cannot be trusted!</p>
      <button class="closing-button">&#10005</button>
  `

  document.body.append(toast);

  const styles = `
      .toast {
          height: 200px;
          width: 400px;
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 100000;
          background-color: #c4141b;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          color: white;
          font-family: sans-serif;
          padding: 15px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      }

      h3 {
          margin: 0;
      }

      .circle {
          min-height: 70px;
          min-width: 70px;
          border-radius: 50%;
          background-color: #f2514e;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 45px;
          color: white;
      }

      .closing-button {
          position: absolute;
          top: 5px;
          right: 7px;
          border: none;
          background-color: inherit;
          cursor: pointer;
      }
  `
  const styleElement = `<style>${styles}</style>`;
  document.head.insertAdjacentHTML("beforeend", styleElement);

  toast.querySelector(".closing-button").addEventListener("click", hideToastHandler);

  function hideToastHandler() {
      toast.style.display = "none";
  }

  // async function checkSiteAnchors() {
  //   // const response = await fetch("https://earnest-palmier-0fac39.netlify.app/api/pages");
  //   // const data = await response.json();
  //   // console.log(data);
  //   // const anchorList = document.querySelectorAll("a");
  //   // const domainList;
  
  //   // [...anchorList].find(anchor => {
  //   //   domainList.forEach(domain => {
  
  //   //   })
  //   // })
  // }

  // checkSiteAnchors();
}

function injectOrangeToast() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = `
      <h3>WARNING! FAKE NEWS!</h3>
      <span class="circle">&#10071</span>
      <p>This site might contain false information. Be careful!</p>
      <button class="closing-button">&#10005</button>
  `

  document.body.append(toast);

  const styles = `
      .toast {
          height: 200px;
          width: 400px;
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 100000;
          background-color: #fa6504;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          color: white;
          font-family: sans-serif;
          padding: 15px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      }

      h3 {
          margin: 0;
      }

      .circle {
          min-height: 70px;
          min-width: 70px;
          border-radius: 50%;
          background-color: #fc8d45;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 45px;
          color: white;
      }

      .closing-button {
          position: absolute;
          top: 5px;
          right: 7px;
          border: none;
          background-color: inherit;
          cursor: pointer;
      }
  `
  const styleElement = `<style>${styles}</style>`;
  document.head.insertAdjacentHTML("beforeend", styleElement);

  toast.querySelector(".closing-button").addEventListener("click", hideToastHandler);

  function hideToastHandler() {
      toast.style.display = "none";
  }
}


