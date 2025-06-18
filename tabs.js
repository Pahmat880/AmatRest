// tabs.js

document.addEventListener("DOMContentLoaded", function() {
    const tabsContainer = document.getElementById('apiTabs');
    const cards = document.querySelectorAll('.card');

    // Function to show a specific tab and its content
    function showTab(targetId) {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-item').forEach(tab => {
            tab.classList.remove('active');
        });

        // Hide all cards with a small delay for fade-out effect
        cards.forEach(card => {
            card.classList.remove('active');
            card.style.display = 'none'; 
        });

        // Add active class to the clicked tab
        const activeTab = document.querySelector(`.tab-item[data-target="${targetId}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }

        // Show the corresponding card with fade-in effect
        const targetCard = document.getElementById(targetId);
        if (targetCard) {
            targetCard.style.display = 'block'; // Make it block first
            // Trigger reflow to ensure display:block takes effect before opacity transition
            void targetCard.offsetWidth; 
            targetCard.classList.add('active'); // Add active for opacity transition
        }
    }

    // Event listener for tab clicks
    tabsContainer.addEventListener('click', function(event) {
        const clickedTab = event.target.closest('.tab-item');
        if (clickedTab) {
            const targetId = clickedTab.dataset.target;
            showTab(targetId);
        }
    });

    // Show the first tab by default when the DOM is fully loaded
    showTab('orderkuota-gateway'); 
});