// Form toggle functionality
function login() {
    document.getElementById("login-form").style.transform = "translateX(0)"
    document.getElementById("login-form").style.opacity = "1"
    document.getElementById("login-form").style.pointerEvents = "all"
    document.getElementById("signup-form").style.transform = "translateX(450px)"
    document.getElementById("signup-form").style.opacity = "0"
    document.getElementById("signup-form").style.pointerEvents = "none"
    document.getElementById("btn").style.left = "0"
    document.querySelector(".toggle-btn:nth-child(1)").style.color = "white"
    document.querySelector(".toggle-btn:nth-child(2)").style.color = "#555"
  }
  
  function signup() {
    document.getElementById("login-form").style.transform = "translateX(-450px)"
    document.getElementById("login-form").style.opacity = "0"
    document.getElementById("login-form").style.pointerEvents = "none"
    document.getElementById("signup-form").style.transform = "translateX(0)"
    document.getElementById("signup-form").style.opacity = "1"
    document.getElementById("signup-form").style.pointerEvents = "all"
    document.getElementById("btn").style.left = "110px"
    document.querySelector(".toggle-btn:nth-child(1)").style.color = "#555"
    document.querySelector(".toggle-btn:nth-child(2)").style.color = "white"
  }
  
  // Password strength checker
  function checkPasswordStrength(password) {
    // Initialize variables
    let strength = 0
    const tips = []
  
    // Check password length
    if (password.length < 6) {
      tips.push("Make your password longer than 6 characters")
    } else {
      strength += 1
    }
  
    // Check for mixed case
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
      strength += 1
    } else {
      tips.push("Use both lowercase and uppercase letters")
    }
  
    // Check for numbers
    if (password.match(/\d/)) {
      strength += 1
    } else {
      tips.push("Include at least one number")
    }
  
    // Check for special characters
    if (password.match(/[^a-zA-Z\d]/)) {
      strength += 1
    } else {
      tips.push("Include at least one special character")
    }
  
    // Return results
    if (strength < 2) {
      return { strength: "weak", tips: tips }
    } else if (strength < 4) {
      return { strength: "medium", tips: tips }
    } else {
      return { strength: "strong", tips: [] }
    }
  }
  
  // Update password strength meter
  function updatePasswordStrengthMeter(password) {
    const strengthIndicator = document.getElementById("strength-indicator")
    const strengthText = document.getElementById("strength-text")
  
    if (!password) {
      strengthIndicator.className = "strength-indicator"
      strengthIndicator.style.width = "0"
      strengthText.textContent = "Password strength"
      return
    }
  
    const result = checkPasswordStrength(password)
  
    // Update the indicator
    strengthIndicator.className = "strength-indicator " + result.strength
  
    // Update the text
    if (result.strength === "weak") {
      strengthText.textContent = "Weak password"
      strengthText.style.color = "#e74c3c"
    } else if (result.strength === "medium") {
      strengthText.textContent = "Medium password"
      strengthText.style.color = "#f39c12"
    } else {
      strengthText.textContent = "Strong password"
      strengthText.style.color = "#2ecc71"
    }
  }
  
  // Form validation
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault()
  
    let isValid = true
    const email = document.getElementById("login-email")
    const password = document.getElementById("login-password")
  
    // Reset error messages
    document.getElementById("login-email-error").textContent = ""
    document.getElementById("login-password-error").textContent = ""
  
    // Email validation
    if (!email.value.trim()) {
      document.getElementById("login-email-error").textContent = "Email is required"
      isValid = false
    } else if (!isValidEmail(email.value)) {
      document.getElementById("login-email-error").textContent = "Please enter a valid email"
      isValid = false
    }
  
    // Password validation
    if (!password.value.trim()) {
      document.getElementById("login-password-error").textContent = "Password is required"
      isValid = false
    }
  
    if (isValid) {
      // Simulate login success with animation
      const submitBtn = this.querySelector(".submit-btn")
      submitBtn.textContent = "Logging in..."
      submitBtn.disabled = true
  
      setTimeout(() => {
        // Here you would normally authenticate with a server
        // For demo purposes, we'll just redirect
        window.location.href = "intepage.html"
      }, 1500)
    }
  })
  
  document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault()
  
    let isValid = true
    const name = document.getElementById("signup-name")
    const email = document.getElementById("signup-email")
    const password = document.getElementById("signup-password")
    const confirm = document.getElementById("signup-confirm")
    const terms = document.getElementById("terms")
  
    // Reset error messages
    document.getElementById("signup-name-error").textContent = ""
    document.getElementById("signup-email-error").textContent = ""
    document.getElementById("signup-password-error").textContent = ""
    document.getElementById("signup-confirm-error").textContent = ""
  
    // Name validation
    if (!name.value.trim()) {
      document.getElementById("signup-name-error").textContent = "Name is required"
      isValid = false
    }
  
    // Email validation
    if (!email.value.trim()) {
      document.getElementById("signup-email-error").textContent = "Email is required"
      isValid = false
    } else if (!isValidEmail(email.value)) {
      document.getElementById("signup-email-error").textContent = "Please enter a valid email"
      isValid = false
    }
  
    // Password validation
    if (!password.value.trim()) {
      document.getElementById("signup-password-error").textContent = "Password is required"
      isValid = false
    } else {
      const passwordCheck = checkPasswordStrength(password.value)
      if (passwordCheck.strength === "weak") {
        document.getElementById("signup-password-error").textContent = passwordCheck.tips[0]
        isValid = false
      }
    }
  
    // Confirm password validation
    if (password.value !== confirm.value) {
      document.getElementById("signup-confirm-error").textContent = "Passwords do not match"
      isValid = false
    }
  
    // Terms validation
    if (!terms.checked) {
      alert("Please agree to the Terms & Conditions")
      isValid = false
    }
  
    if (isValid) {
      // Simulate signup success with animation
      const submitBtn = this.querySelector(".submit-btn")
      submitBtn.textContent = "Creating Account..."
      submitBtn.disabled = true
  
      setTimeout(() => {
        // Here you would normally send data to server
        alert("Account created successfully! Welcome to Canteen.")
        submitBtn.textContent = "Sign Up"
        submitBtn.disabled = false
  
        // Redirect to login page after successful signup
        login() // Switch to login form
      }, 1500)
    }
  })
  
  // Password reset form
  document.getElementById("reset-password-form")?.addEventListener("submit", function (e) {
    e.preventDefault()
  
    let isValid = true
    const email = document.getElementById("reset-email")
  
    // Reset error message
    document.getElementById("reset-email-error").textContent = ""
  
    // Email validation
    if (!email.value.trim()) {
      document.getElementById("reset-email-error").textContent = "Email is required"
      isValid = false
    } else if (!isValidEmail(email.value)) {
      document.getElementById("reset-email-error").textContent = "Please enter a valid email"
      isValid = false
    }
  
    if (isValid) {
      // Simulate password reset with animation
      const submitBtn = this.querySelector(".submit-btn")
      submitBtn.textContent = "Sending..."
      submitBtn.disabled = true
  
      setTimeout(() => {
        // Here you would normally send data to server
        alert("Password reset link has been sent to your email.")
        submitBtn.textContent = "Send Reset Link"
        submitBtn.disabled = false
        this.reset()
        closeModal()
      }, 1500)
    }
  })
  
  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  // Input animations
  const inputFields = document.querySelectorAll(".input-field")
  
  inputFields.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused")
    })
  
    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused")
    })
  })
  
  // Password strength meter
  document.getElementById("signup-password")?.addEventListener("input", function () {
    updatePasswordStrengthMeter(this.value)
  })
  
  // Modal functionality
  const modal = document.getElementById("password-reset-modal")
  const forgotPasswordLink = document.getElementById("forgot-password-link")
  const closeModalBtn = document.querySelector(".close-modal")
  
  // Open modal
  forgotPasswordLink?.addEventListener("click", (e) => {
    e.preventDefault()
    modal.style.display = "flex"
  })
  
  // Close modal
  function closeModal() {
    modal.style.display = "none"
  }
  
  closeModalBtn?.addEventListener("click", closeModal)
  
  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })
  
  // Initialize with login form
  window.onload = () => {
    login()
  
    // Add some animation to the background shapes
    animateShapes()
  }
  
  // Animate background shapes
  function animateShapes() {
    const shapes = document.querySelectorAll(".shape")
  
    shapes.forEach((shape) => {
      const randomX = Math.random() * 20 - 10
      const randomY = Math.random() * 20 - 10
      const randomRotate = Math.random() * 10 - 5
  
      shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`
    })
  
    setTimeout(animateShapes, 1000)
  }
  