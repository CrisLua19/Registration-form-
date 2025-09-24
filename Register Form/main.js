document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const successMessage = document.getElementById('successMessage');
  const submittedDataDiv = document.getElementById('submittedData');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value.trim();
    });

    // Build HTML to display submitted data
    let html = '<ul style="list-style:none; padding-left:0;">';

    // Map form field keys to user-friendly labels
    const labels = {
      firstName: 'First Name',
      middleName: 'Middle Name',
      lastName: 'Last Name',
      suffix: 'Suffix',
      email: 'Email',
      contact: 'Contact Number',
      batch: 'Batch',
      idNo: 'ID Number',
      technology: 'Technology',
    };

    for (const key in labels) {
      const value = data[key] || '(Not provided)';
      html += `<li><strong>${labels[key]}:</strong> ${value}</li>`;
    }
    html += '</ul>';

    submittedDataDiv.innerHTML = html;

    successMessage.classList.remove('hidden');

    // Reset the form after submission
    form.reset();

    // Hide success message after 10 seconds
    setTimeout(() => {
      successMessage.classList.add('hidden');
      submittedDataDiv.innerHTML = '';
    }, 10000);
  });
});