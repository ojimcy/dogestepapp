if (Cookies.get("defaultLang") == "cn") {
  Cookies.set("defaultLang", "cn", { expires: 7, path: "" });
} else if (Cookies.get("defaultLang") == "vn") {
  Cookies.set("defaultLang", "vn", { expires: 7, path: "" });
} else if (Cookies.get("defaultLang") == "de") {
  Cookies.set("defaultLang", "de", { expires: 7, path: "" });
} else if (Cookies.get("defaultLang") == "jp") {
  Cookies.set("defaultLang", "jp", { expires: 7, path: "" });
} else {
  Cookies.set("defaultLang", "en", { expires: 7, path: "" });
}
var defaultLang = Cookies.get("defaultLang");
console.log(Cookies.get("defaultLang"));

function languageSelect(defaultLang) {
  $("[i18n]").i18n({
    defaultLang: defaultLang,
    filePath: "../assets/i18n/",
    filePrefix: "i18n_",
    fileSuffix: "",
    forever: true,
    callback: function (res) {},
  });
}
languageSelect(defaultLang);

$(".Lan").mouseover(function () {
  $(".language").show();
});

$(".Lan li").mouseout(function () {
  $(".language").hide();
});

$(".language li").click(function () {
  $(this).addClass("liActive").siblings().removeClass("liActive");
  if ($(this).text() == "English") {
    defaultLang = "en";
    languageSelect(defaultLang);
    Cookies.set("defaultLang", "en", { expires: 7, path: "" });
  } else if ($(this).text() == "華語") {
    defaultLang = "cn";
    languageSelect(defaultLang);
    Cookies.set("defaultLang", "cn", { expires: 7, path: "" });
  }
});
