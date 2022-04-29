
const validate = () => {
    // event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    const checkBox = document.getElementById('checkBox');

    if (firstName !== '' && lastName !== '' && email !== '' && phoneNumber !== '' && zipCode !== '' && checkBox.checked != false) {
        document.getElementById('display-form').style.display = 'none';
        document.getElementById('greet').style.display = 'block';
        return;
    }

    // validation check for first name
    if (firstName === '') {
        document.getElementById('firstNameInvalid').style.display = 'block';
        document.getElementById('firstNameValid').style.display = 'none';
    } else {
        document.getElementById('firstNameValid').style.display = 'block';
        document.getElementById('firstNameInvalid').style.display = 'none';
    }

    // validation check for last name
    if (lastName === '') {
        document.getElementById('lastNameInvalid').style.display = 'block';
        document.getElementById('lastNameValid').style.display = 'none';
    } else {
        document.getElementById('lastNameValid').style.display = 'block';
        document.getElementById('lastNameInvalid').style.display = 'none';
    }

    // validation check for email
    if (email === '' || !email.includes('@') || email.indexOf('@') == 0 || !email.includes('.') || email.slice(email.lastIndexOf('.')).length < 3) {
        document.getElementById('emailInvalid').style.display = 'block';
        document.getElementById('emailValid').style.display = 'none';
    }
    else {
        document.getElementById('emailValid').style.display = 'block';
        document.getElementById('emailInvalid').style.display = 'none';
    }

    // validation check for phone number
    if (phoneNumber === '' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        document.getElementById('phoneNumberInvalid').style.display = 'block';
        document.getElementById('phoneNumberValid').style.display = 'none';
    }
    else {
        document.getElementById('phoneNumberValid').style.display = 'block';
        document.getElementById('phoneNumberInvalid').style.display = 'none';
    }

    // validation check for zipCode
    if (zipCode === '' || zipCode.length !== 6 || isNaN(zipCode)) {
        document.getElementById('zipCodeInvalid').style.display = 'block';
        document.getElementById('zipCodeValid').style.display = 'none';
    } else {
        document.getElementById('zipCodeValid').style.display = 'block';
        document.getElementById('zipCodeInvalid').style.display = 'none';
    }

    // Validation check for checkBox
    if (!checkBox.checked) {
        document.getElementById('checkBoxInvalid').style.display = 'block';
        document.getElementById('checkBoxValid').style.display = 'none';
    } else {
        document.getElementById('checkBoxValid').style.display = 'block';
        document.getElementById('checkBoxInvalid').style.display = 'none';
    }
}