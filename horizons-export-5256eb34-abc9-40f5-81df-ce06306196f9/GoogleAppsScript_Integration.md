# Google Apps Script Integration for Appointment Booking

This guide explains how to set up the automated appointment booking system using Google Apps Script, Google Forms, Google Sheets, and Google Calendar.

## Overview

The system works as follows:
1. **User submits form** → **Immediate email notification to admins**
2. **Admin confirms in Google Sheet** → **Automated meeting invite sent to user**

## Setup Instructions

### 1. Google Form Setup

Your form link: `https://forms.gle/B7fxqA9mSVgoYYY38`

**Form Fields:**
- Full Name (Short answer, Required)
- Email Address (Short answer, Required)
- Preferred Date (Date, Required)
- Preferred Time Slot (Short answer, Required)
- Reason for Appointment (Paragraph, Optional)

### 2. Google Sheet Setup

**Sheet Columns:**
- A: Timestamp
- B: Full Name
- C: Email Address
- D: Preferred Date
- E: Preferred Time Slot
- F: Reason for Appointment
- G: Confirmed (Yes/No dropdown)
- H: Notified (Yes/No)

### 3. Google Apps Script Code

Create a new Google Apps Script project and add the following code:

```javascript
/**
 * Appointment Booking Automation Script
 * This script handles form submissions and meeting confirmations
 */

// Configuration
const ADMIN_EMAILS = ['aashit@erudites.in', 'admin@setidure.com'];
const CALENDAR_ID = 'primary'; // Use 'primary' for main calendar
const MEETING_DURATION = 30; // minutes

/**
 * Triggered when form is submitted
 */
function onFormSubmit(e) {
  try {
    const response = e.namedValues;
    const timestamp = new Date().toLocaleString();
    
    const formData = {
      timestamp: timestamp,
      fullName: response['Full Name'][0],
      email: response['Email Address'][0],
      preferredDate: response['Preferred Date'][0],
      preferredTimeSlot: response['Preferred Time Slot'][0],
      reason: response['Reason for Appointment'] ? response['Reason for Appointment'][0] : 'Not specified'
    };
    
    // Send notification to admins
    sendAdminNotification(formData);
    
    console.log('Form submission processed successfully');
  } catch (error) {
    console.error('Error processing form submission:', error);
  }
}

/**
 * Send notification email to administrators
 */
function sendAdminNotification(formData) {
  const subject = `🔔 New Appointment Request from ${formData.fullName}`;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0ea5e9, #3b82f6); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
        <h2 style="margin: 0;">📅 New Appointment Request</h2>
      </div>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">👤 Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #475569;">${formData.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">📧 Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #475569;">${formData.email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">📅 Preferred Date:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #475569;">${formData.preferredDate}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">⏰ Preferred Time:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #475569;">${formData.preferredTimeSlot}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">📝 Reason:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #475569;">${formData.reason}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #334155;">🕐 Submitted:</td>
            <td style="padding: 10px; color: #475569;">${formData.timestamp}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px; border-left: 4px solid #3b82f6;">
          <p style="margin: 0; color: #1e40af; font-weight: bold;">📋 Next Steps:</p>
          <p style="margin: 5px 0 0 0; color: #1e40af;">Go to your Google Sheet and mark "Confirmed" as "Yes" to automatically send the meeting invite to the user.</p>
        </div>
      </div>
    </div>
  `;
  
  const textBody = `
New Appointment Request

Name: ${formData.fullName}
Email: ${formData.email}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTimeSlot}
Reason: ${formData.reason}
Submitted: ${formData.timestamp}

Go to your Google Sheet and mark "Confirmed" as "Yes" to send the meeting invite.
  `;
  
  // Send to all admin emails
  ADMIN_EMAILS.forEach(adminEmail => {
    GmailApp.sendEmail(
      adminEmail,
      subject,
      textBody,
      {
        htmlBody: htmlBody,
        from: 'admin@setidure.com'
      }
    );
  });
}

/**
 * Triggered when sheet is edited (when admin confirms appointment)
 */
function onSheetEdit(e) {
  try {
    const sheet = e.source.getActiveSheet();
    const range = e.range;
    
    // Check if edit was made to the "Confirmed" column (column G)
    if (range.getColumn() === 7 && range.getValue() === 'Yes') {
      const row = range.getRow();
      
      // Check if this appointment hasn't been notified yet
      const notifiedCell = sheet.getRange(row, 8);
      if (notifiedCell.getValue() !== 'Yes') {
        
        // Get appointment details
        const appointmentData = {
          fullName: sheet.getRange(row, 2).getValue(),
          email: sheet.getRange(row, 3).getValue(),
          preferredDate: sheet.getRange(row, 4).getValue(),
          preferredTimeSlot: sheet.getRange(row, 5).getValue(),
          reason: sheet.getRange(row, 6).getValue()
        };
        
        // Create calendar event and send confirmation
        createMeetingAndSendConfirmation(appointmentData);
        
        // Mark as notified
        notifiedCell.setValue('Yes');
        
        console.log('Appointment confirmed and invitation sent');
      }
    }
  } catch (error) {
    console.error('Error processing sheet edit:', error);
  }
}

/**
 * Create Google Calendar event and send confirmation email
 */
function createMeetingAndSendConfirmation(appointmentData) {
  try {
    // Parse the date and time
    const appointmentDate = new Date(appointmentData.preferredDate);
    const timeSlot = appointmentData.preferredTimeSlot;
    
    // Create start and end times (you may need to adjust time parsing)
    const startTime = new Date(appointmentDate);
    const endTime = new Date(appointmentDate);
    endTime.setMinutes(endTime.getMinutes() + MEETING_DURATION);
    
    // Create calendar event
    const event = CalendarApp.getCalendarById(CALENDAR_ID).createEvent(
      `Appointment with ${appointmentData.fullName}`,
      startTime,
      endTime,
      {
        description: `
Appointment Details:
- Name: ${appointmentData.fullName}
- Email: ${appointmentData.email}
- Reason: ${appointmentData.reason}
- Duration: ${MEETING_DURATION} minutes

Meeting will be conducted via Google Meet (link will be automatically generated).
        `,
        guests: appointmentData.email,
        sendInvites: true
      }
    );
    
    // Get the Google Meet link
    const meetLink = event.getHangoutLink() || 'Meeting link will be provided separately';
    
    // Send confirmation email to user
    sendUserConfirmation(appointmentData, meetLink, startTime);
    
  } catch (error) {
    console.error('Error creating meeting:', error);
  }
}

/**
 * Send confirmation email to user
 */
function sendUserConfirmation(appointmentData, meetLink, startTime) {
  const subject = `✅ Your Appointment is Confirmed - ${appointmentData.fullName}`;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
        <h2 style="margin: 0;">✅ Appointment Confirmed!</h2>
      </div>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
        <p style="color: #374151; font-size: 16px;">Hi ${appointmentData.fullName},</p>
        
        <p style="color: #374151;">Your appointment has been confirmed! Here are the details:</p>
        
        <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1e40af;">📅 Date:</td>
              <td style="padding: 8px; color: #1e40af;">${startTime.toDateString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1e40af;">⏰ Time:</td>
              <td style="padding: 8px; color: #1e40af;">${startTime.toLocaleTimeString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1e40af;">⏱️ Duration:</td>
              <td style="padding: 8px; color: #1e40af;">${MEETING_DURATION} minutes</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1e40af;">🎯 Purpose:</td>
              <td style="padding: 8px; color: #1e40af;">${appointmentData.reason}</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
          <p style="margin: 0 0 10px 0; color: #065f46; font-weight: bold;">🎥 Join the Meeting:</p>
          <p style="margin: 0; color: #065f46;">
            <a href="${meetLink}" style="color: #059669; text-decoration: none; font-weight: bold;">
              Click here to join Google Meet
            </a>
          </p>
        </div>
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #92400e; font-size: 14px;">
            <strong>💡 Important:</strong> Please join the meeting a few minutes early. If you need to reschedule, please contact us at admin@setidure.com
          </p>
        </div>
        
        <p style="color: #374151;">We look forward to speaking with you!</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            Best regards,<br>
            <strong>Team Setidure</strong><br>
            Email: admin@setidure.com<br>
            Phone: +91 9289920323
          </p>
        </div>
      </div>
    </div>
  `;
  
  const textBody = `
Your Appointment is Confirmed!

Hi ${appointmentData.fullName},

Your appointment has been confirmed for:
- Date: ${startTime.toDateString()}
- Time: ${startTime.toLocaleTimeString()}
- Duration: ${MEETING_DURATION} minutes
- Purpose: ${appointmentData.reason}

Google Meet Link: ${meetLink}

Please join the meeting a few minutes early. If you need to reschedule, please contact us at admin@setidure.com

Best regards,
Team Setidure
Email: admin@setidure.com
Phone: +91 9289920323
  `;
  
  GmailApp.sendEmail(
    appointmentData.email,
    subject,
    textBody,
    {
      htmlBody: htmlBody,
      from: 'admin@setidure.com'
    }
  );
}
```

### 4. Trigger Setup

1. **Form Submit Trigger:**
   - Go to Google Apps Script → Triggers
   - Add trigger: `onFormSubmit`
   - Event source: From form
   - Event type: On form submit

2. **Sheet Edit Trigger:**
   - Add trigger: `onSheetEdit`
   - Event source: From spreadsheet
   - Event type: On edit

### 5. Permissions

Grant the following permissions to your script:
- Gmail API (for sending emails)
- Google Calendar API (for creating events)
- Google Sheets API (for reading/writing data)
- Google Forms API (for form responses)

### 6. Testing

1. Submit a test form entry
2. Check if admin notification email is received
3. Mark "Confirmed" as "Yes" in the Google Sheet
4. Verify that the user receives the meeting invitation

### 7. Customization Options

**Email Templates:** Modify the HTML in `sendAdminNotification()` and `sendUserConfirmation()`

**Meeting Duration:** Change `MEETING_DURATION` variable

**Calendar:** Use a specific calendar ID instead of 'primary'

**Time Parsing:** Adjust time slot parsing logic based on your form format

### 8. Troubleshooting

- Check Google Apps Script logs for errors
- Ensure all APIs are enabled in Google Cloud Console
- Verify email permissions and sending limits
- Test with a simple form submission first

This automation will significantly streamline your appointment booking process!