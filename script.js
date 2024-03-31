document.addEventListener('DOMContentLoaded', function() {
    // Get all the toggle-text links
    var toggleTextLinks = document.querySelectorAll('.toggle-text');

    // Iterate through each link
    toggleTextLinks.forEach(function(link) {
        // Add click event listener to each link
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action

            // Get the target rule ID from the href attribute
            var targetId = this.getAttribute('href').substring(1);

            // Remove 'active' class from all rule sections
            document.querySelectorAll('.rule-section').forEach(function(section) {
                section.classList.remove('active');
            });

            // Add 'active' class to the target rule section
            var targetSection = document.getElementById(targetId);
            targetSection.classList.add('active');

            // Scroll to the target rule section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});