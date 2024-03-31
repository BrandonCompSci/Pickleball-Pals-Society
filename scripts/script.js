$(document).ready(function() {
    // "expandy" jQuery plug-in
    // Makes accordion-style collapsing and expanding animations
    $('.expand').makeExpander({

        // heading & trigger element
        toggleElement: 'h3',
        
        // Use jQuery animations
        jqAnim: true,
        
        // show the first piece of content when page loads.
        showFirst: false,
        
        // if set to true, only one piece of content can be expanded at a time
        accordion: false,
        
        // animation speed
        speed: 'medium',
        
        // 'plusminus' or 'arrow'
        indicator: 'plusminus',
    });
})

// Implement a Scroll To Top Button
    // Code sourced from: 
    // w3schools.com. 2023. How To Create a Scroll To Top Button. [online] Available at: 
    // <https://www.w3schools.com/howto/howto_js_scroll_to_top.asp> [Accessed 25 April 2023].
    function scrollFunction() {
        // Get the button:
        let myButton = document.getElementById("go-top");
    
        // Display button when document is scrolled greater than 20 pixels
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myButton.style.display = "flex";
        } else {
            myButton.style.display = "none";
        }
    }

    // Event listener for back-to-top button
    const backToTop = document.getElementById("go-top");
    backToTop.addEventListener("click", () => {
        topFunction();
    });

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};  
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }