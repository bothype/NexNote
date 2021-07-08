//Getting Current script parameter
let nl_pr = new URL(document.currentScript.src);
nl_pr = nl_pr.searchParams;
console.log(nl_pr.get('id'));
//Time Control
let nl_t = 2000;
if(nl_pr.get('t')){
  nl_t = nl_pr.get('t') * 1000;
} else {
  nl_t = 2000;
}
if(nl_pr.get('full')){
  document.querySelector('.nexloader img').width = "100%";
}
let nl_bg = "#fff";
if(nl_pr.get('bg')){
  nl_bg = nl_pr.get('bg');
}
document.body.insertAdjacentHTML('afterbegin',`
  <div class="nexloader">
  <img src="https://icons8.com/preloaders/preloaders/1473/Winter.gif" alt="NexLoader Loading...">
  </div>
  <style>
.nexloader {
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%);
      display: block;
      position: fixed;
      background: #fff;
      z-index: 1920;
      width: 100%;
      height: 100%;
      pointer-events: none;
}
.nexloader:hover{
  opacity: .7;
}
.nexloader img {
      position: absolute;
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%);
}
</style>
`);
document.onload =  setTimeout(function(){
    document.querySelector('.nexloader').style.display = "none";
  }
  ,nl_t)
