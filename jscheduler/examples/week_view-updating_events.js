var element = document.getElementById('scheduler');

var scheduler = jscheduler.render(element, {
    viewMode: 'week',
    events: [
        { label: "interview", start: "2024-08-13 10:00", end:   "2024-08-13 12:00" },
    ]
});

setTimeout(function() {
    
    scheduler.setEvents([
        { label: "meeting", start: "2024-08-15 14:00", end: "2024-08-15 18:00" } 
    ]);
    
}, 1000);

