var element=document.getElementById("scheduler");jscheduler_ui.render(element,{viewMode:"week",events:[{label:"presentation",start:"2024-10-03 09:00",end:"2024-10-03 13:00"},{label:"training course",start:"2024-10-01 08:00",end:"2024-10-02 19:00"}],eventsDraggable:!0,onEventDrop:function(e){document.getElementById("comments").innerHTML=e.label+" event dropped at ("+e.start.toDateString()+" "+e.start.toTimeString().substring(0,5)+","+e.end.toDateString()+" "+e.end.toTimeString().substring(0,5)+")"}});