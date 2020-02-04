## Installation

Brief installation step for gamification script as follows

1. Open `/include/db.php` to setup database connection.
2. Open` /include/config.php` to configuration application.
3. Core bll, events and entity files located `/include/bll`, `/include/entity`, `/include/events` folder
4.  Php files to communicate between angular js and core bll files include at `/api` directory
5.  Core front end application included at `/app` directory
6.  Badges to be stored in `/contents` directory. Please give write permission to contents directory inorder to save images properly
7.  Default image used for badges located at `/images` directory
8.  Angular Js Application used in` /app/manage.html` (Core Management App), `/app/simulate.html` (Core simulation to show how gamify works and integrate) and `/app/display.html` (Sample profile with display of awarded badges, rewards, levels etc), you can adjust it on any section or page of your application. but make sure you should adjust the following lines of code in `/app/js/manage.js`, `/app/js/simulate.js`, `/app/js/display.js` if you put application in sub folders.

e.g if you shift angular application from `/app/manage.html` to your website control panel, then you must adjust the following paths within `/app/js/manage.js` file

```javascript
var templatePath = "app/templates/";
var apiPath = "api/";
var defaultimagePath = "images/badge.png";
var imagedirectoryPath = "contents/badges/";
```

e.g if you put application inside directory e.g` /manage/index.php` then above lines in manage.js file should be like this

```javascript
var templatePath = "../app/templates/";
var apiPath = "../api/";
var defaultimagePath = "../images/badge.png";
var imagedirectoryPath = "../contents/badges/";
```
## Usage

Usage is very simple, e.g if you want to award badge (id: 40) to user (id : 45), then the following line of code will do it for you.

```javascript
 $userid = 45;
 $id = 40;
 include_once("./include/bll/ga_core_bll.php");
 $obj = new ga_core_bll();
 $obj->trigger_item($userid, $badgeid);
```

Same for awarding rewards, levels, points, credits, packages etc.

