/*
Please contact the DBI website analyst at webteam@dbi.vic.gov.au if you need assistance with implementing or customising this code.

For example, the DBI website analyst can assist with customisations to:
~ report on the number of results on a search results page
~ send back a custom value in the trackPageview field, such as the breadcrumb trail or a metadata value, instead of the URL
~ define subdomains or subfolders as external referring sites (for the traffic source reports) and/or outbound sites (for outbound tracking reports)
~ and much more...

IMPORTANT: In order to track websites properly, all websites must have their own profile number.
*/

/* YOU SHOULD NOT NEED TO MODIFY ANY OF THE FOLLOWING CODE. IF YOU THINK YOU NEED TO, PLEASE CONTACT THE DBI WEBSITE ANALYST AT WEBTEAM@DBI.VIC.GOV.AU FOR ASSISTANCE. */

/* START: compressed code for standard pageview and automated click tracking (includes call to ga.js) - DO NOT MODIFY - compressed at http://jscompress.com */
var _gaq=_gaq||[];if(siteOnSubFolder.indexOf("yes")!=-1){var cookiePath=subFolder}else{var cookiePath="/"}_gaq.push(["WOVGTracker._setAccount",WOVGprofileNumber],["WOVGTracker._setDomainName","."+site],["WOVGTracker._setAllowAnchor",true],["WOVGTracker._setCookiePath",cookiePath],["DEPTTracker._setAccount",DEPTprofileNumber],["DEPTTracker._setDomainName","."+site],["DEPTTracker._setAllowAnchor",true],["DEPTTracker._setCookiePath",cookiePath],["SITETracker._setAccount",SITEprofileNumber],["SITETracker._setDomainName","."+site],["SITETracker._setAllowAnchor",true],["SITETracker._setCookiePath",cookiePath]);if(document.title.indexOf(errorPageTitle)!=-1){_gaq.push(["WOVGTracker._trackPageview",dept.toLowerCase()+"/"+site.toLowerCase()+"/"+"404?page="+document.location.pathname+document.location.search+"&RefURL="+document.referrer],["DEPTTracker._trackPageview",site.toLowerCase()+"/"+"404?page="+document.location.pathname+document.location.search+"&RefURL="+document.referrer],["SITETracker._trackPageview","404?page="+document.location.pathname+document.location.search+"&RefURL="+document.referrer],["SITETracker._trackPageLoadTime"])}else{_gaq.push(["WOVGTracker._trackPageview",(dept+"/"+site+document.location.pathname+document.location.search).toLowerCase()],["DEPTTracker._trackPageview",(site+document.location.pathname+document.location.search).toLowerCase()],["SITETracker._trackPageview",(document.location.pathname+document.location.search).toLowerCase()],["SITETracker._trackPageLoadTime"])}$(document).ready(function(){$("a[href]").each(function(){var a=$(this);var b=a.attr("href");var c=b.split(".").reverse();var d=c[0];var e=a.text();var f=b.replace(/(https?:\/\/)/gi,"");if(b.match(/mailto:/gi)&&!g){var g="mailto"}if(b.match(/tel:/gi)&&!g){var g="telephone"}if(jQuery.inArray(d,downloadFileTypes)!=-1&&!g){var g="download"}if(b.match(/http/gi)&&b.indexOf(site)==-1&&jQuery.inArray(d,downloadFileTypes)==-1&&!g){var g="outbound"}if(b&&!g){var g="internal"}a.bind("mouseup",function(a){var b=$(this).closest("div[id]").attr("id")?$(this).closest("div[id]").attr("id"):"no-div-id-found";var c=$(this).closest("div[class]").attr("class")?$(this).closest("div[class]").attr("class"):"no-div-class-found";if(a.which==2||a.which==3){_gaq.push(["SITETracker._trackEvent","clicktracking",g,("PageTitle="+document.title+"&LinkText="+$.trim(e)+"&LinkHREF="+f+"&LinkDIVid="+b+"&LinkDIVclass="+c).toLowerCase()])}});a.click(function(){var a=$(this).closest("div[id]").attr("id")?$(this).closest("div[id]").attr("id"):"no-div-id-found";var b=$(this).closest("div[class]").attr("class")?$(this).closest("div[class]").attr("class"):"no-div-class-found";_gaq.push(["SITETracker._trackEvent","clicktracking",g,("PageTitle="+document.title+"&LinkText="+$.trim(e)+"&LinkHREF="+f+"&LinkDIVid="+a+"&LinkDIVclass="+b).toLowerCase()])})});$("form").submit(function(){var a=$(this).closest("div[id]").attr("id")?$(this).closest("div[id]").attr("id"):"no-div-id-found";var b=$(this).closest("div[class]").attr("class")?$(this).closest("div[class]").attr("class"):"no-div-class-found";_gaq.push(["SITETracker._trackEvent","clicktracking","form-submit",("PageTitle="+document.title+"&FormAction="+($(this).attr("action") ? $(this).attr("action").replace(/(https?:\/\/)/gi,"") : "")+"&LinkDIVid="+a+"&LinkDIVclass="+b).toLowerCase()])})});(function(){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=("https:"===document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})()
/* END: compressed code for standard pageview and automated click tracking (includes call to ga.js) - DO NOT MODIFY - compressed at http://jscompress.com */