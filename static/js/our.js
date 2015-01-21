function afficher_cacher(id)
    {
        if(document.getElementById(id).style.display=="block")
        {
            document.getElementById(id).style.display="none";
            document.getElementById('container_options').style.display="block";
        }
        else
        {
            document.getElementById(id).style.display="block";
               document.getElementById('container_options').style.display="none";
        }
        return true;
    }

function changer(c) {
             
    if (c == 1) {
        document.getElementById("cache").innerHTML = "Cache";
        document.getElementById("appcache").innerHTML = "AppCache ";
        document.getElementById("cookies").innerHTML = "Cookies";
        document.getElementById("websql").innerHTML = "WebSQL ";
        document.getElementById("indexdb").innerHTML = "IndexDB ";
        document.getElementById("formdata").innerHTML = "Données de formulaires";
        document.getElementById("filesystems").innerHTML = "Fichiers Systèmes ";
        document.getElementById("localstorage").innerHTML = "Stockage Local ";
        document.getElementById("plugindata").innerHTML = "Données de Plugins ";
        document.getElementById("download").innerHTML = "Téléchargements ";
        document.getElementById("history").innerHTML = "Historique";
        document.getElementById("passwords").innerHTML = "Mots de Passes";
        document.getElementById("checkbox_left").style.marginRight="inherit";
        document.getElementById("txt_days").innerHTML ="Jours";
        document.getElementById("txt_hours").innerHTML ="Heures";
        document.getElementById("txt_min").innerHTML ="Min";
        document.getElementById("txt_sec").innerHTML ="Sec";
    }
    else if (c == 2) {
        document.getElementById("cache").innerHTML = "Cache";
        document.getElementById("appcache").innerHTML = "AppCache ";
        document.getElementById("cookies").innerHTML = "Cookies";
        document.getElementById("websql").innerHTML = "WebSQL ";
        document.getElementById("indexdb").innerHTML = "IndexDB ";
        document.getElementById("formdata").innerHTML = "FormData";
        document.getElementById("filesystems").innerHTML = "FileSystems ";
        document.getElementById("localstorage").innerHTML = "LocalStorage ";
        document.getElementById("plugindata").innerHTML = "PluginData ";
        document.getElementById("download").innerHTML = "Download ";
        document.getElementById("history").innerHTML = "History";
        document.getElementById("passwords").innerHTML = "Passwords";
        document.getElementById("checkbox_left").style.marginRight="103px";
         document.getElementById("txt_days").innerHTML ="Day";
        document.getElementById("txt_hours").innerHTML ="Hours";
        document.getElementById("txt_min").innerHTML ="Min";
        document.getElementById("txt_sec").innerHTML ="Sec";
    }
    else if (c == 3) {
        document.getElementById("cache").innerHTML = "缓存";
        document.getElementById("appcache").innerHTML = "应用缓存 ";
        document.getElementById("cookies").innerHTML = "Cookies";
        document.getElementById("websql").innerHTML = "WebSQL数据库 ";
        document.getElementById("indexdb").innerHTML = "IndexDB数据库 ";
        document.getElementById("formdata").innerHTML = "表单数据";
        document.getElementById("filesystems").innerHTML = "系统文件 ";
        document.getElementById("localstorage").innerHTML = "本地存储 ";
        document.getElementById("plugindata").innerHTML = "插件数据 ";
        document.getElementById("download").innerHTML = "历史记录 ";
        document.getElementById("history").innerHTML = "历史记录";
        document.getElementById("passwords").innerHTML = "密码";
        document.getElementById("checkbox_left").style.marginRight="68px";
        document.getElementById("txt_days").innerHTML ="日";
        document.getElementById("txt_hours").innerHTML ="时";
        document.getElementById("txt_min").innerHTML ="分";
        document.getElementById("txt_sec").innerHTML ="秒";
    }
    else if (c == 4) {
        document.getElementById("cache").innerHTML = "Brebi";
        document.getElementById("cookies").innerHTML = "Chevre";
    }
    else if (c == 5) {
        document.getElementById("cache").innerHTML = "Citron";
        document.getElementById("cookies").innerHTML = "Orange";
    }
    else return;
 
}