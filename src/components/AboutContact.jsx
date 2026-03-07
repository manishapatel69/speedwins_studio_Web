import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const AboutContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Status can be: 'idle', 'submitting', 'success', 'error'
    const [submitStatus, setSubmitStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSendEmail = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in the required fields (Name, Email, Message)");
            return;
        }

        setSubmitStatus('submitting');

        try {
            // NOTE: To securely send via Gmail SMTP from a React frontend, we use EmailJS.
            // 1. Go to https://www.emailjs.com/
            // 2. Create a free account and connect your Gmail (speedwinsgame@gmail.com) as a service
            // 3. Create an email template
            // 4. Replace these 3 strings with your actual keys from EmailJS dashboard
            const serviceId = 'service_ntqy14s';
            const templateId = 'template_emctsa3';
            const publicKey = 'MIVIDDaXGY97A1IjP';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'speedwinsgame@gmail.com'
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            // Success! Clear the fields and show message
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Hide success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);

        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus('error');

            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        }
    };

    return (
        <div className="bottom-section" id="about">
            <div className="about-side">
                <div className="about-label">About Us</div>
                <h2 className="about-title">A Dynamic Duo Building Mobile Magic</h2>
                <p className="about-desc">We are a dynamic team with complementary skills, dedicated to crafting fun and engaging mobile puzzle games for players worldwide. Based in India, building for everyone.</p>
                <div className="stats">
                    <div className="stat-item"><div className="stat-num">4+</div><div className="stat-label">Games Live</div></div>
                    <div className="stat-item"><div className="stat-num">2</div><div className="stat-label">Specialists</div></div>
                    <div className="stat-item"><div className="stat-num">∞</div><div className="stat-label">Ambition</div></div>
                </div>
            </div>
            <div className="contact-side">
                <div className="about-label">Get in Touch</div>
                <h3>Let's Build Something Together</h3>
                <div className="form-row">
                    <div className="form-group"><input className="form-input" name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} /></div>
                    <div className="form-group"><input className="form-input" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} /></div>
                </div>
                <div className="form-group"><input className="form-input" name="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} /></div>
                <div className="form-group"><textarea className="form-textarea" name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea></div>
                <button
                    className="btn-submit"
                    onClick={handleSendEmail}
                    disabled={submitStatus === 'submitting'}
                    style={{ opacity: submitStatus === 'submitting' ? 0.7 : 1 }}
                >
                    {submitStatus === 'submitting' ? 'Sending...' : 'Send Message \u2192'}
                </button>

                {submitStatus === 'success' && (
                    <div style={{ marginTop: '16px', color: '#4CAF50', fontSize: '14px', fontWeight: '500', padding: '12px', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.2)' }}>
                        ✨ Message sent successfully! We'll be in touch soon.
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div style={{ marginTop: '16px', color: '#F44336', fontSize: '14px', fontWeight: '500', padding: '12px', background: 'rgba(244, 67, 54, 0.1)', borderRadius: '8px', border: '1px solid rgba(244, 67, 54, 0.2)' }}>
                        ⚠️ Failed to send message. Please try again later.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AboutContact;
