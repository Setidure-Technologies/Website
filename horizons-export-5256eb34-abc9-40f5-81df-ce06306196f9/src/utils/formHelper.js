/**
 * Helper functions for Google Form integration
 */

// This function can be injected into the Google Form iframe to detect submissions
export const injectFormSubmissionListener = (iframe) => {
  try {
    if (!iframe || !iframe.contentWindow) return;
    
    // Wait for iframe to load
    iframe.addEventListener('load', () => {
      try {
        // Check if we can access the iframe content (same-origin policy might prevent this)
        const iframeDocument = iframe.contentWindow.document;
        
        // Look for the form element
        const form = iframeDocument.querySelector('form');
        if (form) {
          // Add submit event listener
          form.addEventListener('submit', () => {
            // Notify parent window
            window.parent.postMessage({ type: 'form-submission-success' }, '*');
          });
          
          // Also look for the confirmation page that Google shows after submission
          const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
              if (mutation.type === 'childList') {
                // Check if the thank you message is present
                const thankYouMessage = iframeDocument.querySelector('.freebirdFormviewerViewResponseConfirmContentContainer');
                if (thankYouMessage) {
                  window.parent.postMessage({ type: 'form-submission-success' }, '*');
                  observer.disconnect();
                }
              }
            }
          });
          
          // Start observing
          observer.observe(iframeDocument.body, { childList: true, subtree: true });
        }
      } catch (error) {
        console.error('Could not inject form submission listener:', error);
      }
    });
  } catch (error) {
    console.error('Error setting up form helper:', error);
  }
};

// Alternative approach using URL monitoring
export const setupFormRedirectMonitor = (iframe) => {
  if (!iframe) return;
  
  let checkCount = 0;
  const maxChecks = 100;
  
  const checkForRedirect = () => {
    try {
      // Attempt to check the current URL
      const currentUrl = iframe.contentWindow.location.href;
      
      // If URL contains formResponse, it means the form was submitted
      if (currentUrl.includes('formResponse')) {
        window.parent.postMessage({ type: 'form-submission-success' }, '*');
        return true;
      }
    } catch (e) {
      // Cross-origin restrictions might prevent reading the URL
      // This is expected and we'll continue polling
    }
    
    checkCount++;
    if (checkCount < maxChecks) {
      setTimeout(checkForRedirect, 1000);
    }
    
    return false;
  };
  
  // Start checking after the iframe loads
  iframe.addEventListener('load', () => {
    setTimeout(checkForRedirect, 2000);
  });
};
