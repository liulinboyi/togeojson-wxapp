!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).bundle={})}(this,(function(e){"use strict";var t,n=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},r=(n(t={lt:"<",gt:">",amp:"&",quot:'"',apos:"'",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",auml:"ä",Aring:"Å",aring:"å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",ouml:"ö",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã"},"auml","ä"),n(t,"aring","å"),n(t,"aelig","æ"),n(t,"ccedil","ç"),n(t,"egrave","è"),n(t,"eacute","é"),n(t,"ecirc","ê"),n(t,"euml","ë"),n(t,"igrave","ì"),n(t,"iacute","í"),n(t,"icirc","î"),n(t,"iuml","ï"),n(t,"eth","ð"),n(t,"ntilde","ñ"),n(t,"ograve","ò"),n(t,"oacute","ó"),n(t,"ocirc","ô"),n(t,"otilde","õ"),n(t,"ouml","ö"),n(t,"oslash","ø"),n(t,"ugrave","ù"),n(t,"uacute","ú"),n(t,"ucirc","û"),n(t,"uuml","ü"),n(t,"yacute","ý"),n(t,"thorn","þ"),n(t,"yuml","ÿ"),n(t,"nbsp"," "),n(t,"iexcl","¡"),n(t,"cent","¢"),n(t,"pound","£"),n(t,"curren","¤"),n(t,"yen","¥"),n(t,"brvbar","¦"),n(t,"sect","§"),n(t,"uml","¨"),n(t,"copy","©"),n(t,"ordf","ª"),n(t,"laquo","«"),n(t,"not","¬"),n(t,"shy","­­"),n(t,"reg","®"),n(t,"macr","¯"),n(t,"deg","°"),n(t,"plusmn","±"),n(t,"sup2","²"),n(t,"sup3","³"),n(t,"acute","´"),n(t,"micro","µ"),n(t,"para","¶"),n(t,"middot","·"),n(t,"cedil","¸"),n(t,"sup1","¹"),n(t,"ordm","º"),n(t,"raquo","»"),n(t,"frac14","¼"),n(t,"frac12","½"),n(t,"frac34","¾"),n(t,"iquest","¿"),n(t,"times","×"),n(t,"divide","÷"),n(t,"forall","∀"),n(t,"part","∂"),n(t,"exist","∃"),n(t,"empty","∅"),n(t,"nabla","∇"),n(t,"isin","∈"),n(t,"notin","∉"),n(t,"ni","∋"),n(t,"prod","∏"),n(t,"sum","∑"),n(t,"minus","−"),n(t,"lowast","∗"),n(t,"radic","√"),n(t,"prop","∝"),n(t,"infin","∞"),n(t,"ang","∠"),n(t,"and","∧"),n(t,"or","∨"),n(t,"cap","∩"),n(t,"cup","∪"),n(t,"int","∫"),n(t,"there4","∴"),n(t,"sim","∼"),n(t,"cong","≅"),n(t,"asymp","≈"),n(t,"ne","≠"),n(t,"equiv","≡"),n(t,"le","≤"),n(t,"ge","≥"),n(t,"sub","⊂"),n(t,"sup","⊃"),n(t,"nsub","⊄"),n(t,"sube","⊆"),n(t,"supe","⊇"),n(t,"oplus","⊕"),n(t,"otimes","⊗"),n(t,"perp","⊥"),n(t,"sdot","⋅"),n(t,"Alpha","Α"),n(t,"Beta","Β"),n(t,"Gamma","Γ"),n(t,"Delta","Δ"),n(t,"Epsilon","Ε"),n(t,"Zeta","Ζ"),n(t,"Eta","Η"),n(t,"Theta","Θ"),n(t,"Iota","Ι"),n(t,"Kappa","Κ"),n(t,"Lambda","Λ"),n(t,"Mu","Μ"),n(t,"Nu","Ν"),n(t,"Xi","Ξ"),n(t,"Omicron","Ο"),n(t,"Pi","Π"),n(t,"Rho","Ρ"),n(t,"Sigma","Σ"),n(t,"Tau","Τ"),n(t,"Upsilon","Υ"),n(t,"Phi","Φ"),n(t,"Chi","Χ"),n(t,"Psi","Ψ"),n(t,"Omega","Ω"),n(t,"alpha","α"),n(t,"beta","β"),n(t,"gamma","γ"),n(t,"delta","δ"),n(t,"epsilon","ε"),n(t,"zeta","ζ"),n(t,"eta","η"),n(t,"theta","θ"),n(t,"iota","ι"),n(t,"kappa","κ"),n(t,"lambda","λ"),n(t,"mu","μ"),n(t,"nu","ν"),n(t,"xi","ξ"),n(t,"omicron","ο"),n(t,"pi","π"),n(t,"rho","ρ"),n(t,"sigmaf","ς"),n(t,"sigma","σ"),n(t,"tau","τ"),n(t,"upsilon","υ"),n(t,"phi","φ"),n(t,"chi","χ"),n(t,"psi","ψ"),n(t,"omega","ω"),n(t,"thetasym","ϑ"),n(t,"upsih","ϒ"),n(t,"piv","ϖ"),n(t,"OElig","Œ"),n(t,"oelig","œ"),n(t,"Scaron","Š"),n(t,"scaron","š"),n(t,"Yuml","Ÿ"),n(t,"fnof","ƒ"),n(t,"circ","ˆ"),n(t,"tilde","˜"),n(t,"ensp"," "),n(t,"emsp"," "),n(t,"thinsp"," "),n(t,"zwnj","‌"),n(t,"zwj","‍"),n(t,"lrm","‎"),n(t,"rlm","‏"),n(t,"ndash","–"),n(t,"mdash","—"),n(t,"lsquo","‘"),n(t,"rsquo","’"),n(t,"sbquo","‚"),n(t,"ldquo","“"),n(t,"rdquo","”"),n(t,"bdquo","„"),n(t,"dagger","†"),n(t,"Dagger","‡"),n(t,"bull","•"),n(t,"hellip","…"),n(t,"permil","‰"),n(t,"prime","′"),n(t,"Prime","″"),n(t,"lsaquo","‹"),n(t,"rsaquo","›"),n(t,"oline","‾"),n(t,"euro","€"),n(t,"trade","™"),n(t,"larr","←"),n(t,"uarr","↑"),n(t,"rarr","→"),n(t,"darr","↓"),n(t,"harr","↔"),n(t,"crarr","↵"),n(t,"lceil","⌈"),n(t,"rceil","⌉"),n(t,"lfloor","⌊"),n(t,"rfloor","⌋"),n(t,"loz","◊"),n(t,"spades","♠"),n(t,"clubs","♣"),n(t,"hearts","♥"),n(t,"diams","♦"),t),i=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,o=new RegExp("[\\-\\.0-9"+i.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),a=new RegExp("^"+i.source+o.source+"*(?::"+i.source+o.source+"*)?$");function s(){}function l(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}function u(e,t,n,r,i,o){for(var a,s=++t,l=0;;){var u=e.charAt(s);switch(u){case"=":if(1===l)a=e.slice(t,s),l=3;else{if(2!==l)throw new Error("attribute equal must after attrName");l=3}break;case"'":case'"':if(3===l||1===l){if(1===l&&(o.warning('attribute value must after "="'),a=e.slice(t,s)),t=s+1,!((s=e.indexOf(u,t))>0))throw new Error("attribute value no end '"+u+"' match");c=e.slice(t,s).replace(/&#?\w+;/g,i),n.add(a,c,t-1),l=5}else{if(4!=l)throw new Error('attribute value must after "="');c=e.slice(t,s).replace(/&#?\w+;/g,i),n.add(a,c,t),o.warning('attribute "'+a+'" missed start quot('+u+")!!"),t=s+1,l=5}break;case"/":switch(l){case 0:n.setTagName(e.slice(t,s));case 5:case 6:case 7:l=7,n.closed=!0;case 4:case 1:case 2:break;default:throw new Error("attribute invalid close char('/')")}break;case"":return o.error("unexpected end of input"),0==l&&n.setTagName(e.slice(t,s)),s;case">":switch(l){case 0:n.setTagName(e.slice(t,s));case 5:case 6:case 7:break;case 4:case 1:"/"===(c=e.slice(t,s)).slice(-1)&&(n.closed=!0,c=c.slice(0,-1));case 2:2===l&&(c=a),4==l?(o.warning('attribute "'+c+'" missed quot(")!!'),n.add(a,c.replace(/&#?\w+;/g,i),t)):("http://www.w3.org/1999/xhtml"===r[""]&&c.match(/^(?:disabled|checked|selected)$/i)||o.warning('attribute "'+c+'" missed value!! "'+c+'" instead!!'),n.add(c,c,t));break;case 3:throw new Error("attribute value missed!!")}return s;case"":u=" ";default:if(u<=" ")switch(l){case 0:n.setTagName(e.slice(t,s)),l=6;break;case 1:a=e.slice(t,s),l=2;break;case 4:var c=e.slice(t,s).replace(/&#?\w+;/g,i);o.warning('attribute "'+c+'" missed quot(")!!'),n.add(a,c,t);case 5:l=6}else switch(l){case 2:n.tagName;"http://www.w3.org/1999/xhtml"===r[""]&&a.match(/^(?:disabled|checked|selected)$/i)||o.warning('attribute "'+a+'" missed value!! "'+a+'" instead2!!'),n.add(a,a,t),t=s,l=1;break;case 5:o.warning('attribute space is required"'+a+'"!!');case 6:l=1,t=s;break;case 3:l=4,t=s;break;case 7:throw new Error("elements closed character '/' and '>' must be connected to")}}s++}}function c(e,t,n){for(var r=e.tagName,i=null,o=e.length;o--;){var a=e[o],s=a.qName,l=a.value;if((h=s.indexOf(":"))>0)var u=a.prefix=s.slice(0,h),c=s.slice(h+1),m="xmlns"===u&&c;else c=s,u=null,m="xmlns"===s&&"";a.localName=c,!1!==m&&(null==i&&(i={},p(n,n={})),n[m]=i[m]=l,a.uri="http://www.w3.org/2000/xmlns/",t.startPrefixMapping(m,l))}for(o=e.length;o--;){(u=(a=e[o]).prefix)&&("xml"===u&&(a.uri="http://www.w3.org/XML/1998/namespace"),"xmlns"!==u&&(a.uri=n[u||""]))}var h;(h=r.indexOf(":"))>0?(u=e.prefix=r.slice(0,h),c=e.localName=r.slice(h+1)):(u=null,c=e.localName=r);var f=e.uri=n[u||""];if(t.startElement(f,c,r,e),!e.closed)return e.currentNSMap=n,e.localNSMap=i,!0;if(t.endElement(f,c,r),i)for(u in i)t.endPrefixMapping(u)}function m(e,t,n,r,i){if(/^(?:script|textarea)$/i.test(n)){var o=e.indexOf("</"+n+">",t),a=e.substring(t+1,o);if(/[&<]/.test(a))return/^script$/i.test(n)?(i.characters(a,0,a.length),o):(a=a.replace(/&#?\w+;/g,r),i.characters(a,0,a.length),o)}return t+1}function h(e,t,n,r){var i=r[n];return null==i&&((i=e.lastIndexOf("</"+n+">"))<t&&(i=e.lastIndexOf("</"+n)),r[n]=i),i<t}function p(e,t){for(var n in e)t[n]=e[n]}function f(e,t,n,r){switch(e.charAt(t+2)){case"-":return"-"===e.charAt(t+3)?(i=e.indexOf("--\x3e",t+4))>t?(n.comment(e,t+4,i-t-4),i+3):(r.error("Unclosed comment"),-1):-1;default:if("CDATA["==e.substr(t+3,6)){var i=e.indexOf("]]>",t+9);return n.startCDATA(),n.characters(e,t+9,i-t-9),n.endCDATA(),i+3}var o=function(e,t){var n,r=[],i=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;i.lastIndex=t,i.exec(e);for(;n=i.exec(e);)if(r.push(n),n[1])return r}(e,t),a=o.length;if(a>1&&/!doctype/i.test(o[0][0])){var s=o[1][0],l=a>3&&/^public$/i.test(o[2][0])&&o[3][0],u=a>4&&o[4][0],c=o[a-1];return n.startDTD(s,l&&l.replace(/^(['"])(.*?)\1$/,"$2"),u&&u.replace(/^(['"])(.*?)\1$/,"$2")),n.endDTD(),c.index+c[0].length}}return-1}function d(e,t,n){var r=e.indexOf("?>",t);if(r){var i=e.substring(t,r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);if(i){i[0].length;return n.processingInstruction(i[1],i[2]),r+2}return-1}return-1}function g(e){}s.prototype={parse:function(e,t,n){var r=this.domBuilder;r.startDocument(),p(t,t={}),function(e,t,n,r,i){function o(e){var t=e.slice(1,-1);return t in n?n[t]:"#"===t.charAt(0)?function(e){if(e>65535){var t=55296+((e-=65536)>>10),n=56320+(1023&e);return String.fromCharCode(t,n)}return String.fromCharCode(e)}(parseInt(t.substr(1).replace("x","0x"))):(i.error("entity not found:"+e),e)}function a(t){if(t>E){var n=e.substring(E,t).replace(/&#?\w+;/g,o);v&&s(E),r.characters(n,0,t-E),E=t}}function s(t,n){for(;t>=N&&(n=y.exec(e));)p=n.index,N=p+n[0].length,v.lineNumber++;v.columnNumber=t-p+1}var p=0,N=0,y=/.*(?:\r\n?|\n)|.*$/g,v=r.locator,b=[{currentNSMap:t}],w={},E=0;for(;;){try{var x=e.indexOf("<",E);if(x<0){if(!e.substr(E).match(/^\s*$/)){var T=r.doc,S=T.createTextNode(e.substr(E));T.appendChild(S),r.currentElement=S}return}switch(x>E&&a(x),e.charAt(x+1)){case"/":var D=e.indexOf(">",x+3),A=e.substring(x+2,D),C=b.pop();D<0?(A=e.substring(x+2).replace(/[\s<].*/,""),i.error("end tag name: "+A+" is not complete:"+C.tagName),D=x+1+A.length):A.match(/\s</)&&(A=A.replace(/[\s<].*/,""),i.error("end tag name: "+A+" maybe not complete"),D=x+1+A.length);var I=C.localNSMap,_=C.tagName==A;if(_||C.tagName&&C.tagName.toLowerCase()==A.toLowerCase()){if(r.endElement(C.uri,C.localName,A),I)for(var R in I)r.endPrefixMapping(R);_||i.fatalError("end tag name: "+A+" is not match the current start tagName:"+C.tagName)}else b.push(C);D++;break;case"?":v&&s(x),D=d(e,x,r);break;case"!":v&&s(x),D=f(e,x,r,i);break;default:v&&s(x);var O=new g,k=b[b.length-1].currentNSMap,F=(D=u(e,x,O,k,o,i),O.length);if(!O.closed&&h(e,D,O.tagName,w)&&(O.closed=!0,n.nbsp||i.warning("unclosed xml attribute")),v&&F){for(var M=l(v,{}),B=0;B<F;B++){var U=O[B];s(U.offset),U.locator=l(v,{})}r.locator=M,c(O,r,k)&&b.push(O),r.locator=v}else c(O,r,k)&&b.push(O);"http://www.w3.org/1999/xhtml"!==O.uri||O.closed?D++:D=m(e,D,O.tagName,o,r)}}catch(e){i.error("element parse error: "+e),D=-1}D>E?E=D:a(Math.max(x,E)+1)}}(e,t,n,r,this.errorHandler),r.endDocument()}},g.prototype={setTagName:function(e){if(!a.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},add:function(e,t,n){if(!a.test(e))throw new Error("invalid attribute:"+e);this[this.length++]={qName:e,value:t,offset:n}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}};var N=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t}));function y(e,t){for(var n in e)t[n]=e[n]}function v(e,t){var n=e.prototype;if(!(n instanceof t)){var r=function(){};r.prototype=t.prototype,y(n,r=new r),e.prototype=n=r}n.constructor!=e&&("function"!=typeof e&&console.error("unknow Class:"+e),n.constructor=e)}var b={},w=b.ELEMENT_NODE=1,E=b.ATTRIBUTE_NODE=2,x=b.TEXT_NODE=3,T=b.CDATA_SECTION_NODE=4,S=b.ENTITY_REFERENCE_NODE=5,D=b.ENTITY_NODE=6,A=b.PROCESSING_INSTRUCTION_NODE=7,C=b.COMMENT_NODE=8,I=b.DOCUMENT_NODE=9,_=b.DOCUMENT_TYPE_NODE=10,R=b.DOCUMENT_FRAGMENT_NODE=11,O=b.NOTATION_NODE=12,k={},F={},M=(k.INDEX_SIZE_ERR=(F[1]="Index size error",1),k.DOMSTRING_SIZE_ERR=(F[2]="DOMString size error",2),k.HIERARCHY_REQUEST_ERR=(F[3]="Hierarchy request error",3)),B=(k.WRONG_DOCUMENT_ERR=(F[4]="Wrong document",4),k.INVALID_CHARACTER_ERR=(F[5]="Invalid character",5),k.NO_DATA_ALLOWED_ERR=(F[6]="No data allowed",6),k.NO_MODIFICATION_ALLOWED_ERR=(F[7]="No modification allowed",7),k.NOT_FOUND_ERR=(F[8]="Not found",8)),U=(k.NOT_SUPPORTED_ERR=(F[9]="Not supported",9),k.INUSE_ATTRIBUTE_ERR=(F[10]="Attribute in use",10));k.INVALID_STATE_ERR=(F[11]="Invalid state",11),k.SYNTAX_ERR=(F[12]="Syntax error",12),k.INVALID_MODIFICATION_ERR=(F[13]="Invalid modification",13),k.NAMESPACE_ERR=(F[14]="Invalid namespace",14),k.INVALID_ACCESS_ERR=(F[15]="Invalid access",15);function P(e,t){if(t instanceof Error)var n=t;else n=this,Error.call(this,F[e]),this.message=F[e],Error.captureStackTrace&&Error.captureStackTrace(this,P);return n.code=e,t&&(this.message=this.message+": "+t),n}function L(){}function $(e,t){this._node=e,this._refresh=t,q(this)}function q(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=t){var n=e._refresh(e._node);de(e,"length",n.length),y(n,e),e._inc=t}}function j(){}function V(e,t){for(var n=e.length;n--;)if(e[n]===t)return n}function H(e,t,n,r){if(r?t[V(t,r)]=n:t[t.length++]=n,e){n.ownerElement=e;var i=e.ownerDocument;i&&(r&&Q(i,e,r),function(e,t,n){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==n.namespaceURI&&(t._nsMap[n.prefix?n.localName:""]=n.value)}(i,e,n))}}function z(e,t,n){var r=V(t,n);if(!(r>=0))throw P(B,new Error(e.tagName+"@"+n));for(var i=t.length-1;r<i;)t[r]=t[++r];if(t.length=i,e){var o=e.ownerDocument;o&&(Q(o,e,n),n.ownerElement=null)}}function G(e){if(this._features={},e)for(var t in e)this._features=e[t]}function Y(){}function X(e){return("<"==e?"&lt;":">"==e&&"&gt;")||"&"==e&&"&amp;"||'"'==e&&"&quot;"||"&#"+e.charCodeAt()+";"}function W(e,t){if(t(e))return!0;if(e=e.firstChild)do{if(W(e,t))return!0}while(e=e.nextSibling)}function Z(){}function Q(e,t,n,r){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==n.namespaceURI&&delete t._nsMap[n.prefix?n.localName:""]}function K(e,t,n){if(e&&e._inc){e._inc++;var r=t.childNodes;if(n)r[r.length++]=n;else{for(var i=t.firstChild,o=0;i;)r[o++]=i,i=i.nextSibling;r.length=o}}}function J(e,t){var n=t.previousSibling,r=t.nextSibling;return n?n.nextSibling=r:e.firstChild=r,r?r.previousSibling=n:e.lastChild=n,K(e.ownerDocument,e),t}function ee(e,t,n){var r=t.parentNode;if(r&&r.removeChild(t),t.nodeType===R){var i=t.firstChild;if(null==i)return t;var o=t.lastChild}else i=o=t;var a=n?n.previousSibling:e.lastChild;i.previousSibling=a,o.nextSibling=n,a?a.nextSibling=i:e.firstChild=i,null==n?e.lastChild=o:n.previousSibling=o;do{i.parentNode=e}while(i!==o&&(i=i.nextSibling));return K(e.ownerDocument||e,e),t.nodeType==R&&(t.firstChild=t.lastChild=null),t}function te(){this._nsMap={}}function ne(){}function re(){}function ie(){}function oe(){}function ae(){}function se(){}function le(){}function ue(){}function ce(){}function me(){}function he(){}function pe(e,t,n){var r=e.prefix||"",i=e.namespaceURI;if(!r&&!i)return!1;if("xml"===r&&"http://www.w3.org/XML/1998/namespace"===i||"http://www.w3.org/2000/xmlns/"==i)return!1;for(var o=n.length;o--;){var a=n[o];if(a.prefix==r)return a.namespace!=i}return!0}function fe(e,t,n,r,i){if(r){if(!(e=r(e)))return;if("string"==typeof e)return void t.push(e)}switch(e.nodeType){case w:i||(i=[]);i.length;var o=e.attributes,a=o.length,s=e.firstChild,l=e.tagName;n="http://www.w3.org/1999/xhtml"===e.namespaceURI||n,t.push("<",l);for(var u=0;u<a;u++){"xmlns"==(c=o.item(u)).prefix?i.push({prefix:c.localName,namespace:c.value}):"xmlns"==c.nodeName&&i.push({prefix:"",namespace:c.value})}for(u=0;u<a;u++){var c;if(pe(c=o.item(u),0,i)){var m=c.prefix||"",h=c.namespaceURI,p=m?" xmlns:"+m:" xmlns";t.push(p,'="',h,'"'),i.push({prefix:m,namespace:h})}fe(c,t,n,r,i)}if(pe(e,0,i)){m=e.prefix||"",h=e.namespaceURI,p=m?" xmlns:"+m:" xmlns";t.push(p,'="',h,'"'),i.push({prefix:m,namespace:h})}if(s||n&&!/^(?:meta|link|img|br|hr|input)$/i.test(l)){if(t.push(">"),n&&/^script$/i.test(l))for(;s;)s.data?t.push(s.data):fe(s,t,n,r,i),s=s.nextSibling;else for(;s;)fe(s,t,n,r,i),s=s.nextSibling;t.push("</",l,">")}else t.push("/>");return;case I:case R:for(s=e.firstChild;s;)fe(s,t,n,r,i),s=s.nextSibling;return;case E:return t.push(" ",e.name,'="',e.value.replace(/[<&"]/g,X),'"');case x:return t.push(e.data.replace(/[<&]/g,X));case T:return t.push("<![CDATA[",e.data,"]]>");case C:return t.push("\x3c!--",e.data,"--\x3e");case _:var f=e.publicId,d=e.systemId;if(t.push("<!DOCTYPE ",e.name),f)t.push(' PUBLIC "',f),d&&"."!=d&&t.push('" "',d),t.push('">');else if(d&&"."!=d)t.push(' SYSTEM "',d,'">');else{var g=e.internalSubset;g&&t.push(" [",g,"]"),t.push(">")}return;case A:return t.push("<?",e.target," ",e.data,"?>");case S:return t.push("&",e.nodeName,";");default:t.push("??",e.nodeName)}}function de(e,t,n){e[t]=n}P.prototype=Error.prototype,y(k,P),L.prototype={length:0,item:function(e){return this[e]||null},toString:function(e,t){for(var n=[],r=0;r<this.length;r++)fe(this[r],n,e,t);return n.join("")}},$.prototype.item=function(e){return q(this),this[e]},v($,L),j.prototype={length:0,item:L.prototype.item,getNamedItem:function(e){for(var t=this.length;t--;){var n=this[t];if(n.nodeName==e)return n}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new P(U);var n=this.getNamedItem(e.nodeName);return H(this._ownerElement,this,e,n),n},setNamedItemNS:function(e){var t,n=e.ownerElement;if(n&&n!=this._ownerElement)throw new P(U);return t=this.getNamedItemNS(e.namespaceURI,e.localName),H(this._ownerElement,this,e,t),t},removeNamedItem:function(e){var t=this.getNamedItem(e);return z(this._ownerElement,this,t),t},removeNamedItemNS:function(e,t){var n=this.getNamedItemNS(e,t);return z(this._ownerElement,this,n),n},getNamedItemNS:function(e,t){for(var n=this.length;n--;){var r=this[n];if(r.localName==t&&r.namespaceURI==e)return r}return null}},G.prototype={hasFeature:function(e,t){var n=this._features[e.toLowerCase()];return!(!n||t&&!(t in n))},createDocument:function(e,t,n){var r=new Z;if(r.implementation=this,r.childNodes=new L,r.doctype=n,n&&r.appendChild(n),t){var i=r.createElementNS(e,t);r.appendChild(i)}return r},createDocumentType:function(e,t,n){var r=new se;return r.name=e,r.nodeName=e,r.publicId=t,r.systemId=n,r}},Y.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,t){return ee(this,e,t)},replaceChild:function(e,t){this.insertBefore(e,t),t&&this.removeChild(t)},removeChild:function(e){return J(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(e){return function e(t,n,r){var i=new n.constructor;for(var o in n){var a=n[o];"object"!=N(a)&&a!=i[o]&&(i[o]=a)}n.childNodes&&(i.childNodes=new L);switch(i.ownerDocument=t,i.nodeType){case w:var s=n.attributes,l=i.attributes=new j,u=s.length;l._ownerElement=i;for(var c=0;c<u;c++)i.setAttributeNode(e(t,s.item(c),!0));break;case E:r=!0}if(r)for(var m=n.firstChild;m;)i.appendChild(e(t,m,r)),m=m.nextSibling;return i}(this.ownerDocument||this,this,e)},normalize:function(){for(var e=this.firstChild;e;){var t=e.nextSibling;t&&t.nodeType==x&&e.nodeType==x?(this.removeChild(t),e.appendData(t.data)):(e.normalize(),e=t)}},isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var t=this;t;){var n=t._nsMap;if(n)for(var r in n)if(n[r]==e)return r;t=t.nodeType==E?t.ownerDocument:t.parentNode}return null},lookupNamespaceURI:function(e){for(var t=this;t;){var n=t._nsMap;if(n&&e in n)return n[e];t=t.nodeType==E?t.ownerDocument:t.parentNode}return null},isDefaultNamespace:function(e){return null==this.lookupPrefix(e)}},y(b,Y),y(b,Y.prototype),Z.prototype={nodeName:"#document",nodeType:I,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){if(e.nodeType==R){for(var n=e.firstChild;n;){var r=n.nextSibling;this.insertBefore(n,t),n=r}return e}return null==this.documentElement&&e.nodeType==w&&(this.documentElement=e),ee(this,e,t),e.ownerDocument=this,e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),J(this,e)},importNode:function(e,t){return function e(t,n,r){var i;switch(n.nodeType){case w:(i=n.cloneNode(!1)).ownerDocument=t;case R:break;case E:r=!0}i||(i=n.cloneNode(!1));if(i.ownerDocument=t,i.parentNode=null,r)for(var o=n.firstChild;o;)i.appendChild(e(t,o,r)),o=o.nextSibling;return i}(this,e,t)},getElementById:function(e){var t=null;return W(this.documentElement,(function(n){if(n.nodeType==w&&n.getAttribute("id")==e)return t=n,!0})),t},getElementsByClassName:function(e){var t=new RegExp("(^|\\s)".concat(e,"(\\s|$)"));return new $(this,(function(e){var n=[];return W(e.documentElement,(function(r){r!==e&&r.nodeType==w&&t.test(r.getAttribute("class"))&&n.push(r)})),n}))},createElement:function(e){var t=new te;return t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.childNodes=new L,(t.attributes=new j)._ownerElement=t,t},createDocumentFragment:function(){var e=new me;return e.ownerDocument=this,e.childNodes=new L,e},createTextNode:function(e){var t=new ie;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new oe;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){var t=new ae;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var n=new he;return n.ownerDocument=this,n.tagName=n.target=e,n.nodeValue=n.data=t,n},createAttribute:function(e){var t=new ne;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new ce;return t.ownerDocument=this,t.nodeName=e,t},createElementNS:function(e,t){var n=new te,r=t.split(":"),i=n.attributes=new j;return n.childNodes=new L,n.ownerDocument=this,n.nodeName=t,n.tagName=t,n.namespaceURI=e,2==r.length?(n.prefix=r[0],n.localName=r[1]):n.localName=t,i._ownerElement=n,n},createAttributeNS:function(e,t){var n=new ne,r=t.split(":");return n.ownerDocument=this,n.nodeName=t,n.name=t,n.namespaceURI=e,n.specified=!0,2==r.length?(n.prefix=r[0],n.localName=r[1]):n.localName=t,n}},v(Z,Y),te.prototype={nodeType:w,hasAttribute:function(e){return null!=this.getAttributeNode(e)},getAttribute:function(e){var t=this.getAttributeNode(e);return t&&t.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var n=this.ownerDocument.createAttribute(e);n.value=n.nodeValue=""+t,this.setAttributeNode(n)},removeAttribute:function(e){var t=this.getAttributeNode(e);t&&this.removeAttributeNode(t)},appendChild:function(e){return e.nodeType===R?this.insertBefore(e,null):function(e,t){var n=t.parentNode;if(n){var r=e.lastChild;n.removeChild(t);r=e.lastChild}return r=e.lastChild,t.parentNode=e,t.previousSibling=r,t.nextSibling=null,r?r.nextSibling=t:e.firstChild=t,e.lastChild=t,K(e.ownerDocument,e,t),t}(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);n&&this.removeAttributeNode(n)},hasAttributeNS:function(e,t){return null!=this.getAttributeNodeNS(e,t)},getAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);return n&&n.value||""},setAttributeNS:function(e,t,n){var r=this.ownerDocument.createAttributeNS(e,t);r.value=r.nodeValue=""+n,this.setAttributeNode(r)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new $(this,(function(t){var n=[];return W(t,(function(r){r===t||r.nodeType!=w||"*"!==e&&r.tagName!=e||n.push(r)})),n}))},getElementsByTagNameNS:function(e,t){return new $(this,(function(n){var r=[];return W(n,(function(i){i===n||i.nodeType!==w||"*"!==e&&i.namespaceURI!==e||"*"!==t&&i.localName!=t||r.push(i)})),r}))}},Z.prototype.getElementsByTagName=te.prototype.getElementsByTagName,Z.prototype.getElementsByTagNameNS=te.prototype.getElementsByTagNameNS,v(te,Y),ne.prototype.nodeType=E,v(ne,Y),re.prototype={data:"",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw new Error(F[M])},deleteData:function(e,t){this.replaceData(e,t,"")},replaceData:function(e,t,n){n=this.data.substring(0,e)+n+this.data.substring(e+t),this.nodeValue=this.data=n,this.length=n.length}},v(re,Y),ie.prototype={nodeName:"#text",nodeType:x,splitText:function(e){var t=this.data,n=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;var r=this.ownerDocument.createTextNode(n);return this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling),r}},v(ie,re),oe.prototype={nodeName:"#comment",nodeType:C},v(oe,re),ae.prototype={nodeName:"#cdata-section",nodeType:T},v(ae,re),se.prototype.nodeType=_,v(se,Y),le.prototype.nodeType=O,v(le,Y),ue.prototype.nodeType=D,v(ue,Y),ce.prototype.nodeType=S,v(ce,Y),me.prototype.nodeName="#document-fragment",me.prototype.nodeType=R,v(me,Y),he.prototype.nodeType=A,v(he,Y),Y.prototype.toString=function(e,t){var n=[],r=9==this.nodeType&&this.documentElement||this,i=r.prefix,o=r.namespaceURI;if(o&&null==i){if(null==(i=r.lookupPrefix(o)))var a=[{namespace:o,prefix:null}]}return fe(this,n,e,t,a),n.join("")};try{if(Object.defineProperty){Object.defineProperty($.prototype,"length",{get:function(){return q(this),this.$$length}}),Object.defineProperty(Y.prototype,"textContent",{get:function(){return function e(t){switch(t.nodeType){case w:case R:var n=[];for(t=t.firstChild;t;)7!==t.nodeType&&8!==t.nodeType&&n.push(e(t)),t=t.nextSibling;return n.join("");default:return t.nodeValue}}(this)},set:function(e){switch(this.nodeType){case w:case R:for(;this.firstChild;)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e));break;default:this.data=e,this.value=e,this.nodeValue=e}}}),de=function(e,t,n){e["$$"+t]=n}}}catch(e){}function ge(e){this.options=e||{locator:{}}}function Ne(){this.cdata=!1}function ye(e,t){t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber}function ve(e){if(e)return"\n@"+(e.systemId||"")+"#[line:"+e.lineNumber+",col:"+e.columnNumber+"]"}function be(e,t,n){return"string"==typeof e?e.substr(t,n):e.length>=t+n||t?new java.lang.String(e,t,n)+"":e}function we(e,t){e.currentElement?e.currentElement.appendChild(t):e.doc.appendChild(t)}function Ee(e){return e&&e.normalize&&e.normalize(),e&&e.textContent||""}ge.prototype.parseFromString=function(e,t){var n=this.options,i=new s,o=n.domBuilder||new Ne,a=n.errorHandler,l=n.locator,u=n.xmlns||{},c=/\/x?html?$/.test(t),m=c?r.entityMap:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return l&&o.setDocumentLocator(l),i.errorHandler=function(e,t,n){if(!e){if(t instanceof Ne)return t;e=t}var r={},i=e instanceof Function;function o(t){var o=e[t];!o&&i&&(o=2==e.length?function(n){e(t,n)}:e),r[t]=o&&function(e){o("[xmldom "+t+"]\t"+e+ve(n))}||function(){}}return n=n||{},o("warning"),o("error"),o("fatalError"),r}(a,o,l),i.domBuilder=n.domBuilder||o,c&&(u[""]="http://www.w3.org/1999/xhtml"),u.xml=u.xml||"http://www.w3.org/XML/1998/namespace",e?i.parse(e,u,m):i.errorHandler.error("invalid doc source"),o.doc},Ne.prototype={startDocument:function(){this.doc=(new G).createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(e,t,n,r){var i=this.doc,o=i.createElementNS(e,n||t),a=r.length;we(this,o),this.currentElement=o,this.locator&&ye(this.locator,o);for(var s=0;s<a;s++){e=r.getURI(s);var l=r.getValue(s),u=(n=r.getQName(s),i.createAttributeNS(e,n));this.locator&&ye(r.getLocator(s),u),u.value=u.nodeValue=l,o.setAttributeNode(u)}},endElement:function(e,t,n){var r=this.currentElement;r.tagName;this.currentElement=r.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var n=this.doc.createProcessingInstruction(e,t);this.locator&&ye(this.locator,n),we(this,n)},ignorableWhitespace:function(e,t,n){},characters:function(e,t,n){if(e=be.apply(this,arguments)){if(this.cdata)var r=this.doc.createCDATASection(e);else r=this.doc.createTextNode(e);this.currentElement?this.currentElement.appendChild(r):/^\s*$/.test(e)&&this.doc.appendChild(r),this.locator&&ye(this.locator,r)}},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(e.lineNumber=0)},comment:function(e,t,n){e=be.apply(this,arguments);var r=this.doc.createComment(e);this.locator&&ye(this.locator,r),we(this,r)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,n){var r=this.doc.implementation;if(r&&r.createDocumentType){var i=r.createDocumentType(e,t,n);this.locator&&ye(this.locator,i),we(this,i)}},warning:function(e){console.warn("[xmldom warning]\t"+e,ve(this.locator))},error:function(e){console.error("[xmldom error]\t"+e,ve(this.locator))},fatalError:function(e){throw console.error("[xmldom fatalError]\t"+e,ve(this.locator)),e}},"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,(function(e){Ne.prototype[e]=function(){return null}}));const xe=[["speed","speeds"],["course","courses"],["hAcc","hAccs"],["vAcc","vAccs"],["heartRate","heartRates"]];function Te(e){const t={};if(e){const n=Ae(e,"line");if(n){const e=Ee(Ae(n,"color")),r=parseFloat(Ee(Ae(n,"opacity"))),i=parseFloat(Ee(Ae(n,"width")));e&&(t.stroke=e),isNaN(r)||(t["stroke-opacity"]=r),isNaN(i)||(t["stroke-width"]=96*i/25.4)}}return t}function Se(e,t){const n={};let r,i;for(i=0;i<t.length;i++)r=Ae(e,t[i]),r&&(n[t[i]]=Ee(r));return n}function De(e){const t=Se(e,["name","cmt","desc","type","time","keywords"]),n=e.getElementsByTagNameNS("http://www.garmin.com/xmlschemas/GpxExtensions/v3","*");for(let r=0;r<n.length;r++){const i=n[r];i.parentNode.parentNode===e&&(t[i.tagName.replace(":","_")]=Ee(i))}const r=e.getElementsByTagName("link");r.length&&(t.links=[]);for(let e=0;e<r.length;e++)t.links.push(Object.assign({href:r[e].getAttribute("href")},Se(r[e],["text","type"])));return t}function Ae(e,t){const n=e.getElementsByTagName(t);return n.length?n[0]:null}function Ce(e){const t=[parseFloat(e.getAttribute("lon")),parseFloat(e.getAttribute("lat"))],n=Ae(e,"ele"),r=Ae(e,"gpxtpx:hr")||Ae(e,"hr"),i=Ae(e,"time");let o;n&&(o=parseFloat(Ee(n)),isNaN(o)||t.push(o));const a={coordinates:t,time:i?Ee(i):null,heartRate:r?parseFloat(Ee(r)):null},s=Ae(e,"extensions");return null!==s&&xe.map(e=>e[0]).filter(e=>"heartrate"!==e).forEach(e=>{const t=Ae(s,e);if(null!==t){const n=parseFloat(Ee(t));isNaN(n)||(a[e]=n)}}),a}function Ie(e){const t=_e(e,"rtept");if(t.line)return{type:"Feature",properties:Object.assign(De(e),Te(Ae(e,"extensions"))),geometry:{type:"LineString",coordinates:t.line}}}function _e(e,t){const n=e.getElementsByTagName(t),r=[],i=[],o=n.length,a={};if(o<2)return{};for(let e=0;e<o;e++){const t=Ce(n[e]);r.push(t.coordinates),t.time&&i.push(t.time),xe.map(e=>e[0]).forEach(n=>{(t[n]||a[n])&&(a[n]||(a[n]=Array(e).fill(null)),a[n].push(t[n]||null))})}const s={line:r,times:i};return xe.forEach(e=>{a[e[0]]&&(s[e[1]]=a[e[0]]||[])}),s}function Re(e){const t=e.getElementsByTagName("trkseg"),n=[],r=[],i={};let o;for(let e=0;e<t.length;e++)o=_e(t[e],"trkpt"),o&&(o.line&&n.push(o.line),o.times&&o.times.length&&r.push(o.times),xe.map(e=>e[1]).forEach(t=>{if(i[t]&&i[t].length||o[t]&&o[t].length){if(i[t]||(i[t]=[]),!i[t].length)for(let r=0;r<e;r++)i[t].push(Array(n[r].length).fill(null));o[t]&&o[t].length?i[t].push(o[t]):i[t].push(Array(o.line.length||0).fill(null))}}));if(0===n.length)return;const a=Object.assign(De(e),Te(Ae(e,"extensions")));return r.length&&(a.coordTimes=1===n.length?r[0]:r),xe.forEach(e=>{i[e[1]]&&i[e[1]].length&&(a[e[1]]=1===n.length?i[e[1]][0]:i[e[1]])}),{type:"Feature",properties:a,geometry:{type:1===n.length?"LineString":"MultiLineString",coordinates:1===n.length?n[0]:n}}}function*Oe(e){const t=e.getElementsByTagName("trk"),n=e.getElementsByTagName("rte"),r=e.getElementsByTagName("wpt");for(let e=0;e<t.length;e++){const n=Re(t[e]);n&&(yield n)}for(let e=0;e<n.length;e++){const t=Ie(n[e]);t&&(yield t)}for(let e=0;e<r.length;e++)yield(i=r[e],{type:"Feature",properties:Object.assign(De(i),Se(i,["sym"])),geometry:{type:"Point",coordinates:Ce(i).coordinates}});var i}function ke(e){return{type:"FeatureCollection",features:Array.from(Oe(e))}}const Fe=/\s*/g,Me=/^\s*|\s*$/g,Be=/\s+/;function Ue(e){if(!e||!e.length)return 0;let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n)|0;return t}function Pe(e,t){const n=e.getElementsByTagName(t);return n.length?n[0]:null}function Le(e){return e.replace(Fe,"").split(",").map(parseFloat)}function $e(e){return e.replace(Me,"").split(Be).map(Le)}function qe(e){if(void 0!==e.xml)return e.xml;if(e.tagName){let t=e.tagName;for(let n=0;n<e.attributes.length;n++)t+=e.attributes[n].name+e.attributes[n].value;for(let n=0;n<e.childNodes.length;n++)t+=qe(e.childNodes[n]);return t}return"#text"===e.nodeName?(e.nodeValue||e.value||"").trim():"#cdata-section"===e.nodeName?e.nodeValue:""}const je=["Polygon","LineString","Point","Track","gx:Track"];function Ve(e,t,n){let r=Ee(Pe(t,"color"))||"";const i="stroke"==n||"fill"===n?n:n+"-color";"#"===r.substr(0,1)&&(r=r.substr(1)),6===r.length||3===r.length?e[i]=r:8===r.length&&(e[n+"-opacity"]=parseInt(r.substr(0,2),16)/255,e[i]="#"+r.substr(6,2)+r.substr(4,2)+r.substr(2,2))}function He(e,t,n,r){const i=parseFloat(Ee(Pe(t,n)));isNaN(i)||(e[r]=i)}function ze(e){let t=e.getElementsByTagName("coord");const n=[],r=[];0===t.length&&(t=e.getElementsByTagName("gx:coord"));for(let e=0;e<t.length;e++)n.push(Ee(t[e]).split(" ").map(parseFloat));const i=e.getElementsByTagName("when");for(let e=0;e<i.length;e++)r.push(Ee(i[e]));return{coords:n,times:r}}function Ge(e,t,n,r){const i=function e(t){let n,r,i,o,a;const s=[],l=[];if(Pe(t,"MultiGeometry"))return e(Pe(t,"MultiGeometry"));if(Pe(t,"MultiTrack"))return e(Pe(t,"MultiTrack"));if(Pe(t,"gx:MultiTrack"))return e(Pe(t,"gx:MultiTrack"));for(i=0;i<je.length;i++)if(r=t.getElementsByTagName(je[i]),r)for(o=0;o<r.length;o++)if(n=r[o],"Point"===je[i])s.push({type:"Point",coordinates:Le(Ee(Pe(n,"coordinates")))});else if("LineString"===je[i])s.push({type:"LineString",coordinates:$e(Ee(Pe(n,"coordinates")))});else if("Polygon"===je[i]){const e=n.getElementsByTagName("LinearRing"),t=[];for(a=0;a<e.length;a++)t.push($e(Ee(Pe(e[a],"coordinates"))));s.push({type:"Polygon",coordinates:t})}else if("Track"===je[i]||"gx:Track"===je[i]){const e=ze(n);s.push({type:"LineString",coordinates:e.coords}),e.times.length&&l.push(e.times)}return{geoms:s,coordTimes:l}}(e);let o;const a={},s=Ee(Pe(e,"name")),l=Ee(Pe(e,"address"));let u=Ee(Pe(e,"styleUrl"));const c=Ee(Pe(e,"description")),m=Pe(e,"TimeSpan"),h=Pe(e,"TimeStamp"),p=Pe(e,"ExtendedData");let f=Pe(e,"IconStyle"),d=Pe(e,"LabelStyle"),g=Pe(e,"LineStyle"),N=Pe(e,"PolyStyle");const y=Pe(e,"visibility");if(s&&(a.name=s),l&&(a.address=l),u){"#"!==u[0]&&(u="#"+u),a.styleUrl=u,t[u]&&(a.styleHash=t[u]),n[u]&&(a.styleMapHash=n[u],a.styleHash=t[n[u].normal]);const e=r[a.styleHash];e&&(f||(f=Pe(e,"IconStyle")),d||(d=Pe(e,"LabelStyle")),g||(g=Pe(e,"LineStyle")),N||(N=Pe(e,"PolyStyle")))}if(c&&(a.description=c),m){const e=Ee(Pe(m,"begin")),t=Ee(Pe(m,"end"));a.timespan={begin:e,end:t}}if(h&&(a.timestamp=Ee(Pe(h,"when"))),f){Ve(a,f,"icon"),He(a,f,"scale","icon-scale"),He(a,f,"heading","icon-heading");const e=Pe(f,"hotSpot");if(e){const t=parseFloat(e.getAttribute("x")),n=parseFloat(e.getAttribute("y"));isNaN(t)||isNaN(n)||(a["icon-offset"]=[t,n])}const t=Pe(f,"Icon");if(t){const e=Ee(Pe(t,"href"));e&&(a.icon=e)}}if(d&&(Ve(a,d,"label"),He(a,d,"scale","label-scale")),g&&(Ve(a,g,"stroke"),He(a,g,"width","stroke-width")),N){Ve(a,N,"fill");const e=Ee(Pe(N,"fill")),t=Ee(Pe(N,"outline"));e&&(a["fill-opacity"]="1"===e?a["fill-opacity"]||1:0),t&&(a["stroke-opacity"]="1"===t?a["stroke-opacity"]||1:0)}if(p){const e=p.getElementsByTagName("Data"),t=p.getElementsByTagName("SimpleData");for(o=0;o<e.length;o++)a[e[o].getAttribute("name")]=Ee(Pe(e[o],"value"));for(o=0;o<t.length;o++)a[t[o].getAttribute("name")]=Ee(t[o])}y&&(a.visibility=Ee(y)),i.coordTimes.length&&(a.coordTimes=1===i.coordTimes.length?i.coordTimes[0]:i.coordTimes);const v={type:"Feature",geometry:0===i.geoms.length?null:1===i.geoms.length?i.geoms[0]:{type:"GeometryCollection",geometries:i.geoms},properties:a};return e.getAttribute("id")&&(v.id=e.getAttribute("id")),v}function*Ye(e){const t={},n={},r={},i=e.getElementsByTagName("Placemark"),o=e.getElementsByTagName("Style"),a=e.getElementsByTagName("StyleMap");for(let e=0;e<o.length;e++){const r=Ue(qe(o[e])).toString(16);t["#"+o[e].getAttribute("id")]=r,n[r]=o[e]}for(let e=0;e<a.length;e++){t["#"+a[e].getAttribute("id")]=Ue(qe(a[e])).toString(16);const n=a[e].getElementsByTagName("Pair"),i={};for(let e=0;e<n.length;e++)i[Ee(Pe(n[e],"key"))]=Ee(Pe(n[e],"styleUrl"));r["#"+a[e].getAttribute("id")]=i}for(let e=0;e<i.length;e++){const o=Ge(i[e],t,r,n);o&&(yield o)}}function Xe(e){return{type:"FeatureCollection",features:Array.from(Ye(e))}}e.stringTogeojson=function(e,t){var n,r=(new ge).parseFromString(t);return"kml"===e?n=Xe(r):"gpx"===e&&(n=ke(r)),n},e.togeojson=function(e,t){var n,r=(new ge).parseFromString(t);return e.match(/.kml$/g)?n=Xe(r):e.match(/.gpx$/g)&&(n=ke(r)),n},Object.defineProperty(e,"__esModule",{value:!0})}));
