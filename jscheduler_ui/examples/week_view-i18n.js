var element=document.getElementById("scheduler"),scheduler=jscheduler_ui.render(element,{viewMode:"week",dateLocale:"it"});document.getElementById("comments").innerHTML=scheduler.getLabel();