)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+n},{className:"type",begin:"!<"+n+">"},{className:"type",begin:"!"+n},{className:"type",begin:"!!"+n},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:t,keywords:{literal:t}},{className:"number",begin:"\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"},{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},{begin:/\{/,end:/\}/,contains:[S],illegal:"\\n",relevance:0},{begin:"\\[",end:"\\]",contains:[S],illegal:"\\n",relevance:0},l],b=[...T];return b.pop(),b.push(s),S.contains=b,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:T}}},7936:r=>{r.exports=function a(e){const t={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[e.inherit(e.APOS_STRING_MODE,{illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null})]},n=e.UNDERSCORE_TITLE_MODE,i={variants:[e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]},o="namespace class interface use extends function return abstract final public protected private static deprecated throw try catch Exception echo empty isset instanceof unset let var new const self require if else elseif switch case default do while loop for continue break likely unlikely __LINE__ __FILE__ __DIR__ __FUNCTION__ __CLASS__ __TRAIT__ __METHOD__ __NAMESPACE__ array boolean float double integer object resource string char long unsigned bool int uint ulong uchar true false null undefined";return{name:"Zephir",aliases:["zep"],keywords:o,contains:[e.C_LINE_COMMENT_MODE,e.COMMENT(/\/\*/,/\*\//,{contains:[{className:"doctag",begin:/@[A-Za-z]+/}]}),{className:"string",begin:/<<<['"]?\w+['"]?$/,end:/^\w+;/,contains:[e.BACKSLASH_ESCAPE]},{begin:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{className:"function",beginKeywords:"function fn",end:/[;{]/,excludeEnd:!0,illegal:/\$|\[|%/,contains:[n,{className:"params",begin:/\(/,end:/\)/,keywords:o,contains:["self",e.C_BLOCK_COMMENT_MODE,t,i]}]},{className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,illegal:/[:($"]/,contains:[{beginKeywords:"extends implements"},n]},{beginKeywords:"namespace",end:/;/,illegal:/[.']/,contains:[n]},{beginKeywords:"use",end:/;/,contains:[n]},{begin:/=>/},t,i]}}}}]);