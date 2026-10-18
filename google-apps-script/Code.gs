/**
 * =========================================================================
 * UMANG AYURVEDIC CLINIC - APPOINTMENT NOTIFICATION SYSTEM
 * Google Apps Script (Code.gs)
 * =========================================================================
 * Instructions:
 * 1. Open Google Sheets (or script.google.com)
 * 2. If using Google Sheets: Click Extensions > Apps Script
 * 3. Delete any default code and paste this entire code.
 * 4. Replace RECIPIENT_EMAIL with your email address where you want to receive bookings.
 * 5. Click "Deploy" > "New deployment" > Select type "Web app".
 * 6. Under "Execute as": select "Me" (your email).
 * 7. Under "Who has access": select "Anyone".
 * 8. Click "Deploy", authorize the permissions, and copy the Web App URL.
 * 9. Paste that URL in your website's `src/config/api.js` file.
 * =========================================================================
 */

// CHANGE THIS TO YOUR CLINIC EMAIL ADDRESS
var RECIPIENT_EMAIL = "umangayurvedicclinicthane@gmail.com"; // e.g. "yourclinic@gmail.com"
var CLINIC_NAME = "Umang Ayurvedic Clinic";
var CLINIC_PHONE = "98338 26366 / 8652674047";
var CLINIC_ADDRESS = "Office No. 101, 1st Floor, Siddharth Tower, Thane Station (West), Maharashtra";

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var data = {};

    // 1. Parse incoming data (handles JSON, Form, and URLSearchParams)
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var name = data.name || "अज्ञात मरीज (Not Provided)";
    var mobile = data.mobile || "N/A";
    var treatment = data.treatment || "General Consultation";
    var date = data.date || "Not Specified";
    var time = data.time || "Not Specified";
    var message = data.message || "कोई संदेश नहीं (None)";
    var submittedAt = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd MMM yyyy, hh:mm a");

    // Clean phone number for links
    var cleanPhone = mobile.replace(/[^0-9]/g, '');
    if (cleanPhone.length === 10) {
      cleanPhone = "91" + cleanPhone;
    }

    // 2. Build High-End Responsive HTML Email
    var emailSubject = "🌿 नया अपॉइंटमेंट अनुरोध: " + name + " (" + treatment + ") | Umang Clinic";
    var emailHtml = generateProfessionalEmailHtml({
      name: name,
      mobile: mobile,
      cleanPhone: cleanPhone,
      treatment: treatment,
      date: date,
      time: time,
      message: message,
      submittedAt: submittedAt
    });

    // Plain text fallback
    var plainText = "नया अपॉइंटमेंट अनुरोध (Umang Ayurvedic Clinic)\n\n" +
      "नाम: " + name + "\n" +
      "मोबाइल: " + mobile + "\n" +
      "उपचार: " + treatment + "\n" +
      "तारीख: " + date + "\n" +
      "समय: " + time + "\n" +
      "संदेश: " + message + "\n" +
      "तारीख व समय: " + submittedAt;

    // 3. Send Email Notification
    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: emailSubject,
      htmlBody: emailHtml,
      body: plainText
    });

    // 4. If script is inside a Google Sheet, record the row automatically
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet();
      if (sheet) {
        var activeSheet = sheet.getActiveSheet();
        if (activeSheet.getLastRow() === 0) {
          activeSheet.appendRow([
            "Timestamp",
            "Patient Name",
            "Mobile Number",
            "Treatment Required",
            "Preferred Date",
            "Preferred Time",
            "Patient Concern",
            "Status"
          ]);
          activeSheet.getRange(1, 1, 1, 8).setFontWeight("bold").setBackground("#1B4332").setFontColor("#FFFFFF");
        }
        activeSheet.appendRow([
          submittedAt,
          name,
          mobile,
          treatment,
          date,
          time,
          message,
          "New / Pending"
        ]);
      }
    } catch (sheetErr) {
      // Spreadsheet logging is optional, script continues without failure
    }

    // 5. Return success JSON
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Appointment email sent successfully"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    clinic: CLINIC_NAME,
    message: "Google Apps Script Appointment Webhook is active and running."
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Generates an ultra-professional, modern HTML Email Template
 */
function generateProfessionalEmailHtml(details) {
  return '' +
    '<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
    '  <meta charset="utf-8">' +
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '  <title>New Appointment</title>' +
    '</head>' +
    '<body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">' +
    '  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f4f6f8; padding: 25px 10px;">' +
    '    <tr>' +
    '      <td align="center">' +
    '        <!-- Main Container Card -->' +
    '        <table width="600" border="0" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); max-width: 600px; width: 100%; border: 1px solid #e5e7eb;">' +
    '          ' +
    '          <!-- Header Banner -->' +
    '          <tr>' +
    '            <td style="background: linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%); padding: 32px 30px; text-align: center; color: #ffffff;">' +
    '              <div style="font-size: 26px; font-weight: 800; letter-spacing: 0.5px; margin-bottom: 6px;">' +
    '                🌿 UMANG AYURVEDIC CLINIC' +
    '              </div>' +
    '              <div style="font-size: 13px; color: #D8F3DC; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">' +
    '                नया अपॉइंटमेंट अनुरोध | New Patient Request' +
    '              </div>' +
    '              <div style="display: inline-block; background-color: rgba(255,255,255,0.18); border-radius: 20px; padding: 4px 14px; font-size: 11px; margin-top: 12px; color: #ffffff; font-weight: bold;">' +
    '                Office No. 101, Thane (West)' +
    '              </div>' +
    '            </td>' +
    '          </tr>' +
    '          ' +
    '          <!-- Notification Bar -->' +
    '          <tr>' +
    '            <td style="background-color: #F0FDF4; border-bottom: 1px solid #DCFCE7; padding: 14px 25px; text-align: center;">' +
    '              <span style="color: #166534; font-size: 13px; font-weight: 600;">' +
    '                ⏰ प्राप्त हुआ: ' + details.submittedAt + '' +
    '              </span>' +
    '            </td>' +
    '          </tr>' +
    '          ' +
    '          <!-- Body Content -->' +
    '          <tr>' +
    '            <td style="padding: 30px 25px;">' +
    '              <h3 style="margin-top: 0; margin-bottom: 20px; font-size: 18px; color: #111827; border-bottom: 2px solid #E5E7EB; padding-bottom: 10px;">' +
    '                📋 मरीज की जानकारी (Patient Details)' +
    '              </h3>' +
    '              ' +
    '              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">' +
    '                ' +
    '                <!-- Patient Name -->' +
    '                <tr>' +
    '                  <td width="35%" style="padding: 10px 0; color: #4B5563; font-size: 14px; font-weight: 600;">' +
    '                    👤 मरीज का नाम:' +
    '                  </td>' +
    '                  <td width="65%" style="padding: 10px 0; color: #111827; font-size: 16px; font-weight: 800;">' +
    '                    ' + details.name + '' +
    '                  </td>' +
    '                </tr>' +
    '                ' +
    '                <!-- Mobile Number -->' +
    '                <tr>' +
    '                  <td style="padding: 10px 0; color: #4B5563; font-size: 14px; font-weight: 600; border-top: 1px solid #F3F4F6;">' +
    '                    📱 मोबाइल नंबर:' +
    '                  </td>' +
    '                  <td style="padding: 10px 0; color: #1B4332; font-size: 17px; font-weight: 800; border-top: 1px solid #F3F4F6;">' +
    '                    <a href="tel:+' + details.cleanPhone + '" style="color: #1B4332; text-decoration: underline;">' + details.mobile + '</a>' +
    '                  </td>' +
    '                </tr>' +
    '                ' +
    '                <!-- Treatment -->' +
    '                <tr>' +
    '                  <td style="padding: 10px 0; color: #4B5563; font-size: 14px; font-weight: 600; border-top: 1px solid #F3F4F6;">' +
    '                    🩺 बीमारी / समस्या:' +
    '                  </td>' +
    '                  <td style="padding: 10px 0; border-top: 1px solid #F3F4F6;">' +
    '                    <span style="display: inline-block; background-color: #E8F5E9; color: #1B4332; font-weight: 700; font-size: 13px; padding: 4px 10px; rounded-md; border-radius: 6px; border: 1px solid #C8E6C9;">' +
    '                      ' + details.treatment + '' +
    '                    </span>' +
    '                  </td>' +
    '                </tr>' +
    '                ' +
    '                <!-- Preferred Date -->' +
    '                <tr>' +
    '                  <td style="padding: 10px 0; color: #4B5563; font-size: 14px; font-weight: 600; border-top: 1px solid #F3F4F6;">' +
    '                    📅 मिलने की तारीख:' +
    '                  </td>' +
    '                  <td style="padding: 10px 0; color: #1F2937; font-size: 14px; font-weight: 700; border-top: 1px solid #F3F4F6;">' +
    '                    ' + (details.date || "मरीज ने तय नहीं किया") + '' +
    '                  </td>' +
    '                </tr>' +
    '                ' +
    '                <!-- Preferred Time -->' +
    '                <tr>' +
    '                  <td style="padding: 10px 0; color: #4B5563; font-size: 14px; font-weight: 600; border-top: 1px solid #F3F4F6;">' +
    '                    ⏰ मिलने का समय:' +
    '                  </td>' +
    '                  <td style="padding: 10px 0; color: #1F2937; font-size: 14px; font-weight: 700; border-top: 1px solid #F3F4F6;">' +
    '                    ' + (details.time || "मरीज ने तय नहीं किया") + '' +
    '                  </td>' +
    '                </tr>' +
    '              </table>' +
    '              ' +
    '              <!-- Patient Message Box -->' +
    '              <div style="background-color: #F9FAFB; border-left: 4px solid #1B4332; padding: 14px 18px; border-radius: 0 8px 8px 0; margin-bottom: 25px;">' +
    '                <div style="font-size: 12px; color: #6B7280; font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">' +
    '                  मरीज की तकलीफ / संदेश (Patient Note):' +
    '                </div>' +
    '                <div style="font-size: 14px; color: #1F2937; line-height: 1.5; font-style: italic;">' +
    '                  "' + details.message + '"' +
    '                </div>' +
    '              </div>' +
    '              ' +
    '              <!-- Quick Action Buttons for Clinic Staff -->' +
    '              <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #E5E7EB;">' +
    '                <a href="tel:+' + details.cleanPhone + '" style="display: inline-block; background-color: #1B4332; color: #ffffff; text-decoration: none; padding: 12px 22px; font-size: 14px; font-weight: bold; border-radius: 8px; margin: 4px 6px;">' +
    '                  📞 कॉल करें (Call ' + details.mobile + ')' +
    '                </a>' +
    '                <a href="https://wa.me/' + details.cleanPhone + '?text=' + encodeURIComponent('नमस्ते ' + details.name + ', आपका उमंग आयुर्वेदिक क्लिनिक में अपॉइंटमेंट अनुरोध प्राप्त हुआ है।') + '" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 22px; font-size: 14px; font-weight: bold; border-radius: 8px; margin: 4px 6px;">' +
    '                  💬 WhatsApp मैसेज भेजें' +
    '                </a>' +
    '              </div>' +
    '            </td>' +
    '          </tr>' +
    '          ' +
    '          <!-- Footer -->' +
    '          <tr>' +
    '            <td style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 22px; text-align: center; color: #64748B; font-size: 12px; line-height: 1.6;">' +
    '              <strong>' + CLINIC_NAME + '</strong><br>' +
    '              ' + CLINIC_ADDRESS + '<br>' +
    '              हेल्पलाइन फोन: ' + CLINIC_PHONE + '<br>' +
    '              समय: सोम-शनि सुबह 10 AM - रात 9 PM | रविवार सुबह 10 AM - 2 PM' +
    '            </td>' +
    '          </tr>' +
    '          ' +
    '        </table>' +
    '      </td>' +
    '    </tr>' +
    '  </table>' +
    '</body>' +
    '</html>';
}
