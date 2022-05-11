var divSelector = "div[id*='datatype']";
var idSplit = ":";

var linkItems = [
  "absences_get_response:absence_getAll",
  "absences_post_request:absence_post",
  "absences__absence_id__get_response:absence_getId",
  "absences__absence_id__post_request:absence_postId",
  "accounts_get_response:account_getAll",
  "accounts_post_request:account_post",
  "accounts__account_id__get_response:account_getId",
  "accounts__account_id__post_request:account_postId",
  "companies_get_response:company_getAll",
  "companies_post_request:company_post",
  "companies__company_id__get_response:company_getId",
  "companies__company_id__post_request:company_postId",
  "contacts_get_response:contact_getAll",
  "contacts_post_request:contact_post",
  "contacts__contact_id__get_response:contact_getId",
  "contacts__contact_id__post_request:contact_postId",
  "invoices_get_response:invoice_getAll",
  "invoices__invoice_id__get_response:invoice_getId",
  "projects_get_response:project_getAll",
  "projects_post_request:project_post",
  "projects__project_id__get_response:project_getId",
  "projects__project_id__post_request:project_postId",
  "opportunities_get_response:opportunity_getAll",
  "opportunities_post_request:opportunity_post",
  "opportunities__opportunity_id__get_response:opportunity_getId",
  "opportunities__opportunity_id__post_request:opportunity_postId",
  "portfolios_get_response:portfolio_getAll",
  "portfolios_post_request:portfolio_post",
  "portfolios__portfolio_id__get_response:portfolio",
  "portfolios__portfolio_id__post_request:portfolio_postId",
  "salesorders_get_response:salesorder_getAll",
  "salesorders_post_request:salesorder_post", 
  "salesorders__sales_order_id__post_request:salesorder_postId",
  "salesorders__sales_order_id__get_response:salesorder_getId",
  "timereports_get_response:timereport_getAll",
  "timereports_post_request:timereport_post",
  "timereports__timereport_id__get_response:timereport_getId",
  "timereports__timereport_id__post_request:timereport_postId"
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
	