# schedule_it.js

## Quick start


Add the lines below in your HTML page


```html
<!DOCTYPE html>
<html>
  <body>
    <div id="scheduler"></div>
      <script src="https://unpkg.com/@mormat/react-scheduler"></script>
      <script>
        var element = document.getElementById('scheduler');

        var events = [
	        { start: "2024-09-16 10:00", label: "interview" },
	        { start: "2024-09-17 14:00", label: "meeting" }
        ];

        schedule_it.render(element, events);        
      </script>
	</body>
</html>
```

```html <!--append-body-->
<script src="https://unpkg.com/@mormat/react-scheduler"></script>
<script>

	var element = document.getElementById('scheduler');

	var events = [
		{ start: "2024-09-16 10:00", label: "interview" },
		{ start: "2024-09-17 14:00", label: "meeting" }
	];

	schedule_it.render(element, events);
	
</script>
```

> &#8227; display the 'interview' event on "2024-09-16" at '10:00'\
> &#8227; display the 'meeting' event on "2024-09-17" at '14:00'


## foo:bar

## Options

### `viewMode`: string

if set bla bla bla then bla bla bla

#### examples

```js
{ viewMode: "week" } 
// if today is '2014-10-10', render dates from '2014-10-10' to '2014-10-12'
```

```js
{ viewMode: "month" }
// if today is '2014-10-10', render dates from '2014-10-10' to '2014-10-12'
```


### `startDate`: string | date | number

#### examples
```js
{ startDate: "2024-12-20" } 
// display the scheduler from "2024-12-20"
```

```js
{ startDate: new Date("2024-12-20") } 
// display the scheduler from "2024-12-20"
```

```js
{ startDate: 12321544 } 
// display the scheduler from "2024-12-20"
```

### `locale`: string

default: `en`

### `draggable`: boolean


#### examples with these [events](#quick-start)

```js
{ draggable: true } 
// display the "interview" event at 12:00 when trying to move it at 12:00
```

```js
{ draggable: false } 
// display the "interview" event at 10:00 when trying to move it at 12:00
```

