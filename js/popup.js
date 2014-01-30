(function () {

    localStorage.defaultUrl = 'http://mingle.server/projects/project.name/cards/';

    if (location.search != "?focusHack") location.search = "?focusHack";

    $('#storyId').keypress(function(e) {
        if (e.which === 13) openStory();
    });
    
    $('#go').click(function() {
      openStory();        
    }); 
    
    $('#options').click(function() {
      chrome.tabs.create({url: chrome.extension.getURL("options.html")});   
    });    
    
    function openStory(){
    
        var mingleURL = localStorage.mingleURL || localStorage.defaultUrl;

        $('#mingleURL').val();

        var storyId = $('#storyId').val();
        
        if (storyId.length){
            chrome.tabs.create({url: mingleURL + storyId});
            window.close();         
        }       
    }

}());