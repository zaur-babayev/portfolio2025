function l(i){for(var g=[],c=1;c<arguments.length;c++)g[c-1]=arguments[c];var n=Array.from(typeof i=="string"?[i]:i);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var d=n.reduce(function(t,o){var a=o.match(/\n([\t ]+|(?!\s).)/g);return a?t.concat(a.map(function(f){var e,r;return(r=(e=f.match(/[\t ]/g))===null||e===void 0?void 0:e.length)!==null&&r!==void 0?r:0})):t},[]);if(d.length){var s=new RegExp(`
[	 ]{`.concat(Math.min.apply(Math,d),"}"),"g");n=n.map(function(t){return t.replace(s,`
`)})}n[0]=n[0].replace(/^\r?\n/,"");var u=n[0];return g.forEach(function(t,o){var a=u.match(/(?:^|\n)( *)$/),f=a?a[1]:"",e=t;typeof t=="string"&&t.includes(`
`)&&(e=String(t).split(`
`).map(function(r,h){return h===0?r:"".concat(f).concat(r)}).join(`
`)),u+=e+n[o+1]}),u}export{l as d};
