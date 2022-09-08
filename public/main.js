let n = 1
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
 if(request.readyState ===4 && request.status===200){
 const array = JSON.parse(request.response) //把json变成js的数组
array.forEach(item =>{
    const li = document.createElement("li")
    li.textContent = item.id
    xxx.appendChild(li)
 })
 n += 1
}
}
 request.send()
}
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get','/5.json')
   request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status===200){
        console.log(request.response)
       const object = JSON.parse(request.response)
       myName.textContent = object.name
    }
   }
   request.send()
}

getXML.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange= ()=>{
if(request.readyState===4 && request.status === 200){
    const dom = request.responseXML
    const text = dom.getElementsByTagName('warning')[0].textContent
    console.log(text.trim())
        }
    }
request.send()
}

getHTML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET',"/3.html")
request.onload = ()=>{
    //创建div标签
    const div = document.createElement('div')
    // 填写div内容
    div.innerHTML = request.response
    //插到身体里
    document.body.appendChild(div)
}
request.onerror=()=>{}
request.send()  // 发出去
}

getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GEt','/2.js')
    request.onload=()=>{
    const script  = document.createElement('script')   //创建script标签
    script.innerHTML = request.response  //填写script内容
    document.body.appendChild(script)   //插到身体里面
    }
    request.onerror=()=>{}
    request.send()
}

getCSS.onclick = () =>{ //用户点击时就调用这个函数
    const request = new XMLHttpRequest()  //创建一个对象
request.open('GET','/style.css')  //调用对象的open对象  获取资源都用'GET'，url =>'/style.css'统一资源定位符
request.onreadystatechange = ()=>{    //监听函数的成功还是失败了
// 下载完成，但不知道是成功 2XX 还是失败 4XX或者是 5XX
    if(request.readyState=== 4){
        if(request.status>=200 && request.status<300){
  //默认没有样式的，页面点击css 创建style标签
  const style = document.createElement('style')
  //填写style内容
  style.innerHTML = request.response
  //插到头里面
  document.head.appendChild(style)
  }else{
alert('加载CSS失败') //成功提示，失败不提示
  }
   }     
}
request.send()  //发送这个请求
}
