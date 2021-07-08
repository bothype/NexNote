# NexLoader
![NexLoader Logo](https://1.bp.blogspot.com/-NvasQIQoQJo/YOaVyl7lmNI/AAAAAAAAAM0/nRY_oQp3X3MmcazdxQK5XB3bLvNpxB3vQCLcBGAsYHQ/s623/coollogo_com-6575533.png)
A Lightweight & attractive Preloader to make your website even more cool.

# Usage
To add NexLoader to Your Website, all you need to do is to add the below code to you site.

You can Customize this code according to you need.  
Note: Jquery is necessary to use NexLoader on your website.
### CSS
```
body {
  overflow: hidden;
}
/* NexLoader */
#nexloader {
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:#fff;
  z-index:99;
}
#nex-icon {
  width:200px;
  height:200px;
  position:absolute;
  left:50%;
  top:50%;
  background-image:url(https://icons8.com/preloaders/preloaders/1473/Winter.gif);
  background-repeat:no-repeat;
  background-position:center;
  margin:-100px 0 0 -100px;
}
```
### HTML
```
<!-- NexLoader -->
<div id="nexloader">
<div id="nex-icon">&nbsp;</div>
</div>
```
### Javascript
```
//<![CDATA[
  $(window).on('load', function() {
    $('#nex-icon').delay(3500).fadeOut();
    $('#nexloader').delay(3500).fadeOut('slow');
    $('body').delay(3500).css({'overflow':'visible'});
 })
//]]>
```
## Customization
You can Customize NexLoader according to your need to match your websites theme in the following ways.
### Logo
To Customize the logo of NexLoader, just change the background image's url with that of yours like in the below example.
```
...
#nex-icon {
..
  background-image:url(https://icons8.com/preloaders/preloaders/1484/Circles-menu-3.gif); 
..
}
...
```
All the images(& logos) used in NexLoader are neither created by me nor owned by me, they are taken from [Preloaders.net(Icons8)](https://icons8.com/preloaders/).
### Background Color
To change the the background color of NexLoader just change the #fff in ```background-color:#fff;``` with the hex code of the color you want.
### NexLoader FadeOut Time
To change the fade out time of NexLoader just change ```3500``` in the javascript.
**Remember the time is in miliseconds, i.e. 1000 = 1 sec**
