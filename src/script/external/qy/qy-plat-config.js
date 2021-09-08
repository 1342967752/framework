// wx
var tjconf = {
    // wx小游戏的appid
    app_key: "wx9eabaac817e42f0d",
    company: "quyou"
};

// qq
if (typeof window.qq !== "undefined") {
    // qq小游戏的appid
    tjconf.app_key = "1111111405"
}

// tt
if (typeof window.tt !== "undefined") {
    // tt小游戏的appid
    tjconf.app_key = "tt18fc6e4187c7dfba"
}

// oppo
if (typeof window.qg !== "undefined" && (window.qg.getProvider().toLowerCase().indexOf("oppo") > -1)) {
    // VIVO小游戏的appid
    tjconf.app_key = "30520965"
}

// vivo
if (typeof window.qg !== "undefined" && (window.qg.getProvider().toLowerCase().indexOf("vivo") > -1)) {
    // VIVO小游戏的appid
    tjconf.app_key = ""
}

// mz
if (typeof window.mz !== "undefined" && window.mz.getProvider().toLowerCase().indexOf("meizu") > -1) {
    // MZ小游戏的appid
    tjconf.app_key = ""
}

// hw
if (typeof window.hbs !== "undefined") {
    // HW小游戏的appid
    tjconf.app_key = "103419481"
}

// native
if ((typeof window.conch !== "undefined" || typeof window.jsb !== "undefined") && typeof window.qg === "undefined") {
    // 原生小游戏的appid
    tjconf.app_key = ""
}

// export
export {tjconf as default}