# NexLoader
![NexLoader Logo](https://1.bp.blogspot.com/-NvasQIQoQJo/YOaVyl7lmNI/AAAAAAAAAM0/nRY_oQp3X3MmcazdxQK5XB3bLvNpxB3vQCLcBGAsYHQ/s623/coollogo_com-6575533.png)
A Lightweight & attractive Preloader to make your website even more cool.

# Usage
To add NexLoader to Your Website, all you need to do is to add the below code to you site.

You can Customize this code according to you need.
Note: Jquery is necessary to use NexLoader on your website.
```
<style>
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
  background-color:#fff; /* change if the mask should have another color then white */
  z-index:99; /* makes sure it stays on top */
}
#nex-icon {
  width:200px;
  height:200px;
  position:absolute;
  left:50%; /* centers the loading animation horizontally one the screen */
  top:50%; /* centers the loading animation vertically one the screen */
  background-image:url(https://icons8.com/preloaders/preloaders/1473/Winter.gif); /* path to your loading animation */
  background-repeat:no-repeat;
  background-position:center;
  margin:-100px 0 0 -100px; /* is width and height divided by two */
}
</style>
<!-- NexLoader -->
<div id="nexloader">
<div id="nex-icon">&nbsp;</div>
</div>
<script type="text/javascript">
//<![CDATA[
  $(window).on('load', function() { // makes sure the whole site is loaded 
    $('#nex-icon').delay(3500).fadeOut(); // will first fade out the loading animation 
    $('#nexloader').delay(3500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(3500).css({'overflow':'visible'});
 })
//]]>
</script>
```
## Separately
### CSS
```

```
### Customisation

All the images used in NexLoader are neither created by me nor owned by me, they are taken from [Preloaders.net(Icons8)](https://icons8.com/preloaders/).

