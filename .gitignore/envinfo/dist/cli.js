#!/usr/bin/env node
"use strict";module.exports=function(n){var e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=171)}({171:function(n,e,o){var t=o(172)(process.argv.slice(2));t.console=!0,t.help||t._.indexOf("help")>-1?console.log("\n  ,,',                                  ,,             ,,,,,,           ,',,\n ,,,                                                  ,,,                  ,,,\n ,,       ,,,,,    ,,,,,,   ,,,     ,,  ,,  .,,,,,,   ,,,,,,,   ,,,,,       ,,\n ,,     ,,    ,,  ,,,   ,,,  ,,    ,,,  ,,  ,,,   ,,, ,,      ,,,   ,,,     ,,\n ,,,   ,,     .,, ,,,    ,,  ,,,   ,,   ,,  ,,,    ,, ,,     ,,      ,,     ,,,\n ,,    ,,,,,,,,,, ,,,    ,,   ,,  ,,    ,,  ,,,    ,, ,,     ,,      ,,     ,,\n ,,    ,,,        ,,,    ,,    ,,,,,    ,,  ,,,    ,, ,,     ,,,    ,,,     ,,\n ,,      ,,,,,,,  ,,,    ,,     ,,,     ,,  ,,,    ,, ,,       ,,,,,,,      ,,\n ,,,                                                                       ,,,\n  ,,,'                                                                  ',,,\n\n  VERSION: 7.11.0\n\n  USAGE:\n\n    `envinfo` || `npx envinfo`\n\n  OPTIONS:\n\n    --system               Print general system info such as OS, CPU, Memory and Shell\n    --browsers             Get version numbers of installed web browsers\n    --SDKs                 Get platforms, build tools and SDKs of iOS and Android\n    --IDEs                 Get version numbers of installed IDEs\n    --languages            Get version numbers of installed languages such as Java, Python, PHP, etc\n    --managers             Get version numbers of installed package/dependency managers\n    --monorepos            Get monorepo tools\n    --binaries             Get version numbers of node, npm, watchman, etc\n    --npmPackages          Get version numbers of locally installed npm packages - glob, string, or comma delimited list\n    --npmGlobalPackages    Get version numbers of globally installed npm packages\n\n    --duplicates           Mark duplicate npm packages inside parentheses eg. (2.1.4)\n    --fullTree             Traverse entire node_modules dependency tree, not just top level\n\n    --markdown             Print output in markdown format\n    --json                 Print output in JSON format\n    --console              Print to console (defaults to on for CLI usage, off for programmatic usage)\n    --showNotFound         Don't filter out values marked 'Not Found'\n    --title                Give your report a top level title ie 'Environment Report'\n\n    --clipboard            *Removed - use clipboardy or clipboard-cli directly*\n  "):t.version||t.v||t._.indexOf("version")>-1?console.log("7.11.0"):o(173).cli(t)},172:function(n,e){function o(n){return"number"==typeof n||(!!/^0x[0-9a-f]+$/i.test(n)||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n))}n.exports=function(n,e){e||(e={});var t={bools:{},strings:{},unknownFn:null};"function"==typeof e.unknown&&(t.unknownFn=e.unknown),"boolean"==typeof e.boolean&&e.boolean?t.allBools=!0:[].concat(e.boolean).filter(Boolean).forEach(function(n){t.bools[n]=!0});var r={};Object.keys(e.alias||{}).forEach(function(n){r[n]=[].concat(e.alias[n]),r[n].forEach(function(e){r[e]=[n].concat(r[n].filter(function(n){return e!==n}))})}),[].concat(e.string).filter(Boolean).forEach(function(n){t.strings[n]=!0,r[n]&&(t.strings[r[n]]=!0)});var s=e.default||{},i={_:[]};Object.keys(t.bools).forEach(function(n){a(n,void 0!==s[n]&&s[n])});var l=[];function a(n,e,s){if(!s||!t.unknownFn||function(n,e){return t.allBools&&/^--[^=]+$/.test(e)||t.strings[n]||t.bools[n]||r[n]}(n,s)||!1!==t.unknownFn(s)){var l=!t.strings[n]&&o(e)?Number(e):e;u(i,n.split("."),l),(r[n]||[]).forEach(function(n){u(i,n.split("."),l)})}}function u(n,e,o){for(var r=n,s=0;s<e.length-1;s++){if("__proto__"===(i=e[s]))return;void 0===r[i]&&(r[i]={}),r[i]!==Object.prototype&&r[i]!==Number.prototype&&r[i]!==String.prototype||(r[i]={}),r[i]===Array.prototype&&(r[i]=[]),r=r[i]}var i;"__proto__"!==(i=e[e.length-1])&&(r!==Object.prototype&&r!==Number.prototype&&r!==String.prototype||(r={}),r===Array.prototype&&(r=[]),void 0===r[i]||t.bools[i]||"boolean"==typeof r[i]?r[i]=o:Array.isArray(r[i])?r[i].push(o):r[i]=[r[i],o])}function c(n){return r[n].some(function(n){return t.bools[n]})}-1!==n.indexOf("--")&&(l=n.slice(n.indexOf("--")+1),n=n.slice(0,n.indexOf("--")));for(var f=0;f<n.length;f++){var p=n[f];if(/^--.+=/.test(p)){var d=p.match(/^--([^=]+)=([\s\S]*)$/),b=d[1],m=d[2];t.bools[b]&&(m="false"!==m),a(b,m,p)}else if(/^--no-.+/.test(p)){a(b=p.match(/^--no-(.+)/)[1],!1,p)}else if(/^--.+/.test(p)){b=p.match(/^--(.+)/)[1];void 0===(h=n[f+1])||/^-/.test(h)||t.bools[b]||t.allBools||r[b]&&c(b)?/^(true|false)$/.test(h)?(a(b,"true"===h,p),f++):a(b,!t.strings[b]||"",p):(a(b,h,p),f++)}else if(/^-[^-]+/.test(p)){for(var v=p.slice(1,-1).split(""),g=!1,y=0;y<v.length;y++){var h;if("-"!==(h=p.slice(y+2))){if(/[A-Za-z]/.test(v[y])&&/=/.test(h)){a(v[y],h.split("=")[1],p),g=!0;break}if(/[A-Za-z]/.test(v[y])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(h)){a(v[y],h,p),g=!0;break}if(v[y+1]&&v[y+1].match(/\W/)){a(v[y],p.slice(y+2),p),g=!0;break}a(v[y],!t.strings[v[y]]||"",p)}else a(v[y],h,p)}b=p.slice(-1)[0];g||"-"===b||(!n[f+1]||/^(-|--)[^-]/.test(n[f+1])||t.bools[b]||r[b]&&c(b)?n[f+1]&&/^(true|false)$/.test(n[f+1])?(a(b,"true"===n[f+1],p),f++):a(b,!t.strings[b]||"",p):(a(b,n[f+1],p),f++))}else if(t.unknownFn&&!1===t.unknownFn(p)||i._.push(t.strings._||!o(p)?p:Number(p)),e.stopEarly){i._.push.apply(i._,n.slice(f+1));break}}return Object.keys(s).forEach(function(n){var e,o,t;e=i,o=n.split("."),t=e,o.slice(0,-1).forEach(function(n){t=t[n]||{}}),o[o.length-1]in t||(u(i,n.split("."),s[n]),(r[n]||[]).forEach(function(e){u(i,e.split("."),s[n])}))}),e["--"]?(i["--"]=new Array,l.forEach(function(n){i["--"].push(n)})):l.forEach(function(n){i._.push(n)}),i}},173:function(n,e){n.exports=require("./envinfo")}});