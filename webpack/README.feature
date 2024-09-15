Feature: README.md

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

			
