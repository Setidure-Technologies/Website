import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * A reusable Google Calendar booking button component
 * @param {Object} props
 * @param {string} [props.label] - Custom label for the button
 * @param {string} [props.color] - Custom color for the button
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.loadingText] - Text to display while loading
 * @param {string} [props.calendarUrl] - Google Calendar appointment scheduling URL
 * @param {string} [props.buttonStyle] - Optional inline styles for the button
 * @param {string} [props.buttonClassName] - Optional additional classes for the button
 */
const BookingCalendar = ({
  label = 'Book an appointment',
  color = '#039BE5',
  className = '',
  loadingText = 'Loading appointment scheduler...',
  calendarUrl = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3vZIzu1bXtYe_P_YcBPQTmjxmOhy9Tdd3z0_j2bvg351Pi9dHq7_vrA3TggW1_71NGQ9GkJ6Q4?gv=true',
  buttonStyle = {},
  buttonClassName = ''
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure the DOM is fully loaded
    if (!containerRef.current) return;

    // Add CSS to head if not already present
    if (!document.getElementById('google-calendar-css')) {
      const link = document.createElement('link');
      link.id = 'google-calendar-css';
      link.rel = 'stylesheet';
      link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
      document.head.appendChild(link);
    }

    // Add script to body if not already present
    if (!document.getElementById('google-calendar-script')) {
      const script = document.createElement('script');
      script.id = 'google-calendar-script';
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
      script.async = true;
      
      // When script loads, initialize the button
      script.onload = () => initializeButton();
      document.body.appendChild(script);
    } else {
      // If script is already loaded, just initialize the button
      initializeButton();
    }

    // Function to initialize the button
    function initializeButton() {
      // Small timeout to ensure calendar object is available
      setTimeout(() => {
        if (window.calendar && containerRef.current) {
          // Check if there are any child elements in the container
          // If there are, the button might already be loaded
          if (containerRef.current.children.length > 0 && 
              containerRef.current.querySelector('iframe')) {
            return;
          }
          
          try {
            window.calendar.schedulingButton.load({
              url: calendarUrl,
              color: color,
              label: label,
              target: containerRef.current,
              ...(buttonClassName && { className: buttonClassName }),
              ...(Object.keys(buttonStyle).length > 0 && { style: buttonStyle })
            });
          } catch (error) {
            console.error('Error loading Google Calendar button:', error);
            if (containerRef.current) {
              containerRef.current.innerHTML = `
                <a href="${calendarUrl}" target="_blank" rel="noopener noreferrer" 
                  class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold">
                  ${label}
                </a>
              `;
            }
          }
        }
      }, 300);
    }

    // Cleanup function
    return () => {
      // No cleanup needed as we're keeping the script/CSS for reuse
    };
  }, [label, color, calendarUrl, buttonClassName, buttonStyle]);

  return (
    <div 
      ref={containerRef} 
      className={`flex justify-center p-6 ${className}`}
    >
      {/* The button will be inserted here by the Google script */}
      <div className="text-slate-400 text-sm">{loadingText}</div>
    </div>
  );
};

export default BookingCalendar;
