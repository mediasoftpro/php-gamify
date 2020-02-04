
var templatePath="app/templates/";var apiPath="api/";var defaultimagePath="images/badge.png";var imagedirectoryPath="contents/badges/";"use strict";var gamifyapp=angular.module('gamifyapp',['ngRoute','httpServices','programServices','ng.shims.placeholder','ng-mediasoft.uploader']).config(['$routeProvider',function($routeProvider){$routeProvider.when('/',{templateUrl:templatePath+"manage/core.html",controller:'manageController'}).when('/rewards',{templateUrl:templatePath+"manage/rewards.html",controller:'rewardsController'}).when('/levels',{templateUrl:templatePath+"manage/levels.html",controller:'levelsController'}).when('/points',{templateUrl:templatePath+"manage/points.html",controller:'pointsController'}).when('/credits',{templateUrl:templatePath+"manage/credits.html",controller:'creditsController'}).when('/packages',{templateUrl:templatePath+"manage/packages.html",controller:'packagesController'}).when('/events',{templateUrl:templatePath+"manage/events.html",controller:'eventsController'}).when('/addevent/:type/:id',{templateUrl:templatePath+"manage/add/events.html",controller:'addeventController'}).when('/addevent/:type',{templateUrl:templatePath+"manage/add/events.html",controller:'addeventController'}).when('/addcategory/:type/:id',{templateUrl:templatePath+"manage/add/category.html",controller:'addcategoryController'}).when('/addcategory/:type',{templateUrl:templatePath+"manage/add/category.html",controller:'addcategoryController'}).when('/addcategory/:type/:id',{templateUrl:templatePath+"manage/add/category.html",controller:'addcategoryController'}).when('/addcategory/:type',{templateUrl:templatePath+"manage/add/category.html",controller:'addcategoryController'}).when('/managecategory/:type',{templateUrl:templatePath+"manage/managecategory.html",controller:'managecategoryController'}).when('/uploadavator/:type/:id',{templateUrl:templatePath+"manage/uploadavator.html",controller:'uploadavatorController'}).when('/showcode/:type/:id',{templateUrl:templatePath+"manage/showcode.html",controller:'showcodeController'}).when('/gencode/:type',{templateUrl:templatePath+"manage/gencode.html",controller:'gencodeController'}).when('/showeventcode/:type/:id',{templateUrl:templatePath+"manage/showeventcode.html",controller:'showeventcodeController'}).when('/associatereward/:type/:id',{templateUrl:templatePath+"manage/associatereward.html",controller:'associaterewardController'}).when('/associateevent/:type/:id',{templateUrl:templatePath+"manage/associate.html",controller:'associateeventController'}).when('/addbadge/:type/:id',{templateUrl:templatePath+"manage/add/badge.html",controller:'addbadgeController'}).when('/addbadge/:type',{templateUrl:templatePath+"manage/add/badge.html",controller:'addbadgeController'}).otherwise({redirectTo:'/'});}]).controller('manageController',['$scope','gamifyHTTP','localService',function($scope,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.selectedIndex=0;$scope.message="";$scope.type=1;$scope.Data=[];$scope.Categories=[];$scope.selectedID=0;$scope.photocss="img-rounded";$scope.photopath=imagedirectoryPath;$scope.photoname="";$scope.defaultphoto=defaultimagePath;$scope.selectedCategory=0;var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Data=data.Records;}
else
$scope.message="Failed to open records";}};var categorySuccess=function(data,status){var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Categories=data.Records;}
else
$scope.message="Failed to open records";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.filter=function(categoryid){$scope.selectedID=categoryid;loadBadges(categoryid);};loadBadges(0);function loadBadges(categoryid){$scope.selectedCategory=categoryid;$scope.showLoader=true;var url=apiPath+"manage/load_ga_badges.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,category_id:categoryid,loadall:true,order:"priority desc, id desc"}]).success(loadSuccess).error(loadError);}
var removeSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='success'){$scope.message="Record removed successfully";$scope.messagecss="alert-success";loadBadges($scope.selectedCategory);}
else{$scope.message="Failed to delete record";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.dRrecord=function(_id,_icon){var r=confirm("Are you sure you want to delete selected record");if(r==true){$scope.showLoader=true;var url=apiPath+"manage/remove/badge.php";gamifyHTTP.actionProcess(url,[{id:_id,icon:_icon}]).success(removeSuccess).error(loadError);}};var url=apiPath+"manage/load_ga_categories.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,loadall:true,order:"priority desc, id desc"}]).success(categorySuccess).error(loadError);}]).controller('rewardsController',['$scope','gamifyHTTP','localService',function($scope,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.selectedIndex=1;$scope.message="";$scope.type=2;$scope.Data=[];$scope.Categories=[];$scope.selectedID=0;$scope.photocss="img-rounded";$scope.photopath=imagedirectoryPath;$scope.photoname="";$scope.defaultphoto=defaultimagePath;$scope.selectedCategory=0;var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Data=data.Records;}
else
$scope.message="Failed to open records";}};var categorySuccess=function(data,status){var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Categories=data.Records;}
else
$scope.message="Failed to open records";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.filter=function(categoryid){$scope.selectedID=categoryid;loadBadges(categoryid);};loadBadges(0);function loadBadges(categoryid){$scope.selectedCategory=categoryid;$scope.showLoader=true;var url=apiPath+"manage/load_ga_badges.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,category_id:categoryid,loadall:true,order:"priority desc, id desc"}]).success(loadSuccess).error(loadError);}
var removeSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='success'){$scope.message="Record removed successfully";$scope.messagecss="alert-success";loadBadges($scope.selectedCategory);}
else{$scope.message="Failed to delete record";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.dRrecord=function(_id,_icon){var r=confirm("Are you sure you want to delete selected record");if(r==true){$scope.showLoader=true;var url=apiPath+"manage/remove/badge.php";gamifyHTTP.actionProcess(url,[{id:_id,icon:_icon}]).success(removeSuccess).error(loadError);}};var url=apiPath+"manage/load_ga_categories.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,loadall:true,order:"priority desc, id desc"}]).success(categorySuccess).error(loadError);}]).controller('levelsController',['$scope','gamifyHTTP','localService',function($scope,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.selectedIndex=2;$scope.message="";$scope.type=3;$scope.Data=[];$scope.Categories=[];$scope.selectedID=0;$scope.photocss="img-rounded";$scope.photopath=imagedirectoryPath;$scope.photoname="";$scope.defaultphoto=defaultimagePath;$scope.selectedCategory=0;var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Data=data.Records;}
else
$scope.message="Failed to open records";}};var categorySuccess=function(data,status){var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Categories=data.Records;}
else
$scope.message="Failed to open records";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.filter=function(categoryid){$scope.selectedID=categoryid;loadBadges(categoryid);};loadBadges(0);function loadBadges(categoryid){$scope.selectedCategory=categoryid;$scope.showLoader=true;var url=apiPath+"manage/load_ga_badges.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,category_id:categoryid,loadall:true,order:"priority desc, id desc"}]).success(loadSuccess).error(loadError);}
var removeSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='success'){$scope.message="Record removed successfully";$scope.messagecss="alert-success";loadBadges($scope.selectedCategory);}
else{$scope.message="Failed to delete record";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.dRrecord=function(_id,_icon){var r=confirm("Are you sure you want to delete selected record");if(r==true){$scope.showLoader=true;var url=apiPath+"manage/remove/badge.php";gamifyHTTP.actionProcess(url,[{id:_id,icon:_icon}]).success(removeSuccess).error(loadError);}};var url=apiPath+"manage/load_ga_categories.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,loadall:true,order:"priority desc, id desc"}]).success(categorySuccess).error(loadError);}]).controller('pointsController',['$scope','gamifyHTTP','localService',function($scope,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.selectedIndex=3;$scope.message="";$scope.type=4;$scope.Data=[];$scope.Categories=[];$scope.selectedID=0;$scope.photocss="img-rounded";$scope.photopath=imagedirectoryPath;$scope.photoname="";$scope.defaultphoto=defaultimagePath;$scope.selectedCategory=0;var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Data=data.Records;}
else
$scope.message="Failed to open records";}};var categorySuccess=function(data,status){var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Categories=data.Records;}
else
$scope.message="Failed to open records";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.filter=function(categoryid){$scope.selectedID=categoryid;loadBadges(categoryid);};loadBadges(0);function loadBadges(categoryid){$scope.selectedCategory=categoryid;$scope.showLoader=true;var url=apiPath+"manage/load_ga_badges.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,category_id:categoryid,loadall:true,order:"priority desc, id desc"}]).success(loadSuccess).error(loadError);}
var removeSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='success'){$scope.message="Record removed successfully";$scope.messagecss="alert-success";loadBadges($scope.selectedCategory);}
else{$scope.message="Failed to delete record";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.dRrecord=function(_id,_icon){var r=confirm("Are you sure you want to delete selected record");if(r==true){$scope.showLoader=true;var url=apiPath+"manage/remove/badge.php";gamifyHTTP.actionProcess(url,[{id:_id,icon:_icon}]).success(removeSuccess).error(loadError);}};var url=apiPath+"manage/load_ga_categories.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,loadall:true,order:"priority desc, id desc"}]).success(categorySuccess).error(loadError);}]).controller('creditsController',['$scope','gamifyHTTP','localService',function($scope,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.selectedIndex=4;$scope.message="";$scope.type=5;$scope.Data=[];$scope.Categories=[];$scope.selectedID=0;$scope.photocss="img-rounded";$scope.photopath=imagedirectoryPath;$scope.photoname="";$scope.defaultphoto=defaultimagePath;$scope.selectedCategory=0;var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Data=data.Records;}
else
$scope.message="Failed to open records";}};var categorySuccess=function(data,status){var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Categories=data.Records;}
else
$scope.message="Failed to open records";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.filter=function(categoryid){$scope.selectedID=categoryid;loadBadges(categoryid);};loadBadges(0);function loadBadges(categoryid){$scope.selectedCategory=categoryid;$scope.showLoader=true;var url=apiPath+"manage/load_ga_badges.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,category_id:categoryid,loadall:true,order:"priority desc, id desc"}]).success(loadSuccess).error(loadError);}
var removeSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='success'){$scope.message="Record removed successfully";$scope.messagecss="alert-success";loadBadges($scope.selectedCategory);}
else{$scope.message="Failed to delete record";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.dRrecord=function(_id,_icon){var r=confirm("Are you sure you want to delete selected record");if(r==true){$scope.showLoader=true;var url=apiPath+"manage/remove/badge.php";gamifyHTTP.actionProcess(url,[{id:_id,icon:_icon}]).success(removeSuccess).error(loadError);}};var url=apiPath+"manage/load_ga_categories.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,loadall:true,order:"priority desc, id desc"}]).success(categorySuccess).error(loadError);}]).controller('packagesController',['$scope','gamifyHTTP','localService',function($scope,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.selectedIndex=5;$scope.message="";$scope.type=6;$scope.Data=[];$scope.Categories=[];$scope.selectedID=0;$scope.photocss="img-rounded";$scope.photopath=imagedirectoryPath;$scope.photoname="";$scope.defaultphoto=defaultimagePath;$scope.selectedCategory=0;var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Data=data.Records;}
else
$scope.message="Failed to open records";}};var categorySuccess=function(data,status){var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Categories=data.Records;}
else
$scope.message="Failed to open records";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.filter=function(categoryid){$scope.selectedID=categoryid;loadBadges(categoryid);};loadBadges(0);function loadBadges(categoryid){$scope.selectedCategory=categoryid;$scope.showLoader=true;var url=apiPath+"manage/load_ga_badges.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,category_id:categoryid,loadall:true,order:"priority desc, id desc"}]).success(loadSuccess).error(loadError);}
var removeSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='success'){$scope.message="Record removed successfully";$scope.messagecss="alert-success";loadBadges($scope.selectedCategory);}
else{$scope.message="Failed to delete record";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.dRrecord=function(_id,_icon){var r=confirm("Are you sure you want to delete selected record");if(r==true){$scope.showLoader=true;var url=apiPath+"manage/remove/badge.php";gamifyHTTP.actionProcess(url,[{id:_id,icon:_icon}]).success(removeSuccess).error(loadError);}};var url=apiPath+"manage/load_ga_categories.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,loadall:true,order:"priority desc, id desc"}]).success(categorySuccess).error(loadError);}]).controller('gencodeController',['$scope','$routeParams','$location','gamifyHTTP','localService',function($scope,$routeParams,$location,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.message="";$scope.Data=[];$scope.type=1;if(typeof $routeParams!='undefined'){if(typeof $routeParams.type!='undefined')
$scope.type=$routeParams.type;}
$scope.selectedIndex=$scope.type-1;$scope.messagecss="alert-danger";var infoSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Data=data.Records;}
else
$scope.message="Failed to open records";}};var actionError=function(data,status,headers,config){$scope.message="Error occured";}
loadBadgeInfo();function loadBadgeInfo(){var url=apiPath+"manage/load_ga_badges.php";$scope.showLoader=true;gamifyHTTP.actionProcess(url,[{type:$scope.type,loadall:true,order:"id desc"}]).success(infoSuccess).error(actionError);}
$scope.Caption=localService.getCaption($scope.type);}]).controller('showcodeController',['$scope','$routeParams','$location','gamifyHTTP','localService',function($scope,$routeParams,$location,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.selectedID=0;$scope.message="";$scope.Info=[];$scope.type=1;if(typeof $routeParams!='undefined'){if(typeof $routeParams.type!='undefined')
$scope.type=$routeParams.type;if(typeof $routeParams.id!='undefined')
$scope.selectedID=$routeParams.id;}
$scope.selectedIndex=$scope.type-1;$scope.messagecss="alert-danger";$scope.eventname="";$scope.itemName="";switch(parseInt($scope.type)){case 1:$scope.eventname="ga_badge_item_events"
$scope.itemName="Badge";break;case 2:$scope.eventname="ga_reward_item_events"
$scope.itemName="Reward";break;case 3:$scope.eventname="ga_level_item_events"
$scope.itemName="Level";break;case 4:$scope.eventname="ga_points_item_events"
$scope.itemName="Points";break;case 5:$scope.eventname="ga_credits_item_events"
$scope.itemName="Credits";break;case 6:$scope.eventname="ga_package_item_events"
$scope.itemName="Package";break;}
var infoSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Info=data.Records;$scope.photoname=$scope.Info[0].icon;}
else
$scope.message="Failed to open records";}};var actionError=function(data,status,headers,config){$scope.message="Error occured";}
loadBadgeInfo();function loadBadgeInfo(){var url=apiPath+"manage/load_ga_badges.php";$scope.showLoader=true;gamifyHTTP.actionProcess(url,[{type:$scope.type,id:$scope.selectedID,loadall:true,order:"id desc"}]).success(infoSuccess).error(actionError);}
$scope.Caption=localService.getCaption($scope.type);}]).controller('uploadavatorController',['$scope','$routeParams','$location','gamifyHTTP','localService',function($scope,$routeParams,$location,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.selectedID=0;$scope.message="";$scope.Info=[];$scope.type=1;if(typeof $routeParams!='undefined'){if(typeof $routeParams.type!='undefined')
$scope.type=$routeParams.type;if(typeof $routeParams.id!='undefined')
$scope.selectedID=$routeParams.id;}
$scope.selectedIndex=$scope.type-1;$scope.handlerpath=apiPath+"upload/upload.php";$scope.pickfilecaption="Upload Avator";$scope.max_file_size="10mb";$scope.chunksize='4mb';$scope.plupload_root='../plugins/plupload';$scope.headers={UGID:"0",UName:"test"};$scope.extensiontitle="Image Files";$scope.extensions="jpg,jpeg,png,gif";$scope.maxallowedfiles="1";$scope.rediredUrl='#'
$scope.photowidth="68px";$scope.photoheight="auto";$scope.photocss="img-rounded";$scope.photopath=imagedirectoryPath;$scope.photoname="";$scope.defaultphoto=defaultimagePath;$scope.updatehandler=apiPath+"upload/updatephoto.php";$scope.removehandler=apiPath+"upload/removephoto.php";$scope.photoid=$scope.selectedID;$scope.messagecss="alert-danger";var infoSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Info=data.Records;$scope.photoname=$scope.Info[0].icon;}
else
$scope.message="Failed to open records";}};var actionError=function(data,status,headers,config){$scope.message="Error occured";}
loadBadgeInfo();function loadBadgeInfo(){var url=apiPath+"manage/load_ga_badges.php";$scope.showLoader=true;gamifyHTTP.actionProcess(url,[{type:$scope.type,id:$scope.selectedID,loadall:true,order:"id desc"}]).success(infoSuccess).error(actionError);}
$scope.Caption=localService.getCaption($scope.type);}]).controller('addbadgeController',['$scope','$routeParams','$location','gamifyHTTP','localService',function($scope,$routeParams,$location,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.Data=[];$scope.message="";$scope.messagecss="alert-danger";$scope.type=1;$scope.iscss=false;$scope.Categories=[];var _id=0;if(typeof $routeParams!='undefined'){if(typeof $routeParams.type!='undefined')
$scope.type=$routeParams.type;if(typeof $routeParams.id!='undefined')
_id=$routeParams.id;}
$scope.selectedIndex=$scope.type-1;$scope.Caption=localService.getCaption($scope.type);$scope.badge=[{id:_id,title:"",description:"",icon:"",icon_sm:"",icon_lg:"",category_id:"",type:$scope.type,icon_css:"",priority:0,credits:0,xp:0,price:0,notification:"",isdeduct:0,ilevel:0,ishide:0,ismultiple:0}];var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){if(data.Records.length>0){$scope.Data=data.Records;$scope.badge[0].title=$scope.Data[0].title;$scope.badge[0].description=$scope.Data[0].description;$scope.badge[0].icon=$scope.Data[0].icon;$scope.badge[0].icon_sm=$scope.Data[0].icon_sm;$scope.badge[0].icon_lg=$scope.Data[0].icon_lg;$scope.badge[0].category_id=$scope.Data[0].category_id;$scope.badge[0].icon_css=$scope.Data[0].icon_css;$scope.badge[0].priority=$scope.Data[0].priority;$scope.badge[0].credits=$scope.Data[0].credits;$scope.badge[0].xp=$scope.Data[0].xp;$scope.badge[0].price=$scope.Data[0].price;$scope.badge[0].notification=$scope.Data[0].notification;$scope.badge[0].isdeduct=$scope.Data[0].isdeduct;$scope.badge[0].ilevel=$scope.Data[0].ilevel;$scope.badge[0].ishide=$scope.Data[0].ishide;$scope.badge[0].ismultiple=$scope.Data[0].ismultiple;}}
else
$scope.message="Failed to open records";}};$scope.headerCaption="Add";if($scope.badge[0].id>0){$scope.headerCaption="Update";$scope.showLoader=true;var url=apiPath+"manage/load_ga_badges.php";gamifyHTTP.actionProcess(url,[{id:$scope.badge[0].id,type:$scope.type,loadall:true,order:"id desc"}]).success(loadSuccess).error(actionError);}
var actionSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message="Record not added";}
else{var _status=" added";if($scope.badge[0].id>0)
_status=" updated";$scope.message="Record "+_status+" successfully";$scope.messagecss="alert-success";if($scope.badge[0].id==0){if($scope.badge[0].icon_css==""){$location.path("/uploadavator/"+$scope.type+"/"+data.id);}else{$scope.badge[0].title="";$scope.badge[0].description="";$scope.badge[0].category_id="";$scope.badge[0].icon_css="";$scope.badge[0].priority=0;$scope.badge[0].xp=0;$scope.badge[0].price=0;$scope.badge[0].notification="";$scope.badge[0].isdeduct=0;$scope.badge[0].ilevel=$scope.badge[0].ilevel+1;$scope.badge[0].ishide=0;$scope.badge[0].ismultiple=0;}}}};var categorySuccess=function(data,status){var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Categories=data.Records;if($scope.type==3&&$scope.badge[0].id==0){getMaxLevel();}}
else
$scope.message="Failed to open records";}};var actionError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.addBadge=function(){if($scope.badge[0].category_id==""){$scope.message="Please select category";return;}
console.log($scope.badge);$scope.showLoader=true;var url=apiPath+"manage/add/badge.php";gamifyHTTP.actionProcess(url,$scope.badge).success(actionSuccess).error(actionError);};loadCategories();function loadCategories(){var url=apiPath+"manage/load_ga_categories.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,loadall:true,order:"id desc"}]).success(categorySuccess).error(actionError);}
var lSuccess=function(data,status){var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{$scope.badge[0].ilevel=data.level;}};function getMaxLevel(){var url=apiPath+"manage/get_max_level_id.php";gamifyHTTP.actionProcess(url,[{id:0}]).success(lSuccess).error(actionError);}}]).controller('associaterewardController',['$scope','$routeParams','gamifyHTTP','localService',function($scope,$routeParams,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.Data=[];$scope.LevelData=[];$scope.selectedLevels=[];$scope.message="";$scope.messagecss="alert-danger";$scope.type=7;$scope.iscss=false;$scope.Categories=[];$scope.selectedType=0;$scope.searchTerm="";var _id=0;$scope.isLevelChecked=function(option){var _match=false;for(var i=0;i<$scope.selectedLevels.length;i++){if($scope.selectedLevels[i].id==option){_match=true;}}
return _match;};$scope.syncLevel=function(bool,item){if(bool){$scope.selectedLevels.push(item);}else{for(var i=0;i<$scope.selectedLevels.length;i++){if($scope.selectedLevels[i].id==item.id){$scope.selectedLevels.splice(i,1);}}}};if(typeof $routeParams!='undefined'){if(typeof $routeParams.type!='undefined')
$scope.type=$routeParams.type;if(typeof $routeParams.id!='undefined')
_id=$routeParams.id;}
$scope.selectedIndex=$scope.type-1;if(_id==0){$scope.message="no event record available";return;}
var levelSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.LevelData=data.Records;var _type=2;loadBadges(_type);}}};var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Data=data.Records;for(var i=0;i<$scope.Data.length;i++){switch($scope.Data[i].type)
{case 1:$scope.Data[i].typecaption="Badge";break;case 2:$scope.Data[i].typecaption="Reward";break;case 3:$scope.Data[i].typecaption="Level";break;case 4:$scope.Data[i].typecaption="Points";break;case 5:$scope.Data[i].typecaption="Credits";break;case 6:$scope.Data[i].typecaption="Package";break;}
$scope.Data[i].isselected=false;console.log($scope.LevelData);if($scope.LevelData.length>0){for(var j=0;j<$scope.LevelData.length;j++){if($scope.Data[i].id==$scope.LevelData[j].rewardid){$scope.selectedLevels.push($scope.Data[i]);$scope.Data[i].isselected=true;}}}}}
else
$scope.message="Failed to open records";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
loadLevelAssosiates();function loadLevelAssosiates(){$scope.showLoader=true;var url=apiPath+"manage/load_ga_level_associate.php";gamifyHTTP.actionProcess(url,[{levelid:_id}]).success(levelSuccess).error(loadError);}
function loadBadges(type){$scope.showLoader=true;var url=apiPath+"manage/load_ga_badges.php";gamifyHTTP.actionProcess(url,[{fields:"id,title,type,description",type:type,loadall:true,order:"priority desc, id desc"}]).success(loadSuccess).error(loadError);}
var actionSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message="Record not added";}
else{var _status=" added";$scope.message="Operation processed successfully";$scope.messagecss="alert-success";}};$scope.addLevel=function(){if($scope.selectedLevels.length==0){$scope.message="Please select at least one item for selected event";return;}
var _data=[];for(var i=0;i<$scope.selectedLevels.length;i++){_data.push({levelid:_id,rewardid:$scope.selectedLevels[i].id,description:$scope.selectedLevels[i].description});}
console.log(_data);$scope.showLoader=true;var url=apiPath+"manage/add/level_associate.php";gamifyHTTP.actionProcess(url,_data).success(actionSuccess).error(loadError);};}]).controller('managecategoryController',['$scope','$routeParams','gamifyHTTP','localService',function($scope,$routeParams,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.selectedIndex=0;$scope.message="";$scope.type=1;$scope.messagecss="alert-danger";if(typeof $routeParams!='undefined'){if(typeof $routeParams.type!='undefined')
$scope.type=$routeParams.type;}
$scope.selectedIndex=$scope.type-1;$scope.Caption=localService.getCaption($scope.type);$scope.Data=[];var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Data=data.Records;}
else
$scope.message="Failed to open records";}};var removeSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='success'){$scope.message="Record removed successfully";$scope.messagecss="alert-success";loadCategories();}
else{$scope.message="Failed to delete record";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.dRrecord=function(_id){var r=confirm("Are you sure you want to delete selected record");if(r==true){$scope.showLoader=true;var url=apiPath+"manage/remove/category.php";gamifyHTTP.actionProcess(url,[{id:_id}]).success(removeSuccess).error(loadError);}};loadCategories();function loadCategories(){$scope.showLoader=true;var url=apiPath+"manage/load_ga_categories.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,loadall:true,order:"priority desc, id desc"}]).success(loadSuccess).error(loadError);}}]).controller('addcategoryController',['$scope','$routeParams','gamifyHTTP','localService',function($scope,$routeParams,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.selectedIndex=0;$scope.Data=[];$scope.message="";$scope.messagecss="alert-danger";$scope.type=1;var _id=0;if(typeof $routeParams!='undefined'){if(typeof $routeParams.type!='undefined')
$scope.type=$routeParams.type;if(typeof $routeParams.id!='undefined')
_id=$routeParams.id;}
$scope.selectedIndex=$scope.type-1;$scope.Caption=localService.getCaption($scope.type);$scope.category=[{id:_id,title:"",shorttitle:"",description:"",type:$scope.type,priority:0}];var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){if(data.Records.length>0){$scope.Data=data.Records;$scope.category[0].title=$scope.Data[0].title;$scope.category[0].shorttitle=$scope.Data[0].shorttitle;$scope.category[0].description=$scope.Data[0].description;$scope.category[0].priority=$scope.Data[0].priority;}}
else
$scope.message="Failed to open records";}};$scope.headerCaption="Add";if($scope.category[0].id>0){$scope.headerCaption="Update";$scope.showLoader=true;var url=apiPath+"manage/load_ga_categories.php";gamifyHTTP.actionProcess(url,[{id:$scope.category[0].id,type:$scope.type,loadall:true,order:"id desc"}]).success(loadSuccess).error(actionError);}
var actionSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message="Record not added";}
else{var _status=" added";if($scope.category[0].id>0)
_status=" updated";$scope.message="Record "+_status+" successfully";$scope.messagecss="alert-success";if($scope.category[0].id==0){$scope.category[0].title="";$scope.category[0].shorttitle="";$scope.category[0].description="";}}};var actionError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.addCategory=function(){$scope.showLoader=true;var url=apiPath+"manage/add/category.php";gamifyHTTP.actionProcess(url,$scope.category).success(actionSuccess).error(actionError);};}]).controller('eventsController',['$scope','gamifyHTTP','localService',function($scope,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.message="";$scope.type=7;$scope.Data=[];$scope.Categories=[];$scope.selectedID=0;$scope.selectedCategory=0;$scope.selectedIndex=6;var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Data=data.Records;}
else
$scope.message="Failed to open records";}};var categorySuccess=function(data,status){var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Categories=data.Records;}
else
$scope.message="Failed to open records";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.filter=function(categoryid){$scope.selectedID=categoryid;loadEvents(categoryid);};loadEvents(0);function loadEvents(categoryid){$scope.selectedCategory=categoryid;$scope.showLoader=true;var url=apiPath+"manage/load_ga_events.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,category_id:categoryid,loadall:true,order:"id desc"}]).success(loadSuccess).error(loadError);}
var removeSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='success'){$scope.message="Record removed successfully";$scope.messagecss="alert-success";loadEvents($scope.selectedCategory);}
else{$scope.message="Failed to delete record";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.dRrecord=function(_id){var r=confirm("Are you sure you want to delete selected record");if(r==true){$scope.showLoader=true;var url=apiPath+"manage/remove/events.php";gamifyHTTP.actionProcess(url,[{id:_id}]).success(removeSuccess).error(loadError);}};var url=apiPath+"manage/load_ga_categories.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,loadall:true,order:"priority desc, id desc"}]).success(categorySuccess).error(loadError);}]).controller('addeventController',['$scope','$routeParams','$location','gamifyHTTP','localService',function($scope,$routeParams,$location,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.Data=[];$scope.message="";$scope.messagecss="alert-danger";$scope.type=7;$scope.iscss=false;$scope.Categories=[];var _id=0;if(typeof $routeParams!='undefined'){if(typeof $routeParams.type!='undefined')
$scope.type=$routeParams.type;if(typeof $routeParams.id!='undefined')
_id=$routeParams.id;}
$scope.selectedIndex=$scope.type-1;$scope.event=[{id:_id,title:"",description:"",event_key:"",category_id:""}];var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){if(data.Records.length>0){$scope.event=data.Records;}}
else
$scope.message="Failed to open records";}};$scope.headerCaption="Add";if($scope.event[0].id>0){$scope.headerCaption="Update";$scope.showLoader=true;var url=apiPath+"manage/load_ga_events.php";gamifyHTTP.actionProcess(url,[{id:$scope.event[0].id,type:$scope.type,loadall:true,order:"id desc"}]).success(loadSuccess).error(actionError);}
var actionSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message="Record not added";}
else{var _status=" added";if($scope.event[0].id>0)
_status=" updated";$scope.message="Record "+_status+" successfully";$scope.messagecss="alert-success";if($scope.event[0].id==0){$location.path("/associateevent/"+$scope.type+"/"+data.id);}}};var categorySuccess=function(data,status){var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Categories=data.Records;}
else
$scope.message="Failed to open records";}};var actionError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.addEvent=function(){if($scope.event[0].category_id==""){$scope.event[0].category_id=0;}
$scope.showLoader=true;var url=apiPath+"manage/add/events.php";gamifyHTTP.actionProcess(url,$scope.event).success(actionSuccess).error(actionError);};loadCategories();function loadCategories(){var url=apiPath+"manage/load_ga_categories.php";gamifyHTTP.actionProcess(url,[{type:$scope.type,loadall:true,order:"id desc"}]).success(categorySuccess).error(actionError);}}]).controller('associateeventController',['$scope','$routeParams','gamifyHTTP','localService',function($scope,$routeParams,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.Data=[];$scope.EventData=[];$scope.selectedEvents=[];$scope.message="";$scope.messagecss="alert-danger";$scope.type=7;$scope.iscss=false;$scope.Categories=[];$scope.selectedType=0;$scope.searchTerm="";var _id=0;$scope.isEventChecked=function(option){var _match=false;for(var i=0;i<$scope.selectedEvents.length;i++){if($scope.selectedEvents[i].id==option){_match=true;}}
return _match;};$scope.syncEvent=function(bool,item){if(bool){$scope.selectedEvents.push(item);}else{for(var i=0;i<$scope.selectedEvents.length;i++){if($scope.selectedEvents[i].id==item.id){$scope.selectedEvents.splice(i,1);}}}};if(typeof $routeParams!='undefined'){if(typeof $routeParams.type!='undefined')
$scope.type=$routeParams.type;if(typeof $routeParams.id!='undefined')
_id=$routeParams.id;}
$scope.selectedIndex=$scope.type-1;if(_id==0){$scope.message="no event record available";return;}
var eventSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.EventData=data.Records;loadBadges();}}};var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Data=data.Records;for(var i=0;i<$scope.Data.length;i++){console.log($scope.Data[i].type);switch(parseInt($scope.Data[i].type))
{case 1:$scope.Data[i].typecaption="Badge";break;case 2:$scope.Data[i].typecaption="Reward";break;case 3:$scope.Data[i].typecaption="Level";break;case 4:$scope.Data[i].typecaption="Points";break;case 5:$scope.Data[i].typecaption="Credits";break;case 6:$scope.Data[i].typecaption="Package";break;}
$scope.Data[i].isselected=false;if($scope.EventData.length>0){for(var j=0;j<$scope.EventData.length;j++){if($scope.Data[i].id==$scope.EventData[j].badge_id){$scope.selectedEvents.push($scope.Data[i]);$scope.Data[i].isselected=true;}}}}}
else
$scope.message="Failed to open records";}};var loadError=function(data,status,headers,config){$scope.message="Error occured";}
$scope.filter=function(categoryid){$scope.selectedID=categoryid;loadBadges(categoryid);};loadEventAssosiates();function loadEventAssosiates(){$scope.showLoader=true;var url=apiPath+"manage/load_ga_events_associate.php";gamifyHTTP.actionProcess(url,[{event_id:_id}]).success(eventSuccess).error(loadError);}
function loadBadges(){$scope.showLoader=true;var url=apiPath+"manage/load_ga_badges.php";gamifyHTTP.actionProcess(url,[{fields:"id,title,type",loadall:true,order:"type desc, id desc"}]).success(loadSuccess).error(loadError);}
var actionSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message="Record not added";}
else{var _status=" added";$scope.message="Operation processed successfully";$scope.messagecss="alert-success";}};$scope.addEvent=function(){if($scope.selectedEvents.length==0){$scope.message="Please select at least one item for selected event";return;}
var _data=[];for(var i=0;i<$scope.selectedEvents.length;i++){_data.push({event_id:_id,badge_id:$scope.selectedEvents[i].id});}
$scope.showLoader=true;var url=apiPath+"manage/add/badge_events.php";gamifyHTTP.actionProcess(url,_data).success(actionSuccess).error(loadError);};}]).controller('showeventcodeController',['$scope','$routeParams','$location','gamifyHTTP','localService',function($scope,$routeParams,$location,gamifyHTTP,localService){$scope.Nav=localService.getNav();$scope.NavOptions=localService.getNavOptions();$scope.selectedID=0;$scope.EventData=[];$scope.message="";$scope.Info=[];$scope.type=1;if(typeof $routeParams!='undefined'){if(typeof $routeParams.type!='undefined')
$scope.type=$routeParams.type;if(typeof $routeParams.id!='undefined')
$scope.selectedID=$routeParams.id;}
$scope.selectedIndex=$scope.type-1;$scope.messagecss="alert-danger";$scope.eventname="ga_events_item";var eventSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.EventData=data.Records;loadBadges();}}};var actionError=function(data,status,headers,config){$scope.message="Error occured";}
loadEventAssosiates();function loadEventAssosiates(){$scope.showLoader=true;var url=apiPath+"manage/load_ga_events_associate.php";gamifyHTTP.actionProcess(url,[{event_id:$scope.selectedID}]).success(eventSuccess).error(actionError);}
var infoSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Info=data.Records;}
else
$scope.message="Failed to open records";}};var actionError=function(data,status,headers,config){$scope.message="Error occured";}
loadBadgeInfo();function loadBadgeInfo(){var url=apiPath+"manage/load_ga_events.php";$scope.showLoader=true;gamifyHTTP.actionProcess(url,[{type:$scope.type,id:$scope.selectedID,loadall:true,order:"id desc"}]).success(infoSuccess).error(actionError);}
var loadSuccess=function(data,status){$scope.showLoader=false;var isObj=data instanceof Object;if(!isObj){$scope.message="Error occured while processing your request";}
else if(data.status=='error'){$scope.message=data.message;}
else{if(typeof data.Records!="undefined"){$scope.Data=data.Records;for(var i=0;i<$scope.Data.length;i++){if($scope.EventData.length>0){for(var j=0;j<$scope.EventData.length;j++){if($scope.EventData[j].badge_id==$scope.Data[i].id){switch(parseInt($scope.Data[i].type)){case 1:$scope.EventData[j].eventname="ga_badge_item_events"
break;case 2:$scope.EventData[j].eventname="ga_reward_item_events"
break;case 3:$scope.EventData[j].eventname="ga_level_item_events"
break;case 4:$scope.EventData[j].eventname="ga_points_item_events"
break;case 5:$scope.EventData[j].eventname="ga_credits_item_events"
break;case 6:$scope.EventData[j].eventname="ga_package_item_events"
break;}}}}}}
else
$scope.message="Failed to open records";}};function loadBadges(){$scope.showLoader=true;var url=apiPath+"manage/load_ga_badges.php";gamifyHTTP.actionProcess(url,[{fields:"id,title,type",loadall:true,order:"type desc, id desc"}]).success(loadSuccess).error(actionError);}
$scope.Caption=localService.getCaption($scope.type);}]);var programServices=angular.module('programServices',[]);programServices.factory('localService',['$http','gamifyHTTP',function($http,gamifyHTTP){var navPath=templatePath+"manage/partials/nav.html";var navOptions=[{name:"Badges",icon:"glyphicon-bookmark",redirect:"#/",index:0,type:1},{name:"Rewards",icon:"glyphicon-heart",redirect:"#/rewards",index:1,type:2},{name:"Levels",icon:"glyphicon-signal",redirect:"#/levels",index:2,type:3},{name:"Points",icon:"glyphicon-star",redirect:"#/points",index:3,type:4},{name:"Credits",icon:"glyphicon-book",redirect:"#/credits",index:4,type:5},{name:"Packages",icon:"glyphicon-qrcode",redirect:"#/packages",index:5,type:6},{name:"Events",icon:"glyphicon-th",redirect:"#/events",index:6,type:7}];var servayTopics=[];var actionSuccess=function(data,status){if(data.status=='success'){}else{alert("action failed");}}
var actionError=function(data,status,headers,config){alert("error occured");}
return{getNav:function(){return navPath;},getNavOptions:function(){return navOptions;},getCaption:function(type){var _name="";for(var i=0;i<navOptions.length;i++){if(navOptions[i].index==type)
_name=navOptions[i-1].name;}
return _name;},setTopic:function(topic){servayTopics=topic;},AddQuestion:function(obj){var url=domain+"topicquestion/create/";gamifyHTTP.actionProcess(url,obj).success(actionSuccess).error(actionError);}};}]);var httpServices=angular.module('httpServices',[]);httpServices.factory('gamifyHTTP',['$http',function($http){return{httpProcess:function(url){return $http.get(url);},actionProcess:function(url,paramOptions){return $http.post(url,paramOptions);}};}]);