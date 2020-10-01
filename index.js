
<script type="text/javascript'>
function random_3(){
    var myrandom=Math.round(Math.random()*2)
    var link1="https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjE3ZWJhYjgtZTMzZS00ODkzLWI5OWQtMjdmYjM3OGViNmIz%40thread.v2/0?context=%7b%22Tid%22%3a%228370cf14-16f3-4c16-b83c-724071654356%22%2c%22Oid%22%3a%221e71dcf0-d665-41d7-b944-2af30aa1a491%22%7d"
    var link2="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzNmZDlmY2YtNzdkOS00ZDRjLTk2MjktMWYwZmYwODVlYzFh%40thread.v2/0?context=%7b%22Tid%22%3a%228370cf14-16f3-4c16-b83c-724071654356%22%2c%22Oid%22%3a%221e71dcf0-d665-41d7-b944-2af30aa1a491%22%7d"
    var link3="http://www.dynamicdrive.com"
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}
</script>
<form>
<input type="button" value="random link!" onClick="random_3()">
</form>
