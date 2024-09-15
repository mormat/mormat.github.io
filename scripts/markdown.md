# schedule_it.js

## Quick start


> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.


Rendering text with colors:

```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```


```gherkin
Scenario: Quick start
	
	Given create an HTML page containing:
		"""
		<script src="https://unpkg.com/@mormat/react-scheduler"></script>
		<script>

			var element = document.createElement('div');
			document.body.appendChild(element);

			var events = [
				{ start: "2024-09-16 10:00", label: "interview" },
				{ start: "2024-09-17 14:00", label: "meeting" }
			];

			schedule_it.render(element, events);

		</script>
		"""
	When I open the scheduler
	Then expect to display the 'interview' event on "2024-09-16" at '10:00'
	And expect to display the 'meeting' event on "2024-09-17" at '14:00'
```

> **Note**
> This is a note

> **Warning**
> This is a warning

```html
<script src="https://unpkg.com/@mormat/react-scheduler"></script>
<script>

	var element = document.createElement('div');
	document.body.appendChild(element);

	var events = [
		{ start: "2024-09-16 10:00", label: "interview" },
		{ start: "2024-09-17 14:00", label: "meeting" }
	];

	schedule_it.render(element, events);
</script>
```

```gherkin
Scenario: Quick start
	
	Given create an HTML page containing:
		"""
		<script src="https://unpkg.com/@mormat/react-scheduler"></script>
		<script>

			var element = document.createElement('div');
			document.body.appendChild(element);

			var events = [
				{ start: "2024-09-16 10:00", label: "interview" },
				{ start: "2024-09-17 14:00", label: "meeting" }
			];

			schedule_it.render(element, events);

		</script>
		"""
	When I open the scheduler
	Then expect to display the 'interview' event on "2024-09-16" at '10:00'
	And expect to display the 'meeting' event on "2024-09-17" at '14:00'
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

