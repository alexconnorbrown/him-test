// Navigate backward
function navigateBackward() {
    // Implement your logic here
    // For demo, just log to the console
    console.log("Navigated backward");
  }
  
  // Navigate forward
  function navigateForward() {
    // Implement your logic here
    // For demo, just log to the console
    console.log("Navigated forward");
  }
  
  // Show add member form
  function showAddMemberForm() {
    // For simplicity, show an alert or modify a specific element's content
    alert("Add Member Form Displayed");
  }
  
  // Generic function to show placeholder content for various sections
  function showPlaceholder(sectionName) {
    // For simplicity, show an alert or modify a specific element's content
    alert(`Placeholder for ${sectionName}`);
  }
  
  // Example of adding event listeners programmatically (Optional)
  // This approach is useful if you dynamically generate buttons or want to keep HTML cleaner
  document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
      button.addEventListener('click', () => showPlaceholder(button.textContent.trim()));
    });
  
    // Specific actions for named buttons, if needed
    const addMemberButton = document.querySelector('[onclick="showAddMemberForm()"]');
    if(addMemberButton) { // Check if the button exists to avoid errors
      addMemberButton.onclick = showAddMemberForm; // Reassign with the correct function
    }
  });

  document.getElementById('search-btn').addEventListener('click', function() {
    var input = document.getElementById('search-input');
    if (input.style.width === '150px') {
      input.style.width = '0';
      input.style.opacity = '0';
    } else {
      input.style.width = '150px';
      input.style.opacity = '1';
      input.focus(); // Focus on the input when expanded
    }
  });

  