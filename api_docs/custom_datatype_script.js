var divSelector = "div[id*='datatype']";
var idSplit = ":";

var linkItems = [
  "accounts_get_response:account_getAll",
  "accounts_post_request:account_post",
  "accounts__account_id__get_response:account_getId",
  "accounts__account_id__post_request:account_postId",
  "projects_get_response:project_getAll",
  "projects_post_request:project_post",
  "projects__project_id__get_response:project_getId",
  "projects__project_id__post_request:project_postId"
];

function download(filename, text) {
  var element = document.createElement('a');
  var filename = filename.replace(/1_5/ig, '');

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
    let el = document.getElementById(divId+'link');
    document.getElementById(divId).appendChild(button);
	
	if (el) {
      el.addEventListener("click", function () {
        let jsonFile = type + ".schema";

        fetch(''+jsonFile, { method: "GET" })
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
	