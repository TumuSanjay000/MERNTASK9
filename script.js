function dt(){
    var dateTime = new Date();
    var hr=dateTime.getHours();
    var mn=dateTime.getMinutes();
    var sc=dateTime.getSeconds();
    var dt=dateTime.getDate();
    var mnt=dateTime.getMonth();
    var yer=dateTime.getFullYear();
    var set = document.getElementById('set')
    if(hr >= 12){
        set.innerHTML='PM';
    }else{
        set.innerHTML='AM';
    }
    if(hr > 12){
        hr = hr - 12;
    } 
    document.getElementById('hrs').innerHTML=hr;
    document.getElementById('min').innerHTML=mn;
    document.getElementById('sec').innerHTML=sc;
    document.getElementById('date').innerHTML=dt;
    document.getElementById('mnth').innerHTML=mnt+1;
    document.getElementById('year').innerHTML=yer;
}
setInterval(dt, 10);