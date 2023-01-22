(function(){"use strict";var a={7149:function(a,t,e){var r=e(144),i=e(1096),o=e(3250),n=e(1828),s=e(5057),c=e(2469),l=e(3551),u=e(5234),d=function(){var a=this,t=a._self._c;return t(i.Z,[t(o.Z,{attrs:{app:"",color:"primary",dark:""}},[t("div",{staticClass:"d-flex align-center"},[t(c.Z,{staticClass:"shrink mr-2",attrs:{alt:"UFPA Logo",contain:"",src:e(5380),transition:"scale-transition",width:"40"}})],1),t(u.Z),t(n.Z,{attrs:{href:"https://ppgeaa.propesp.ufpa.br/index.php/br/",target:"_blank",text:""}},[t("span",{staticClass:"mr-2"},[a._v("PPGEAA - UFPA")]),t(s.Z,[a._v("mdi-open-in-new")])],1)],1),t(l.Z,[t("router-view")],1)],1)},m=[],f={name:"AppApp",data:()=>({})},g=f,p=e(1001),v=(0,p.Z)(g,d,m,!1,null,null,null),h=v.exports,b=e(8345),_=function(){var a=this,t=a._self._c;return t("pagina-principal")},Z=[],x=e(4437),y=e(6035),k=e(5294),w=function(){var a=this,t=a._self._c;return t(y.Z,[t(k.Z,{staticClass:"text-center"},[t(x.Z,{staticClass:"mb-4"},[t("h2",{staticClass:"display-2 font-weight-bold mb-3"},[a._v(" IWIM "),t(s.Z,{attrs:{"x-large":""}},[a._v("mdi-beta")])],1),t("p",{staticClass:"subheading font-weight-regular"},[a._v(" Interface Web para Identificação de Melanoma (beta) ")])]),t(x.Z,{attrs:{cols:"12"}},[t(c.Z,{staticClass:"mx-auto",attrs:{src:e(9322),contain:"",width:"200"}})],1),t(x.Z,{attrs:{cols:"12"}},[t(n.Z,{attrs:{block:"",elevation:"2",color:"primary"},on:{click:a.abrirJanelaVerificacao}},[a._v("VERIFICAR UMA IMAGEM")])],1),t(x.Z,{attrs:{cols:"12"}},[t(n.Z,{attrs:{block:"",elevation:"2",color:"primary"},on:{click:a.abrirJanelaSubimissao}},[a._v("SUBMETER UMA IMAGEM")])],1)],1),t("JanelaVerificacao",{ref:"JanelaVerificacao",on:{exibirResultados:a.abrirJanelaResultados}}),t("JanelaSubimissao",{ref:"JanelaSubimissao"}),t("JanelaResultados",{ref:"JanelaResultados"})],1)},C=[],P=e(4635),J=e(3058),I=e(5223),M=e(5452),E=e(271),j=function(){var a=this,t=a._self._c;return t("form",{ref:"formulario"},[t(k.Z,{attrs:{justify:"center"}},[t(M.Z,{attrs:{persistent:"","max-width":"450",transition:"dialog-top-transition"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[t(J.Z,{attrs:{loading:a.carregando}},[t(I.EB,{staticClass:"text-h5"},[a._v(" Verificar uma Imagem ")]),t(I.ZB,[t(k.Z,[t(x.Z,{attrs:{cols:"12"}},[t(c.Z,{staticClass:"mx-auto",attrs:{src:e(6939),contain:"",width:"200"}})],1)],1),t("strong",[a._v("Instruções:")]),a._l(a.instrucoes,(function(e){return t("li",{key:e.instrucao},[a._v(" "+a._s(e.instrucao)+" ")])})),t(k.Z,[t(x.Z,[a.carregando?t(P.Z,{attrs:{type:"info"}},[a._v("Por favor, aguarde...")]):a._e(),t(E.Z,{attrs:{accept:"image/*",label:"Lesão",required:"",disabled:a.carregando,rules:[a.regras.required]},model:{value:a.imagem,callback:function(t){a.imagem=t},expression:"imagem"}})],1)],1)],2),t(I.h7,[t(u.Z),t(n.Z,{attrs:{color:"green darken-1",text:"",loading:a.carregando},on:{click:a.fechar}},[a._v(" Cancelar ")]),t(n.Z,{attrs:{color:"green darken-1",text:"",loading:a.carregando},on:{click:function(t){return a.enviar()}}},[a._v(" Enviar ")])],1)],1)],1)],1)],1)},O=[],R=e(8945);const S=R.Z.create({withCredentials:!0,baseURL:"http://localhost:8080/api"});var A=S,T={name:"JanelaVerificacao",data(){return{dialog:!1,imagem:[],carregando:!1,regras:{required:a=>!!a||"Obrigatório."},instrucoes:[{instrucao:"   Permita a abertura da câmera"},{instrucao:"   Enquadre a lesão no centro da imagem"},{instrucao:"   Mantenha a lesão totalmente visível, sem cortes"},{instrucao:"   Mantena a imagem focada"},{instrucao:"   Se preferir, selecione uma imagem da galeria."}]}},methods:{enviar(){this.carregando=!0;let a=new FormData;a.append("imagem",this.imagem),A.post("verificar-img",a,{timeout:12e4}).then((a=>{this.dialog=!1,this.$emit("exibirResultados",a.data)})).catch((a=>{console.log(a)})).finally((()=>{this.carregando=!1}))},fechar(){this.imagem=[],this.dialog=!1}}},q=T,V=(0,p.Z)(q,j,O,!1,null,null,null),B=V.exports,L=e(1047),F=function(){var a=this,t=a._self._c;return t("form",{ref:"formulario"},[t(k.Z,{attrs:{justify:"center"}},[t(M.Z,{attrs:{persistent:"","max-width":"450",transition:"dialog-bottom-transition"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[t(J.Z,{attrs:{loading:a.carregando}},[t(I.EB,{staticClass:"text-h5"},[a._v(" Submeter uma Imagem ")]),t(I.ZB,[t(k.Z,[t(x.Z,{attrs:{cols:"12"}},[t(c.Z,{staticClass:"mx-auto",attrs:{src:e(4405),contain:"",width:"200"}})],1)],1),t("strong",[a._v("Instruções:")]),a._l(a.instrucoes,(function(e){return t("li",{key:e.instrucao},[a._v(" "+a._s(e.instrucao)+" ")])})),t(k.Z,[t(x.Z,[t(E.Z,{attrs:{accept:"image/*",label:"Lesão",required:"",disabled:a.carregando,rules:[a.regras.required]},model:{value:a.imagem,callback:function(t){a.imagem=t},expression:"imagem"}})],1)],1),t(k.Z,[t(x.Z,[t(L.Z,{attrs:{items:a.classificacoes,dense:"","prepend-icon":"mdi-import",label:"Classificação",required:"",disabled:a.carregando,rules:[a.regras.required]},model:{value:a.classificacao,callback:function(t){a.classificacao=t},expression:"classificacao"}})],1)],1)],2),t(I.h7,[t(u.Z),t(n.Z,{attrs:{color:"green darken-1",text:"",loading:a.carregando},on:{click:function(t){a.dialog=!1}}},[a._v(" Cancelar ")]),t(n.Z,{attrs:{color:"green darken-1",text:"",loading:a.carregando},on:{click:function(t){return a.enviar()}}},[a._v(" Enviar ")])],1)],1)],1)],1)],1)},N=[],U={name:"JanelaSubimissao",data(){return{dialog:!1,imagem:[],classificacao:"",carregando:!1,regras:{required:a=>!!a||"Obrigatório."},classificacoes:[{value:1,text:"BENIGNO"},{value:2,text:"MALIGNO"}],instrucoes:[{instrucao:"   Permita a abertura da câmera"},{instrucao:"   Enquadre a lesão no centro da imagem"},{instrucao:"   Mantenha a lesão totalmente visível, sem cortes"},{instrucao:"   Mantena a imagem focada"},{instrucao:"   Se preferir, selecione uma imagem da galeria."}]}},methods:{enviar(){console.log(!this.$refs.formulario),console.log("Clicou em enviar"),this.carregando=!0,setTimeout(this.funcaoDeTempo,3e3)},funcaoDeTempo(){this.carregando=!1,console.log("Já se passaram 3 segundos")}}},$=U,G=(0,p.Z)($,F,N,!1,null,null,null),W=G.exports,D=function(){var a=this,t=a._self._c;return t("form",{ref:"formulario"},[t(k.Z,{attrs:{justify:"center"}},[t(M.Z,{attrs:{persistent:"","max-width":"450"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[t(J.Z,{attrs:{loading:a.carregando}},[t(I.EB,{staticClass:"text-h5"},[a._v(" Resultados ")]),t(I.ZB,[t(k.Z,[t(x.Z,{attrs:{cols:"12"}},[t("h3",[a._v("Lesão Identificada")]),t(c.Z,{staticClass:"mx-auto",attrs:{src:a.resultados.imagem_mascarada,contain:"",width:"250"}}),t("p",{staticClass:"text-justify"},[a._v(" "+a._s(a.resultados.texto_bordas)+" ")])],1)],1),t(k.Z,[t(x.Z,{attrs:{cols:"12"}},[t("h3",[a._v("Medidas")]),t(c.Z,{staticClass:"mx-auto",attrs:{src:a.resultados.imagem_medidas,contain:"",width:"250"}}),t("p",{staticClass:"text-justify"},[a._v(" "+a._s(a.resultados.texto_assimetria)+" ")])],1)],1),t(k.Z,[t(x.Z,{attrs:{cols:"12"}},[t("h3",[a._v("Resultado Final")]),t(c.Z,{staticClass:"mx-auto",attrs:{src:a.resultados.imagem_resultado,contain:"",width:"250"}}),t("p",{staticClass:"text-justify"},[a._v(" "+a._s(a.resultados.texto_cores)+" ")])],1)],1),t(k.Z,[t(x.Z,{attrs:{cols:"12"}},[t("h3",[a._v("Diagnóstico")]),t("p",{staticClass:"text-justify"},[a._v(" "+a._s(a.resultados.texto_diagnóstico)+" ")])])],1)],1),t(I.h7,[t(u.Z),t(n.Z,{attrs:{color:"green darken-1",text:"",loading:a.carregando},on:{click:a.fechar}},[a._v(" Sair ")])],1)],1)],1)],1)],1)},H=[],z={name:"JanelaResultados",data(){return{dialog:!1,carregando:!1,resultados:{classificacao:"",imagem_mascarada:"",imagem_medidas:"",imagem_resultado:"",texto_assimetria:"",texto_bordas:"",texto_cores:"","texto_diagnóstico":""}}},methods:{mostrarResultados(a){this.dialog=!0,this.resultados=a},fechar(){this.resultados={classificacao:"",imagem_mascarada:"",imagem_medidas:"",imagem_resultado:"",texto_assimetria:"",texto_bordas:"",texto_cores:"","texto_diagnóstico":""},this.dialog=!1}}},K=z,Q=(0,p.Z)(K,D,H,!1,null,null,null),X=Q.exports,Y={name:"PaginaPrincipal",components:{JanelaVerificacao:B,JanelaSubimissao:W,JanelaResultados:X},data:()=>({resultados:{}}),methods:{abrirJanelaVerificacao(){this.$refs.JanelaVerificacao.dialog=!0},abrirJanelaSubimissao(){this.$refs.JanelaSubimissao.dialog=!0},abrirJanelaResultados(a){this.resultados=a,this.$refs.JanelaResultados.mostrarResultados(this.resultados)}}},aa=Y,ta=(0,p.Z)(aa,w,C,!1,null,null,null),ea=ta.exports,ra={name:"HomeView",components:{PaginaPrincipal:ea}},ia=ra,oa=(0,p.Z)(ia,_,Z,!1,null,null,null),na=oa.exports;r.ZP.use(b.ZP);const sa=[{path:"/",name:"home",component:na},{path:"/about",name:"about",component:()=>e.e(443).then(e.bind(e,7750))}],ca=new b.ZP({mode:"history",base:"/",routes:sa});var la=ca,ua=e(2250);r.ZP.use(ua.Z);var da=new ua.Z({});r.ZP.config.productionTip=!1,new r.ZP({router:la,vuetify:da,render:a=>a(h)}).$mount("#app")},4405:function(a,t,e){a.exports=e.p+"img/IWIM_aprendendo.16755c3f.png"},9322:function(a,t,e){a.exports=e.p+"img/IWIM_coracao.ba6a9885.png"},6939:function(a,t,e){a.exports=e.p+"img/IWIM_lupa.8aff4eef.png"},5380:function(a,t,e){a.exports=e.p+"img/brasao_ufpa.fd8c6c77.png"}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return a[r](o,o.exports,e),o.exports}e.m=a,function(){var a=[];e.O=function(t,r,i,o){if(!r){var n=1/0;for(u=0;u<a.length;u++){r=a[u][0],i=a[u][1],o=a[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||n>=o)&&Object.keys(e.O).every((function(a){return e.O[a](r[c])}))?r.splice(c--,1):(s=!1,o<n&&(n=o));if(s){a.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=a.length;u>0&&a[u-1][2]>o;u--)a[u]=a[u-1];a[u]=[r,i,o]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var r in t)e.o(t,r)&&!e.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:t[r]})}}(),function(){e.f={},e.e=function(a){return Promise.all(Object.keys(e.f).reduce((function(t,r){return e.f[r](a,t),t}),[]))}}(),function(){e.u=function(a){return"js/about.e9a88b46.js"}}(),function(){e.miniCssF=function(a){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){var a={},t="mestrado-vuetify:";e.l=function(r,i,o,n){if(a[r])a[r].push(i);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,e.nc&&s.setAttribute("nonce",e.nc),s.setAttribute("data-webpack",t+o),s.src=r),a[r]=[i];var m=function(t,e){s.onerror=s.onload=null,clearTimeout(f);var i=a[r];if(delete a[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(a){return a(e)})),t)return t(e)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var a={143:0};e.f.j=function(t,r){var i=e.o(a,t)?a[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(e,r){i=a[t]=[e,r]}));r.push(i[2]=o);var n=e.p+e.u(t),s=new Error,c=function(r){if(e.o(a,t)&&(i=a[t],0!==i&&(a[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",s.name="ChunkLoadError",s.type=o,s.request=n,i[1](s)}};e.l(n,c,"chunk-"+t,t)}},e.O.j=function(t){return 0===a[t]};var t=function(t,r){var i,o,n=r[0],s=r[1],c=r[2],l=0;if(n.some((function(t){return 0!==a[t]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(c)var u=c(e)}for(t&&t(r);l<n.length;l++)o=n[l],e.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return e.O(u)},r=self["webpackChunkmestrado_vuetify"]=self["webpackChunkmestrado_vuetify"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(7149)}));r=e.O(r)})();
//# sourceMappingURL=app.e721f705.js.map