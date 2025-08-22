// Clean URLs handler for Dark Soil Studio
(function() {
    'use strict';
    
    // List of valid routes without .html
    const validRoutes = [
        '/contact',
        '/corri', 
        '/bouy-os',
        '/dashchat',
        '/roadmap',
        '/drapac'
    ];
    
    // Function to handle clean URL routing
    function handleCleanUrls() {
        const path = window.location.pathname;
        const cleanPath = path.replace(/\/$/, ''); // Remove trailing slash
        
        // Check if this is a clean URL request
        if (validRoutes.includes(cleanPath)) {
            // Redirect to the .html version
            window.location.href = cleanPath + '.html';
        }
    }
    
    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleCleanUrls);
    } else {
        handleCleanUrls();
    }
    
    // Also handle navigation events for SPA-like behavior
    window.addEventListener('popstate', handleCleanUrls);
})();
