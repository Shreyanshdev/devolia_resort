import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration - You'll need to set these environment variables
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

// Beautiful HTML email template for admin notification
function getAdminEmailTemplate(data: {
    name: string;
    email: string;
    phone: string;
    occasion: string;
    reason: string;
    expectedGuests: string;
    preferredDate: string;
    message: string;
}) {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background-color: #FFFBF5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #FFFBF5;">
    <!-- Header -->
    <tr>
      <td style="background-color: #2D2A26; padding: 40px 30px; text-align: center;">
        <h1 style="margin: 0; color: #C4A962; font-size: 28px; font-weight: 400; letter-spacing: 0.1em;">
          DEVOLIA
        </h1>
        <p style="margin: 10px 0 0; color: rgba(255,251,245,0.7); font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;">
          New Contact Form Submission
        </p>
      </td>
    </tr>
    
    <!-- Gold Accent Bar -->
    <tr>
      <td style="background-color: #C4A962; height: 4px;"></td>
    </tr>
    
    <!-- Content -->
    <tr>
      <td style="padding: 40px 30px;">
        <h2 style="margin: 0 0 30px; color: #2D2A26; font-size: 24px; font-weight: 400;">
          📬 New Inquiry Received
        </h2>
        
        <!-- Contact Details Card -->
        <table width="100%" style="background-color: #fff; border: 1px solid rgba(45,42,38,0.1); border-radius: 8px; margin-bottom: 30px;">
          <tr>
            <td style="padding: 25px;">
              <table width="100%">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(45,42,38,0.08);">
                    <p style="margin: 0; color: #C4A962; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Name</p>
                    <p style="margin: 5px 0 0; color: #2D2A26; font-size: 16px; font-weight: 600;">${data.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(45,42,38,0.08);">
                    <p style="margin: 0; color: #C4A962; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Phone</p>
                    <p style="margin: 5px 0 0; color: #2D2A26; font-size: 16px;">
                      <a href="tel:${data.phone}" style="color: #2D2A26; text-decoration: none;">${data.phone}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(45,42,38,0.08);">
                    <p style="margin: 0; color: #C4A962; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Email</p>
                    <p style="margin: 5px 0 0; color: #2D2A26; font-size: 16px;">
                      <a href="mailto:${data.email}" style="color: #2D2A26; text-decoration: none;">${data.email}</a>
                    </p>
                  </td>
                </tr>
                ${data.occasion ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(45,42,38,0.08);">
                    <p style="margin: 0; color: #C4A962; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Occasion</p>
                    <p style="margin: 5px 0 0; color: #2D2A26; font-size: 16px;">${data.occasion}</p>
                  </td>
                </tr>
                ` : ''}
                ${data.reason ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(45,42,38,0.08);">
                    <p style="margin: 0; color: #C4A962; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Reason</p>
                    <p style="margin: 5px 0 0; color: #2D2A26; font-size: 16px;">${data.reason}</p>
                  </td>
                </tr>
                ` : ''}
                ${data.expectedGuests ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(45,42,38,0.08);">
                    <p style="margin: 0; color: #C4A962; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Expected Guests</p>
                    <p style="margin: 5px 0 0; color: #2D2A26; font-size: 16px;">${data.expectedGuests}</p>
                  </td>
                </tr>
                ` : ''}
                ${data.preferredDate ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(45,42,38,0.08);">
                    <p style="margin: 0; color: #C4A962; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Preferred Date</p>
                    <p style="margin: 5px 0 0; color: #2D2A26; font-size: 16px;">${data.preferredDate}</p>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>
        </table>
        
        <!-- Message -->
        <div style="background-color: #F8F6F3; padding: 25px; border-radius: 8px; border-left: 4px solid #C4A962;">
          <p style="margin: 0 0 10px; color: #C4A962; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
          <p style="margin: 0; color: #2D2A26; font-size: 15px; line-height: 1.7;">${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <!-- Action Buttons -->
        <table width="100%" style="margin-top: 30px;">
          <tr>
            <td align="center">
              <a href="tel:${data.phone}" style="display: inline-block; padding: 14px 30px; background-color: #C4A962; color: #2D2A26; text-decoration: none; border-radius: 50px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-right: 10px;">
                📞 Call Now
              </a>
              <a href="mailto:${data.email}" style="display: inline-block; padding: 14px 30px; background-color: #2D2A26; color: #FFFBF5; text-decoration: none; border-radius: 50px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                ✉️ Reply
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    
    <!-- Footer -->
    <tr>
      <td style="background-color: #2D2A26; padding: 30px; text-align: center;">
        <p style="margin: 0; color: rgba(255,251,245,0.5); font-size: 12px;">
          This is an automated notification from the Devolia Resort website.
        </p>
        <p style="margin: 10px 0 0; color: #C4A962; font-size: 12px;">
          © ${new Date().getFullYear()} Devolia Resort, Orai
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// Beautiful HTML email template for sender confirmation
function getSenderEmailTemplate(data: { name: string }) {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Devolia</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background-color: #FFFBF5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #FFFBF5;">
    <!-- Header with Image Placeholder -->
    <tr>
      <td style="background-color: #2D2A26; padding: 50px 30px; text-align: center;">
        <h1 style="margin: 0; color: #C4A962; font-size: 32px; font-weight: 400; letter-spacing: 0.15em;">
          DEVOLIA
        </h1>
        <p style="margin: 15px 0 0; color: rgba(255,251,245,0.8); font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase;">
          Premium Wedding & Event Destination
        </p>
      </td>
    </tr>
    
    <!-- Gold Accent Bar -->
    <tr>
      <td style="background-color: #C4A962; height: 4px;"></td>
    </tr>
    
    <!-- Content -->
    <tr>
      <td style="padding: 50px 30px;">
        <!-- Greeting -->
        <h2 style="margin: 0; color: #2D2A26; font-size: 26px; font-weight: 400; text-align: center;">
          Thank You, ${data.name}!
        </h2>
        
        <p style="margin: 25px 0 0; color: #5C5552; font-size: 16px; line-height: 1.8; text-align: center;">
          We have received your message and truly appreciate you reaching out to us.
        </p>
        
        <!-- Decorative Element -->
        <div style="text-align: center; margin: 30px 0;">
          <span style="display: inline-block; width: 60px; height: 1px; background-color: #C4A962;"></span>
          <span style="display: inline-block; width: 8px; height: 8px; background-color: #C4A962; border-radius: 50%; margin: 0 10px; vertical-align: middle;"></span>
          <span style="display: inline-block; width: 60px; height: 1px; background-color: #C4A962;"></span>
        </div>
        
        <!-- Promise Card -->
        <div style="background-color: #fff; border: 1px solid rgba(45,42,38,0.1); border-radius: 8px; padding: 30px; text-align: center; margin: 30px 0;">
          <h3 style="margin: 0; color: #C4A962; font-size: 14px; text-transform: uppercase; letter-spacing: 0.15em;">
            What Happens Next?
          </h3>
          <p style="margin: 20px 0 0; color: #2D2A26; font-size: 16px; line-height: 1.7;">
            Our team will review your inquiry and get back to you within <strong>24 hours</strong>. 
            For urgent matters, feel free to call us directly.
          </p>
        </div>
        
        <!-- Contact Info -->
        <table width="100%" style="background-color: #F8F6F3; border-radius: 8px; margin: 30px 0;">
          <tr>
            <td style="padding: 25px; text-align: center;">
              <p style="margin: 0 0 15px; color: #C4A962; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">
                Reach Us Directly
              </p>
              <p style="margin: 0; color: #2D2A26; font-size: 18px; font-weight: 600;">
                📞 +91 80460 59184
              </p>
              <p style="margin: 8px 0 0; color: #5C5552; font-size: 14px;">
                📍 Devoliya Garden, Orai, UP 285001
              </p>
              <p style="margin: 8px 0 0; color: #5C5552; font-size: 13px;">
                ⏰ Open 9:30 AM - 9:00 PM (All Days)
              </p>
            </td>
          </tr>
        </table>
        
        <!-- CTA Button -->
        <table width="100%">
          <tr>
            <td align="center">
              <a href="https://devolia.in" style="display: inline-block; padding: 16px 40px; background-color: #C4A962; color: #2D2A26; text-decoration: none; border-radius: 50px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
                Explore Our Venues
              </a>
            </td>
          </tr>
        </table>
        
        <!-- Warm Closing -->
        <div style="margin-top: 40px; text-align: center; border-top: 1px solid rgba(45,42,38,0.1); padding-top: 30px;">
          <p style="margin: 0; color: #5C5552; font-size: 15px; font-style: italic; line-height: 1.7;">
            "Every celebration has a story. We can't wait to hear yours."
          </p>
          <p style="margin: 20px 0 0; color: #2D2A26; font-size: 16px;">
            Warm Regards,<br>
            <strong style="color: #C4A962;">The Devolia Family</strong>
          </p>
        </div>
      </td>
    </tr>
    
    <!-- Social Links -->
    <tr>
      <td style="background-color: #F8F6F3; padding: 25px; text-align: center;">
        <p style="margin: 0 0 15px; color: #5C5552; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">
          Follow Our Journey
        </p>
        <a href="https://instagram.com/devolia.resort" style="display: inline-block; margin: 0 8px; color: #E4405F; text-decoration: none; font-size: 14px;">Instagram</a>
        <span style="color: #ddd;">|</span>
        <a href="https://facebook.com/devoliaresort" style="display: inline-block; margin: 0 8px; color: #1877F2; text-decoration: none; font-size: 14px;">Facebook</a>
        <span style="color: #ddd;">|</span>
        <a href="https://wa.me/918046059184" style="display: inline-block; margin: 0 8px; color: #25D366; text-decoration: none; font-size: 14px;">WhatsApp</a>
      </td>
    </tr>
    
    <!-- Footer -->
    <tr>
      <td style="background-color: #2D2A26; padding: 25px; text-align: center;">
        <p style="margin: 0; color: rgba(255,251,245,0.5); font-size: 11px; line-height: 1.6;">
          This email was sent because you contacted Devolia Resort.<br>
          Devoliya Garden, Jalaun-Churkhi Bypass Road, Orai 285001
        </p>
        <p style="margin: 15px 0 0; color: #C4A962; font-size: 12px;">
          © ${new Date().getFullYear()} Devolia Resort. All Rights Reserved.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const { name, email, phone, occasion, reason, expectedGuests, preferredDate, message } = data;

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: "Name, email, phone, and message are required" },
                { status: 400 }
            );
        }

        // Send email to admin
        await transporter.sendMail({
            from: `"Devolia Website" <${process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL || "contact@devolia.in",
            subject: `🔔 New Inquiry: ${occasion || "General"} - ${name}`,
            html: getAdminEmailTemplate({
                name,
                email,
                phone,
                occasion,
                reason,
                expectedGuests,
                preferredDate,
                message,
            }),
        });

        // Send confirmation email to sender
        await transporter.sendMail({
            from: `"Devolia Resort" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Thank You for Contacting Devolia Resort ✨",
            html: getSenderEmailTemplate({ name }),
        });

        return NextResponse.json(
            { success: true, message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
