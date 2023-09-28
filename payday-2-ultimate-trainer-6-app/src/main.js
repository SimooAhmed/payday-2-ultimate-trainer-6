const REPOSITORY_CURRENT_TAG = "6.3.3";
const REPOSITORY_URL = "https://github.com/pierre-josselin/payday-2-ultimate-trainer-6";
const GITHUB_API_REPOSITORY_TAGS_URL = "https://api.github.com/repos/pierre-josselin/payday-2-ultimate-trainer-6/tags";
const DISCORD_SERVER_INVITE_URL = "https://discord.gg/2ZnyNuQRr9";

import { createApp } from "vue";
import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faRightFromBracket, faTriangleExclamation, faBug, faPlay, faRotateRight, faFlag, faPersonRunning, faKey, faGear, faQuestion, faCircleCheck, faCircleXmark, faCircleInfo, faUserSlash, faHeart, faArrowsRotate, faPlus, faTrashAlt, faPenToSquare, faFloppyDisk, faCheck, faPause } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

import App from "@/App.vue";
import i18n from "@/i18n";
import router from "@/router";

library.add(faRightFromBracket, faTriangleExclamation, faBug, faPlay, faRotateRight, faFlag, faPersonRunning, faKey, faGear, faQuestion, faCircleCheck, faCircleXmark, faCircleInfo, faUserSlash, faHeart, faArrowsRotate, faPlus, faTrashAlt, faPenToSquare, faFloppyDisk, faCheck, faPause, faGithub, faDiscord);

Object.defineProperty(String.prototype, "capitalize", {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.REPOSITORY_CURRENT_TAG = REPOSITORY_CURRENT_TAG;
app.config.globalProperties.REPOSITORY_URL = REPOSITORY_URL;
app.config.globalProperties.GITHUB_API_REPOSITORY_TAGS_URL = GITHUB_API_REPOSITORY_TAGS_URL;
app.config.globalProperties.DISCORD_SERVER_INVITE_URL = DISCORD_SERVER_INVITE_URL;

app.config.globalProperties.deepClone = function (object) {
    return JSON.parse(JSON.stringify(object));
};

app.use(pinia);
app.use(i18n);
app.use(router);

app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("#app");
