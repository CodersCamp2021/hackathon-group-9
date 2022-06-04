export {};

const toast = document.createElement("div");
let reportsCount = 0;

chrome.runtime.onMessage.addListener(messageHandler);

function messageHandler(message, sender, sendResponse) {
    console.log(message);

    if (message.showToast) {
        toast.style.display = "flex";
        reportsCount = message.upvotes;
    }
}

toast.classList.add("toast");
toast.innerHTML = `
    <h3>WARNING! FAKE NEWS!</h3>
    <span class="circle">&#10071</span>
    <p>${reportsCount} people have reported this site to be spreading false information.</p>
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
        display: none;
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
        right: 5px;
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
