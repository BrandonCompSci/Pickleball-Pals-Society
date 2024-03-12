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