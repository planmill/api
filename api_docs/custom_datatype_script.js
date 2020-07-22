var divSelector = "div[id*='datatype']";
var idSplit = ":";

var linkItems = [
  "accounts_get_response:account1_5",
  "accounts_post_request:account1_5",
  "accounts__account_id__get_response:account_single1_5",
  "accounts__account_id__post_request:account_single1_5"
];

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('download', filename);
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function createButton(divId) {
  var btn = document.createElement("a");

  btn.innerHtml = $('#' + divId + " h3:contains('Body')").first().css('display', 'inline-block').
    after("<a href='#' style='margin-left:7px;'><div id=" + divId + "link style='display:inline-block;><a style='display:inline-block;margin-left:10px;' title='Download JSON Schema' href='#' ><span class='badge badge_post' style='width:130px;height:23px;padding-top:5px;'><span class='glyphicon glyphicon-download-alt' style='margin-right:7px;'></span>JSON SCHEMA</span></a></div></a>");
  return btn;
}

$(function () {
  linkItems.forEach((elem) => {
    let divId = elem.split(idSplit)[0];
    let type = elem.split(idSplit)[1];
    let button = createButton(divId);
    let el = document.getElementById(divId + 'link');

    document.getElementById(divId).appendChild(button);

    if (el) {
      el.addEventListener("click", function () {
        let jsonFile = type + ".json";

        fetch("/download/" + type, { method: "GET" })
          .then((response) => response.text())
          .then((data) => {
            download(jsonFile, data);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    }
  });
});