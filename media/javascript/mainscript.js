jQuery(function($){
    $("[contenteditable]").focusout(function(){
        var element = $(this);        
        if (!element.text().trim().length) {
            element.empty();
        }
    });
    $('.enterText').keypress(function(){
        setColor("white");
    });
    $('.enterTile').click(function(){
        var data = $('.enterText').html();
        var boldLocations = [];
        var italicLocations= [];
        var underlineLocations = [];
        var boldKey = /<span style="font-weight: bold;/gi, result;
        var italicKey = /<span font-style: italic;/gi;
        var underlineKey = /style="text-decoration-line: underline;"/gi;
        while ( (result = boldKey.exec(data)) ) {
            boldLocations.push(result.index);
        }
        while ( (result = italicKey.exec(data)) ) {
            italicLocations.push(result.index);
        }
        while ( (result = underlineKey.exec(data)) ) {
            underlineLocations.push(result.index);
        }
        console.log(boldLocations);
        console.log(italicLocations);
        console.log(underlineLocations);
    });
    
});
function setColor(color) {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('foreColor', false, color);
}