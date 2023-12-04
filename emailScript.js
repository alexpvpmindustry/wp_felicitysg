function populateMailto() {
    const form = document.getElementById('contactForm');
    const firstname = form.elements['firstname'].value;
    const lastname = form.elements['lastname'].value;
    const mobile = form.elements['mobile'].value; 
    const enquiry = form.elements['enquiry'].value;

    const subject = "New Enquiry from felicity.sg";
    const emailBody = `First Name: ${firstname}\nLast Name: ${lastname}\nMobile Number: ${mobile}\nEnquiry: ${enquiry}`;

    const mailtoLink = `mailto:consultant@felicity.sg?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
}
