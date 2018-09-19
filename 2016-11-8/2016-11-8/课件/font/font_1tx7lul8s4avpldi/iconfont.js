;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-shouye" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M882.648668 457.769888c-17.254989 0-31.235398 13.985526-31.235398 31.235398 0 109.47125-52.130288 207.711715-146.761552 276.624225L530.204617 892.537899c-10.320043 7.544837-25.581632 7.798617-36.665061-0.193405L319.182506 765.633604c-94.641497-68.916603-146.771785-167.158091-146.771785-276.628318 0-17.249873-13.980409-31.235398-31.235398-31.235398s-31.235398 13.985526-31.235398 31.235398c0 129.969097 61.251016 246.146073 172.495656 327.146898L456.905194 942.949033c16.258289 11.722996 35.282574 17.916045 55.007825 17.916045 20.081361 0 39.166021-6.192026 55.109132-17.86488l174.386726-126.863363c111.225197-80.986499 172.47519-197.162452 172.47519-327.131549C913.884067 471.755414 899.903657 457.769888 882.648668 457.769888z"  ></path>'+
      ''+
      '<path d="M850.193489 178.228217 547.733852 71.131037c-0.345877-0.121773-0.701988-0.243547-1.057075-0.356111-22.450315-7.04137-47.168276-7.04137-69.659523 0-0.356111 0.116657-0.712221 0.234337-1.067308 0.361227l-301.392328 106.782002c-38.647205 12.339026-64.615647 47.783283-64.615647 88.199785l0 119.556956c0 17.249873 13.980409 31.235398 31.235398 31.235398s31.235398-13.985526 31.235398-31.235398L172.412768 266.11794c0-13.121855 8.500605-24.651446 22.073738-29.003568l301.727972-106.883309c10.116405-3.070942 21.169135-3.070942 31.266098 0l302.795281 107.198487c12.638855 4.036943 21.138436 15.566534 21.138436 28.688389l0 119.556956c0 17.249873 13.980409 31.235398 31.235398 31.235398s31.235398-13.985526 31.235398-31.235398L913.88509 266.11794C913.884067 225.701438 887.915625 190.256158 850.193489 178.228217z"  ></path>'+
      ''+
      '<path d="M400.427902 228.710982c-17.254989 0-31.235398 13.985526-31.235398 31.235398l0 30.473035c0 17.249873 13.980409 31.235398 31.235398 31.235398 17.254989 0 31.235398-13.985526 31.235398-31.235398l0-30.473035C431.6633 242.696508 417.682891 228.710982 400.427902 228.710982z"  ></path>'+
      ''+
      '<path d="M623.397113 228.710982c-17.254989 0-31.235398 13.985526-31.235398 31.235398l0 30.473035c0 17.249873 13.980409 31.235398 31.235398 31.235398s31.235398-13.985526 31.235398-31.235398l0-30.473035C654.632511 242.696508 640.651079 228.710982 623.397113 228.710982z"  ></path>'+
      ''+
      '<path d="M545.781384 378.919029c-0.132006 0.198521-13.615089 19.766183-34.183544 19.766183-19.990287 0-32.434713-18.11866-33.268708-19.374256-9.191336-14.422478-28.296463-18.815531-42.836621-9.761318-14.651698 9.105379-19.156292 28.368094-10.045797 43.019793 11.215436 18.042935 41.97295 48.586578 86.151126 48.586578 43.965328 0 75.108628-30.315446 86.588077-48.225351 9.222035-14.392802 5.042853-33.355689-9.242502-42.75578C574.668295 360.749204 555.369763 364.760564 545.781384 378.919029z"  ></path>'+
      ''+
      '<path d="M397.382543 675.761738l83.294055 0 0 83.294055c0 17.249873 13.980409 31.235398 31.235398 31.235398 17.254989 0 31.235398-13.985526 31.235398-31.235398l0-83.294055 83.294055 0c17.254989 0 31.235398-13.985526 31.235398-31.235398 0-17.249873-13.980409-31.235398-31.235398-31.235398l-83.294055 0 0-83.294055c0-17.249873-13.980409-31.235398-31.235398-31.235398-17.254989 0-31.235398 13.985526-31.235398 31.235398l0 83.294055-83.294055 0c-17.254989 0-31.235398 13.985526-31.235398 31.235398C366.147144 661.775188 380.128577 675.761738 397.382543 675.761738z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
