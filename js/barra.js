(function(){var e='<div id="wrapper-barra-brasil"><div class="brasil-flag"><a href="http://brasil.gov.br" class="link-barra">Brasil</a></div><span class="acesso-info"><a href="http://brasil.gov.br/barra#acesso-informacao" class="link-barra">Acesso &agrave; informa&ccedil;&atilde;o</a></span><ul class="list"><li class="list-item first"><a href="http://brasil.gov.br/barra#participe" class="link-barra">Participe</a></li><li class="list-item"><a href="http://www.servicos.gov.br/" class="link-barra">Servi&ccedil;os</a></li><li class="list-item"><a href="http://www.planalto.gov.br/legislacao" class="link-barra">Legisla&ccedil;&atilde;o</a></li><li class="list-item last last-item"><a href="http://brasil.gov.br/barra#orgaos-atuacao-canais" class="link-barra">Canais</a></li></ul></div>',t,n,r,i,s,o,u;n=document.getElementById("barra-brasil"),n.parentNode.removeChild(n),r=document.getElementsByTagName("head")[0],t=document.getElementsByTagName("body")[0],o=document.createElement("link"),i=document.createAttribute("href"),u=document.createElement("div"),s=document.createAttribute("id"),s.nodeValue="barra-brasil",u.setAttributeNode(s),u.innerHTML=e,t.insertBefore(u,t.childNodes[0]),window._barrabrasil={insere_css:function(e){var t,n,i,s;return i=document.createElement("style"),s=document.createAttribute("type"),s.nodeValue="text/css",n=document.createAttribute("media"),n.nodeValue="all",t=document.createTextNode(e),i.setAttributeNode(s),i.setAttributeNode(n),i.appendChild(t),r.appendChild(i)}};var r,a,f,l;r=document.getElementsByTagName("head")[0],a=document.createElement("script"),l=document.createAttribute("type"),l.nodeValue="text/javascript",f=document.createAttribute("src"),f.nodeValue="http://coletajavascript.serpro.gov.br/estatistica.js",a.setAttributeNode(l),a.setAttributeNode(f),r.appendChild(a)})(),window._barrabrasil.insere_css('#barra-brasil div,#barra-brasil a,#barra-brasil ul,#barra-brasil li{margin:0;padding:0;border:0;font-size:100%;font-family:inherit;vertical-align:baseline}#barra-brasil ul{list-style:none}@font-face{font-family:"Open Sans";font-style:normal;font-weight:700;src:local("Open Sans Bold"),local("OpenSans-Bold"),url("/static/opensans-bold.woff") format("woff")}#barra-brasil{height:32px;background:#f1f1f1;font-weight:bold;font-size:12px;line-height:32px;font-family:"Open Sans",Arial,Helvetica,sans-serif}#barra-brasil a{text-decoration:none}div#wrapper-barra-brasil{position:relative;overflow:hidden;margin:0 auto;width:100%;max-width:960px}#barra-brasil .brasil-flag{float:left;padding:7px 0 6px;width:115px;height:19px;border-right:2px solid #dfdfdf}#barra-brasil .brasil-flag .link-barra{display:block;padding-left:42px;width:43px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAATCAIAAAABJ4pRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABINJREFUeNqUVFtsFFUYPrfdmdnLbLe021baQqWUtdJKL5QiASPiNVqC0TYqUWLShJQmRH3RqPHFRKJvQqIPQNSAAcMDptGEiKjYpLZIkSqGXqjdFlppd3vb7c7Ozpxz/M+2wZD44snszOzJnP//vv///g9XnNiXtNISI1gYq4eUEu4CC7SyiLpJgtSOIJKg/1ySB3x+NmsvJLNpgVUwlAu08iIkzi2pUhHIAa/q1L9p7l6YWmmHEOSBWJD6LixwJ7DDAKR06c6imQOVYxoRyEV4BR3JBYfvqNqBtILrSGNEKgoCsVxWDMmxgAOADeDjQsP+oHbo1egk7B+Mju/vq7kwVYhohsAxoiogiIM5hBaSUIBFfS21WRcOSwUHOwgTqoJR+O0pv31u56XmUKrvt4o/RyNrjVRHw40iLdU9Hck4DPBQxOQKK/XQqQa7nGNb8UICSUoE4y4rCyweqh164b7Jk12N737x2NjtfMAeCDit268e7jj7yOqfX++p+ebvQk5coAB8BQIMroqaf7xt3p4TUATgxj0Y0wOVN96uHomE3I+Ob37zSJvUHURshjySIZ4JPLhp+IcPj3h1eSZ2zxu/R8cXDeThuSLJkGZSY/fGjGOrenG9xlz8vPnK/g0xEwprl52PH9ryUGRLk1lfXWqGCcE0lUqOjxeHVy01141V+5Mvlk+lOLmcAOwC6OpMo8FnqlOCh2j2taqRE1sHKk2LuFJq6NveumNd9f0Dt2IjC1aGVKwzdz1cUryaxSasW9Oo/dFfoaEB6jxdOl2Xt3BtwYw7Xh/VmQNNcNHj5fH3N40CQgnNAAUQMjgh+y/dpIblN9j14fHuHqEFvPUP5L3Svp4mHNtGmgbaVF1oWZNIi8GXextALUpEhLqnJ0o3f9fcEw9iD3RFCaUiMmvmG/lhI50VBQX6ujX5ju3+dHHm1Mmb9dGsxyRKSwylHNLRt2HvL42O4C5IhsLsgEII74+Hd1zY+s5AdMklguMnmkaLwn9RGgr7dSfLk5ZreGhJUdD0+oz0ZxSOMNQ1VdB4fscnw5VCiOUBpb7d91vcklBJJpDwXpwOn50qKdXs2tLZpoqJU99XxVPBbMayXRnOK/Dp5p5tZzpbu0cT+sErG9/6o2rW9iLKQbOget2jQbgay3UIJrlhlJSK6Yz3dKx4dD74Ut3Ivu2X5xe8CSvopdm1kdh7e7/sfO7Ho4PlrT0NvTMhTISaaRhUoImITr244Njz8WwSVKOMhBI1hdIBMQuXlARShxuvPbt+3k0gx9GMsDVp0c7emq8nSiSFjzkVlCuKfHl+Q0aQai21Gb4E7SA59wDWGLLBg+Kk6/lqrKw/4dtWOLfKn/74+r2t3fVX5/IwcyExIBAKFFWOhskyWVx4tG3GmUfKCFRbOHYBNjiC6hBkBTrQRl+mSLeHZkOYOXeMRxIFCb6SME5gYJiGvH7MPn0q5wBCgqkgF4xBEVfdhksTyMmNpFT/chJQJQbkgitE8o73gRe4HsRYe/RJy86IFYtU1pVzSqxC/J8F5fMz/z8CDAAkCSSg0qSX5AAAAABJRU5ErkJggg==") 8px center no-repeat;text-transform:uppercase;line-height:19px}#barra-brasil .acesso-info{position:absolute;left:130px}#barra-brasil .list{position:absolute;top:0;right:0}#barra-brasil .list .first{border-left:2px solid #dfdfdf}#barra-brasil .list-item{display:inline-block;padding:0 15px 0 13px;height:32px;border-right:2px solid #dfdfdf}#barra-brasil .link-barra{color:#606060}@media screen and (max-width: 668px){#barra-brasil .list{top:-100px}}@media screen and (min-width: 960px){#wrapper-barra-brasil{width:960px}}');