
<a href="javascript:openSite()">Click to go to a random site</a>
<script>
var links = [
              "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzNmZDlmY2YtNzdkOS00ZDRjLTk2MjktMWYwZmYwODVlYzFh%40thread.v2/0?context=%7b%22Tid%22%3a%228370cf14-16f3-4c16-b83c-724071654356%22%2c%22Oid%22%3a%221e71dcf0-d665-41d7-b944-2af30aa1a491%22%7d",
              "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjE3ZWJhYjgtZTMzZS00ODkzLWI5OWQtMjdmYjM3OGViNmIz%40thread.v2/0?context=%7b%22Tid%22%3a%228370cf14-16f3-4c16-b83c-724071654356%22%2c%22Oid%22%3a%221e71dcf0-d665-41d7-b944-2af30aa1a491%22%7d"]

            function openSite() {
              // get a random number between 0 and the number of links
              var randIdx = Math.random() * links.length;
              // round it, so it can be used as array index
              randIdx = parseInt(randIdx, 10);
              // construct the link to be opened
              var link = 'http://' + links[randIdx];
              return link;
              };
             
    
    document.getElementById("link").innerHTML = openSite();
</script>
