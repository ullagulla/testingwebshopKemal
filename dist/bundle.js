!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./public",r(r.s=1)}([function(e,t){e.exports=require("mongoose")},function(e,t,r){r(2),e.exports=r(7)},function(e,t,r){const n=r(0),{app:o,port:i}=r(3),s=process.env.MONGO_ATLAS_URL;n.connect(s,{useUnifiedTopology:!0,useNewUrlParser:!0}).then(()=>{o.listen(i,()=>console.log(`App listening on port ${i}!`))}),e.exports={app:o,port:i}},function(e,t,r){const n=r(4),o=r(5),i=n(),s=r(6),u="/",c="/product",p="/gallery",d="/add-product",l="gallery",a="product",f="main";i.use(o({src:"sass",dest:"public",outputStyle:"compressed"})),i.use(n.static("public")),i.use(n.urlencoded({extended:!0})),i.set("view engine","ejs"),i.get(p,async(e,t)=>{const r=await s.find();t.status(200).render(l,{productList:r})}),i.get(c,(e,t)=>{t.status(200).render(a,{})}),i.post(d,(e,t)=>{new s({name:e.body.name,price:e.body.price,description:e.body.description,imgUrl:e.body.imgUrl}).save(),t.status(200).redirect(p)}),i.get(u,(e,t)=>{t.status(200).render(f,{})}),e.exports={app:i,port:8080,express:n}},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("node-sass-middleware")},function(e,t,r){const n=r(0),o=new n.Schema({name:String,price:Number,description:String,imgUrl:String}),i=n.model("product",o);e.exports=i},function(e,t){}]);