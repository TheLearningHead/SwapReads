// document.addEventListener("DOMContentLoaded", function() {
//     var learnMoreLink = document.getElementById('learn-more-link');
//     var learnMoreContent = document.getElementById('learn-more-content');
//     var acceptButton = document.querySelector('.accept-cookies');
//     var rejectButton = document.querySelector('.reject-cookies');
//     var cookieConsent = document.getElementById('cookie-consent');
//     var closeButton = document.getElementById('closeBtn');

//     // Toggle learn more content visibility
//     learnMoreLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         if (learnMoreContent.style.display === 'none') {
//             learnMoreContent.style.display = 'block';
//         } else {
//             learnMoreContent.style.display = 'none';
//         }
//     });

//     // Accept cookies action
//     acceptButton.addEventListener('click', function() {
//         // Add your logic for accepting cookies here (e.g., setting cookies)
//         hideCookieConsent();
//     });

//     // Reject cookies action
//     rejectButton.addEventListener('click', function() {
//         // Add your logic for rejecting cookies here (e.g., disabling non-essential cookies)
//         hideCookieConsent();
//     });

//     // Close button action
//     closeButton.addEventListener('click', function() {
//         hideCookieConsent();
//     });

//     // Function to hide the cookie consent banner
//     function hideCookieConsent() {
//         cookieConsent.style.display = 'none';
//         sessionStorage.setItem('cookieBannerDismissed', 'true');
//     }

//     // Check if the cookie consent banner was dismissed previously
//     if (sessionStorage.getItem('cookieBannerDismissed')) {
//         cookieConsent.style.display = 'none';
//     }
// });


document.addEventListener("DOMContentLoaded", function() {
    var learnMoreLink = document.getElementById('learn-more-link');
    var showLessLink = document.getElementById('show-less-link');
    var learnMoreContent = document.getElementById('learn-more-content');
    var acceptButton = document.querySelector('.accept-cookies');
    var rejectButton = document.querySelector('.reject-cookies');
    var cookieConsent = document.getElementById('cookie-consent');
    var closeButton = document.getElementById('closeBtn');

    // Toggle learn more content visibility
    learnMoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        learnMoreContent.style.display = 'block';
        learnMoreLink.style.display = 'none';
        showLessLink.style.display = 'inline'; // Show "Show Less" link
    });

    // Toggle less content visibility
    showLessLink.addEventListener('click', function(event) {
        event.preventDefault();
        learnMoreContent.style.display = 'none';
        learnMoreLink.style.display = 'inline'; // Show "Learn More" link
        showLessLink.style.display = 'none'; // Hide "Show Less" link
    });

    // Accept cookies action
    acceptButton.addEventListener('click', function() {
        // Add your logic for accepting cookies here (e.g., setting cookies)
        hideCookieConsent();
    });

    // Reject cookies action
    rejectButton.addEventListener('click', function() {
        // Add your logic for rejecting cookies here (e.g., disabling non-essential cookies)
        hideCookieConsent();
    });

    // Close button action
    closeButton.addEventListener('click', function() {
        hideCookieConsent();
    });

    // Function to hide the cookie consent banner
    function hideCookieConsent() {
        cookieConsent.style.display = 'none';
        sessionStorage.setItem('cookieBannerDismissed', 'true');
    }

    // Check if the cookie consent banner was dismissed previously
    if (sessionStorage.getItem('cookieBannerDismissed')) {
        cookieConsent.style.display = 'none';
    }
});
