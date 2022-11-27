// hi
c=a=>{for(m=new Uint8Array(3e4),p=i=0,l=[],f=()=>{t=prompt().charCodeAt(),256>t?m[p]=t:f()};i<a.length;a[i++]=r)r=a[i],">"==r&&p++,"<"==r&&p--,"+"==r&&m[p]++,"-"==r&&m[p]--,"."==r&&console.log(String.fromCharCode(m[p])),","==r&&f(),"["==r&&l.push(i),"]"==r?m[p]?i=l[l.length-1]:l.pop():0}
