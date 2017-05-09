# Sacar.JS
Sacar ("to take" or "to get" in Spanish) lets you load Javascript resources asynchronously from remote URLs. Advantages of Sacar:

 * It's **tiny** - barely over .25 *kilo*bytes gzipped and minified
 * It's **asynchronous** - load heavier resources without slowing down pageload
 * It's **versatile** - works on all major browsers, including older versions of Internet Explorer (bleck!)
 
 ## Usage
 
 Sacar provides only one function, `sacar(url, callback)`. Consider this straightforward example, where we load a popular library off a CDN:
 
 ```js
 sacar("https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.js", function(){
  console.log(marked("Hello *world*!"))
})
 ```
