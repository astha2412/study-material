// scroll to top starts
var scrolltop = $('#scroll-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 80) {
        scrolltop.addClass('active');
    } else {
        scrolltop.removeClass('active');
    }
});
    
scrolltop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '200');
});
// scroll to top ends


fetch('style_links.json')
    .then(response => response.json())
    .then(data => {
        let links = data;

        for (let i = 0; i < links.length; i++) {
            console.log(links.length);
            let StyleBoxDiv = document.createElement('div');
            StyleBoxDiv.innerHTML = `<div class="stylebox">
            
            <p>${links[i].name}</p>

            <div class="btn-group">
            
            <a target="_blank" href="https://github.com/arpit456jain/${links[i].link}" class="code">View Repo</a>
            </div>
            </div>`;
            document.getElementById('styles').appendChild(StyleBoxDiv);
        };
});