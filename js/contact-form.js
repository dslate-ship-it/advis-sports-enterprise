(function () {
  function getFormspreeEndpoint() {
    var id = window.FORMSPREE_FORM_ID;
    if (!id || id === 'YOUR_FORMSPREE_FORM_ID') {
      return null;
    }
    return 'https://formspree.io/f/' + id;
  }

  window.handleFormSubmit = async function (e) {
    e.preventDefault();

    var endpoint = getFormspreeEndpoint();
    var form = document.getElementById('contact-form');
    var success = document.getElementById('form-success');
    var errorEl = document.getElementById('form-error');
    var submitBtn = document.getElementById('contact-submit-btn');

    if (!endpoint) {
      errorEl.textContent =
        'Contact form is not configured yet. Add your Formspree form ID in js/formspree-config.js.';
      errorEl.style.display = 'block';
      return;
    }

    var formData = new FormData(form);

    errorEl.style.display = 'none';
    errorEl.textContent = '';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      var response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });

      var data = await response.json().catch(function () {
        return {};
      });

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      form.style.display = 'none';
      success.style.display = 'block';
    } catch (err) {
      errorEl.textContent =
        'Something went wrong. Please try again or email admin@theadvisory.global directly.';
      errorEl.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Your Inquiry';
    }
  };
})();
